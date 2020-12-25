import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {
  View,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
 

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle="dark-content"></StatusBar>
      <View style={styles.header}>
        <Animatable.Image
          animation="wobble"
          duration={10000}
          source={require('../assets/image/ic_foodapp.png')}
          resizeMode="stretch"
          style={styles.logo}
        />
      </View>
      <Animatable.View
        style={[styles.footer, {backgroundColor: '#f5f5f5'}]}
        animation="fadeInUpBig"
        delay={1000}>
        <Text style={[styles.title]}>Find best food in your locality!</Text>
        <Text style={styles.text}>Sign in with account</Text>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.textSign}>Get Started</Text>
            <MaterialIcons name="navigate-next" color="#191970" size={20} />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4a460',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('80%'),
    height: hp('10%'),
  },
  footer: {
    flex: 1,
    backgroundColor: '#98fb98',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 60,
  },
  title: {
    color: '#05375a',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text: {
    color: 'grey',
    marginTop: 5,
    paddingLeft: wp('12%'),
    fontSize: hp('2%'),
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
    paddingRight: wp('3%'),
  },
  signIn: {
    width: wp('33%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#ffa07a',
  },
  textSign: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: hp('1.75%'),
  },
});

export default Splash;
