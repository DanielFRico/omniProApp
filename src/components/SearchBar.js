import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Searchbar} from 'react-native-paper';

const MySearchBar = ({onChangeSearch}) => {
  const {t} = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeText = query => {
    setSearchQuery(query);
    onChangeSearch(query);
  };

  return (
    <Searchbar
      placeholder={t('filterProduct')}
      onChangeText={onChangeText}
      value={searchQuery}
    />
  );
};

export default MySearchBar;
