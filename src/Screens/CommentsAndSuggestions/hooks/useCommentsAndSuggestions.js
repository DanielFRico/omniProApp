import {useState} from 'react';
import {ToastAndroid, Platform, Alert} from 'react-native';

const sentMessage = '¡Sugerencias enviadas exitosamente!';

export default () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    suggestions: '',
  });

  const isFormFilled = Object.values(form).every(field => field);

  const onChangeFormField = field => value => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const onSendSuggestions = () => {
    setTimeout(() => {
      notifySuggestionSend();
    }, 1000);
  };

  const notifySuggestionSend = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(sentMessage, ToastAndroid.LONG);
    } else {
      Alert.alert(sentMessage);
    }
  };

  return {
    form,
    isFormFilled,
    onChangeFormField,
    onSendSuggestions,
  };
};
