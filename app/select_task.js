import { Pressable, StyleSheet, Text, View } from "react-native"
import { Stack, useRouter } from "expo-router"
import { selectTask } from "../assets/app_strings"

const SelectTask = () => {
    const strings = selectTask
    const router = useRouter()

    onButtonPress = () => {
        router.back()
    }

    onArrivalPress = () => {}

    onDeparturePress = () => {
        router.push("./wheelchair_list")
    }

    onPreboardPress = () => {}

    return (
        <View style={styles.container}>
            <View style={styles.main}>
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
                <View style={styles.buttons}>
                    <Pressable onPress={onArrivalPress} style={styles.button}>
                        <Text style={styles.buttonText}>
                            {strings.buttonArrival}
                        </Text>
                    </Pressable>
                    <Pressable onPress={onDeparturePress} style={styles.button}>
                        <Text style={styles.buttonText}>
                            {strings.buttonDeparture}
                        </Text>
                    </Pressable>
                    <Pressable onPress={onDeparturePress} style={styles.button}>
                        <Text style={styles.buttonText}>
                            {strings.buttonPreboard}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 16,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 16,
        elevation: 3,
        backgroundColor: "#fff",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 21,
        letterSpacing: 0.25,
        color: "#000",
    },
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

export default SelectTask
