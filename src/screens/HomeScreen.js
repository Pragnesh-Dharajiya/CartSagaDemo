import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import * as PostActions from '../actions/BannerActions';
import {connect} from 'react-redux';

const HomeScreen = (props) => {
  const [dataBanner, setDataBanner] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [selectFood, setSelectFood] = useState([]);

  useEffect(() => {
    props.fetchBanners();
    setDataBanner(props.bannerData.banner);
    setDataCategories(props.bannerData.categories);
    setSelectFood(props.bannerData.food);
  }, []);

  function _renderItem(item) {
    
    return (
      <TouchableOpacity
        style={[styles.divCategorie, {backgroundColor: item.color}]}
        onPress={() => {
          props.navigation.navigate('FoodDetail', {
            foodId: item.id,
            foodName:item.name,
            foodColor:item.color,
            food: selectFood,
          });
        }}>
        <Image
          style={{width: 380, height: 150}}
          resizeMode="contain"
          source={{uri: item.image}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f2f2f2',
          shadowOpacity: 0.3,
          shadowRadius: 50,
        }}>
        <View style={{width: width, alignItems: 'center'}}>
          <Image
            style={{height: 60, width: width / 2, margin: 10}}
            resizeMode="contain"
            source={require('./../assets/image/ic_foodapp.png')}
          />
          <Swiper
            style={{height: width / 2}}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}>
            {dataBanner.map((itembann, index) => {
              return (
                <Image
                  key={index}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{uri: itembann}}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}} />
        </View>
        <View
          style={{
            width: width,
            borderRadius: 20,
            paddingVertical: 30,
            backgroundColor: 'white',
          }}>
          <Text style={styles.titleCatg}>Categories </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={dataCategories}
            renderItem={({item}) => _renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={{height: 20}} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
