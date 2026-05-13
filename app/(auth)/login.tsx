import { Image } from 'expo-image';
import { Modal, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';


import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { ThemedTextInput } from '@/components/themed-text-input';
import { supabase } from '@/src/lib/supabase';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogin = async () => {
    // Implement Login logic here, such as form validation and API calls
    setError(''); // Clear any previous errors
    console.log({ email, password });

    if (!email || !password) {
      setIsModalVisible(true);
      setError('Please fill in all fields.');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) { 
      setIsModalVisible(true);
      setError(error.message);
      return;
    }

    console.log('Logging in user:', { email, password });
    // Reset form fields after successful registration
    setEmail('');
    setPassword('');

    if(data.session) {
      router.replace('/(tabs)');
    } 
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#dca1c7', dark: '#2b0e2a' }}
      headerImage={
        <Image
          source={require('@/assets/images/icon-job-search.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="smallTitle">Welcome to CareerFlow</ThemedText>
            <ThemedText type="defaultSemiBold">Login to your account to continue</ThemedText>
        </ThemedView>
        <ThemedView>
            <ThemedTextInput type="text_input" style={styles.textInput} placeholder="Email" value={email} onChangeText={setEmail}></ThemedTextInput>
            <ThemedTextInput secureTextEntry={true} style={styles.textInput} placeholder="Password" value={password} onChangeText={setPassword}></ThemedTextInput>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <ThemedText type="defaultSemiBold">Login</ThemedText>
            </TouchableOpacity>
            <ThemedText type="link" href="/(auth)/register" style={styles.signUpLink}>
                Don't have an account? Sign up
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
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    bottom: 0,
    left: 90,
    color: '#616caa',
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
  errorText: {
    alignItems: 'center',
    color: 'black',
    marginBottom: 12,
  }
  
});
