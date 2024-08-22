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
import Feather from "@expo/vector-icons/Feather";

type Props = {
  navigation: any;
};

function Home(props: Props) {
  const handleYoutubeButton = () => {
    Linking.openURL("https://www.youtube.com/@imosp/streams");
  };

  const handleHistoryButton = () => {
    props.navigation.navigate("Sobre");
  };

  const handleMinistriesButton = () => {
    props.navigation.navigate("Ministérios");
  };

  const handleEventsButton = () => {
    props.navigation.navigate("Agenda");
  };

  const handleServiceButton = () => {
    props.navigation.navigate("Service");
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Image
          source={require("../../assets/imosplogoprovisorio.png")}
          resizeMode="cover"
          style={styles.logo}
        />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.retiroContainerFirst}>
              <Image
                source={require("../../assets/background.png")}
                style={styles.retiroImage}
              />
              <View style={styles.tag}>
                <Text style={styles.tagText}>Retiro</Text>
              </View>
              <Text style={styles.retiroText}>
                O Tabernáculo e a{"\n"}Espiritualidade Cristã
              </Text>
              <Text style={styles.retiroSubtitle}>
                Inscrições abertas até o dia 20/04
              </Text>
              <View style={styles.dateContainer}>
                <Feather name="calendar" size={20} color={"#1E1E1E"} />
                <Text style={styles.dateText}>22-26/10</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.retiroContainer}>
              <Image
                source={require("../../assets/background.png")}
                style={styles.retiroImage}
              />
              <View style={styles.tag}>
                <Text style={styles.tagText}>Retiro</Text>
              </View>
              <Text style={styles.retiroText}>
                O Tabernáculo e a{"\n"}Espiritualidade Cristã
              </Text>
              <Text style={styles.retiroSubtitle}>
                Inscrições abertas até o dia 20/04
              </Text>
              <View style={styles.dateContainer}>
                <Feather name="calendar" size={24} color={"#1E1E1E"} />
                <Text style={styles.dateText}>22-26/10</Text>
                <Text style={styles.dateWeekText}> QUA</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.row} onPress={handleYoutubeButton}>
          <Text style={styles.youtubeText}>Youtube IMOSP</Text>
          <Image
            source={require("../../assets/youtube.png")}
            style={styles.youtubeIcon}
          />
        </TouchableOpacity>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={handleServiceButton}
          >
            <Text style={styles.menuText}>Cultos</Text>
            <Text style={styles.menuSubtitle}>Horários e{"\n"}Programação</Text>
            <Image
              source={require("../../assets/culto.png")}
              style={styles.menuItemIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={handleEventsButton}
          >
            <Text style={styles.menuText}>Eventos</Text>
            <Text style={styles.menuSubtitle}>Programação do mês</Text>
            <Image
              source={require("../../assets/eventos.png")}
              style={styles.menuItemIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.menuRowItem}
          onPress={handleMinistriesButton}
        >
          <Text style={styles.menuText}>Ministérios</Text>
          <Text style={styles.menuSubtitle}>
            Organização e{"\n"}serviço da igreja
          </Text>
          <Image
            source={require("../../assets/ministry.png")}
            style={styles.menuRowItemIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuRowItem, { marginBottom: 12 }]}
          onPress={handleHistoryButton}
        >
          <Text style={styles.menuText}>Sobre</Text>
          <Text style={styles.menuSubtitle}>Nossa história e{"\n"}missão</Text>
          <Image
            source={require("../../assets/church.png")}
            style={styles.menuRowItemIcon}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  logo: {
    marginTop: 20,
    marginBottom: 8,
    width: 50,
    height: 44,
    alignSelf: "center",
  },
  retiroContainer: {
    position: "relative",
    width: 320,
    height: 180,
    marginRight: 24,
    marginTop: 10,
  },
  retiroContainerFirst: {
    position: "relative",
    width: 320,
    height: 180,
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
    top: 80,
    left: 16,
    color: "white",
    fontSize: 24,
  },
  retiroSubtitle: {
    position: "absolute",
    top: 145,
    left: 16,
    color: "white",
    fontSize: 14,
  },
  dateContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#FC0",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  dateText: {
    color: "#1E1E1E",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  dateWeekText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: -3,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 12,
  },
  menuItem: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    width: "48%",
    aspectRatio: 1,
    paddingLeft: 12,
    paddingTop: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
  },
  menuRowItem: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: 8,
    paddingVertical: 10,
    marginHorizontal: 24,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.05)",
  },
  menuText: {
    color: "#101828",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "left",
  },
  youtubeText: {
    color: "#1D2939",
    fontSize: 14,
    fontWeight: "600",
  },
  row: {
    backgroundColor: "#F7B225",
    padding: 16,
    borderRadius: 8,
    marginBottom: 6,
    marginTop: 18,
    alignItems: "center",
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  youtubeIcon: {
    width: 20,
    height: 14,
    marginLeft: 10,
  },
  icon: {
    marginBottom: 4,
  },
  menuSubtitle: {
    color: "#344054",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 8,
    textAlign: "left",
  },
  menuItemIcon: {
    bottom: 0,
    position: "absolute",
    left: 4,
  },
  menuRowItemIcon: {
    bottom: 0,
    position: "absolute",
    right: 0,
  },
  tag: {
    position: "absolute",
    top: 56,
    left: 16,
    backgroundColor: "#00C7BE",
    borderRadius: 3,
    padding: 3,
  },
  tagText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Home;
