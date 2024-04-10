import { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, TextInput, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons/";

const Conversation = () => {
  const [messageInput, setMessageInput] = useState("");

  return (
    <View style={styles.conversationContainer}>
      <ScrollView
        indicatorStyle={"white"}
        style={{ width: "100%", paddingVertical: 5 }}
        contentOffset={{ y: 1000 }}
      >
        <View style={styles.messagesContainer}>
          <View style={styles.message}>
            <Text style={styles.messageText}>
              mini loren só pra ficar aqui e ter uma ideia
            </Text>
          </View>
          <View style={styles.otherMessage}>
            <Text style={{ color: "#007ACC", marginBottom: 5 }}>Igor3k</Text>
            <Text style={styles.otherMessageText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
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
            <Ionicons name="send" size={20} color="white" onPress={()=>{
              Alert.alert("Mensagem capturada", messageInput)
              setMessageInput("")
            }} />
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
    padding: 13,
    paddingTop: 7,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginVertical: 7,
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
    width:"80%",
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
