const simplePromise = (condition) => {
  return new Promise((resolve, reject) => {
    if (condition) {
      resolve("Promise resolved sucessfully");
    } else {
      reject("Promise rejected");
    }
  });
};

simplePromise(null)
  .then((a) => {
    console.log(a);
  })
  .catch((error) => {
    console.log(error);
  });
