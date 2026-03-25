// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


//Reference (non primitive) : Arrays, Objects, Functions
 
const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name : "Gaurav",
    age : 22,

}
const myFunction = function(){
    console.log("hello world");

}
console.log(typeof bigNumber); //typeof is used to find out the datatype of any obj;
//ytpeof value of given datatype = Undefined --> "undefined" , Null -->"Object" , 
//boolean -->"boolean", Number--> "number", String--> "string"  object(native and does not implement[[Call]])--->"object",
//object(native or host and does implement [[Call]])-->"function", object(native and does not implement[[Call]])-->"implementation-defined except may not be "undefined","boolean", "number",or "string".