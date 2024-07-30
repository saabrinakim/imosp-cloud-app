import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  navigation: any;
};

function About(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayMedium">About</Text>
      <Text onPress={() => props.navigation.push("Home")}>Click me to go back</Text>
      
      <Text onPress={() => props.navigation.push("Cadastro")}>Click me to go to Cadastro page</Text>
      
      <Text onPress={() => props.navigation.push("Redefine")}>
        Click me to go to Redefine page
      </Text>

      <Text onPress={() => props.navigation.push("Confirmacao")}>
        Click me to go to Confirmacao page
      </Text>

      <Text onPress={() => props.navigation.push("Culto")}>
        Click me to go to Culto page
      </Text>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    lineHeight: 40,
  },
});

export default About;
