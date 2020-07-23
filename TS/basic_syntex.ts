var str = "hello"
var fun = (x:string) =>{
    let str1 = "";
    for (var i = x.length;i>0;i--){
        str1 += x[i - 1];
    }
    return str1;
}
console.log(fun(str));

/*var arr = [1,2,3,4,5,6]
var fun = (x:number[]) => {
    let temp = [];
    for (var i = x.length; i>0; i--){
        temp.push(x[i - 1]);
    }
    return temp;
}

console.log(fun(arr));*/



/*var fn = (x:any) =>
typeof x == "string" ? console.log("String"):typeof x == "number" ? console.log("Number"):console.log("Other");

fn("132");
fn(123);*/

