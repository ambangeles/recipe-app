import React, { useEffect, useState } from 'react';
import { Modal, Text, Pressable, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from "./edit.modal.style";
import { units } from '../recipe/picker_data';
import RNPickerSelect from "react-native-picker-select";

export default function EditIngredientModal({ is_open_modal, setIsOpenModal, edit_ingredient, submit_edit_ingredient }) {
    const [unit, setUnit] = useState(edit_ingredient.unit);
    const [unit_value, setUnitValue] = useState(edit_ingredient.unit_value);
    const [ingredient, setIngredient] = useState(edit_ingredient.ingredient);

    useEffect(() => {
        setUnit(edit_ingredient.unit);
        setUnitValue(edit_ingredient.unit_value);
        setIngredient(edit_ingredient.ingredient);
    }, [edit_ingredient]);

    return (
        <View style={styles.centered_view}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={is_open_modal}
            >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.centered_view}>
                        <View style={styles.modal_view}>
                            <Text style={styles.modal_text}>Edit Ingredient</Text>
                            <View style={styles.list_container}>
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
                            <View>
                                <Pressable
                                    style={styles.submit_button}
                                    onPress={() => {
                                        setIsOpenModal()
                                        submit_edit_ingredient({ id: edit_ingredient.id, unit, unit_value, ingredient });
                                    }}>
                                    <Text style={styles.submit_button_text}>Edit</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => setIsOpenModal()}>
                                    <Text style={styles.cancel_button_text}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};