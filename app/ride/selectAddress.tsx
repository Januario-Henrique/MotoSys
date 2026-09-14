import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Lista de lugares recentes (mock)
const recentPlaces = [
  {
    id: '1',
    name: 'Office',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    distance: '2.7km',
    icon: 'briefcase-outline',
  },
  {
    id: '2',
    name: 'Coffee shop',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    distance: '1.1km',
    icon: 'cafe-outline',
  },
  {
    id: '3',
    name: 'Shopping center',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    distance: '4.9km',
    icon: 'cart-outline',
  },
  {
    id: '4',
    name: 'Shopping mall',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    distance: '4.0km',
    icon: 'bag-handle-outline',
  },
];

export default function SelectAddress() {
  const router = useRouter();
  const [fromValue, setFromValue] = useState('Current location');
  const [toValue, setToValue] = useState('');

  const handleConfirm = () => {
    // Aqui você salvaria os dados no Firebase ou navegaria
    console.log('From:', fromValue);
    console.log('To:', toValue);
    // router.push('/ride/confirm');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* MAPA DE FUNDO */}
      <ImageBackground
        source={require('../../assets/images/map-background.jpeg')}
        style={styles.mapBackground}
        resizeMode="cover"
      >
        {/* TOP BAR - Menu e Notificação */}
        <SafeAreaView style={styles.topBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={24} color="#009963" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#009963" />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>

      {/* BOTTOM SHEET */}
      <View style={styles.bottomSheet}>
        {/* Handle (barrinha cinza) */}
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>

        {/* Botão de fechar */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <Ionicons name="close" size={22} color="#999" />
        </TouchableOpacity>

        <Text style={styles.sheetTitle}>Select address</Text>

        {/* INPUTS - FROM E TO */}
        <View style={styles.inputsContainer}>
          {/* Input FROM */}
          <View style={styles.inputWrapper}>
            <View style={styles.inputIconContainer}>
              <Ionicons name="locate" size={20} color="#009963" />
            </View>
            <TextInput
              style={styles.input}
              value={fromValue}
              onChangeText={setFromValue}
              placeholder="From"
              placeholderTextColor="#999"
            />
          </View>

          {/* Linha de conexão entre os inputs (visual) */}
          <View style={styles.connectorLine} />

          {/* Input TO */}
          <View style={styles.inputWrapper}>
            <View style={styles.inputIconContainer}>
              <Ionicons name="location-outline" size={20} color="#009963" />
            </View>
            <TextInput
              style={styles.input}
              value={toValue}
              onChangeText={setToValue}
              placeholder="To"
              placeholderTextColor="#999"
              autoFocus
            />
          </View>
        </View>

        {/* LISTA DE LUGARES RECENTES */}
        <Text style={styles.sectionTitle}>Recent places</Text>

        <ScrollView
          style={styles.recentList}
          showsVerticalScrollIndicator={false}
        >
          {recentPlaces.map((place) => (
            <TouchableOpacity
              key={place.id}
              style={styles.placeItem}
              onPress={() => setToValue(place.address)}
            >
              <View style={styles.placeIconContainer}>
                <Ionicons name={place.icon as any} size={20} color="#333" />
              </View>

              <View style={styles.placeInfo}>
                <Text style={styles.placeName}>{place.name}</Text>
                <Text style={styles.placeAddress} numberOfLines={1}>
                  {place.address}
                </Text>
              </View>

              <Text style={styles.placeDistance}>{place.distance}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* BOTÃO CONFIRM */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirm}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mapBackground: {
    flex: 1,
  },

  // TOP BAR
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // BOTTOM SHEET
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
    maxHeight: '75%',
  },
  handleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  handle: {
    width: 50,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#DDD',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 24,
    zIndex: 10,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },

  // INPUTS
  inputsContainer: {
    marginBottom: 24,
    position: 'relative',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    backgroundColor: '#fff',
  },
  inputIconContainer: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 14,
  },
  connectorLine: {
    position: 'absolute',
    left: 24,
    top: 50,
    width: 2,
    height: 20,
    backgroundColor: '#E5E5E5',
    zIndex: 1,
  },

  // RECENT PLACES
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  recentList: {
    maxHeight: 220,
    marginBottom: 20,
  },
  placeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  placeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  placeInfo: {
    flex: 1,
  },
  placeName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  placeAddress: {
    fontSize: 12,
    color: '#999',
  },
  placeDistance: {
    fontSize: 13,
    fontWeight: '600',
    color: '#009963',
    marginLeft: 10,
  },

  // CONFIRM BUTTON
  confirmButton: {
    backgroundColor: '#009963',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});