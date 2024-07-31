let rows=5;
let print="";
for (let i = 0; i <= rows; i++) {
for(let gap=1;gap<=rows - i;gap++){
    print=print+" ";
}
for(j=1;j<=2*i - 1;j++){
    print=print+"*";
}
print=print+"\n";
}
console.log(print);