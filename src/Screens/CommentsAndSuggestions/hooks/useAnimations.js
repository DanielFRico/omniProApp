import {useEffect} from 'react';
import {Animated} from 'react-native';

export default () => {
  const fontSize = new Animated.Value(5);

  useEffect(() => {
    Animated.timing(fontSize, {
      toValue: 30,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }, []);

  return {fontSize};
};
