import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {ActivityIndicator, MD2Colors, DataTable} from 'react-native-paper';

import {Product, SearchBar} from '../../components';
import useProducts from './hooks/useProducts';
import styles from './styles';

const Products = () => {
  const {
    isFetching,
    products,
    filterProducts,
    currentPage,
    numberOfPages,
    onPageChange,
    paginationLabel,
    from,
    to,
    listRef,
  } = useProducts();

  return (
    <SafeAreaView style={styles.container}>
      {isFetching ? (
        <ActivityIndicator animating={true} color={MD2Colors.purple900} />
      ) : (
        <>
          <SearchBar onChangeSearch={filterProducts} />
          <FlatList
            ref={listRef}
            data={products}
            renderItem={({item, index}) => (
              <Product product={item} index={index} from={from} to={to} />
            )}
          />
          <DataTable.Pagination
            page={currentPage}
            numberOfPages={numberOfPages}
            onPageChange={onPageChange}
            label={paginationLabel}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Products;
