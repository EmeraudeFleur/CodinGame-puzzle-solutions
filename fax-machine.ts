const t: number[] = T.split(" ").map((n: string) => parseInt(n));

let charArr: string = "";
let star: string = "*";
let space: string = " ";

//put black and white in one line by aligning together the third numbers
for (let i = 0; i < t.length; i++) {
  if (i % 2 === 0) {
    //even '*' i= 0, 2, 4
    charArr += star.repeat(t[i]);
  } else {
    //odd ' ' i= 1,3,5
    charArr += space.repeat(t[i]);
  }
}
//then cut it into multiple lines.
for (let i = 0, j = charArr.length; i < j; i += W) {
  var line = charArr.slice(i, i + W);
  console.log(`|${line}|`);
}

//ref
const W: number = parseInt(readline());
const H: number = parseInt(readline());
const T: number[] = readline()
  .split(" ")
  .map((_) => parseInt(_));
const tab: string[] = ["*", " "];
let a = 0;
let rep = "";

T.forEach((t) => {
  //Array(num) use spread syntax to create numbers of elements, replace with '*'/' ', then join to a string
  rep += [...Array(t)].map((_) => tab[a]).join("");
  //学习切换 奇偶性
  a = (a + 1) % 2;
});
//join method creates and returns a new string by concatenating all of the elements in an array
// var a = ['Wind', 'Water', 'Fire'];
// a.join();      // 'Wind,Water,Fire'
// a.join(', ');  // 'Wind, Water, Fire'
// a.join(' + '); // 'Wind + Water + Fire'
// a.join('');    // 'WindWaterFire'

for (let i = 0; i < H; i++)
  //学习substr(start, length) 截断方法 substr(i*W, W)
  console.log("|" + rep.substr(i * W, W) + "|");

//ref
const W = parseInt(readline());
const H = parseInt(readline());
const inputs = readline().split(" ");
let black = true;
let output = "";
for (let i = 0; i < inputs.length; ++i) {
  output += (black ? "*" : " ").repeat(parseInt(inputs[i]));
  black = !black;
}
for (let y = 0, offset = 0; y < H; ++y, offset += W)
  console.log("|" + output.substr(offset, W) + "|");
