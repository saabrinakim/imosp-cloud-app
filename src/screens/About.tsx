import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  navigation: any;
};

function About(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayMedium">About</Text>
      <Text onPress={() => props.navigation.goBack()}>Click me to go back</Text>
      
      <Text onPress={() => props.navigation.push("Cadastro")}>Click me to go to Cadastro page</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginBottom: 20,
  },
});

export default About;
