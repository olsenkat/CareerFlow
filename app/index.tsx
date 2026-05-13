import { Redirect } from 'expo-router';

export default function Index() {
  const user = null; // Replace with your authentication logic

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)" />;
}