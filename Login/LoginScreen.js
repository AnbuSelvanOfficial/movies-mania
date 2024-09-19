import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { auth } from "../Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function LoginScreen({ navigation }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigation.navigate("Home", { userId: userCredential.user.uid });
                    setErrorMessage("");
                    setEmail("");
                    setPassword("");
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        } else {
            setErrorMessage("Please Enter Email and Password");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
            <View style={styles.headerContainer}>
                <Text style={styles.title}>LOGIN</Text>
            </View>
            <View style={styles.errorContainer}>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="grey"
                        selectionColor="grey"
                        style={styles.inputText}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialCommunityIcons name="email" size={24} color="black" />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        placeholder="Password"
                        placeholderTextColor="grey"
                        selectionColor="grey"
                        style={styles.inputText}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.signinContainer}>
                <TouchableOpacity style={styles.signinButton} onPress={handleLogin}>
                    <Text style={styles.signinButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate("Forgot")}>
                    Forgot Password?
                </Text>
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.accountText}>Don't have an account?</Text>
                <Text style={styles.signupText} onPress={() => navigation.navigate("Signup")}>
                    Signup
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        marginTop: 200,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        lineHeight: 20 * 3.4,
        color: 'black',
        fontWeight: '600',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    errorContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    error: {
        fontSize: 15,
        lineHeight: 20 * 3.4,
        color: 'red',
    },
    inputContainer: {
        backgroundColor: "#EAEAEA",
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: 'black',
        justifyContent: 'center',
        marginBottom: 10,
    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 13,
        color: 'black',
        flex: 1,
    },
    forgotPasswordContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgotPasswordText: {
        fontSize: 15,
        lineHeight: 12 * 4,
        color: 'black',
    },
    signinContainer: {
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    signinButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        padding: 10,
    },
    signinButtonText: {
        fontSize: 20,
        lineHeight: 18 * 1.4,
        marginHorizontal: 60,
        color: 'white',
    },
    signupContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: 'black',
    },
    signupText: {
        fontSize: 28,
        lineHeight: 13 * 4,
        color: 'black',
        marginLeft: 5,
    },
});

export default LoginScreen;
