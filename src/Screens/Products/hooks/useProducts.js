import {useState, useEffect, useRef} from 'react';
import {getProductsService} from '../../../api/services';

const itemsPerPage = 5;

export default () => {
  const [isFetching, setIsFetching] = useState(false);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const listRef = useRef(null);
  const from = currentPage * itemsPerPage;
  const to = (currentPage + 1) * itemsPerPage;
  const paginationLabel = `${from + 1}-${to} of ${products.length}`;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const getProducts = async () => {
      setIsFetching(true);
      try {
        const response = await getProductsService();
        setProducts(response);
        setOriginalProducts(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };
    getProducts();
  }, []);

  const filterProducts = filterWord => {
    const filteredProducts = originalProducts.filter(product => {
      const includes = product.title
        .toLowerCase()
        .includes(filterWord.toLowerCase());
      return includes;
    });
    setProducts(filteredProducts);
    setCurrentPage(0);
  };

  const scrollListToTop = () => {
    listRef.current.scrollToIndex({index: 0, animated: true});
  };

  const onPageChange = page => {
    setCurrentPage(page);
    scrollListToTop();
  };

  return {
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
  };
};
