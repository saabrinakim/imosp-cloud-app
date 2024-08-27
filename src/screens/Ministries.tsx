import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, } from "react-native";
import BackButton from "../components/BackButton";

type Props = {
  navigation: any;
};

function Ministries(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton navigation={props.navigation} styles={styles.backButton} />
        <Text style={styles.title}>Ministérios</Text>   
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
    
          <Image style={[styles.buttonImagem, { width: 32, height: 26.7, resizeMode: 'contain', marginRight:12 }]} 
          source={require('../../assets/imosp_Korean.png')}
          />
          <View style={styles.textContainer}>
          <Text style={styles.buttonTitle}>Coreano</Text>
          <Text style={styles.buttonSubtitle}>Igreja Mãe. Cultos em coreano.</Text>
          </View>
          <Image style={styles.buttonSeta} 
          source={require('../../assets/Chevron_right_Seta.png')}
          />
          
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
          <Image style={[styles.buttonImagem, 
          { width: 32, height: 26.7, resizeMode: 'contain', marginRight:12}]} 
          source={require('../../assets/image_Geracoes.png')}
          />
            <View style={styles.textContainer}>
              <Text style={styles.buttonTitle}>Imosp Gerações</Text>
              <Text style={styles.buttonSubtitle}>Cultos em português para a cultura coreana.</Text>
            </View>
          <Image style={styles.buttonSeta} 
        source={require('../../assets/Chevron_right_Seta.png')}
          />
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
          <Image style={[styles.buttonImagem, 
            { width: 32, height: 26.7, resizeMode: 'contain', marginRight:12 }]} 
            source={require('../../assets/image_Nacoes.png')}
            />
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>Imosp Nações </Text>
            <Text style={styles.buttonSubtitle}>Cultos em português, ministério brasileiro da Imosp.</Text>
          </View>
          <Image style={styles.buttonSeta} 
          source={require('../../assets/Chevron_right_Seta.png')}
          />
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
          <Image style={[styles.buttonImagem, 
            { width: 32, height: 26.7, resizeMode: 'contain', marginRight:12 }]} 
            source={require('../../assets/image_Hangul.png')}
            />
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>Hangul</Text>
            <Text style={styles.buttonSubtitle}>Ensino do idioma coreano e compartilhamento da cultura.</Text>
          </View>
          <Image style={styles.buttonSeta} 
          source={require('../../assets/Chevron_right_Seta.png')}
          />
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
          <Image style={[styles.buttonImagem, 
            { width: 32, height: 26.7, resizeMode: 'contain', marginRight:12 }]} 
            source={require('../../assets/image_Soma.png')}
            /> 
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>Soma</Text>
            <Text style={styles.buttonSubtitle}>Ministério dos jovens até 27 anos.</Text>
          </View>
          <Image style={styles.buttonSeta} 
          source={require('../../assets/Chevron_right_Seta.png')}
          />
        </TouchableOpacity> 
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    lineHeight: 40,
    paddingHorizontal: 16,
    backgroundColor: '#F6F6F6'
  },
  content: {
    flex: 1,
    paddingTop: 25
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    marginTop: 27,
    alignSelf: "center",
  },
  backButton: {
    marginTop: 24,
    position: "absolute",
    left: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#0000000D",
    padding: 16,
    marginBottom: 16,
    width: '100%',
    height: 72,
  },
  textContainer: {
    flex: 1
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  buttonSubtitle: {
    color: "gray",
    fontSize: 14,
    lineHeight: 18,
  },
  buttonImagem: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  buttonSeta: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 10
  },

});

export default Ministries;
