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

  let condition = false;

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

const giatri = myPromise
  .then((response) => {
    // nếu là resolve, thì vào then và giá trị trong resolve trên promise sẽ được chuyển vào đây
    console.log("Success");
    console.log(response);
    return 1;
  })
  .catch((response) => {
    // nếu là reject, thì vào catch và giá trị trong reject trên promise sẽ được chuyển vào đây
    console.log("Failure");
    console.log(response);
    return -1;
  });
/**
 * cả khối then và catch điều có thể return
 * giá trị này cũng là 1 Promise, nên để lấy được cần phải dùng thẹm 1 khối then tiếp theo
 * và lưu ý là nó luôn luôn nhảy vào khối then, trạng thái của promise là fulfilled
 */
giatri
  .then((res) => console.log("khối then: ", res))
  .catch((res) => console.log("khối catch: ", res));

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
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
    return error.message;
    // Có thể chuyển lỗi hoặc xử lý nó tại đây
  }
}

// Gọi hàm:
fetchData("https://api.example.com/data")
  .then((data) => {
    console.log("in then block");
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
setTimeout(() => {
  console.log("flow keeping working");
}, 3000);
