import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/logo.mp4";

export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        async function prepare() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 6000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                navigation.navigate("TutorialScreen");
            }
        }

        prepare();
    }, []);

    return (
        <View style={styles.container}>
            <Video
                source={Logo}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping={false}
                style={{ width: 300, height: 300, marginTop: "auto" }}
            />
            <Text style={styles.copyright}>
                © 2022 Robin's Academy Limited. All rights reserved
            </Text>
            <StatusBar style="auto" />
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
    copyright: {
        marginTop: "auto",
        marginBottom: 20,
    },
});
