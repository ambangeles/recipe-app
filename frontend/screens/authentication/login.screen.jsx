import { Keyboard, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./login.style";
import authenticationActions from "../../actions/authentication.action";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
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
                        style={styles.login_button}
                        onPress={() => {
                            loginUser({
                                email,
                                password,
                            });
                        }}
                    >
                        <Text style={styles.login_text}>Login</Text>
                    </Pressable>
                    <Pressable
                        style={styles.signup_button}
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={styles.signup_text}>Create New Account</Text>
                    </Pressable>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const {
    loginUser,
    checkUser,
} = authenticationActions;