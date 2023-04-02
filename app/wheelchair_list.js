import { Button, StyleSheet, Text, View } from "react-native"
import { Stack, useRouter } from "expo-router"
import { wheelchairList } from "../assets/app_strings"

const WheelchairList = () => {
    const strings = wheelchairList
    const router = useRouter()

    onButtonPress = () => {
        router.back()
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: strings.title,
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
            <View style={styles.main}></View>
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
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
})

export default WheelchairList
