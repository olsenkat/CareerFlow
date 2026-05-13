import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { ThemedTextInput } from '@/components/themed-text-input';

export default function LoginScreen() {
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
            <ThemedTextInput style={styles.textInput} placeholder="Username"></ThemedTextInput>
            <ThemedTextInput secureTextEntry={true} style={styles.textInput} placeholder="Password"></ThemedTextInput>
            <TouchableOpacity style={styles.loginButton}>
                <ThemedText type="defaultSemiBold">Login</ThemedText>
            </TouchableOpacity>
            <ThemedText type="link" href="/(auth)/register" style={styles.signUpLink}>
                Don't have an account? Sign up
            </ThemedText>
        </ThemedView>
        
      
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
  }
  
});
