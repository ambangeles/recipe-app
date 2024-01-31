import { Alert, Pressable, Text, TextInput, View } from "react-native"
import React, { useEffect, useState } from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import recipeActions from "../../actions/recipe.action";
import { styles } from "./add_recipe.style";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import RNPickerSelect from "react-native-picker-select";
import { units } from "./picker_data";
import EditIngredientModal from "../global/edit_ingredient.modal";
import EditInstructionModal from "../global/edit_instruction.modal";

export default function AddRecipe() {
    const navigation = useNavigation();
    const [new_recipe, setNewRecipe] = useState({
        name: "",
        temperature: "",
        ingredients: [],
        instructions: [],
    });
    const [ingredient, setIngredient] = useState("");
    const [instruction, setInstruction] = useState("");
    const [unit, setUnit] = useState("");
    const [unit_value, setUnitValue] = useState(null);
    const [is_open_edit_ingredient_modal, setIsOpenIngredientModal] = useState(false);
    const [edit_ingredient, setEditIngredient] = useState({});
    const [is_open_edit_instruction_modal, setIsOpenInstructionModal] = useState(false);
    const [edit_instruction, setEditInstruction] = useState({});

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    style={styles.right_button}
                    disabled={!new_recipe.name.trim() || !new_recipe.temperature.trim() || !new_recipe.ingredients.length || !new_recipe.instructions.length}
                    onPress={() => {
                        addRecipe({ new_recipe });
                        navigation.navigate("Recipes");
                    }}
                >
                    <Text style={[styles.right_button_text, !new_recipe.name.trim() || !new_recipe.temperature.trim() || !new_recipe.ingredients.length || !new_recipe.instructions.length ? { opacity: 0.5 } : ""]}>Add</Text>
                </Pressable>
            ),
        });
    }, [navigation, new_recipe]);

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={10}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.add_recipe_container}>
                <View>
                    <View style={styles.input_container}>
                        <Text style={styles.label_text}>Recipe Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Recipe Name"
                            onChangeText={(name) => setNewRecipe({ ...new_recipe, name })}
                            value={new_recipe.name}
                        />
                    </View>
                    <View style={styles.input_container}>
                        <Text style={styles.label_text}>Ingredients</Text>
                        {new_recipe.ingredients.map((ingredient, index) =>
                            <Pressable
                                key={ingredient.id}
                                onLongPress={() => Alert.alert(`Delete ingredient`, `This will delete ${ingredient.value.unit_value} ${ingredient.value.unit} - ${ingredient.value.ingredient}`, [
                                    {
                                        text: "Cancel",
                                        style: "cancel",
                                    },
                                    {
                                        text: "Delete",
                                        onPress: () => setNewRecipe({ ...new_recipe, ingredients: new_recipe.ingredients.filter((new_recipe_ingredient) => new_recipe_ingredient.id !== ingredient.id) }),
                                        style: "destructive",
                                    },
                                ])}
                                onPress={() => {
                                    setIsOpenIngredientModal(true);
                                    setEditIngredient({
                                        id: ingredient.id,
                                        unit_value: ingredient.value.unit_value,
                                        unit: ingredient.value.unit,
                                        ingredient: ingredient.value.ingredient,
                                    });
                                }}
                            >
                                <Text style={styles.list_text}>{index + 1}. {ingredient.value.unit_value} {ingredient.value.unit} - {ingredient.value.ingredient}</Text>
                            </Pressable>
                        )}
                        <View style={styles.ingredients_container}>
                            <TextInput
                                style={[styles.unit_input]}
                                placeholder="Value"
                                onChangeText={(unit_value) => setUnitValue(unit_value)}
                                value={unit_value}
                                keyboardType="numbers-and-punctuation"
                            />
                            <RNPickerSelect
                                value={unit}
                                style={styles}
                                onValueChange={(value) => setUnit(value)}
                                items={units}
                                placeholder={{ label: "Unit", value: null }}

                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Ingredient Name"
                                onChangeText={(ingredient) => setIngredient(ingredient)}
                                value={ingredient}
                            />
                        </View>
                        <Pressable
                            style={styles.add_recipe_button}
                            disabled={!ingredient.trim()}
                            onPress={() => {
                                setNewRecipe({
                                    ...new_recipe, ingredients: [...new_recipe.ingredients, {
                                        id: uuidv4(), value: {
                                            unit_value,
                                            unit,
                                            ingredient,
                                        }
                                    }]
                                });
                                setIngredient("");
                                setUnit("Unit");
                                setUnitValue("");
                            }}
                        >
                            <Text style={styles.button_text}>Add Ingredient</Text>
                        </Pressable>
                    </View>
                    <View style={styles.input_container}>
                        <Text style={styles.label_text}>Instructions</Text>
                        {new_recipe.instructions.map((instruction, index) =>
                            <Pressable
                                key={instruction.id}
                                onLongPress={() => Alert.alert(`Delete ingredient`, `This will delete ${instruction.value}`, [
                                    {
                                        text: "Cancel",
                                        style: "cancel",
                                    },
                                    {
                                        text: "Delete",
                                        onPress: () => setNewRecipe({ ...new_recipe, instructions: new_recipe.instructions.filter((new_recipe_instruction) => new_recipe_instruction.id !== instruction.id) }),
                                        style: "destructive",
                                    },
                                ])}
                                onPress={() => {
                                    setIsOpenInstructionModal(true);
                                    setEditInstruction({ id: instruction.id, value: instruction.value });
                                }}
                            >
                                <Text key={index} style={styles.list_text}>{index + 1}. {instruction.value}</Text>
                            </Pressable>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Instruction"
                            onChangeText={(instruction) => setInstruction(instruction)}
                            value={instruction}
                        />
                        <Pressable
                            style={styles.add_recipe_button}
                            disabled={!instruction.trim()}
                            onPress={() => {
                                setNewRecipe({ ...new_recipe, instructions: [...new_recipe.instructions, { id: uuidv4(), value: instruction }] });
                                setInstruction("");
                            }}
                        >
                            <Text style={styles.button_text}>Add Instruction</Text>
                        </Pressable>
                    </View>
                    <View style={styles.input_container}>
                        <Text style={styles.label_text}>Temperature °C (Optional)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Temperature"
                            onChangeText={(temperature) => setNewRecipe({ ...new_recipe, temperature })}
                            value={new_recipe.temperature}
                            keyboardType="number-pad"
                            maxLength={3}
                        />
                    </View>
                </View>
            </View>
            <EditIngredientModal
                is_open_modal={is_open_edit_ingredient_modal}
                setIsOpenModal={() => setIsOpenIngredientModal(false)}
                edit_ingredient={edit_ingredient}
                submit_edit_ingredient={(edit_ingredient) => {
                    setNewRecipe({
                        ...new_recipe,
                        ingredients: new_recipe.ingredients.map((ingredient) => {
                            if (ingredient.id === edit_ingredient.id) {
                                return {
                                    id: edit_ingredient.id, value: {
                                        unit_value: edit_ingredient.unit_value,
                                        unit: edit_ingredient.unit,
                                        ingredient: edit_ingredient.ingredient,
                                    }
                                };
                            }
                            return ingredient;
                        })
                    })
                }}
            />
            <EditInstructionModal
                is_open_modal={is_open_edit_instruction_modal}
                setIsOpenModal={() => setIsOpenInstructionModal(false)}
                edit_instruction={edit_instruction}
                submit_edit_instruction={(edit_instruction) => {
                    setNewRecipe({
                        ...new_recipe,
                        instructions: new_recipe.instructions.map((instruction) => {
                            if (instruction.id === edit_instruction.id) {
                                return { id: edit_instruction.id, value: edit_instruction.value };
                            }
                            return instruction;
                        })
                    })
                }}
            />
        </KeyboardAwareScrollView>
    );
}

const { addRecipe } = recipeActions;