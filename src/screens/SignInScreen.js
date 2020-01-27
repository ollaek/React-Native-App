import React, { useState, useContext } from "react";
import { View, StyleSheet, Picker } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";

const SignInScreen = () => {
  const { state, SignIn, ClearErrorMessage } = useContext(AuthContext);

  const [selectedLang, setSelectedLang] = useState("En");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
        <NavigationEvents onWillFocus={() => ClearErrorMessage()}/>
      <Spacer>
        <Text h3 style={{alignSelf:"center"}}>Sign In</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer />
      <Picker
        selectedValue={selectedLang}
        style={{ height: 50, width: 150, alignSelf: "center" }}
        onValueChange={(itemValue, itemIndex) => setSelectedLang(itemValue)}
      >
        <Picker.Item label="English" value="En" />
        <Picker.Item label="عربي" value="AR" />
      </Picker>
      
      <Spacer>
        <Button
          title="Sign In"
          onPress={() => SignIn({email, password})}
        />
      </Spacer>
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
    marginLeft: 45,
    marginRight: 45
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginTop: 15,
    marginLeft: 15,
    alignSelf: "center"
  }
});

export default SignInScreen;
