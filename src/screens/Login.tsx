import React from "react";
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { Text } from "react-native-paper";

type Props = {
    navigation: any;
  };

 function Login(props: Props) {
    return(
        <SafeAreaView style={styles.container}>
            <Text variant="displayMedium">Login</Text>
            <Text onPress={() => props.navigation.goBack()}> Click me to go back </Text>
            
        </SafeAreaView> 
        
    );  
 }

 const DisplayAnImage = () => {
  const [text, onChangeText] = React.useState("");
  return (
   
      
    <KeyboardAvoidingView 
    behavior = "padding" 
    keyboardVerticalOffset= {Platform.OS === "ios" ? 100 : 0} 
    style={styles.container}
    >
      
      <Text>Digite o seu email!</Text>
   
      <TextInput style={styles.input}
        placeholder= "Escreva o seu email"
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <TextInput style={styles.input}
        placeholder= "Digite a sua senha"
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
      <Text>Login</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
  );
};

 
 const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginHorizontal: 24,
  },
  button: {
    marginTop: 12,
    backgroundColor: "#F4B325",
    width: "30%",
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  input: {
  marginTop: 12,
  backgroundColor: "#ffffff",
  width: "50%",
  alignItems: 'center',
  borderRadius: 8,
  paddingVertical: 12,
  },
  

  }
 )
 
 
 export default Login;