import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Stack, useRouter } from "expo-router"
import { wheelchairList } from "../assets/app_strings"

const WheelchairList = () => {
    const strings = wheelchairList
    const router = useRouter()

    onButtonPress = () => {
        router.back()
    }

    const onPress = (num) => {
        console.log("ayyy", num)
    }

    const buttonList = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100,
    ]

    const buttons = buttonList.map((i) => {
        return (
            <View style={styles.buttonView}>
                <Pressable onPress={() => onPress(i)} style={styles.button}>
                    <Text style={styles.buttonText}>{i}</Text>
                </Pressable>
            </View>
        )
    })

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

            <View style={styles.main}>
                <ScrollView>
                    <View style={styles.buttonGrid}>{buttons}</View>
                </ScrollView>
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
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    buttonGrid: {
        flex: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    buttonView: {
        borderColor: "black",
        borderWidth: 0.75,
        height: 64,
        width: 64,
        justifyContent: "center",
        alignItems: "center",
        margin: 4,
    },
    button: {
        textAlign: "center",
    },
    buttonText: {
        fontWeight: "bold",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
})

export default WheelchairList
