const getProductsService = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const jsonResponse = await response.json();
  return jsonResponse;
};

export {getProductsService};
