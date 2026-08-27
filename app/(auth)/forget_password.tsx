
import { View, Text, StyleSheet } from 'react-native';

export default function ForgetPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar senha</Text>
      <Text>Em breve...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' },
});