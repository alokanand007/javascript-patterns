let rows=5;
let print="";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= 6-i; j++) {
        print +="A";
}
print+="\n";
}
print+="\n";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <=i ; j++) {
        print +="B";
}
print+="\n";
}
console.log(print);