import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { login } from "../firebase/authentication";

export default function Login() {
    const [loginState, setLoginState] = useState({ email: "", password: "" });

    const signIn = async () => {
        const { email, password } = loginState;
        if (email.length == 0 || password.length == 0) return;

        await login(email, password);
    };

    return (
        <View>
            <Text style={styles.text}>Hello Login</Text>

            <TextInput
                value={loginState.email}
                onChangeText={(newText) =>
                    setLoginState((prev) => ({ ...prev, email: newText }))
                }
                placeholder="email"
            ></TextInput>
            <TextInput
                onChangeText={(newText) =>
                    setLoginState((prev) => ({ ...prev, password: newText }))
                }
                placeholder="senha"
            ></TextInput>
            <Button title="sign in" onPress={signIn} />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Pacifico-Regular",
    },
});
