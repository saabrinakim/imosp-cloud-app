import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import BackButton from "../components/BackButton";
import { Button } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Feather from '@expo/vector-icons/Feather';

type Props = {
  navigation: any;
};

function Service(props: Props) {
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.header}>
      <BackButton navigation={props.navigation} styles={styles.backButton} />
      <Text style={styles.title}>Home</Text>
    </View>

    <View style={{width: 213, height: 32, marginTop: 16, marginBottom: 16, flexDirection: "row"}}>
      <TouchableOpacity style={styles.cultosButton}>

        <Feather name="check" size={14} color="white" />
        
        <Text style={styles.smallButtonText}>Cultos</Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.eventosButton} onPress={() => {props.navigation.navigate("Agenda");}}>

        <Text style={styles.smallButtonText2}>Eventos</Text>

      </TouchableOpacity>

    </View>

    <ScrollView style={styles.container}>
      
      <View style={styles.eventBox}>
        
        <View style={{width: 304, height: 89, marginLeft: 8, alignItems: "center", justifyContent: "center" }}>
          <View style={{flexDirection: "row"}}>

            <Image style={styles.image} source={require('../../assets/cultounico.png')}/>

            <View style={{marginLeft: 4}}>
            <Text style={styles.eventTitle}>Culto de aniversário</Text>
            <Text style={styles.description}>A Imosp está celebrando 30 anos! Venha cultuar e participar das celebrações!</Text>
            </View>
            
          </View>

          <View style={styles.infoBar}>
            <View style={{flexDirection:"row", alignItems: 'center'}}>

              <View style={{flexDirection:"row"}}>

                <Feather name="calendar" size={16} color="black" />

                <Text style={styles.infoText}>07/07/24</Text>

              </View>

              <View style={{flexDirection:"row", marginLeft: 8}}>

                <Feather name="clock" size={16} color="black" />

                <Text style={styles.infoText}>10h</Text>

              </View>

              <View style={{flexDirection:"row", marginLeft: 8}}>

                <Feather name="map-pin" size={15.88} color="black" />

                <Text style={styles.infoText}>Templo Maior</Text>

              </View>

            </View>

            <View style={styles.share}>

              <Feather name="share-2" size={16.67} color="black"/>

            </View>

          </View>
          
        </View>
      </View>

      <View style={styles.eventBox}>
        
        <View style={{width: 304, height: 89,  marginLeft:8, alignItems: "center", justifyContent: "center"}}>
          <View style={{flexDirection: "row"}}>

            <Image style={styles.image} source={require('../../assets/cultogeracoes.png')}/>

            <View style={{marginLeft: 4}}>
            <Text style={styles.eventTitle}>Culto de domingo</Text>
            <Text style={styles.description}>Série de mensagens Deus está no Controle?</Text>
          </View>
            
        </View>

        <View style={styles.infoBar}>
            
          <View style={{flexDirection:"row", alignItems: 'center'}}>

            <View style={{flexDirection:"row"}}>

              <Feather name="calendar" size={16} color="black" />

              <Text style={styles.infoText}>14/07/24</Text>

            </View>

            <View style={{flexDirection:"row", marginLeft: 8}}>

                <Feather name="clock" size={16} color="black" />

                <Text style={styles.infoText}>11h</Text>

            </View>

            <View style={{flexDirection:"row", marginLeft: 8}}>

              <Feather name="map-pin" size={15.88} color="black" />

              <Text style={styles.infoText}>Templo Maior</Text>

            </View>

          </View>
            

          <View style={styles.share}>

            <Feather name="share-2" size={16.67} color="black"/>

          </View>

           
        </View>
          
        </View>
      </View>


      <View style={styles.eventBox}>
        
        <View style={{width: 304, height: 89,  marginLeft:8, alignItems: "center", justifyContent: "center"}}>
          <View style={{flexDirection: "row"}}>

            <Image style={styles.image} source={require('../../assets/cultounificado.png')}/>
            
            <View style={{marginLeft: 4}}>
            <Text style={styles.eventTitle}>Culto de domingo</Text>
            <Text style={styles.description}>Celebração de ceia</Text>
            </View>
            
          </View>

          <View style={styles.infoBar}>
            <View style={{flexDirection:"row", alignItems: 'center'}}>

            <View style={{flexDirection:"row"}}>

              <Feather name="calendar" size={16} color="black" />

              <Text style={styles.infoText}>...</Text>

            </View>

            <View style={{flexDirection:"row", marginLeft: 8}}>

              <Feather name="map-pin" size={15.88} color="black" />

              <Text style={styles.infoText}>...</Text>

            </View>

          </View>

            
            
            <View style={styles.share}>

              <Feather name="share-2" size={16.67} color="black"/>

            </View>

            

          </View>
          
        </View>
      </View>

    </ScrollView>  
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginHorizontal: 20,
  lineHeight: 40,
},
title: {
  fontWeight: "500",
  fontSize: 16,
  textAlign: "center",
  marginTop: 40,
  alignSelf: "center",
},
backButton: {
  marginTop: 40,
  
  
},
header: {
  flexDirection: "row",
  justifyContent: "flex-start",
},
eventTitle: {
  fontSize:  16,
  lineHeight: 19.2,
  width: 203,
  height: 39,
  letterSpacing: 0.5,
  color: '#333333',
  fontWeight: '500'
},
description: {
  fontSize: 14,
  lineHeight: 16.8,
  width: 203,
  height: 71,
  letterSpacing: 0.5,
  color: '#757575',
  fontWeight: '400'
},
image: {
  width: 93,
  height: 89,
  borderRadius: 8,
},
infoBar: {
  width: 304,
  height: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 8,
},
infoText: {
  fontSize: 12,
  color: '#1E1E1E',
  marginLeft: 4,
  fontWeight: '500'
},
button: {
  width: 304,
  height: 39,
  borderRadius: 8,
  backgroundColor: '#1A73E833',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 16,
  marginRight: 8, 
},
buttonText: {
  fontSize:  16,
  color: '#1A73E8',
  height: 23,
},
share: {
  marginRight: 10,
  
},
plus: {
  justifyContent: "center",
  marginRight: 10,
},
eventBox: {
  width: 328, 
  height: 141, 
  backgroundColor: '#FFFFFF', 
  alignSelf: 'center', 
  alignItems: 'center',
  justifyContent: "center",
  marginTop: 8,
  marginBottom: 8,
},
cultosButton: {
  width: 103,
  height: 32,
  backgroundColor: '#101828',
  borderRadius: 8,
  borderWidth: 1,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  marginLeft:  16,
},
eventosButton: {
  width: 94,
  height: 32,
  borderColor: '#344054',
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  borderWidth: 1,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 16,
},
smallButtonText: {
  fontSize: 14,
  color: '#FFFFFF',
  marginLeft: 6 ,
},
smallButtonText2: {
  fontSize: 14, 
  color: '#344054',
},
tagMint: {
  position: "absolute",
  backgroundColor: "#00C7BE",
  width: 37,
  height: 17,
  marginHorizontal: 4,
  marginVertical: 2,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: "center"

},

tagPurple: {
  position: "absolute",
  backgroundColor: "#AF52DE",
  width: 75,
  height: 28,
  marginHorizontal: 4,
  marginVertical: 2,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: "center"

},

tagCyan: {
  position: "absolute",
  backgroundColor: "#32ADE6",
  width: 44,
  height: 17,
  marginHorizontal: 4,
  marginVertical: 2,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: "center",

},

tagText:{
  fontSize: 10,
  fontWeight: '500',
  color: '#FFFFFF',
  lineHeight: 12,
  textAlign: "center",

}



});


export default Service;
