// 2. setTimeoutを使う
// console.log('111');

// setTimeout(() => {
//   console.log('setTimeoutの中');
// }, 1000);

// console.log('222');

// 3. Promiseを使う
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('promiseの中のsetTimeout');
//     resolve('何かしらのデータ');
//   }, 2000);
// });

// promise.then((data) => {
//   console.log('thenの中');
//   console.log('data : ', data);
// })


// 4. fetchを使う(APIを使って外部サービスとデータのやりとりを行う)

fetch('https://opentdb.com/api.php?amount=10')
  .then((response) => {
    console.log('response : ', response);
    return response.json();
  })
  .then((data) => {
    console.log('data : ', data);
  })


