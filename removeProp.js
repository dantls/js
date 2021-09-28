const objs = [
  {a: 213, b:344, c:21},
  {c: 223, a:314, b:111},
  {b: 66,  c:344, a:21}
]

const propToRemove = 'b';

function removeProp(propToRemove, objs){

  return objs.map(({[propToRemove]:_, ...rest})=>{

    return rest

  })

}

console.log(removeProp(propToRemove, objs))