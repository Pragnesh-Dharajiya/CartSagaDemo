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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    props.fetchBanners();
    setIsLoading(false);
    setDataBanner(props.bannerData.banner);
  }, []);

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
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
            {dataBanner.map((itembann) => {
              return (
                <Image
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{uri: itembann}}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}} />
        </View>
      </View>
      {/* <FlatList
        numColumns={1}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        data={articles}
        renderItem={({item}) => <ArticleItem article={item} />}
        ListFooterComponent={renderFooter}
        initialNumToRender={8}
        maxToRenderPerBatch={2}
        onEndReachedThreshold={0.5}
      /> */}
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
