import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({placeholder, width, height, type})=>{
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState("");
    if(type=="numeric"){
        return(
            <TextInput
            style={[styles.input, {width: width, height: height}]}
            value={number}
            onChangeText={onChangeNumber}
            placeholder={placeholder}
            placeholderTextColor="#555"
            keyboardType="numeric"
          />
        )
    }else{
        return(
            <TextInput
                style={[styles.input, {width: width, height: height }]}
                value={text}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#555"
              />
        )
    }
}

export default Input;

const styles = StyleSheet.create({
    input: {
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
})