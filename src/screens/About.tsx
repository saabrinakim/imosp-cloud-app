import React from "react";
<<<<<<< HEAD
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
=======
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
>>>>>>> 656043f8327747f230c626b2bd2000b86ba4cdb1

type Props = {
  navigation: any;
};

function About(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <Text variant="displayMedium">About</Text>
      <Text onPress={() => props.navigation.push("Home")}>Click me to go back</Text>
      
      <Text onPress={() => props.navigation.push("Cadastro")}>Click me to go to Cadastro page</Text>
      
      <Text onPress={() => props.navigation.push("Redefine")}>
        Click me to go to Redefine page
      </Text>

      <Text onPress={() => props.navigation.push("Confirma")}>
        Click me to go to Confirma page
      </Text>
   
=======
      <View style={styles.header}>
        <BackButton navigation={props.navigation} styles={styles.backButton} />
        <Text style={styles.title}>História da IMOSP</Text>
      </View>
>>>>>>> 656043f8327747f230c626b2bd2000b86ba4cdb1
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    lineHeight: 40,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    marginTop: 27,
    alignSelf: "center",
  },
  backButton: {
    marginTop: 24,
    position: "absolute",
    left: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default About;
