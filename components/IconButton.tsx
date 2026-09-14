// components/IconButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  style?: ViewStyle;
}

export default function IconButton({ title, onPress, icon, iconColor = '#333', style }: IconButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.contentContainer}>
        <Ionicons name={icon} size={20} color={iconColor} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 14,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 12, // Espaço perfeito entre o ícone e o texto
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});