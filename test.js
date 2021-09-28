const orders = [
  {username: 'Danilo Gomes', status: 'active'},
  {username: 'Danilo Silva', status: 'inactive'},
  {username: 'Danilo G', status: 'pending'},
  {username: 'Fran G', status: 'pending'},
  {username: 'Fran de Jesus', status: 'pending'},
  {username: 'Danilo G. da Silva', status: 'cancelled'},
  {username: 'Danilo S', status: 'shipped'},
]


function statusOrder(orders){
  return orders.reduce((acc, order)=>{

    acc[order.status] = (acc[order.status] || 0) + 1

    return acc 
  },{})
}

console.log(statusOrder(orders))


const wrongDataFormat = [
  'preto-M',
  'preto-PP',
  'preto-M',
  'preto-M',
   'preto-G',
   'preto-GG',
   'preto-PP',
   'branco-PP',
   'vermelho-M', 
   'azul-XG',
   'azul-P',
   'azul-P',
   'azul-XG',
   'azul-M'
  ]
 
function quantityColors(wrongDataFormat){
  return wrongDataFormat.reduce((acc, item)=>{
    const [color, size] = item.split('-');

    acc[size] = acc[size] || {};
    acc[size][color] = (acc[size][color] || 0 ) + 1; 


    return acc 

  }, {})
}

console.log(quantityColors(wrongDataFormat))