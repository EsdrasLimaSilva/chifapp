import {
    Pressable,
    StyleSheet,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
} from "react-native";
import system from "../style/system";
import { useState } from "react";

import { Icon } from "react-native-elements";

interface Props extends TextInputProps {}

export default function SearchBar({ ...rest }: Props) {
    const [barFocused, setBarFocused] = useState(false);

    return (
        <View style={barFocused ? styles.barFocus : styles.barBlur}>
            <TextInput
                {...rest}
                style={styles.barInput}
                onFocus={() => setBarFocused(true)}
                onBlur={() => setBarFocused(false)}
            ></TextInput>

            <Pressable>
                <Icon name="search" />
            </Pressable>
        </View>
    );
}

const defaultBar: TextStyle = {
    alignItems: "center",
    backgroundColor: system.colors.neutral[100],
    borderRadius: 1000,
    borderWidth: 2,
    color: system.colors.neutral[500],
    flex: 1,
    flexDirection: "row",
    height: 52,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 4,
    width: "100%",
};

const styles = StyleSheet.create({
    barFocus: {
        ...defaultBar,
        borderColor: system.colors.primary[500],
    },

    barBlur: {
        ...defaultBar,
        borderColor: system.colors.transparent,
    },

    barInput: {
        fontFamily: system.fonts.family.inter.regular,
        fontSize: system.fonts.sizes.h6,
        height: "100%",
        width: "90%",
    },
});
