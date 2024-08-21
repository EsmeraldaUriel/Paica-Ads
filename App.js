import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FrameScreen from "./screens/FrameScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "JetBrainsMono-Bold": require("./assets/fonts/JetBrainsMono-Bold.ttf"),
    "JetBrainsMono-ExtraBold": require("./assets/fonts/JetBrainsMono-ExtraBold.ttf"),
    "InriaSerif-Light": require("./assets/fonts/InriaSerif-Light.ttf"),
    "InriaSerif-Bold": require("./assets/fonts/InriaSerif-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Frame" component={FrameScreen} />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Frame")}>
      <Text style={styles.buttonText}>Go to Frame</Text>
    </TouchableOpacity>
  </View>
);

const SplashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Splash Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;