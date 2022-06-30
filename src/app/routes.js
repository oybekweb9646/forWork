export const host = process.env.REACT_APP_API_URL;

const routes = {
  getProducts: [host, 'api/product?limit=6'].join('/'),
  getProductsWithFilter: (endpoint) => [host, `api/product${endpoint}`].join('/'),
  getCategory: (endpoint) => [host, `api/category`].join('/'),
  getProduct: (endpoint) => [host, `api/product/${endpoint}`].join('/'),
};

export default routes;
