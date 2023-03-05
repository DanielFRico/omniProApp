import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {Button} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import {omniLogo} from '../../assets/images';
import {
  PRODUCTS_SCREEN,
  COMMENTS_AND_SUGGESTIONS_SCREEN,
} from '../../constants';
import styles from './styles';
import {useAnimations} from './hooks';

const Home = ({navigation}) => {
  const {t} = useTranslation();

  const {
    imageAnimatedStyle,
    buttonProductsAnimatedStyles,
    buttonComAndSugAnimatedStyles,
  } = useAnimations();

  const goToScreen = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.Image
          style={[styles.logo, imageAnimatedStyle]}
          resizeMode={'contain'}
          source={omniLogo}
        />
        <Animated.View style={[styles.button, buttonProductsAnimatedStyles]}>
          <Button onPress={() => goToScreen(PRODUCTS_SCREEN)}>
            {t('goProducts')}
          </Button>
        </Animated.View>
        <Animated.View style={[styles.button, buttonComAndSugAnimatedStyles]}>
          <Button onPress={() => goToScreen(COMMENTS_AND_SUGGESTIONS_SCREEN)}>
            {t('goSuggestions')}
          </Button>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
