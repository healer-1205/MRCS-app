import React, { useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/Splash";
import TutorialScreen from "./screens/Tutorial";
import {
    OnboardingStackParamList,
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
    AuthenticatedStackParamList,
} from "./types";
import * as Font from "expo-font";
import { NativeBaseProvider, theme } from "native-base";

const App = () => {
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                // Load fonts
                await Font.loadAsync({
                    Roboto: require("./assets/fonts/Roboto.ttf"),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            background: theme.colors.white,
            text: theme.colors.white,
            border: theme.colors.coolGray[800],
            primary: theme.colors.yellow[300],
        },
    };

    return (
        <NativeBaseProvider>
            <NavigationContainer theme={MyTheme}>
                <RootNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const AuthenticatedStack =
    createNativeStackNavigator<AuthenticatedStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    // backgroundColor: theme.colors.coolGray[800],
                },
                headerTitleStyle: {},
            }}
        >
            <Stack.Screen
                name="Onboarding"
                component={OnboardingNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Root"
                component={AuthenticatedNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

function OnboardingNavigator() {
    return (
        <OnboardingStack.Navigator>
            <OnboardingStack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <OnboardingStack.Screen
                name="TutorialScreen"
                component={TutorialScreen}
                options={{ headerShown: false }}
            />
        </OnboardingStack.Navigator>
    );
}

function AuthenticatedNavigator() {
    return (
        <AuthenticatedStack.Navigator
            screenOptions={{
                headerStyle: {
                    // backgroundColor: theme.colors.blueGray[800],
                },
                headerBackTitle: "",
                headerTintColor: "#fff",
            }}
        ></AuthenticatedStack.Navigator>
    );
}

export default App;
