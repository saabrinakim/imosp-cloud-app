import React from "react";
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard,} from "react-native";
import { Button, Text } from "react-native-paper";

type Props = {
    navigation: any;
  };

function Culto(props: Props) {

    const {text, onChangeText} = React.useState("")
    const [isChecked, setChecked] = React.useState(false);

    return(
        <View>
            <TouchableOpacity style={styles.button}>

            </TouchableOpacity>




        </View>

    )



}

const styles = StyleSheet.create({
    button: {
        width: 94,
        height: 32,
        backgroundColor: '#333333',
        
        
    },

})

export default Culto;