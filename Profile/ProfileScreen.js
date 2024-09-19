import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ImagePicker from 'react-native-image-picker';

function ProfileScreen({ navigation }) {  

    const [name, setName] = useState('Edit Name');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [editing, setEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(null); // State for profile image

    const handleSave = () => {
        console.log('Name:', name);
        console.log('Gender:', gender);
        console.log('Age:', age);
        console.log('Phone Number:', phoneNumber);
        setEditing(false);
    };

    const handleEditProfileImage = () => {
      const options = {
          mediaType: 'photo', // Specify the media type
          quality: 0.5, // Image quality
      };
  
      ImagePicker.launchImageLibrary(options, (response) => {
          if (response.didCancel) {
              console.log('User cancelled image picker');
          } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
          } else {
              // Set the selected image to the profileImage state
              setProfileImage(response.uri);
          }
      });
  };
  

    return (
        <View style={styles.container}>
            {/* Profile Image */}
            <TouchableOpacity onPress={handleEditProfileImage}>
                <Image
                    source={profileImage ? { uri: profileImage } : require('../Profile/Profile.jpg')} // Default image or current profile image
                    style={styles.profileImage}
                />
            </TouchableOpacity>
            
            {/* Edit Button */}
            {editing ? (
                <TouchableOpacity style={styles.editButton} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity> 
            ) : (
                <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)} >
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            )}

            {/* Profile Details */}
            <View style={styles.profileDetails}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        editable={editing}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Gender:</Text>
                    <Picker
                        style={styles.input}
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        enabled={editing}
                    >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                    </Picker>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Age:</Text>
                    <TextInput
                        style={styles.input}
                        value={age}
                        onChangeText={setAge}
                        editable={editing}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        editable={editing}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>
            
            {/* Logout Button */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    editButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    profileDetails: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputLabel: {
        fontSize: 15,
        width: 100,
        textAlign: 'left',
        marginRight: 0,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 200,
        marginTop: 20,
    },
});

export default ProfileScreen;
