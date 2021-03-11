//高阶函数使用
//1.filter过滤后结果为true返回n，结果为false丢掉n

// const nums = [10,204,40,50,304,23,442,65];
// let newNums = nums.filter(function(n){
//   return n>100;
// })
// console.log(newNums);
//
// //2.map函数的的使用
// let newNums1 = newNums.map(function(n){
//   return n*2;
// })
// console.log(newNums1);
//
// //3.reduce函数的的使用
// //作用：对数组中所有的内容进行汇总
// let total = newNums1.reduce(function(preValue,n){
//   return preValue + n;
// },0)
// console.log(total);

//一行代码写出
// const nums = [10,204,40,50,304,23,442,65];
// let total = nums.filter(function(n){
//   return n<100
// }).map(function(n){
//   return n*2
// }).reduce(function(preValue,n){
//   return preValue+n
// },0)
// console.log(total);

//再简化
const nums = [10,204,40,50,304,23,442,65];
let total = nums.filter(n=>n<100).map(n=>n*2).reduce((preValue,n)=>preValue+n);
console.log(total);