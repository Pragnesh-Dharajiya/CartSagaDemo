import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
var {height, width} = Dimensions.get('window');

const FoodDetailScreen = (props) => {
  function _renderItemFood(item) {
    let catg = props.route.params.foodId;
    if (catg == item.categorie) {
      return (
        <TouchableOpacity style={[{backgroundColor:'white'},styles.divFood]}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri: item.image}}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: 'transparent',
              width: width / 2 - 20 - 10,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}}>
            {item.name}
          </Text>
          <Text>Descp Food and Details</Text>
          <Text style={{fontSize: 20, color: 'green'}}>${item.price}</Text>
        </TouchableOpacity>
      );
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <Text
        style={{
          fontSize: 30,
          alignSelf: 'center',
          fontWeight: 'bold',
          padding: 10,
        }}>
        {props.route.params.foodName}
      </Text>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
          <FlatList
            data={props.route.params.food}
            numColumns={2}
            renderItem={({item}) => _renderItemFood(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  divFood: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    
  },
});

export default FoodDetailScreen;
