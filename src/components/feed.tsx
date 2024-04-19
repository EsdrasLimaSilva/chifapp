import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../lib/hooks";
import { selectFeed } from "../../lib/slices/feedSlice";
import PostCard from "./postCard";
import system from "../style/system";

export default function Feed() {
    const { posts } = useAppSelector(selectFeed);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>For You</Text>
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
        width: "100%",
    },

    title: {
        width: "90%",
        fontSize: system.fonts.sizes.h4,
        marginBottom: 20,
        fontFamily: system.fonts.family.pacifico.regular,
        color: system.colors.primary[500],
    },
});
