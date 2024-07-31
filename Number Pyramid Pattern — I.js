let rows=5;
let print="";
for (let i = 1; i <= rows; i++) {
    for(let gap=1;gap<=rows - i;gap++){
        print+=" ";
    }
    for(let j=1;j<=2*i-1;j++){
        print+=j;

    }
    print += "\n";
}
console.log(print);