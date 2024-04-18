import { ReactNode, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TextStyle } from "react-native";
import system from "../style/system";

interface Props extends TextInputProps {
    children?: ReactNode;
}

export default function Input({ children, ...rest }: Props) {
    const [isFocuSed, setIsFocused] = useState(false);

    return (
        <TextInput
            {...rest}
            style={isFocuSed ? style.inputFocused : style.input}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            {children}
        </TextInput>
    );
}

const defaultStyle: TextStyle = {
    width: "100%",
    backgroundColor: system.colors.neutral[100],
    color: system.colors.neutral[600],
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: system.fonts.sizes.h6,
    borderWidth: 2,
    borderColor: system.colors.primary[100],
};

const style = StyleSheet.create({
    input: {
        ...defaultStyle,
    },

    inputFocused: {
        ...defaultStyle,
        borderColor: system.colors.primary[500],
    },
});
