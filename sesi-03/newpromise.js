setTimeout(() => {
    console.log("Tick");
}, 1000);

//Membuat ptomise baru
const doSomething = function(){
    return new Promise((resolve, reject) =>  {
        
    })
};
//Memanggil Promise dan mengirimkan a Promise as return
let doIt =doSomething()
//Menunggu untuk promise menyelesaikan
doIt.then(rsponse => {

})
// ... atau tidak terselesaikan
doIt.catch(error =>{

})
const setTimeoutPromise = (duration) => 
new Promise((resolve, reject) => {
    setTimeout(resolve,duration);
});