import {useEffect} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const animationConfig = {
  duration: 2000,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};

export default () => {
  const imageValue = useSharedValue(0);
  const buttonRotationDeg = useSharedValue(0);
  const buttonProductsXPos = useSharedValue(200);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(imageValue.value),
      height: withSpring(imageValue.value, {stiffness: 10}),
    };
  });

  const buttonProductsAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: withTiming(buttonProductsXPos.value, animationConfig)},
    ],
  }));

  const buttonComAndSugAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${buttonRotationDeg.value}deg`}],
    };
  });

  useEffect(() => {
    buttonProductsXPos.value = Math.random() * 100;
    buttonRotationDeg.value = withRepeat(withTiming(10), 6, true);
    imageValue.value = 350;
  }, []);

  return {
    imageAnimatedStyle,
    buttonProductsAnimatedStyles,
    buttonComAndSugAnimatedStyles,
  };
};
