import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Input from "../../components/Input";

import { Ionicons } from "@expo/vector-icons/";

const Conversation = () => {
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
      <View style={styles.writeContainer}>
        <Input width={"80%"} height={50} placeholder="Digite sua mensagem..." />
        <Pressable style={styles.sendButton}>
          <Text style={styles.sendButtonText}>
            <Ionicons name="send" size={20} color="white" />
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
});
