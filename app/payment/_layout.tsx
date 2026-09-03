
import { Stack } from "expo-router";

export default function PaymentLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="paymentprocess"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="paymentsuccess"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "slide_from_bottom",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

      <Stack.Screen
        name="feedback"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "slide_from_bottom",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

    </Stack>
  );
}

