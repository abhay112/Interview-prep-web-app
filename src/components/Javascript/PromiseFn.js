let p1 = new Promise((res,rej)=>{
    res("promise 1 resolve");
})
let p2 = new Promise((res,rejected)=>{
    rejected("promise 2 rejected");
})
let p3 = new Promise((res,rej)=>{
    res("promise 3 resolve");
})
Promise.all([p1,p2,p3]).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}); 
Promise.race([p1,p2,p3]).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}); 
// Promise.all
// if any rejected then it will not go further  like suppose
//  p2 is rejected then it stopped on p2 and return rejected 
// as in catch block
// Promise.race
// promise race will return what calculated first it may be 
// rejected or resolve value
Promise.allSettled([p1,p2,p3]).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}); 


// it show every promise value with one key added in this as status
//[
//     { status: 'fulfilled', value: 'promise 1 resolve' },
//     { status: 'rejected', reason: 'promise 2 rejected' },
//     { status: 'fulfilled', value: 'promise 3 resolve' }
//   ]

