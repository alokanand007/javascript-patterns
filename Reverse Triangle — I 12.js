let rows=5;
let print="";
for (let i = 1; i <= rows; i++) {
    for(let j=rows;j>=i;j--){
        print+=j;
    }
    print += "\n";
}
console.log(print);