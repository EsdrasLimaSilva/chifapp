import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../lib/hooks";
import { selectCount } from "../lib/slices/countSlice";

export default function Login() {
    const { count } = useAppSelector(selectCount);

    return (
        <View>
            <Text style={styles.text}>Hello Login</Text>
            <Text>{count}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Pacifico-Regular",
    },
});
