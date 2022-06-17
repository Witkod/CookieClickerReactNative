// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const CookieScreen: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bgBlue.jpeg')}
        resizeMode="cover"
        style={styles.background}>
        <Text>Yoyo</Text>
        <View style={styles.imageContainer}>
          <Image
            // style={styles.background}
            style={styles.image}
            source={require('../../assets/images/perfectCookie.png')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginHorizontal: 0,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginVertical: 46,
    marginHorizontal: 32,
  },
  background: {flex: 1, justifyContent: 'center', width: '100%'},
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },
});
