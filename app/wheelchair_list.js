import {Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const WheelchairList = () => {
    const router = useRouter()

    onButtonPress = () => {
        router.back()
    }

    return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Wheelchairs</Text>
        <Button onPress={onButtonPress} title="Go back" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default WheelchairList