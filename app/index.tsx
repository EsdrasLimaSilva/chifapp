import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import system from "../src/style/system";
import { Link } from "expo-router";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { increase, selectCount } from "../lib/slices/countSlice";

export default function App() {
    const { count } = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello Chif App</Text>
            <Text>{count}</Text>
            <Button title="increase" onPress={() => dispatch(increase())} />
            <StatusBar style="auto" />
            <Link style={styles.link} href="/login">
                Login
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    link: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 16,
        color: system.colors.neutral[100],
        fontWeight: "bold",
        backgroundColor: system.colors.primary[500],
    },

    text: {
        fontFamily: "Pacifico-Regular",
        fontSize: system.fonts.sizes[300],
        color: system.colors.primary[400],
    },
});
