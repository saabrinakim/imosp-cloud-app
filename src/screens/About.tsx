import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";

type Props = {
  navigation: any;
};

function About(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton navigation={props.navigation} styles={styles.backButton} />
        <Text style={styles.title}>História da IMOSP</Text>
      </View>
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
