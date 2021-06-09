import products from "../data/infoProductos";

const ItemBySale = (onSale) =>
  products.find((product) => product.oferta === onSale);

export { ItemBySale };
