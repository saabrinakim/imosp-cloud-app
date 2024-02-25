import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  navigation: any;
};

function Home(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayMedium">Home</Text>
      <Text onPress={() => props.navigation.push("About")}>
        Click me to go to About page hello flavio lindo lipe birugui lalala
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
});

export default Home;
