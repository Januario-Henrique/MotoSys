import { Stack } from "expo-router";

export default function UserMenuLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="history"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="complaint"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="referral"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="about"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="settings"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="help"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}