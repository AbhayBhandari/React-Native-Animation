import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import MyButton from "./components/MyButton";
import colors from "./config/colors";
import ImgScreen from "./app/screens/ImgScreen";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
      }}
    >
      <MyButton title="FETCH" onPress={() => navigation.navigate("Image")} />
    </View>
  );
}

function ImageScreen() {
  return (
    <ImgScreen
      image={{
        uri: "https://images.dog.ceo/breeds/papillon/n02086910_3924.jpg",
      }}
    />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
