import { View, Text, StyleSheet } from "react-native";

const Conversation = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={{ color: "white" }}>Conversation</Text>
    </View>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    alignItems: "center",
  },
});
