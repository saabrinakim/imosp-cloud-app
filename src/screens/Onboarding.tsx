import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Linking,
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
      <Image
        source={require("../../assets/imosplogoprovisorio.png")}
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
        IMOSP cloud
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

      <TouchableOpacity style={styles.googleButton} onPress={onClickAppleLogin}>
        <Image
          style={styles.appleLogo}
          source={require("../../assets/apple.png")}
        />
        <Text style={styles.textGoogle}>Continuar com a Apple</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        Ao fazer login, você concorda com os nossos{" "}
        <Text style={styles.boldUnderlineText} onPress={onClickTerms}>
          Termos
        </Text>{" "}
        e{" "}
        <Text style={styles.boldUnderlineText} onPress={onClickPolicy}>
          Política de Privacidade
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    marginBottom: 20,
    width: "50%",
    height: "20%",
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
    marginTop: 12,
    backgroundColor: "#FFF",
    width: "80%",
    alignItems: "center",
    borderRadius: 7,
    paddingVertical: 12,
    justifyContent: "center",
    marginHorizontal: 24,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#141414",
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
    marginHorizontal: 8,
    fontWeight: "400",
  },
  googleLogo: {
    width: 18,
    height: 18,
  },
  appleLogo: {
    width: 20,
    height: 20,
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
