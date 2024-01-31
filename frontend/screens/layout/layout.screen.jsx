/* PLUGINS */
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
/* SCREENS */
import AddRecipe from "../recipe/add_recipe.screen";
import EditRecipe from "../recipe/edit_recipe.screen";
import Recipe from "../recipe/recipe.screen";
import Recipes from "../recipe/recipes.screen";
import SignUp from "../authentication/signup.screen";
import Login from "../authentication/login.screen";

const Stack = createStackNavigator();

export default function Layout() {
	const { user } = useSelector((state) => state.authentication);

	return (
			<NavigationContainer>
				<StatusBar style="auto" />
				<Stack.Navigator
					initialRouteName="Login"
					screenOptions={() => (
						{
							headerTintColor: "#0F1322",
							headerStyle: {
								backgroundColor: "#93D5E1",
							},
							headerTitleStyle: {
								fontWeight: "bold",
							},
							headerShadowVisible: false,
						}
					)}
				>
					{!user ? (
						<>
							<Stack.Screen
								name="Login"
								component={Login}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name="SignUp"
								component={SignUp}
								options={{
									headerShown: false,
								}}
							/></>
					)
						: (
							<>
								<Stack.Screen
									name="Recipes"
									component={Recipes}
									options={({ navigation }) => (
										{
											headerRight: () => (
												<Pressable
													style={styles.right_button}
													onPress={() => navigation.navigate("AddRecipe")}
												>
													<Icon name="plus" size={25} color="#fff" />
												</Pressable>
											),
										}
									)}
								/>
								<Stack.Screen
									name="Recipe"
									component={Recipe}
									options={({ route: { params }, navigation }) => (
										{
											title: params?.name,
											headerRight: () => (
												<Pressable
													style={styles.right_button}
													onPress={() => navigation.navigate("EditRecipe", { recipe: params })}
												>
													<Icon name="edit" size={25} color="#fff" />
												</Pressable>
											),
										}
									)}
								/>
								<Stack.Screen
									name="AddRecipe"
									component={AddRecipe}
									options={{
										presentation: "modal",
										headerTitle: "Add a Recipe",
										headerMode: "screen",
									}}
								/>
								<Stack.Screen
									name="EditRecipe"
									component={EditRecipe}
									options={{
										presentation: "modal",
										headerTitle: "Edit a Recipe",
										headerMode: "screen",
									}}
								/>
							</>
						)
					}
				</Stack.Navigator>
			</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	right_button: {
		marginRight: 15,
	},
})