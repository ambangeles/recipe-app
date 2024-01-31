import { ScrollView, Text, View } from "react-native"
import React from "react"
import { useRoute } from "@react-navigation/native";
import { styles } from "./recipe.style";
export default function Recipe() {
	const { params } = useRoute();
	return (
		<ScrollView style={styles.recipe_container}>
			<View style={styles.info_container}>
				<Text style={styles.info_title}>Ingredients</Text>
				{params.ingredients.map((ingredient, index) =>
					<Text key={ingredient.id} style={styles.info_text}>{index + 1}. {ingredient.value.unit_value} {ingredient.value.unit} - {ingredient.value.ingredient}</Text>
				)}
			</View>
			<View style={styles.info_container}>
				<Text style={styles.info_title}>Instructions</Text>
				{params.instructions.map((instruction, index) =>
					<Text key={instruction.id} style={styles.info_text}>{index + 1}. {instruction.value}</Text>
				)}
			</View>
			<View style={styles.info_container}>
				<Text style={styles.info_title}>Temperature</Text>
				<Text style={styles.info_text}>{params.temperature} °C</Text>
			</View>
		</ScrollView>
	);
}