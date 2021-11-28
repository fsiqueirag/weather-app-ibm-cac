import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import City from "../screens/Cities/City";
import Search from "../screens/Search";
import { StyleSheet, Text, View } from "react-native";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "NOMBRE DE LA APP",

            // DESCOMENTAR EL CÓDIGO DE ABAJO PARA AGREGAR ESTILOS PERSONALIZADOS A LA BARRA DE ARRIBA

            // headerTitle: () => (
            //   <View style={styles.headerBar}>
            //     <Text>Hola</Text>
            //   </View>
            // )
          }}
        />
        <Stack.Screen name="city" component={City} />
        <Stack.Screen name="search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBar: {},
});
