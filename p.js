let rows=5;
let print="";
let rowEnd = 3
for (let i=1;i<=rows;i++){
    for (let j=1;j<=5;j++){
        if(j == 1 ||( i == rowEnd || i==1 || j == 5) && i <= rowEnd )print+="*"
        else{
            print+=" ";
        }
    }
    print+="\n";
}
console.log(print);