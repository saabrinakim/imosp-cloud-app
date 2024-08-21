import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import BackButton from "../components/BackButton";
import { Button } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Feather from '@expo/vector-icons/Feather';

type Props = {
  navigation: any;
};

function Events(props: Props) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <BackButton navigation={props.navigation} styles={styles.backButton} />
        <Text style={styles.title}>Eventos</Text>
      </View>

      <View style={{width: 213, height: 32, marginTop: 16, marginBottom: 16}}>
        <TouchableOpacity style={styles.cultosButton}>
          
          <Text>Cultos</Text>

        </TouchableOpacity>

        <TouchableOpacity>

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.container}>
        
        <View style={{
          width: 328, 
          height: 188, 
          backgroundColor: '#FFFFFF', 
          alignSelf: 'center', 
          alignItems: 'center',
          justifyContent: "center",
          marginTop: 8,
          marginBottom: 8,
          }}>
          
          <View style={{width: 304, height: 89, marginLeft: 8, alignItems: "center", justifyContent: "center" }}>
            <View style={{flexDirection: "row"}}>

              <Image style={styles.image} source={require('../../assets/retirotabernaculo.png')}
              />

              <View style={{marginLeft: 4}}>
              <Text style={styles.eventTitle}>O Tabernáculo e a Espiritualidade Cristã</Text>
              <Text style={styles.description}>Inscrições abertas até o dia 20/04</Text>
              </View>
              
            </View>

            <View style={styles.infoBar}>
              <View style={{flexDirection:"row", alignItems: 'center'}}>

                <View style={{flexDirection:"row"}}>

                  <Feather name="calendar" size={16} color="black" />

                  <Text style={styles.infoText}>22-26/07/24</Text>

                </View>

                <View style={{flexDirection:"row", marginLeft: 8}}>

                <Feather name="map-pin" size={15.88} color="black" />

                <Text style={styles.infoText}>Chácara retiro</Text>

                </View>

              </View>

              <View style={styles.share}>

                <Feather name="share-2" size={16.67} color="black"/>

              </View>

              

            </View>

            <TouchableOpacity style={styles.button}>
              <View style={{flexDirection: "row"}}>
                
                <View style={styles.plus}>
                
                  <Feather name="plus" size={20} color="#1A73E8"/> 

                </View>
                  
                <Text style={styles.buttonText}>Inscrições</Text>

              </View>

            </TouchableOpacity>
            
          </View>
        </View>

        <View style={styles.eventBox}>
          
          <View style={{width: 304, height: 89,  marginLeft:8, alignItems: "center", justifyContent: "center"}}>
            <View style={{flexDirection: "row"}}>

              <Image style={styles.image} source={require('../../assets/oracaomadrugada.png')}/>

              <View style={{marginLeft: 4}}>
              <Text style={styles.eventTitle}>Reunião de oração da madrugada</Text>
              <Text style={styles.description}>Todos os dias às 3h.</Text>
            </View>
              
          </View>

          <View style={styles.infoBar}>
              
            <View style={{flexDirection:"row", alignItems: 'center'}}>

              <View style={{flexDirection:"row"}}>

                <Feather name="calendar" size={16} color="black" />

                <Text style={styles.infoText}>Segunda a sexta em julho</Text>

              </View>

              <View style={{flexDirection:"row", marginLeft: 8}}>

                <Feather name="map-pin" size={15.88} color="black" />

                <Text style={styles.infoText}>Sala Àgape</Text>

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

              <Image style={styles.image} source={require('../../assets/encontrodeoracaosemanal.png')}
              />

              <View style={{marginLeft: 4}}>
              <Text style={styles.eventTitle}>Encontro de oração semanal do ministério...</Text>
              <Text style={styles.description}>...</Text>
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
  eventTitle: {
    fontSize:  16,
    lineHeight: 19.2,
    width: 203,
    height: 39,
    letterSpacing: 0.5,
    color: '#333333'
  },
  description: {
    fontSize: 14,
    lineHeight: 16.8,
    width: 203,
    height: 34,
    letterSpacing: 0.5,
    color: '#757575'
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
    width: 92,
    height: 32,
    borderColor: '#344054',
    color: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
  },
  eventosButton: {

  },
  smallButtonText: {
    
  }


});

export default Events;
