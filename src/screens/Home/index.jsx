import { View, Text, StyleSheet, Pressable } from "react-native";
import Input from "../../components/input";

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 26 }}>
        Login
      </Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#007ACC" }}>Username</Text>
          <Input width="100%" height={50} placeholder="Insira seu nome de usuário" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#007ACC" }}>Sala</Text>
          <Input width="100%" height={50} placeholder="Insira o número da sala" type="numeric" />
        </View>
        <Pressable style={styles.joinButton} onPress={joinConversation}>
          <Text style={styles.joinButtonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );

  function joinConversation() {
    navigation.navigate("Conversation");
  }
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputContainer: { width: 300, marginBottom: 20 },
  joinButton: {
    marginTop: 40,
    backgroundColor: "#007ACC",
    paddingHorizontal: 50,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  joinButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 19,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
