import { StatusBar } from "expo-status-bar";
import {
    Dimensions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import system from "../src/style/system";
import Input from "../src/components/Input";
import { Link } from "expo-router";
import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validadeForm = () => {};

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ width: "100%", padding: 16 }}
                contentContainerStyle={styles.scrollContentContainer}
            >
                <Text style={styles.brand}>Chif </Text>
                <Text style={styles.subTitle}>Register</Text>

                <Input
                    placeholder="name"
                    value={formData.name}
                    onChangeText={(txt) =>
                        setFormData((prev) => ({ ...prev, name: txt }))
                    }
                />
                <Input
                    placeholder="username"
                    value={formData.username}
                    onChangeText={(txt) =>
                        setFormData((prev) => ({ ...prev, username: txt }))
                    }
                />
                <Input
                    placeholder="email"
                    value={formData.email}
                    onChangeText={(txt) =>
                        setFormData((prev) => ({ ...prev, email: txt }))
                    }
                />
                <Input
                    placeholder="password"
                    value={formData.password.replaceAll(/./gi, "*")}
                    onChangeText={(txt) =>
                        setFormData((prev) => ({ ...prev, password: txt }))
                    }
                />
                <Input
                    placeholder="confirm password"
                    value={formData.confirmPassword.replaceAll(/./gi, "*")}
                    onChangeText={(txt) =>
                        setFormData((prev) => ({
                            ...prev,
                            confirmPassword: txt,
                        }))
                    }
                />

                <Link style={styles.link} href="/login">
                    I have an account
                </Link>

                <Pressable>
                    <Text style={styles.submit}>submit</Text>
                </Pressable>
            </ScrollView>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: system.colors.neutral[200],
        flex: 1,
        justifyContent: "center",
    },

    scrollContentContainer: {
        alignItems: "center",
        gap: 16,
        justifyContent: "center",
        paddingBottom: Dimensions.get("window").height / 3,
    },

    brand: {
        color: system.colors.primary[500],
        fontFamily: "Pacifico-Regular",
        fontSize: system.fonts.sizes.h2,
    },

    subTitle: {
        fontFamily: system.fonts.family.inter.medium,
        fontSize: system.fonts.sizes.h6,
    },

    submit: {
        backgroundColor: system.colors.primary[500],
        color: system.colors.neutral[100],
        fontFamily: system.fonts.family.inter.bold,
        fontSize: system.fonts.sizes.h6,
        paddingHorizontal: 24,
        paddingVertical: 8,
    },

    link: {
        color: system.colors.neutral[500],
        fontFamily: system.fonts.family.inter.medium,
        fontSize: system.fonts.sizes.p1,
        marginVertical: 16,
        textDecorationLine: "underline",
    },
});
