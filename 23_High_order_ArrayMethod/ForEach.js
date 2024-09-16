//FOREACH method

const coding = ["js", "ruby", "java", "cpp"];

1; // coding.forEach(function (value) {                // foreach function name not mention becz it is call back function name not put thois function
//                                                 // the funtion parameter name mention any name value,item  .....
//   console.log(value);
// });

2; // coding.forEach((item) => {
//   console.log(item);
// });

3; // function printMe(item){
//     console.log(item);

// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
