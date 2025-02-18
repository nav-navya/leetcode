const twoPromise = async (promise1,promise2) =>{
  const [result1 , result2]= await Promise.all([promise1, promise2 ])
  return result1+result2

}


const promise1 = new Promise((res,rej) => res(10));
const promise2 = new Promise((res,rej) => res(20));

twoPromise(promise1, promise2).then(console.log); 
