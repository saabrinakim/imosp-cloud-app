import React from "react";
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard,} from "react-native";
import { Button, Text } from "react-native-paper";

type Props = {
  navigation: any;
};

function Confirma(props: Props) {

  const {text, onChangeText} = React.useState("")
  const [isChecked, setChecked] = React.useState(false);
 
  return (
    <View style={styles.container}>
      <Text style={styles.comando}>Digite o código de verificação</Text>

      <Text style ={styles.info}> O código de verificação foi enviado para somelongusername@email.com</Text>
      
      <View style={styles.row}>
      <TextInput style={styles.inputP}></TextInput>
      <TextInput style={styles.inputP}></TextInput>
      <TextInput style={styles.inputP}></TextInput>
      <TextInput style={styles.inputP}></TextInput>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Validar código</Text>
      </TouchableOpacity>
      
      <Button style={styles.buttonCinza}>
        <Text style={styles.buttonText}>Reenviar código (49s) </Text>
      </Button>

      <Text style={styles.linkbutton}>Ainda não recebeu o código?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  comando: {
    width: 321,
    alignItems: 'center',
    textAlign: 'center',
    top: 80,
    left: 34,
    fontSize: 22,
    lineHeight: 26.63,
  },
  info: {
    width: 305,
    top: 90,
    left: 44,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,

  },
  inputP: {
    display: 'flex',
    left: 77,
    width: 46.99,
    height: 44,
    top: 110,
    marginTop: 20,
    marginEnd: 20,
    padding: 10,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 337,
    height: 44,
    top: 160,
    left: 26,
    backgroundColor: '#F4B325',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 20,
  },
  buttonCinza: {
    width: 337,
    height: 44,
    top: 160,
    left: 26,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    width: 197,
    fontSize: 16, 
    textAlign: 'center',
    top: 11,
  },
  linkbutton: {
    width: 240,
    top: 200,
    left: 74,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: '#1A73E8'
  },
});

export default Confirma;
