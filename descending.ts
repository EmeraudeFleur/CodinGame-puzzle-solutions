while (true) {
  let mountainIndex: number = 0;
  let height: number = 0;
  for (let i = 0; i < 8; i++) {
    const mountainH: number = parseInt(readline()); // represents the height of one mountain.
    if (height < mountainH) {
      height = mountainH;
      mountainIndex = i;
    }
  }
  console.log(mountainIndex); // The index of the mountain to fire on.
}
