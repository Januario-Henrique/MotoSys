import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';

export default function WelcomePage() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/WelcomeMoto.jpeg')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subtitle}>Have a better sharing experience</Text>
            </View>

            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Create an account"
                    variant="primary"
                    style={{ width: '90%', alignSelf: 'center' }}
                    onPress={() => router.push('/auth/registration')}
                />

                <CustomButton
                    title="Log in"
                    variant="secondary"
                    style={{ width: '90%', alignSelf: 'center' }}
                    onPress={() => router.push('/auth/login')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    image: {
        width: '100%',
        height: '80%',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
    },
    buttonContainer: {
        marginBottom: 40,
        gap: 16,
    },
});