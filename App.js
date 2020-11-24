import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./assets/navigation/AuthNavigator";
import { AppLoading } from "expo";
import AuthContext from "./assets/auth/context";
import authStorage from "./assets/auth/storage";
import AppNavigation from "./assets/navigation/AppNavigation";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    // const user = await authStorage.getUser();
    // if (user) setUser(user);
    setUser("st");
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigation /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
