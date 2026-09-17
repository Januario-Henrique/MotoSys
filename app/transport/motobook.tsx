import { View,  StyleSheet } from "react-native";
import {Text} from "@react-navigation/elements"

const AboutProps = (props: {
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <Text style={styles.description}>
        {props.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E4F4EE",
    borderRadius: 10,
  },

  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    color: "#00965E",
    marginBottom: 10,
  },

  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#555555",
    lineHeight: 24,
  },
});

export default AboutProps;