import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  const loadProduct = await fetch("products.json");
  const product = await loadProduct.json();

  const storedCard = getShoppingCart();
  const saveCard = [];
  for (const id in storedCard) {
    const addedProduct = product.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCard[id];
      addedProduct.quantity = quantity;
      saveCard.push(addedProduct);
    }
  }
  return saveCard;
};
export default cartProductLoader;
