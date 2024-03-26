import React from "react";
import { SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { Text } from "react-native-paper";

type Props = {
    navigation: any;
  };

 const Login = (props: Props) => {
  const [text, onChangeText] = React.useState("");
  return (
   
      
    <KeyboardAvoidingView 
    behavior = "padding" 
    keyboardVerticalOffset= {Platform.OS === "ios" ? 100 : 0} 
    style={styles.container}
    >
      <Image source={require("../../assets/imosplogoprovisorio.png")} style={styles.logo} resizeMode="cover"/>
      <Text style={{
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 95
        }}>IMOSP cloud</Text>
      
      
      <Text style={{
        fontSize: 16, 
        alignSelf: 'left', 
        color: "#1A73E8", 
        marginHorizontal: 42
        }}>Digite seu email</Text>
   
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
        <Text style={{fontSize: 16}}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.goBack()}> 
        <Text style={{fontSize: 16}}>Voltar</Text> 
        {/*apenas um botão provisório pra voltar a página pra matar a agonia huehue*/}
        </TouchableOpacity>
      </KeyboardAvoidingView>
  );
};

 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logo:{
    marginBottom: 20,
    width: 102,
    height: 89,
    marginTop: 150,

  },
  button: {
    marginTop: 12,
    backgroundColor: "#F4B325",
    width: "80%",
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: 'center',
    marginHorizontal: 24
    
  },
  input: {
    marginTop: 9,
    backgroundColor: "#fff",
    width: "80%",
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 24

  },
  backButton: {
    marginTop: 4,
    backgroundColor: "#F4B325",
    width: "80%",
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: 'center'
  }
  }
 )
 
 
 export default Login;