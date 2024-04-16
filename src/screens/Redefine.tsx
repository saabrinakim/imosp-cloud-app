import React from "react";
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard,} from "react-native";
import { Text } from "react-native-paper";

type Props = {
  navigation: any;
};

function Redefine(props: Props) {
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
  }
});

export default Redefine;
