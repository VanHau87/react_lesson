# Bất đồng bộ với Promise và Async Await

## Promise

```js
// async callback thông thường
setTimeout(() => {
  console.log("hello");
}, 1000);

// chuyển thành promise
const p = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

p()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finish!");
  });

console.log("Chạy trước tiên");
```

```js
// detail
const myPromise = new Promise((resolve, reject) => {
  //trạng thái của promise là pending

  let condition = false;

  if (condition) {
    const obj = {
      status: 200,
      message: "Thao tác thành công",
    };
    resolve(objFromResolve); // Thành công
    //resolve sẽ chuyển trạng thái của promise sang fulfilled. objFromResolve sẽ được truyền vào khối then
  } else {
    const obj = {
      status: 404,
      message: "Thao tác thất bại",
    };
    reject(objFromReject); // Thất bại
    //reject sẽ chuyển trạng thái của promise sang rejected. objFromReject sẽ được truyền vào khối catch để sử lý tiếp theo
  }
});
```

## Return trong then và catch

```js
const giatri = myPromise
  .then((response) => {
    // nếu là resolve, thì vào then và giá trị trong resolve trên promise sẽ được chuyển vào đây
    console.log("Success");
    console.log(response); //objFromResolve
    return 1;
  })
  .catch((response) => {
    // nếu là reject, thì vào catch và giá trị trong reject trên promise sẽ được chuyển vào đây
    console.log("Failure");
    console.log(response); //objFromReject
    return -1;
  });
//lưu ý: khi then và catch có return. Thì giá trị return là 1 Promise mới. Mặc dù return từ catch, nhưng trạng thái của Promise vẫn là fulfilled.
//cơ chế hoạt động: có lỗi, phục hồi từ lỗi
```

## Cơ chế chuyển lỗi

```js
//nếu không muốn sử lý lỗi ngay ở khối catch thì dùng throw để chuyển lỗi
myPromise
  .then((response) => {
    // ... code
  })
  .catch((error) => {
    console.log("First catch block");
    throw error; // Tiếp tục "chuyển" lỗi
  })
  .then((response) => {
    // Khối này sẽ không được thực thi nếu lỗi được "chuyển" từ khối .catch() trước đó
  })
  .catch((error) => {
    console.log("Second catch block");
    // Xử lý lỗi tại đây
  });
```

## Async / Await

- await chỉ sử dụng được trong một async function
- Chỉ sử dụng await với promise

```js
const p = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

const handle = async () => {
  try {
    const value = await p();
    console.log(value);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finish!");
  }
  console.log("Chạy cuối cùng");
};

handle();
```

## async/await + fetch

```js
async function fetchData(url) {
  try {
    let response = await fetch(url);
    // khi res có chứa 1 mã lỗi bất kỳ từ 400-599, thì response.ok sẽ được set thành false
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
      //dùng throw để ném ra 1 lỗi, lỗi này sẽ được sử lý ở khối catch. Ở đây chúng ta ném cho khối catch 1 message: HTTP error! Status: errorCode
    }
    let data = await response.json();
    return data;
  } catch (error) {
    //message bên trên sẽ được catch ở đây và trạng thái của Promise là rejected
    console.error("Fetch error:", error.message);
    throw error; // Ném lỗi này ra ngoài để có thể được xử lý ở cấp độ cao hơn nếu cần
  }
}

// Gọi hàm:
fetchData("https://api.example.com/data")
  .then((data) => {
    //nếu có lỗi xảy ra, khối then này sẽ không được thực thi
    console.log(data);
  })
  .catch((error) => {
    console.log("Error caught at higher level:", error);
  });
```

Dùng `Promise.all` để tối ưu performance

```js
// chuyển thành promise
const p = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });

// Thay vì dùng như thế này
// const handle = async () => {
//   const v1 = await p(1000) // tốn 1s
//   const v2 = await p(2000) // tốn 2s
//   const v3 = await p(3000) // tốn 3s
//   console.log('Finish') // tổng cộng tốn 6s
// }

// Thì dùng như thế này sẽ nhanh hơn
const handle = async () => {
  const [v1, v2, v3] = Promise.all(p(1000), p(2000), p(3000)); // Chỉ tốn 3s
  console.log("Finish"); // tổng cộng tốn 3s
};

handle();
```
