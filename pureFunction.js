// Pure Function
// Sempre retornará o mesmo resultado passando os mesmos valores.

function sum(a, b){
  return a+b;
}

console.log(sum(1, 2));

//A variável total não pertence ao escopo da função sum2 e será modificado de 0 para 3

let total = 0;
function sum2( a, b){
  total = a + b;
  return total;
}
sum2(1, 2)
console.log(total)


const full2ShoppingCart = {
  user: {
    id: 1,
    firstName: 'Danilo',
    middleName: 'Gomes'  
  },
  items: [
    {
      product: {
        id: 1, 
        name: 'banana'
      },
      quantity: 5
    },
    {  
      product: {
        id: 2, 
        name: 'maça'
      },
      quantity: 10
    }
  ]
}

const fullShoppingCart = {
  user: {
    id: 1,
    firstName: 'Danilo',
    middleName: 'Gomes'  
  },
  items: [
    {
      product: {
        id: 1, 
        name: 'banana'
      },
      quantity: 5
    },
    {  
      product: {
        id: 2, 
        name: 'maça'
      },
      quantity: 10
    }
  ]
}
//O array fullShoppingCart está sendo alterado.

function impureFormatShoppingCart(shoppingCart){
  shoppingCart.user.name = 
    `${shoppingCart.user.firstName} ${shoppingCart.user.middleName}`
  delete shoppingCart.user.firstName;
  delete shoppingCart.user.middleName;

  shoppingCart.items.forEach((item) => {
    { 
      item.product = { id: item.product.id}
    }
  })
  return shoppingCart
}

console.log(impureFormatShoppingCart(fullShoppingCart))
console.log(fullShoppingCart)


function pureFormatShoppingCart(shoppingCart){
  // const result = {
  //   user: {
  //     id: shoppingCart.user.id,
  //     name: `${shoppingCart.user.firstName} ${shoppingCart.user.middleName}`
  //   },
  //   items: shoppingCart.items.map(item => {
  //     return {
  //       ...item,
  //       product: {
  //         id: item.product.id
  //       },
  //     }
  //   })
  // } 
  const result = {};

  result.user = {
    id: shoppingCart.user.id,
    name: `${shoppingCart.user.firstName} ${shoppingCart.user.middleName}`
  },
  result.items = shoppingCart.items.map(item => {
    return {
      ...item,
      product: {
        id: item.product.id
      },
    }
  })
  
  return result
}

console.log(pureFormatShoppingCart(full2ShoppingCart))
console.log(full2ShoppingCart)

//Saída desejada

// const shoppingCart = {
//   user: {
//     id: 1,
//     name: 'Danilo Gomes'  
//   },
//   items: [
//     {
//       product: {
//         id: 1, 
//       },
//       quantity: 5
//     },
//     {  
//       product: {
//         id: 2, 
//       },
//       quantity: 10
//     }
//   ]
// }

