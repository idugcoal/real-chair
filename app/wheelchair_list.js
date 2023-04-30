import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native"
import { useState } from "react"
import { Stack, useRouter } from "expo-router"
import { wheelchairList } from "../assets/app_strings"

const WheelchairList = () => {
    const strings = wheelchairList
    const router = useRouter()

    onButtonPress = () => {
        router.back()
    }

    const onPress = () => {
        console.log("ayyy", wheelchairNumber)
    }

    const [wheelchairNumber, setWheelchairNumber] = useState("")

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
                    <TextInput
                        title="Wheelchair number"
                        onChangeText={setWheelchairNumber}
                        value={wheelchairNumber}
                        keyboardType="numeric"
                        style={{
                            backgroundColor: "white",
                            height: 64,
                            fontSize: 64,
                            margin: 12,
                            width: 128,
                            alignItems: "center",
                        }}
                    />
                    <Button title="Enter" onPress={onPress} style />
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
        justifyContent: "center",
        alignItems: "center",
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
