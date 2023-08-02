export const cart = [];



//-------------------------------------------------------------------------------
export function addToCart(productId){
  const index=cart.findIndex (product => product.productId===productId);

  if (index===-1) {
    cart.push({
      productId: productId,
      quantity: 1
    }) //cart.push
  } else cart[index].quantity++;
}//addToCart



//-------------------------------------------------------------------------------
export function updateCartQuantity(){
  const cartQuantity=cart.reduce ( (cartQuantity , item) => cartQuantity + item.quantity , 0 ) ;
    document.querySelector('.js-cart-quantity').innerHTML= cartQuantity;
  } //updateCartQuantity