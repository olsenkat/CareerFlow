import { StyleSheet, Text, TextInput, type TextProps } from 'react-native';
import { ExternalPathString, Href, Link, RelativePathString } from 'expo-router';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'text_input';
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  type = 'text_input',
  placeholder = '',
  secureTextEntry = false,
  value,
  onChangeText,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return ( 
    type=='text_input' ? (
    <TextInput 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={[
          { color }, 
          styles.textEntry, 
          style
        ]} >
          {rest.children}
        </TextInput>) : (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'smallTitle' ? styles.smallTitle : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        // type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
    )
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  textEntry: {
    fontSize: 16,
    lineHeight: 24,
    color: 'gray',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  smallTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a78a4',
  },
});
