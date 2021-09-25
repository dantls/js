const orders = [
  {username: 'Danilo Gomes', status: 'active'},
  {username: 'Danilo Silva', status: 'inactive'},
  {username: 'Danilo G', status: 'pending'},
  {username: 'Fran G', status: 'pending'},
  {username: 'Fran de Jesus', status: 'pending'},
  {username: 'Danilo G. da Silva', status: 'cancelled'},
  {username: 'Danilo S', status: 'shipped'},
]


// function countStatus(orders){
//   return orders.reduce((acc, order) => {
//     const obj = {
//       ...acc,
//       [order.status]:(acc[order.status] || 0) + 1 
  
//     }
//     return obj
//   },{})
// }



function countStatus(orders){
  return orders.reduce((acc, {status}) => {
    acc[status] = (acc[status] || 0) + 1;
   
    return acc 
  },{})
}
console.log(countStatus(orders))


















const getStatusCount = (orders) => {
  return orders.reduce((acc, {status}) => {
    const obj = {
      ...acc,
      [status]: (acc[status] || 0 ) + 1
    }
    return obj
  },{})
}


console.log(getStatusCount(orders));