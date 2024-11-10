const res = [1,2,3,4,5,6,7,8,9]
function greater(a)
{
  return a > 5
}

function final(ar,fn){
  return ar.filter(fn)


}

console.log(final(res,greater))