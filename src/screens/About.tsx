import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import BackButton from "../components/BackButton";

type Props = {
  navigation: any;
};

function About(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={props.navigation} styles={styles.backButton} />
      <Text style={styles.title}>História da IMOSP</Text>
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
    fontSize: 32,
    textAlign: "center",
    marginTop: 12,
  },
  backButton: {
    marginTop: 24,
  },
});

export default About;
