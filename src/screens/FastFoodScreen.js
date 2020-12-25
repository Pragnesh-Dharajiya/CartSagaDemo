import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import * as PostActions from '../actions/BannerActions';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FastFoodScreen = (props) => {
  const [dataCategories, setDataCategories] = useState([]);
  const [selectFood, setSelectFood] = useState([]);

  useEffect(() => {
    props.fetchBanners();
    setDataCategories(props.bannerData.categories);
    setSelectFood(props.bannerData.food);
  }, []);

  function _renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.divCategorie]}
        onPress={() => {
          props.navigation.navigate('FoodDetail', {
            foodId: item.id,
            foodName: item.name,
            food: selectFood,
          });
        }}>
        <Image
          style={{width: wp('40%'), height: 150}}
          resizeMode="contain"
          source={{uri: item.image}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          shadowOpacity: 0.3,
          shadowRadius: 50,
        }}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Image
            style={{height: 60, width: width / 2, margin: 10}}
            resizeMode="contain"
            source={require('./../assets/image/ic_foodapp.png')}
          />

          <FlatList
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={dataCategories}
            renderItem={({item}) => _renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />

          <View style={{height: 20}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  divCategorie: {
    margin: 10,
    alignItems: 'center',
    padding: 20,
    width: wp('45%'),
  },
});

const mapStateToProps = (state) => {
  return {
    bannerData: state.BannerReducer.bannerData,
    isFetching: state.BannerReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBanners: () => dispatch(PostActions.fetchBanners()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastFoodScreen);
