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


function formatColorsAndSizes(items){
 return items.reduce((acc, item)=>{
    const [color, size] = item.split('-');
    acc[color] = acc[color] || {} 
    //acc[color][size] = (acc[color][size]||0) + 1
    acc[color][size] = acc[color][size] || 0
    acc[color][size] += 1
    return acc
  },{})
  

}

console.log(formatColorsAndSizes(wrongDataFormat))
