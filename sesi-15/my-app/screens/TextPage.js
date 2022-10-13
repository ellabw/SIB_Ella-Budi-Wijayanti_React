import { useState } from "react";
import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";

export default function TextPage({ route }) {
    const [input, setInput] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {route.params.name}
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Masukkan Text di Sini"
                onChangeText={text => setInput(text)}
                defaultValue={input}
            />
            <Text
                style={{ padding: 10, fontSize: 25 }}
            >
                The text you entered : {input}
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FBC8F',
        justifyContent: 'center',
        padding: 25
    },
    text: {
        color: '#002B5B',
        fontSize: 30
    },
    textInput: {
        padding: 8,
        backgroundColor: "#ADFF2F",
        height: 60,
        color: "black"
    },
    rowButton: {
        flexDirection: 'row',
        margin: 1
    },
    title: {
        marginVertical: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 6,
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});
