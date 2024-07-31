let rows=5;
let print="";
for (let i = 1; i <= rows; i++) {
    for(let j=6-i;j>=1;j--){
        print+=j;
        
    }
    print += "\n";
}
console.log(print);