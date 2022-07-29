// const arr = [1, 2, [3, 4], 5, [6, [7]], 8];

// const flattenArr = (arr) => {
//   const result = [];
//   function innerFlatter(arr) {
//     for (let item of arr) {
//       if (Array.isArray(item)) {
//         innerFlatter(item);
//       } else {
//         result.push(item);
//       }
//     }
//   }
//   innerFlatter(arr);
//   return result;
// };

// const r = flattenArr(arr);
// console.log(r);

const user = {
  w: 125,
  a: function () {
    console.log(this.w);
  },
  b: () => {
    console.log(this.w);
  },
};

user.a();
user.b();

function a() {
  console.log(this);
  return function g() {
    console.log(this);
  };
}

a()();
