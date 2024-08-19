import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
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
      <Image
        source={require("../../assets/about_background.png")}
        style={styles.background}
      />
      <Text style={styles.text}>
        Existimos para amar a Deus, amar ao próximo e servir o mundo.
      </Text>
      <Text style={styles.subtitle}>
        The Korean church in Brazil has a rich history that dates back to the
        early 20th century when Korean immigrants first arrived in the country.
        These immigrants brought with them their strong Christian faith, leading
        to the establishment of the first Korean churches in Brazil. Over the
        years, the Korean church community has grown and flourished, playing a
        significant role in spreading the message of love, compassion, and
        service to the Brazilian society. Today, the Korean church in Brazil
        continues to thrive, embodying the values of faith, community, and
        outreach.
      </Text>
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
  background: {
    borderRadius: 8,
    width: "100%",
    marginTop: 24,
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 16,
  },
  subtitle: {
    color: "#757575",
    fontSize: 14,
  },
});

export default About;
