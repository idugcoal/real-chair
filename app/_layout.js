import { Stack } from "expo-router"

export default Layout = () => {
    return (
        <Stack
            initialRouteName="home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerTransparent: "true",
            }}
        />
    )
}
