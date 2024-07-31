let rows=4;
let mainValue=1;
let print="";
for (let i=1;i<=rows;i++){
    for(let j=1;j<=i;j++){
        print+=mainValue+"";
        mainValue++;

    }
    print+="\n";
}
console.log(print);