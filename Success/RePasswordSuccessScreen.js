import React from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";

function RePasswordSuccessScreen({ navigation }) {
    return (
        <View style={Styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
                translucent
            />

            <View style={Styles.headerContainer}>
                <Text style={Styles.title}>Email Sent </Text>
            </View>
            <View style={Styles.headerContainer2}>
                <Text style={Styles.title}>Successfully</Text>
            </View>

            <View style={Styles.signinContainer}>
                <TouchableOpacity
                    style={Styles.signinButton}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={Styles.signinButtonText}>
                      Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const Styles = StyleSheet.create({
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
    headerContainer2: {
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

export default RePasswordSuccessScreen;

