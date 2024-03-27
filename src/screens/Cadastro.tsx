import React from "react";
import Checkbox from 'expo-checkbox';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard,} from "react-native";
import { Text } from "react-native-paper";

type Props = {
    navigation: any;
  };

 function Cadastro(props: Props) {
    const {text, onChangeText} = React.useState("")
    return(
        
        <View style={styles.container}>
            <Text style={styles.comando}>Informe seus dados para prosseguir</Text>

            <Text style={styles.titulo}>Digite seu nome completo</Text>

            <TextInput style={styles.input} 
            placeholder="nome completo"
            onChangeText={onChangeText} 
            value={text}
            ></TextInput>

        <View style={styles.row}>
            <TextInput style={styles.inputP} 
            placeholder="ddd"
            onChangeText={onChangeText} 
            value={text}
            ></TextInput>
            
            <TextInput style={styles.inputM} 
            placeholder="9-"
            onChangeText={onChangeText} 
            value={text}
            ></TextInput>
        </View>

            <TextInput style={styles.input}
             placeholder="email"
             onChangeText={onChangeText} 
             value={text}
            ></TextInput>

            <TextInput style={styles.input}
             placeholder="senha"
             onChangeText={onChangeText} 
             value={text}
            ></TextInput>

            <TextInput style={styles.input}
             placeholder="confirme sua senha"
             onChangeText={onChangeText} 
             value={text}
            ></TextInput>

            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View> 
    );  
 }
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    comando: {
        width: 267,
        alignItems: 'center',
        textAlign: 'center',
        top: 80,
        left: 61,
        fontSize: 22,
        lineHeight: 26.63,
    },
    input: {
        display: 'flex',
        alignSelf: 'center',
        width: 338,
        height: 44,
        top: 110,
        marginTop: 20,
        borderRadius: 2,
        padding: 10,
        borderWidth: 2,
        
    },
    inputP: {
        display: 'flex',
        left: 26,
        width: 46.99,
        height: 44,
        top: 110,
        marginTop: 20,
        borderRadius: 2,
        padding: 10,
        borderWidth: 2,
        
    },
    inputM: {
        display: 'flex',
        width: 212.38,
        height: 44,
        top: 110,
        left: 40,
        marginTop: 20,
        borderRadius: 2,
        padding: 10,
        borderWidth: 2,
    },
    titulo: {
        width: 197,
        alignItems: 'center',
        fontSize: 16, 
        left: 30,
        top: 127,
        color: '#1A73E8'
    },
    button: {
        width: 337,
        height: 44,
        top: 160,
        left: 26,
        backgroundColor: '#F4B325',
        alignItems: 'center',
        
    },
    buttonText: {
        width: 197,
        fontSize: 16, 
        textAlign: 'center',
        top: 11,

    },

    row: {
        flexDirection: 'row'
    },

 });
 
 export default Cadastro;