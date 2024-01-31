import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	right_button: {
		marginRight: 15,
	},
	recipes_container: {
		backgroundColor: "#FBFBFB",
		flex: 1,
	},
	search_bar_container: {
		backgroundColor: "#93D5E1",
		paddingBottom: 10,
	},
	search_bar: {
		borderColor: "#0F1322",
		borderRadius: 10,
		borderWidth: 1,
		height: 40,
		marginHorizontal: 10,
		paddingLeft: 10,
	},
	recipe_button: {
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	recipe_name: {
		color: "#0F1322",
		fontSize: 18,
		fontWeight: "bold",
	},
	logout_text: {
		marginLeft: 10,
		color: "#0F1322",
		fontWeight: "bold",
	}
});

export { styles };