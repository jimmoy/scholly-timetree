import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Finger widths, clockwise from blue:
// 170
// 150
// 128
// 150
// 170

const App: () => Node = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const [blueValue] = useState(new Animated.Value(0));
  const [greenValue] = useState(new Animated.Value(0));

  const blueAnimation = {
    height: blueValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 357],
    }),
  };

  const greenAnimation = {
    left: greenValue.interpolate({
      inputRange: [0, 1],
      outputRange: [550, 352],
    }),
    top: greenValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-310, -250],
    }),
  };

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(blueValue, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(greenValue, {
          toValue: 1,
          duration: 400,
          delay: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }, 1200);
  }, []);

  return (
    <View style={styles.backgroundStyle}>
      <StatusBar barStyle="dark-content" />
      <Animated.View style={[styles.blue, blueAnimation]} />
      <Animated.View style={[styles.green, greenAnimation]} />
    </View>
  );
};

const widthBlue = 100;
const radiusBlue = widthBlue / 2;

const widthGreen = 90;
const radiusGreen = widthGreen / 2;

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  blue: {
    left: 148,
    top: 0,
    width: widthBlue,
    backgroundColor: '#277bf8b0',
    borderBottomLeftRadius: radiusBlue,
    borderBottomRightRadius: radiusBlue,
  },
  green: {
    width: widthGreen,
    height: 400,
    transform: [{
      rotateZ: '72deg',
    }],
    backgroundColor: '#20ac50b0',
    borderBottomLeftRadius: radiusGreen,
    borderBottomRightRadius: radiusGreen,
  },
});

export default App;
