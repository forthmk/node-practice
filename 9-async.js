
const age = 18;


async function myfunction(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(age);
        }, 2000);
    });
    const value = await promise;
    console.log(value);
}