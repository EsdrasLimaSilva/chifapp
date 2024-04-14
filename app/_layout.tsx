import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import StoreProvider from "../lib/storeProvider";
import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

export default function Layout() {
    const [fontLoaded] = useFonts({
        "Inter-Black": require("../assets/fonts/Inter/static/Inter-Black.ttf"),
        "Inter-Bold": require("../assets/fonts/Inter/static/Inter-Bold.ttf"),
        "Inter-ExtraBold": require("../assets/fonts/Inter/static/Inter-ExtraBold.ttf"),
        "Inter-ExtraLight": require("../assets/fonts/Inter/static/Inter-ExtraLight.ttf"),
        "Inter-Light": require("../assets/fonts/Inter/static/Inter-Light.ttf"),
        "Inter-Medium": require("../assets/fonts/Inter/static/Inter-Medium.ttf"),
        "Inter-Regular": require("../assets/fonts/Inter/static/Inter-Regular.ttf"),
        "Inter-SemiBold": require("../assets/fonts/Inter/static/Inter-SemiBold.ttf"),
        "Inter-Thin": require("../assets/fonts/Inter/static/Inter-Thin.ttf"),

        "Pacifico-Regular": require("../assets/fonts/Pacifico/Pacifico-Regular.ttf"),
    });

    if (!fontLoaded) return null;

    return (
        <StoreProvider>
            <Slot />
        </StoreProvider>
    );
}
