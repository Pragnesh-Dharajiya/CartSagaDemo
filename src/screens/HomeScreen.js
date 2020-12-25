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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = (props) => {
  
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
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#FF6347">
            <View style={styles.slide}>
              <Image
                source={require('./../assets/image/ic_banner-1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('./../assets/image/ic_banner-2.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('./../assets/image/ic_banner-3.png')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
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
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.categoryBtn}>
              <View style={styles.categoryIcon}>
                <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
              </View>
              <Text style={styles.categoryBtnTxt}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryBtn}
              onPress={() =>
                props.navigation.navigate('FastFood', {title: 'FastFood'})
              }>
              <View style={styles.categoryIcon}>
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  size={35}
                  color="#FF6347"
                />
              </View>
              <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn}>
              <View style={styles.categoryIcon}>
                <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
              </View>
              <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.categoryContainer, {marginTop: 30}]}>
            <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
              <View style={styles.categoryIcon}>
                <Fontisto name="hotel" size={35} color="#FF6347" />
              </View>
              <Text style={styles.categoryBtnTxt}>Hotels</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
              <View style={styles.categoryIcon}>
                <Ionicons name="md-restaurant" size={35} color="#FF6347" />
              </View>
              <Text style={styles.categoryBtnTxt}>Dineouts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
              <View style={styles.categoryIcon}>
                <MaterialIcons name="expand-more" size={35} color="#FF6347" />
              </View>
              <Text style={styles.categoryBtnTxt}>Show More</Text>
            </TouchableOpacity>
          </View>

          <View style={{height: 30}} />
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
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
  },
  categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
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
