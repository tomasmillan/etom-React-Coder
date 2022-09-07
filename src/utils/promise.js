let ok = true;

let promiseArray = (task) => {
  return new Promise((resolve, reject) => {
    if (ok) {
      setTimeout(() => {
        resolve(task);
      }, 600);
    } else {
      reject("error");
    }
  });
};

export default promiseArray;
