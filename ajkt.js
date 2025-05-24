// Hard work === draH krow


const reverse = (s) =>{
    const rev = [];
    const arr = s.split(" ")
    for(let i in arr){
        rev.push((arr[i].split("").reverse().join('')))
        
    }
 return rev.join(" ")
}



console.log(reverse("he i"))