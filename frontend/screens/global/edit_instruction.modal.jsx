import React, { useEffect, useState } from 'react';
import { Modal, Text, Pressable, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from "./edit.modal.style";

export default function EditInstructionModal({ is_open_modal, setIsOpenModal, edit_instruction, submit_edit_instruction }) {
    const [instruction, setInstruction] = useState(edit_instruction.ingredient);

    useEffect(() => {
        setInstruction(edit_instruction.value);
    }, [edit_instruction]);

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
                            <Text style={styles.modal_text}>Edit Instruction</Text>
                            <View style={styles.list_container}>
                                <TextInput
                                    style={[styles.input, { width: "100%" }]}
                                    placeholder="Instruction"
                                    onChangeText={(instruction) => setInstruction(instruction)}
                                    value={instruction}
                                />
                            </View>
                            <View>
                                <Pressable
                                    style={styles.submit_button}
                                    onPress={() => {
                                        setIsOpenModal()
                                        submit_edit_instruction({ id: edit_instruction.id, value: instruction });
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