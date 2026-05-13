import { Image } from 'expo-image';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { ThemedTextInput } from '@/components/themed-text-input';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRegister = () => {
    // Implement registration logic here, such as form validation and API calls
    setError(''); // Clear any previous errors
    console.log({ firstName, email, password, confirmPassword });

    if (!email || !firstName || !password || !confirmPassword) {
      setIsModalVisible(true);
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setIsModalVisible(true);
      setError('Passwords do not match.');
      return;
    }

    console.log('Registering user:', { email, password, confirmPassword });
    // Reset form fields after successful registration
    setFirstName('');
    // setLastName('');
    setEmail('');
    // setUsername('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#dca1c7', dark: '#2b0e2a' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="smallTitle">Welcome to CareerFlow</ThemedText>
            <ThemedText type="defaultSemiBold">Fill in the information below to create your account</ThemedText>
        </ThemedView>
        <ThemedView>
            <ThemedTextInput type='text_input' style={styles.textInput} placeholder="First Name" value={firstName} onChangeText={setFirstName}></ThemedTextInput>
            {/* <ThemedTextInput type='text_input' style={styles.textInput} placeholder="Last Name" value={lastName} onChangeText={setLastName}></ThemedTextInput> */}
            <ThemedTextInput type='text_input' style={styles.textInput} placeholder="Email" value={email} onChangeText={setEmail}></ThemedTextInput>
            {/* <ThemedTextInput type='text_input' style={styles.textInput} placeholder="Username" value={username} onChangeText={setUsername}></ThemedTextInput> */}
            <ThemedTextInput type='text_input' secureTextEntry={true} style={styles.textInput} placeholder="Password" value={password} onChangeText={setPassword}></ThemedTextInput>
            <ThemedTextInput type='text_input' secureTextEntry={true} style={styles.textInput} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword}></ThemedTextInput>
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <ThemedText type="defaultSemiBold">Create Account</ThemedText>
            </TouchableOpacity>
            <ThemedText type="link" href="/(auth)/login" style={styles.signUpLink}>
                Already have an account? Sign in
            </ThemedText>
        </ThemedView>
        
        <Modal 
          visible={isModalVisible} 
          animationType="slide" 
          transparent={true} 
          onRequestClose={() => setIsModalVisible(false)}>
          <ThemedView style={styles.modalOverlay}>
            <ThemedView style={styles.modalContent}>
              <ThemedText type="subtitle" style={styles.errorText}>
                {error}
              </ThemedText>

              <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.loginButton}>
                <ThemedText type="defaultSemiBold">Close</ThemedText>
              </TouchableOpacity>
            </ThemedView>
          </ThemedView>
        </Modal>
      
    </ParallaxScrollView>

    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    borderWidth:1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: '#461b3c',
    padding: 5,
    borderRadius: 7,
    alignItems: 'center',
  },
  signUpLink: {
    marginTop: 6,
    
  },
  errorText: {
    alignItems: 'center',
    color: 'black',
    marginBottom: 12,
  }
  
});
