import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, padding: 10},
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {textAlign: 'center'},
  input: {backgroundColor: 'white', marginBottom: 10},
  suggestionsInput: {backgroundColor: 'white', height: 100},
  sendButton: {alignSelf: 'flex-end'},
});
