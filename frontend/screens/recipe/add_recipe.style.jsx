import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    right_button: {
        marginRight: 15,
    },
    right_button_text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    add_recipe_container: {
        padding: 10,
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
    list_text: {
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
        flexGrow: 1,
    },
    add_recipe_button: {
        backgroundColor: "#0F1322",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    button_text: {
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#93D5E1",
    },
    submit_button: {
        backgroundColor: "#93D5E1",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    ingredients_container: {
        flexDirection: "row",
    },
    inputIOS:{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 8,
        color: "#0F1322",
        borderRadius: 10,
        paddingRight: 10,
        minWidth: 40,
        marginRight: 10,
    },
    unit_input:{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 8,
        color: "#0F1322",
        borderRadius: 10,
        width: 58,
        marginRight: 10,
        paddingRight: 10,
    }
});

export { styles };