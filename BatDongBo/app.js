let idTimeout;

const debounce = (func, delay) => {
  //delete prev id
  clearTimeout(idTimeout);
  // set new id
  idTimeout = setTimeout(() => {
    func();
  }, delay);
};
const inputEl = document.querySelector("#search");
const logout = (el) => {
  const value = el.target.value;
  console.log(value);
};

inputEl.addEventListener("input", (e) => debounce(() => logout(e), 300));

//promise
const myPromise = new Promise((resolve, reject) => {
  //trạng thái của promise là pending

  let condition = true;

  if (condition) {
    const obj = {
      status: 200,
      message: "Thao tác thành công",
    };
    resolve(obj); // Thành công
    //resolve sẽ chuyển trạng thái của promise sang fulfilled
  } else {
    const obj = {
      status: 404,
      message: "Thao tác thất bại",
    };
    reject(obj); // Thất bại
    //reject sẽ chuyển trạng thái của promise sang rejected
  }
});

myPromise
  .then((response) => {
    // nếu là resolve, thì vào then và giá trị trong resolve trên promise sẽ được chuyển vào đây
    console.log("Success");
    console.log(response);
  })
  .catch((response) => {
    // nếu là reject, thì vào catch và giá trị trong reject trên promise sẽ được chuyển vào đây
    console.log("Failure");
    console.log(response);
  });

/**
 * Async / Await
 * * await chỉ sử dụng được trong một async function
 * * Chỉ sử dụng await với promise
 */
/*
const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Loiiiii");
    }, 0);
  });

(async () => {
  try {
    const value = await p2();
    console.log(value);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("Finally");
  }
})();
*/
