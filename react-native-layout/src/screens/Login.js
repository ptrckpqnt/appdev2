import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../../assets/login.png')} 
            style={styles.logo} 
        />
        
        <Text style={styles.title}>Welcome Back!</Text>

        <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
            <TextInput 
            placeholder="Enter email address" 
            style={styles.input} 
            />
        </View>

        <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
            <TextInput 
            placeholder="Enter password" 
            secureTextEntry 
            style={styles.input} 
            />
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={styles.signUpText}>Sign Up</Text>
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#242424',
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: '100%',
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, 
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
  color: '#666',
  fontSize: 14,
  textAlign: 'center',
  marginTop: 20,
  },

  signUpText: {
  color: '#2c77e9',
  fontWeight: 'bold',
  },

});