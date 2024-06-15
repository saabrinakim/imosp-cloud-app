import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

type Props = {
  navigation: any;
};

function Home(props: Props) {
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
      <TouchableOpacity style={styles.row}>
        <Text style={styles.menuText}>Estamos ao vivo (assista)</Text>
      </TouchableOpacity>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Cultos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Eventos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Ministérios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
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
  },
  logo: {
    marginVertical: 20,
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
    backgroundColor: "lightgrey",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    aspectRatio: 1,
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
  menuText: {
    color: "grey",
    fontSize: 16,
  },
  row: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    marginHorizontal: 24,
  },
});

export default Home;
