import { StatusBar } from "expo-status-bar";
import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useState } from "react";
import { login } from "../firebase/authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import system from "../src/style/system";
import { Link } from "expo-router";
import Input from "../src/components/Input";

export default function Login() {
    const [loginState, setLoginState] = useState({ email: "", password: "" });

    const signIn = async () => {
        const { email, password } = loginState;
        if (email.length == 0 || password.length == 0) return;

        const user = await login(email, password);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.brand}>Chif</Text>

            <Input
                value={loginState.email}
                onChangeText={(newText) =>
                    setLoginState((prev) => ({ ...prev, email: newText }))
                }
                placeholder="email"
            ></Input>
            <Input
                onChangeText={(newText) =>
                    setLoginState((prev) => ({ ...prev, password: newText }))
                }
                placeholder="senha"
            ></Input>

            <Link style={styles.link} href="register">
                create account
            </Link>

            <Pressable>
                <Text style={styles.submit}>Sign In</Text>
            </Pressable>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: system.colors.neutral[200],
        gap: 16,
    },

    brand: {
        fontFamily: "Pacifico-Regular",
        fontSize: system.fonts.sizes.h2,
        color: system.colors.primary[500],
    },

    input: {
        width: "100%",
        backgroundColor: system.colors.neutral[100],
        color: system.colors.neutral[600],
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        fontSize: system.fonts.sizes.h6,
    },

    submit: {
        color: system.colors.neutral[100],
        backgroundColor: system.colors.primary[500],
        fontFamily: system.fonts.family.inter.bold,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 8,
        fontSize: system.fonts.sizes.h6,
    },

    link: {
        fontFamily: system.fonts.family.inter.regular,
        fontSize: system.fonts.sizes.p1,
        textDecorationLine: "underline",
        marginVertical: 16,
        color: system.colors.neutral[500],
    },
});
