export let cart = JSON.parse ( localStorage.getItem (  'cart' ) ) || 
  [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
  }];


//-------------------------------------------------------------------------------
export function addToCart(productId){
  const index=cart.findIndex (product => product.productId===productId);

  if (index===-1) {
    cart.push({
      productId: productId,
      quantity: 1
    }) //cart.push
  } else cart[index].quantity++;

  saveToStorage();
}//addToCart



//-------------------------------------------------------------------------------
export function removeFromCart(productId){
  const index=cart.findIndex (product => product.productId===productId);
  cart.splice(index,1);

  saveToStorage();
}



//-------------------------------------------------------------------------------
function saveToStorage(){
  localStorage.setItem ( 'cart' , JSON.stringify ( cart ) ) ;
}