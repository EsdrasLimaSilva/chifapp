import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../../lib/slices/feedSlice";
import system from "../style/system";
import Slider from "./slider";

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    return (
        <View style={styles.contianer}>
            <View style={styles.header}>
                <Text style={styles.username}>@{post.user}</Text>
            </View>

            {post.images.length > 1 ? (
                <Slider imgs={post.images} />
            ) : (
                <Image src={post.images[0]} style={styles.singleImage} />
            )}

            <View style={styles.footer}>
                <Text>footer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        width: "100%",
        backgroundColor: system.colors.neutral[100],
        borderBottomWidth: 1,
        borderColor: system.colors.neutral[200],
    },

    header: {
        padding: 16,
    },

    footer: {
        padding: 16,
        paddingBottom: 48,
    },

    username: {
        fontSize: system.fonts.sizes.h6,
    },

    singleImage: {
        width: "100%",
        aspectRatio: 4 / 5,
        resizeMode: "cover",
    },
});
