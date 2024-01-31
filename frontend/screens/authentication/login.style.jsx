import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    login_container: {
        padding: 10,
        flex: 1,
    },
    login_title: {
        alignSelf: "center",
        fontSize: 50,
        fontWeight: "bold",
        color: "#93D5E1",
        marginTop: 100,
        marginBottom: 50,
    },
    input_container: {
        marginBottom: 20,
    },
    label_text: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#0F1322",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 8,
        color: "#0F1322",
        borderRadius: 10,
    },
    login_button: {
        backgroundColor: "#93D5E1",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    login_text: {
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    signup_button: {
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
        backgroundColor: "#0F1322",

    },
    signup_text: {
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#93D5E1",
    },
});

export { styles };