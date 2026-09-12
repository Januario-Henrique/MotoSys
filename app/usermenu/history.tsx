import { View, Text, StyleSheet } from 'react-native';
export default function UserMenuHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Serviços</Text>
      <Text style={styles.subtitle}>Aqui você pode ver o histórico de serviços realizados.</Text>
      {/* Adicione aqui a lista de histórico de serviços */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,},
    title: {
    fontSize: 24,
    fontWeight: 'bold',},
    subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,}

})
