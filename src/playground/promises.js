const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Mai',
            age: 26
        });
        // reject('Somethig went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
            // reject('Somethig went wrong!');
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');