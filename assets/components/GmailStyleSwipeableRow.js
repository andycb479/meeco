import React, { Component } from "react";
import { Animated, StyleSheet, Text, View, I18nManager } from "react-native";

import { RectButton, Swipeable } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";
import expensesApi from "../api/expenses";
import incomesApi from "../api/incomes";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const handleDeleteExpense = async (id) => {
  const result = await expensesApi.deleteExpense(id);
  if (!result.ok) return alert("Could not delete the expense");
};

const handleDeleteIncome = async (id) => {
  const result = await incomesApi.deleteIncome(id);
  if (!result.ok) return alert("Could not delete the expense");
};

const RenderRightActions = ({
  progress,
  dragX,
  index,
  close,
  onchangeHandler,
  incomes,
}) => {
  const scale = dragX.interpolate({
    inputRange: [-80, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <RectButton
      style={styles.rightAction}
      onPress={() => {
        {
          incomes ? handleDeleteIncome(index) : handleDeleteExpense(index);
        }
        close();
        onchangeHandler();
      }}
    >
      <AnimatedIcon
        name="delete-forever"
        size={30}
        color="#fff"
        style={[styles.actionIcon]}
      />
    </RectButton>
  );
};

export default class GmailStyleSwipeableRow extends Component {
  updateRef = (ref) => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const { children, index, onchange, incomes } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={80}
        rightThreshold={41}
        renderRightActions={(progress, dragX) => (
          <RenderRightActions
            progress={progress}
            dragX={dragX}
            index={index}
            close={this.close}
            onchangeHandler={onchange}
            incomes={incomes}
          />
        )}
      >
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#dd2c00",
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    backgroundColor: "#dd2c00",
    flex: 1,
    justifyContent: "flex-end",
  },
});
