// app/(tabs)/_layout.tsx
import { Tabs, router } from 'expo-router';
import { useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function TabsLayout() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/(auth)/login');
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace('/(auth)/login');
      }
    });

    return () => authListener?.subscription.unsubscribe();
  }, []);

  return (
    <Tabs>
      {/* Seus tabs existentes */}
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
    </Tabs>
  );
}