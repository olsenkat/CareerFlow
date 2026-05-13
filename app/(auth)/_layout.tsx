import { Stack, Tabs } from "expo-router";
import React from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    //     headerShown: false,
    //     tabBarButton: HapticTab,
    //   }}
    // >
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
         <Stack.Screen
          name="login"
          options={{
            title: "Login",
            
          }}
      
        />
        <Stack.Screen
          name="register"
          options={{
            title: "Register",
            
          }}
        />
      </Stack>
    </ThemeProvider>
      
  );
}


// {/* <Tabs.Screen
//         name="register"
//         options={{
//           title: "Register",
//           tabBarIcon: ({ color }) => (
//             <IconSymbol size={28} name="person" color={color} />
//           ),
//         }}
//       /> */}