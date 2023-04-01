import { Button, StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"

const Page = () => {
  const router = useRouter()

  onButtonPress = () => {
    router.push("./wheelchair_list")
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>RealChair</Text>
        <Text style={styles.subtitle}>
          Tracking wheelchairs with the power of Ben's balls.
        </Text>
        <Button title="Tap to start" onPress={onButtonPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
})

export default Page
