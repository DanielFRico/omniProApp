import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import Animated, {FadeOutDown, BounceIn} from 'react-native-reanimated';

const isProductIndexInPaginationRange = (index, from, to) => {
  return index >= from && index < to;
};

const Product = ({product, index, from, to}) => {
  const {t} = useTranslation();
  const {id, title, price, description, image} = product;
  const showProduct = isProductIndexInPaginationRange(index, from, to);
  return (
    showProduct && (
      <Animated.View entering={BounceIn} exiting={FadeOutDown}>
        <Card
          key={id}
          onPress={() => console.log('2preison')}
          style={styles.container}>
          <Card.Content>
            <Text variant="titleLarge">{title}</Text>
            <Text variant="bodyMedium">{description}</Text>
          </Card.Content>
          <Card.Cover source={{uri: image}} />
          <Card.Actions>
            <Text variant="bodyMedium">{`$${price}`}</Text>
            <Button>{t('seeMore')}</Button>
          </Card.Actions>
        </Card>
      </Animated.View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default Product;
