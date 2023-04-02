import { Button, StyleSheet, Text, View } from "react-native"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"
import { Stack, useRouter } from "expo-router"
import { firebaseConfig } from "../firebase"
import { home } from "../assets/app_strings"

const App = () => {
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
        router.push("./select_task")
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Stack.Screen
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "#fff",
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1,
                        },
                        headerTintColor: "#000",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Text style={styles.title}>{home.title}</Text>
                <Text style={styles.subtitle}>{home.subtitle}</Text>
                <View style={{ marginTop: 32 }}>
                    <Button title={home.buttonTitle} onPress={onButtonPress} />
                </View>
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

export default App
