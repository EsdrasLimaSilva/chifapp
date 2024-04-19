import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import system from "../src/style/system";
import { Link, useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { increase, selectCount } from "../lib/slices/countSlice";
import { auth } from "../firebase/firebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../src/components/searchBar";

export default function App() {
    const [authStateReady, setAuthStateReady] = useState(false);

    const getAuthState = async () => {
        await auth.authStateReady();
        setAuthStateReady(true);
    };

    // useEffect(() => {
    //     getAuthState();
    // }, []);

    // useEffect(() => {
    //     if (authStateReady && !auth.currentUser) router.replace("/login");
    // }, [authStateReady]);

    // if (!authStateReady || !auth.currentUser) return null;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}
            >
                <Text style={styles.brand}>Chif </Text>
                <SearchBar placeholder="search for a meal" />
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: system.colors.neutral[200],
        padding: 16,
    },

    brand: {
        color: system.colors.primary[500],
        fontSize: system.fonts.sizes.h2,
        fontFamily: system.fonts.family.pacifico.regular,
    },

    scrollContainer: {},

    scrollContentContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});
