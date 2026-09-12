import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle; // 👈 Adicione isso para permitir estilos customizados por fora
}

export default function CustomButton({ title, onPress, variant = 'primary', style }: ButtonProps) {
  const buttonStyle = variant === 'primary' ? styles.primaryButton : styles.secondaryButton;
  const textStyle = variant === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText;

  return (
    // Passamos o style recebido por último dentro da lista [ ] para ele substituir o padrão se necessário
    <TouchableOpacity style={[styles.baseButton, buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.baseText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 14, // 💡 Reduzi um pouco a altura vertical também (era 16)
    borderRadius: 8,
    alignItems: 'center',
    width: '100%', // Continua 100% por padrão, caso você não envie um estilo por fora
  },
  baseText: { fontSize: 16, fontWeight: '600' },
  primaryButton: { backgroundColor: '#10b987' },
  primaryButtonText: { color: '#fff' },
  secondaryButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#009963' },
  secondaryButtonText: { color: '#009963' },
});
