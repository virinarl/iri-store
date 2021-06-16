import products from "../data/infoProductos";

const ItemBySale = (onSale) =>
  products.find((product) => product.oferta === onSale);

const getProducts = () => products;

export { ItemBySale, getProducts };
