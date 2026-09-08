
import { Stack } from "expo-router";

export default function PaymentLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Payment Process */}
      <Stack.Screen
        name="paymentprocess"
        options={{
          presentation: "card",
        }}
      />

      {/* Payment Success Popup */}
      <Stack.Screen
        name="paymentsuccess"
        options={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

      {/* Payment Call Popup */}
      <Stack.Screen
        name="paymentcall"
        options={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

      {/* Payment Decline Popup */}
      <Stack.Screen
        name="paymentdecline"
        options={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

      {/* Feedback Popup */}
      <Stack.Screen
        name="feedback"
        options={{
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

