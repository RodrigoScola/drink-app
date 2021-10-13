import React from "react";
import { StyleSheet, View } from "react-native";
import { MainPageComponent } from "./Components/Pages/MainPage/MainPageComponent";
import { ProfilePageComponent } from "./Components/Pages/ProfilePage/ProfilePageComponent";
import { CreateAccountComponent } from "./Components/Pages/CreateAccountPage/CreateAccountComponent";
import { LoginPageComponent } from "./Components/Pages/LoginPage/LoginPageComponent";
import { NavigationBar } from "./Components/ReusableComponents/NavigationBar";
import { PageNotFoundComponent } from "./Components/Pages/PageNotFound/PageNotFoundComponent";

const renderPage = (page) => {
  switch (page) {
    case "mainPage":
      return <MainPageComponent />;
    case "profilePage":
      return <ProfilePageComponent />;
    case "createAccountPage":
      return <CreateAccountComponent />;
    case "loginPage":
      return <LoginPageComponent />;
    default:
      return <PageNotFoundComponent />;
  }
};

export default function App() {
  let page = "mainPage";
  return (
    <View style={styles.container}>
      {renderPage(page)}
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
