import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centered_view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modal_view: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
    },
    modal_text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 8,
        color: "#0F1322",
        borderRadius: 10,
        width: 160,
    },
    list_container: {
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
        marginRight: 10,
        width: 50,
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
    },
    submit_button: {
        backgroundColor: "#0F1322",
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    submit_button_text:{
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#93D5E1",
    },
    cancel_button_text:{
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        color: "#0F1322",
    },
});

export { styles };