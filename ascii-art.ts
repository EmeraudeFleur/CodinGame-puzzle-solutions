const L: number = parseInt(readline()); // +1 because of row space. view it as a charactor in the line
const H: number = parseInt(readline());
const T: string = readline(); //to print

for (let i = 0; i < H; i++) {
  // line by line display, traverse H times => each row
  const ROW: string = readline(); // all given letters and a question mark in ASCII art
  // console.log(ROW.substr(0,3)); // 'A' in ASCII art

  let charStr: string = ""; // all letters in one line
  //locate char
  let charIndex: number = 0;
  for (let j = 0; j < T.length; j++) {
    //find each letter to be printed => each row each char
    const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
    let char: string = T[j];
    if (char.toUpperCase() != char.toLowerCase()) {
      //is letter
      charIndex = alphabet.indexOf(char.toUpperCase()) * L; //E 16
    } else {
      // not letter
      charIndex = 26 * L;
    }
    charStr += ROW.substr(charIndex, L);
  }
  //print a line
  console.log(charStr);
}


//ref
const L: number = parseInt(readline())
const H: number = parseInt(readline())
const T: string = readline().toLowerCase()
for (let i = 0; i < H; i++) {
    const ROW: string = readline()
    let line = ""
    for (let j = 0;j < T.length; j++){
        var idx = "abcdefghijklmnopqrstuvwxyz".indexOf(T[j])
        if (idx==-1)idx=26
        line = line + ROW.slice(idx*L, idx*L+L)
    }    
    console.log(line)
}
