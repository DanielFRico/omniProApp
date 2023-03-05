import React from 'react';
import {Animated} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTranslation} from 'react-i18next';

import {useCommentsAndSuggestions, useAnimations} from './hooks';
import {purpleHeart} from '../../assets/images';
import styles from './styles';

const CommentsAndSuggestions = () => {
  const {t} = useTranslation();
  const {form, isFormFilled, onChangeFormField, onSendSuggestions} =
    useCommentsAndSuggestions();
  const {fontSize} = useAnimations();

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Animated.Text style={[styles.title, {fontSize}]}>
        {t('yourCommentsAreImp')}
      </Animated.Text>
      <TextInput
        style={styles.input}
        label={t('name')}
        value={form.name}
        onChangeText={onChangeFormField('name')}
      />
      <TextInput
        style={styles.input}
        label={t('phone')}
        value={form.phone}
        onChangeText={onChangeFormField('phone')}
      />
      <TextInput
        style={styles.input}
        label={t('email')}
        value={form.email}
        onChangeText={onChangeFormField('email')}
      />
      <TextInput
        style={styles.suggestionsInput}
        label={t('suggestions')}
        value={form.suggestions}
        onChangeText={onChangeFormField('suggestions')}
        multiline
        numberOfLines={10}
      />
      <Button
        disabled={!isFormFilled}
        style={styles.sendButton}
        icon="send"
        onPress={() => onSendSuggestions()}>
        {t('send')}
      </Button>
    </KeyboardAwareScrollView>
  );
};

export default CommentsAndSuggestions;
