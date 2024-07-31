let r = 5;
let print = "";
for (let i = 1; i <= r; i++) {
   for (let gap = 1; gap <= r - i; gap++) {
      print += " ";
   }
   for (let j = 1; j <= i; j++) {
      print += "*";
   }
   print += "\n";
}
console.log(print);