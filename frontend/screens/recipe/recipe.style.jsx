import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	recipe_container: {
		backgroundColor: "#FBFBFB",
		flex: 1,
		padding: 20,
	},
	info_container:{
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 10,
		shadowColor: "#0F1322",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 5,
		marginBottom: 20,
	},
	info_title: {
		color: "#0F1322",
		fontSize: 20,
		fontWeight: "bold",
		paddingBottom: 10,
	},
	info_text:{
		fontSize: 16,
		color: "#0F1322",
		paddingBottom: 10,
		paddingLeft: 10,
	}
});

export { styles };