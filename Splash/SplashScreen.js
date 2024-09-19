import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect } from 'react';

function SplashScreen({navigation}) {

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login')
        },2000)
      }, []);
    
  return (
    
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
            source={require('./SplashImage.jpg')}
            style={styles.image}
            resizeMode="contain" 
        />
      <Text style={styles.title} >MoviesMania</Text>
      <Text style={styles.subtitle} >Your Search will ends Here...</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200, 
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold', 
    marginTop: 30, 
    fontSize: 50, 
  },
  subtitle: {
    fontWeight: 'bold', 
    fontStyle: 'italic',
    marginTop: 10, 
    fontSize: 20, 
  },
});

export default SplashScreen;