import { Stack } from "expo-router";

export default function PaymentLayout() {
  return (
    <Stack>
      {/* Payment Process */}
      <Stack.Screen
        name="paymentprocess"
        options={{
          headerShown: false,
        }}
      />

      {/* Payment Success Popup */}
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

      {/* Payment Call Popup */}
      <Stack.Screen
        name="paymentcall"
        options={{
          headerShown: false,
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
          headerShown: false,
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