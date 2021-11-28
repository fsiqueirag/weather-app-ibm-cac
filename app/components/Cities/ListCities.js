import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ListItem } from "react-native-elements/dist/list/ListItem";

export default function ListCities({cities}) {
  const navigation = useNavigation();

  return (
    <View>
      {
        cities.length === 0
        ?
        <Text style={styles.noCitiesText}>No se encuentran ciudades con ese nombre.</Text>
        :
        <FlatList
          data={cities}
          renderItem={(city) => <City city={city} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
        />
      }
        
    </View>
  );
}

function City(props) {
  const { city, navigation } = props;
  const { id, name } = city.item;

  const showCity = () => {
    navigation.navigate("city", { id, name });
  };

  return (
    <TouchableOpacity onPress={showCity}>
      <View>
        <View style={styles.viewCity}>
          <Text style={styles.cityName}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loadingCities: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  viewCity: {
    backgroundColor: "#9adbb3",
    flexDirection: "row",
    marginVertical: 2,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 50,
  },
  cityName: {
    fontSize: 25,
    color: '#666'
  },
  noCitiesText: {
    textAlign: 'center',
    marginBottom: 20
  }
});
