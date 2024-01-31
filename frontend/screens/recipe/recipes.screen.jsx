import { Text, Pressable, FlatList, TextInput, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import recipeActions from "../../actions/recipe.action";
import { useSelector } from "react-redux";
import { styles } from "./recipes.style";
import authenticationActions from "../../actions/authentication.action";

export default function Recipes() {
	const [search_input, setSearchInput] = useState("");
	const navigation = useNavigation();
	const { list, is_refreshing } = useSelector((state) => state.recipe);

	useEffect(() => {
		getRecipes()
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Pressable
					style={styles.right_button}
					onPress={() => navigation.navigate("AddRecipe")}
				>
					<Icon name="plus" size={25} color="#fff" />
				</Pressable>
			),
			headerLeft: () => (
				<Pressable
					style={styles.right_button}
					onPress={async () => {
						await signOutUser();
						navigation.replace("Login")
					}}
				>
					<Text style={styles.logout_text}>Log Out</Text>
				</Pressable>
			)
		});
	}, [navigation]);

	return (
		<View style={styles.recipes_container}>
			<View style={styles.search_bar_container}>
				<TextInput
					style={styles.search_bar}
					placeholder="Search for Recipe"
					onChangeText={(search_input) => setSearchInput(search_input)}
					placeholderTextColor={"#0F132288"}
				/>
			</View>
			<FlatList
				data={list.filter(recipe => recipe.name.toLowerCase().includes(search_input.toLowerCase()))}
				renderItem={({ item }) => (
					<Pressable
						key={item.id}
						onPress={() => navigation.navigate("Recipe", item)}
						style={styles.recipe_button}
						onLongPress={() => Alert.alert(`Delete Recipe`, `This will delete ${item.name}`, [
							{
								text: 'Cancel',
								style: 'cancel',
							},
							{
								text: 'Delete',
								onPress: () => deleteRecipe({ id: item.id }),
								style: 'destructive',
							},
						])}					>
						<Text style={styles.recipe_name}>{item.name}</Text>
					</Pressable>
				)}
				ItemSeparatorComponent={() => <Text style={{ height: 1, backgroundColor: "#0F132222", marginHorizontal: 10 }}></Text>}
				onRefresh={() => getRecipes()}
				refreshing={is_refreshing}
			/>
		</View>
	);
}

const { signOutUser } = authenticationActions;
const { getRecipes, deleteRecipe } = recipeActions;