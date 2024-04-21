import { useRef } from "react";
import {
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from "react-native";
import { Image, StyleSheet, View } from "react-native";

export default function Slider({ imgs }: { imgs: string[] }) {
    const flatRef = useRef(null);

    const handleEndScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (!flatRef) return;

        const xOffset = e.nativeEvent.contentOffset.x;
        const flatElement = flatRef.current as FlatList<string>;

        const imgWidth = Dimensions.get("screen").width;
        const index = Math.round(xOffset / imgWidth);

        flatElement.scrollToIndex({ animated: false, index: index });
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatRef}
                data={imgs}
                renderItem={({ item }) => (
                    <Image src={item} style={styles.image} />
                )}
                keyExtractor={(item) => item + Math.random() * 1000}
                horizontal={true}
                contentContainerStyle={styles.listContainer}
                onScrollEndDrag={handleEndScroll}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
        aspectRatio: 4 / 5,
    },

    listContainer: {
        flexGrow: 1,
    },

    image: {
        width: Dimensions.get("screen").width,
        height: "100%",
        resizeMode: "cover",
    },
});
