import React,{createContext, useState, useEffect} from 'react';
import {firebase} from '../firebase/config';
import auth from '@react-native-firebase/auth';
import { View, ActivityIndicator, Text } from 'react-native';
                                                                                                                                                                        
export interface IAuthContext{
    user: any;
    loading: boolean;
}
interface IfirebaseProvider{
    children: React.ReactNode;
}

export const AuthContext = createContext({
    user: null,
    loading: true,
} as IAuthContext);

export const AuthProvider: React.FC<IfirebaseProvider> = ({children})=>{
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe= firebase.auth().onAuthStateChanged(User => {
            setUser(User);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if(loading) return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="large" />
            <Text>Loading...</Text>
        </View>
    );

    return(
        <AuthContext.Provider value={{ user, loading}}>
            {children}
        </AuthContext.Provider>
    );
};










