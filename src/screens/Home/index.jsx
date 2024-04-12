import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

import Input from "../../components/Input";

const Home = ({ navigation }) => {
  const [inputUserData, setInputUserData] = useState("");
  const [inputRoomData, setInputRoomData] = useState("");

  const handleUserChange = (text) => {
    setInputUserData(text);
  };

  const handleRoomChange = (text) => {
    setInputRoomData(text);
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 26 }}>
        Login
      </Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#007ACC" }}>Username</Text>
          <Input
            width="100%"
            height={50}
            placeholder="Insira seu nome de usuário"
            onInputChange={handleUserChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#007ACC" }}>Sala</Text>
          <Input
            width="100%"
            height={50}
            placeholder="Insira o número da sala"
            type="numeric"
            onInputChange={handleRoomChange}
          />
        </View>
        <Pressable style={styles.joinButton} onPress={joinConversation}>
          <Text style={styles.joinButtonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );

  function joinConversation() {
    if (inputUserData == "" && inputRoomData == "") {
      Alert.alert(
        "Usuário e/ou Sala vazios!",
        "Preencha os campos de Usuário e Sala para poder conectar no Chat, por favor!"
      );
    } else if (inputUserData == "") {
      Alert.alert(
        "Insira um Usuário!",
        "Preencha o campo de Usuário para poder se identificar no chat, por favor!"
      );
    } else if (inputRoomData == "") {
      Alert.alert(
        "Insira a sala!",
        "Preencha o campo Sala para poder conectar se no Chat desejado, por favor!"
      );
    } else {
      navigation.navigate("Conversation", {
        paramKey: {username: inputUserData, room: inputRoomData},
      });
    }
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
