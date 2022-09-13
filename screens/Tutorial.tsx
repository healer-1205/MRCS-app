import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Slider1 from "../assets/slider/ic_tutorial_a - 1.json";

export default function TutorialScreen() {
    const navigation = useNavigation();
    const Row = ({ children }) => <View style={styles.row}>{children}</View>;
    const Col = ({ numRows, children }) => {
        return <View style={styles[`${numRows}col`]}>{children}</View>;
    };
    return (
        <View style={styles.container}>
            <Row>
                <Col numRows={3}></Col>
                <Col numRows={1}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Skip</Text>
                    </TouchableOpacity>
                </Col>
            </Row>
            <Text style={styles.title}>Experience Team</Text>
            <Text style={styles.description}>
                The highly yielding MRCS study, Our team includes many full MRCS
                members, and clinical authors
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 52,
    },
    buttonLayer: {
        flex: 4,
    },
    row: {
        flexDirection: "row",
    },
    "1col": {
        flex: 1,
    },
    "2col": {
        flex: 2,
    },
    "3col": {
        flex: 3,
    },
    "4col": {
        flex: 4,
    },
    button: {
        color: "#FCFBFB",
        borderColor: "#D4D4D4",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 21,
        width: 68,
        height: 30,
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 12,
        textAlign: "center",
        color: "#BCBCBC",
        opacity: 100,
    },
    title: {
        color: "#FF1D5C",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Roboto",
        paddingTop: 30,
        textAlign: "center",
    },
    description: {
        color: "#BCBCBC",
        fontSize: 13,
        fontWeight: "bold",
        fontFamily: "Roboto",
        paddingTop: 10,
        textAlign: "center",
    },
});
