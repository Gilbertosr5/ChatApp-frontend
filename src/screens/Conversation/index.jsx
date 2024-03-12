import { View, Text, StyleSheet, Pressable } from "react-native";
import Input from "../../components/input";

const Conversation = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={{ color: "white" }}>Conversation</Text>
      <View style={styles.messagesContainer}></View>
      <View style={styles.writeContainer}>
        <Input width={"80%"} height={50} placeholder="Digite sua mensagem..." />
        <Pressable style={styles.joinButton} >
          <Text style={styles.joinButtonText}>✍</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#171717",
    flex: 1,
    alignItems: "center",
  },
  messagesContainer:{
    flex:1
  },
  writeContainer:{
    padding:10,
    width:"100%",
    flexDirection:"row",
    justifyContent:"center"
  },
  joinButton: {
    backgroundColor: "#007ACC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:15,
  },
  joinButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18
  },
});
