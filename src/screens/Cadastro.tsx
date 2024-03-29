import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type Props = {
    navigation: any;
  };

 function Cadastro(props: Props) {
    return(
        <SafeAreaView style={styles.container}>
            <Text variant="displayMedium">Cadastro</Text>
            <Text onPress={() => props.navigation.goBack()}> Click me to go back </Text>
        </SafeAreaView> 
    );  
 }
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    }

 });
 
 export default Cadastro;