import { Keyboard, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./signup.style";
import authenticationActions from "../../actions/authentication.action";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useSelector((state) => state.authentication);

    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        if (user) {
            navigation.replace("Recipes");
        }
    }, [user]);

    return (
        <KeyboardAvoidingView
            style={styles.login_container}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View>
                    <Text style={styles.login_title}>My Recipe App</Text>
                    <View style={styles.input_container}>
                        <Text style={styles.label_text}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(email) => setEmail(email)}
                            value={email}

                        />
                    </View>
                    <View style={styles.input_container}>
                        <Text style={styles.label_text}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                            secureTextEntry
                        />
                    </View>
                    <Pressable
                        style={styles.signup_button}
                        onPress={() => signUpUser({
                            email,
                            password,
                        })}
                    >
                        <Text style={styles.signup_text}>Sign Up</Text>
                    </Pressable>
                    <View style={styles.login_button}>
                        <Text style={styles.login_btn_text}>
                            Already have an account?
                        </Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={styles.login_text}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const {
    signUpUser,
    checkUser,
} = authenticationActions;