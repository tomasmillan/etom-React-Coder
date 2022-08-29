let ok = true;

let promiseArray = (task) => {
  return new Promise((resolve, reject) => {
    if (ok) {
      setTimeout(() => {
        resolve(task);
      }, 2000);
    } else {
      reject("error");
    }
  });
};

export default promiseArray;
// promiseArray(products)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
