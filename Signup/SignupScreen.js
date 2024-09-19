import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function SignupScreen({ navigation }) {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [validationMessage, setValidationMessage] = useState("");

  const signUp = () => {
    if (password === confirmPassword) {
      setValidationMessage(""); // Reset validation message

      // Create user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Send email verification
          sendEmailVerification(auth.currentUser);
          // Navigate to success screen
          navigation.navigate("AcSuccess");
        })
        .catch((error) => {
          setValidationMessage(error.message); // Set validation error message
        });
    } else {
      setValidationMessage("Passwords do not match."); // Set validation error message
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>CREATE ACCOUNT</Text>
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{validationMessage}</Text>
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
            secureTextEntry={!showPassword} // Toggle secure text entry based on showPassword state
            placeholder="Password"
            placeholderTextColor="grey"
            selectionColor="grey"
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
          />
          {/* Password toggle icon */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <TextInput
            secureTextEntry={!showPassword} 
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            selectionColor="grey"
            style={styles.inputText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signinContainer}>
        <TouchableOpacity style={styles.signinButton} onPress={signUp}>
          <Text style={styles.signinButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.accountText}>Already have an account ?</Text>
        <Text style={styles.signupText} onPress={() => navigation.navigate("Login")}>
          Login
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
    flexDirection: 'row', 
    alignItems: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Added flex: 1 to inputText to allow it to take up remaining space
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 13,
    color: 'black',
    flex: 1,
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

export default SignupScreen;
