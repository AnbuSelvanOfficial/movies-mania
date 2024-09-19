import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

function HomeScreen({ navigation }) {  
    return (
        
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
            
            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Trailers")} >
                    <Text style={styles.ButtonText}>Trailers</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("MoviesList")}>
                    <Text style={styles.ButtonText}>Movies List</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("MoviesList")}>
                    <Text style={styles.ButtonText}>Favorites</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("MoviesList")}>
                    <Text style={styles.ButtonText}>Rate & Review</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container}>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Profile")}>
                    <Text style={styles.ButtonText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    Container: {
        marginTop: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Button: {
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        padding: 10,
    },
    ButtonText: {
        fontSize: 20,
        lineHeight: 18 * 1.4,
        marginHorizontal: 60,
        color: 'white',
    },
});

export default HomeScreen;
