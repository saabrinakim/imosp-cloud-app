import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Linking,
  View,
} from "react-native";
import { Text } from "react-native-paper";

type Props = {
  navigation: any;
};

const Onboarding = (props: Props) => {
  const onClickTerms = () => {
    Linking.openURL(
      "https://sites.google.com/view/imosp-termos-e-condicoes/home?pli=1",
    );
  };

  const onClickPolicy = () => {
    Linking.openURL(
      "https://sites.google.com/view/politica-de-privacidade-imosp/home",
    );
  };

  const onClickGoogleLogin = () => {
    props.navigation.navigate("Home");
  };

  const onClickAppleLogin = () => {
    props.navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/imosp_onboarding.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          IMOSP
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginBottom: 18,
            color: "#1D2939",
          }}
        >
          Selecione uma das opções para acessar:
        </Text>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={onClickGoogleLogin}
        >
          <Image
            style={styles.googleLogo}
            source={require("../../assets/google.png")}
          />
          <Text style={styles.textGoogle}>Continuar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.appleButton}
          onPress={onClickAppleLogin}
        >
          <Image
            style={styles.appleLogo}
            source={require("../../assets/apple.png")}
          />
          <Text style={styles.textApple}>Continuar com a Apple</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "#9B9B9B",
          fontSize: 12,
          alignSelf: "center",
        }}
      >
        v0.01
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
    width: 186,
    height: 89,
  },
  button: {
    marginTop: 12,
    backgroundColor: "#F4B325",
    width: "80%",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    marginHorizontal: 24,
  },
  googleButton: {
    marginTop: 8,
    backgroundColor: "#FFF",
    width: "85%",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  appleButton: {
    marginTop: 12,
    backgroundColor: "#000",
    width: "85%",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  input: {
    marginTop: 9,
    backgroundColor: "#fff",
    width: "80%",
    alignItems: "center",
    paddingVertical: 12,
    justifyContent: "center",
    borderWidth: 1,
    marginHorizontal: 24,
  },
  backButton: {
    marginTop: 4,
    backgroundColor: "#F4B325",
    width: "80%",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    alignSelf: "flex-start",
    color: "#1A73E8",
    marginHorizontal: 42,
  },
  textGoogle: {
    fontSize: 15,
    color: "#141414",
    fontWeight: "600",
  },
  textApple: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "600",
  },
  googleLogo: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  appleLogo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 30,
    marginTop: 12,
    position: "absolute",
    bottom: 40,
  },
  boldUnderlineText: {
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  modalBackground: {
    backgroundColor: "#999",
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});

export default Onboarding;
