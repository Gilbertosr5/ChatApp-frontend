import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons/";

const Conversation = ({ navigation, route }) => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const scrollViewRef = useRef();

  const { paramKey } = route.params;
  const { username: inputUserData, room: inputRoomData } = paramKey;

  useEffect(() => {
    console.log(inputUserData, inputRoomData);
    console.log("===============================");
    console.log("useEffect CONVERSATION ativado");

    const socketInstance = new WebSocket("ws://192.168.15.7:8000/messaging"); //MUDAR DE ACORDO COM A MAQUINA (IPV4)

    socketInstance.onopen = () => {
      console.log("-----------------------------");
      console.log(`${inputUserData} Client Connected`);
      console.log("-----------------------------");
    };

    socketInstance.onerror = (error) => {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      console.log("WebSocket Error: ", error);
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    };

    socketInstance.onmessage = (e) => {
      const dataFromServer = JSON.parse(e.data);
      console.log("Servidor: ", dataFromServer);
      if (dataFromServer.type === "message") {
        setMessages((currentMessages) => [...currentMessages, dataFromServer]);
      }
      console.log(".");
    };

    setSocket(socketInstance);
  }, []);

  /*
  useEffect(() => {
    console.log(messages);
  }, [messages]);
*/
  const sendMessage = (message) => {
    socket.send(
      JSON.stringify({
        type: "message",
        msg: message,
        id: Math.floor(Math.random() * 10000),
        username: inputUserData,
        room: inputRoomData,
      })
    );
  };

  return (
    <View style={styles.conversationContainer}>
      <ScrollView
        indicatorStyle={"white"}
        style={{ width: "100%", paddingVertical: 5 }}
        contentOffset={{ y: 1000 }}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <View style={styles.messagesContainer}>
          {messages.map((message) => {
            if (message.username == inputUserData) {
              return (
                <View key={message.id} style={styles.message}>
                  <Text style={styles.messageText}>{message.msg}</Text>
                </View>
              );
            } else {
              return (
                <View key={message.id} style={styles.otherMessage}>
                  <Text style={{ color: "#007ACC", marginBottom: 5 }}>
                    {message.username}
                  </Text>
                  <Text style={styles.otherMessageText}>{message.msg}</Text>
                </View>
              );
            }
          })}
        </View>
      </ScrollView>

      {/* Message Input */}
      <View style={styles.writeContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={messageInput}
          onChangeText={setMessageInput}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#555"
        />
        <Pressable style={styles.sendButton}>
          <Text style={styles.sendButtonText}>
            <Ionicons
              name="send"
              size={20}
              color="white"
              onPress={() => {
                // Alert.alert("Mensagem chegou", messageInput);
                sendMessage(messageInput);
                setMessageInput("");
              }}
            />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

// MUDAR A VIEW DAS MENSAGENS PARA UMA SCROLLVIEW ========================================

export default Conversation;

const styles = StyleSheet.create({
  conversationContainer: {
    backgroundColor: "#171717",
    flex: 1,
    alignItems: "center",
  },
  messagesContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  writeContainer: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  sendButton: {
    backgroundColor: "#007ACC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  otherMessage: {
    backgroundColor: "#3E3E42",
    maxWidth: "90%",
    padding: 12,
    paddingRight: 16,
    paddingTop: 5,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginVertical: 7,
    alignSelf: "flex-start",
  },
  otherMessageText: {
    color: "#FFF",
  },
  message: {
    backgroundColor: "#007ACC",
    maxWidth: "90%",
    padding: 13,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginVertical: 7,
    alignSelf: "flex-end",
  },
  messageText: {
    color: "#FFF",
  },
  input: {
    width: "80%",
    maxHeight: 80,
    borderWidth: 1,
    borderColor: "#004799",
    padding: 10,
    backgroundColor: "#252526",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: "white",
  },
});
