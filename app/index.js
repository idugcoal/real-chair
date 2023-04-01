import { Button, StyleSheet, Text, View } from "react-native"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"
import { useRouter } from "expo-router"
import { firebaseConfig } from "../firebase"

const Page = () => {
  const router = useRouter()
  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)
  const database = getDatabase(app)

  const writeUserData = () => {
    const db = getDatabase()
    set(ref(db, "Users/" + "12345"), {
      username: "test",
      email: "test@example.com",
    })
  }

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
        <Button title="Add a fact about Ben" onPress={() => writeUserData()} />
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
