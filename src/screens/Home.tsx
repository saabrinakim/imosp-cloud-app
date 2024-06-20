import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  navigation: any;
};

function Home(props: Props) {
  const handleYoutubeButton = () => {
    Linking.openURL("https://www.youtube.com/@imosp/streams");
  };

  const handleHistoryButton = () => {
    props.navigation.push("About");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/imosplogoprovisorio.png")}
        resizeMode="cover"
        style={styles.logo}
      />
      <View style={{ height: 240 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.retiroContainerFirst}>
            <Image
              source={require("../../assets/background.png")}
              style={styles.retiroImage}
            />
            <Text style={styles.retiroText}>
              Inscrições abertas{"\n"}para o Retiro
            </Text>
            <Text style={styles.retiroSubtitle}>
              O Tabernáculo e a{"\n"}Espiritualidade Cristã
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>22/04</Text>
              <Text style={styles.dateWeekText}> QUA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.retiroContainer}>
            <Image
              source={require("../../assets/background.png")}
              style={styles.retiroImage}
            />
            <Text style={styles.retiroText}>
              Inscrições abertas{"\n"}para o Retiro
            </Text>
            <Text style={styles.retiroSubtitle}>
              O Tabernáculo e a{"\n"}Espiritualidade Cristã
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>22/04</Text>
              <Text style={styles.dateWeekText}> QUA</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.row} onPress={handleYoutubeButton}>
        <Image
          source={require("../../assets/youtube.png")}
          style={styles.youtubeIcon}
        />
        <Text style={styles.youtubeText}>Estamos ao vivo (assista)</Text>
      </TouchableOpacity>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            name="hand-extended-outline"
            size={42}
            color="black"
          />
          <Text style={styles.menuText}>Ministérios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <EvilIcons
            name="calendar"
            size={56}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.menuText}>Eventos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome5
            name="church"
            size={36}
            color="black"
            style={{
              marginBottom: 8,
            }}
          />
          <Text style={styles.menuText}>Cultos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleHistoryButton}>
          <SimpleLineIcons
            name="book-open"
            size={42}
            color="black"
            style={{
              marginBottom: 8,
            }}
          />
          <Text style={styles.menuText}>História da IMOSP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  logo: {
    marginTop: 20,
    marginBottom: 12,
    width: 60,
    height: 54,
    alignSelf: "center",
  },
  retiroContainer: {
    position: "relative",
    width: 320,
    height: 210,
    marginRight: 24,
    marginTop: 10,
  },
  retiroContainerFirst: {
    position: "relative",
    width: 320,
    height: 210,
    marginRight: 10,
    marginLeft: 24,
    marginTop: 10,
  },
  retiroImage: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
  },
  retiroText: {
    position: "absolute",
    top: 16,
    left: 16,
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },
  retiroSubtitle: {
    position: "absolute",
    top: 160,
    left: 20,
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  dateContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#F1BD43",
    padding: 8,
    borderRadius: 4,
    width: 55,
  },
  dateText: {
    color: "#141414",
    fontSize: 12,
    fontWeight: "700",
  },
  dateWeekText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: -3,
  },
  menuContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 24,
    flexDirection: "row",
    marginTop: 12,
  },
  menuItem: {
    backgroundColor: "#EEE",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    aspectRatio: 1,
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
  menuText: {
    color: "#F4B325",
    fontSize: 16,
    fontWeight: "600",
  },
  youtubeText: {
    color: "#141414",
    fontSize: 16,
    fontWeight: "600",
  },
  row: {
    backgroundColor: "#EEE",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  youtubeIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  icon: {
    marginBottom: 4,
  },
});

export default Home;
