"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsProcessor = void 0;
const tslib_1 = require("tslib");
const clone_1 = tslib_1.__importDefault(require("lodash/clone"));
const isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
const isObject_1 = tslib_1.__importDefault(require("lodash/isObject"));
const isArray_1 = tslib_1.__importDefault(require("lodash/isArray"));
const isString_1 = tslib_1.__importDefault(require("lodash/isString"));
const endsWith_1 = tslib_1.__importDefault(require("lodash/endsWith"));
const forEach_1 = tslib_1.__importDefault(require("lodash/forEach"));
class OptionsProcessor {
    constructor(store, uniqueIdProvider, optionProcessorsRegistry, colorService, assetService, deprecations) {
        this.store = store;
        this.uniqueIdProvider = uniqueIdProvider;
        this.optionProcessorsRegistry = optionProcessorsRegistry;
        this.colorService = colorService;
        this.assetService = assetService;
        this.deprecations = deprecations;
    }
    processOptions(options, commandName) {
        this.processObject(options, clone_1.default(options), (key, parentOptions) => {
            this.deprecations.onProcessOptions(key, parentOptions, commandName);
            this.deprecations.checkForDeprecatedOptions(parentOptions);
        }, commandName);
    }
    processDefaultOptions(options, commandName) {
        this.processObject(options, clone_1.default(options), (key, parentOptions) => {
            this.deprecations.onProcessDefaultOptions(key, parentOptions);
        }, commandName);
    }
    processObject(objectToProcess, parentOptions, onProcess, commandName, parentPath) {
        forEach_1.default(objectToProcess, (value, key) => {
            const objectPath = this.resolveObjectPath(key, parentPath);
            this.processWithRegisteredProcessor(key, value, objectToProcess, objectPath, commandName);
            this.processColor(key, value, objectToProcess);
            if (!value) {
                return;
            }
            this.processComponent(key, value, objectToProcess);
            this.processImage(key, value, objectToProcess);
            this.processButtonsPassProps(key, value);
            this.processSearchBar(key, value, objectToProcess);
            this.processInterpolation(key, value, objectToProcess);
            onProcess(key, parentOptions);
            const processedValue = objectToProcess[key];
            if (!isEqual_1.default(key, 'passProps') && (isObject_1.default(processedValue) || isArray_1.default(processedValue))) {
                this.processObject(processedValue, parentOptions, onProcess, commandName, objectPath);
            }
        });
    }
    resolveObjectPath(key, path) {
        if (!path)
            path = key;
        else
            path += `.${key}`;
        return path;
    }
    processColor(key, value, options) {
        if (isEqual_1.default(key, 'color') || endsWith_1.default(key, 'Color')) {
            options[key] = value === null ? 'NoColor' : this.colorService.toNativeColor(value);
        }
    }
    processWithRegisteredProcessor(key, value, options, path, commandName) {
        const registeredProcessors = this.optionProcessorsRegistry.getProcessors(path);
        if (registeredProcessors) {
            registeredProcessors.forEach((processor) => {
                options[key] = processor(value, commandName);
            });
        }
    }
    processImage(key, value, options) {
        if (isEqual_1.default(key, 'icon') ||
            isEqual_1.default(key, 'image') ||
            endsWith_1.default(key, 'Icon') ||
            endsWith_1.default(key, 'Image')) {
            options[key] = isString_1.default(value) ? value : this.assetService.resolveFromRequire(value);
        }
    }
    processButtonsPassProps(key, value) {
        if (endsWith_1.default(key, 'Buttons')) {
            forEach_1.default(value, (button) => {
                if (button.passProps && button.id) {
                    this.store.updateProps(button.id, button.passProps);
                    button.passProps = undefined;
                }
            });
        }
    }
    processComponent(key, value, options) {
        if (isEqual_1.default(key, 'component')) {
            value.componentId = value.id ? value.id : this.uniqueIdProvider.generate('CustomComponent');
            this.store.ensureClassForName(value.name);
            if (value.passProps) {
                this.store.updateProps(value.componentId, value.passProps);
            }
            options[key].passProps = undefined;
        }
    }
    processSearchBar(key, value, options) {
        if (key !== 'searchBar') {
            return;
        }
        const deprecatedSearchBarOptions = {
            visible: false,
            hideOnScroll: options.searchBarHiddenWhenScrolling ?? false,
            hideTopBarOnFocus: options.hideNavBarOnFocusSearchBar ?? false,
            obscuresBackgroundDuringPresentation: false,
            backgroundColor: options.searchBarBackgroundColor,
            tintColor: options.searchBarTintColor,
            placeholder: options.searchBarPlaceholder ?? '',
        };
        if (typeof value === 'boolean') {
            // Deprecated
            this.deprecations.onProcessOptions(key, options, '');
            options[key] = {
                ...deprecatedSearchBarOptions,
                visible: value,
            };
        }
        else {
            options[key] = {
                ...deprecatedSearchBarOptions,
                ...value,
            };
        }
    }
    processInterpolation(key, value, options) {
        if (isEqual_1.default(key, 'interpolation')) {
            if (typeof value === 'string') {
                this.deprecations.onProcessOptions(key, options, '');
                options[key] = {
                    type: options[key],
                };
            }
        }
    }
}
exports.OptionsProcessor = OptionsProcessor;
