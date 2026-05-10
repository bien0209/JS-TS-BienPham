

function tinhTongTien(a , b){
  const result = a * b;
  console.log(result);
  return result;
}
let tienThanhToan = tinhTongTien( 100 , 2);
console.log(tienThanhToan);

function checkAge(tuoi){
  return tuoi >= 18;
}
console.log(checkAge(20) );
console.log(checkAge(18));
console.log(checkAge(7));

function cleanPrice(rawString){
  if (!rawString){
    console.log("0")
    return 0;
  }
  const rawStringClean = rawString.replaceAll(".", "") . replaceAll("VND" , "") .trim(); ;
  console.log(rawStringClean);
  return rawStringClean;
}
cleanPrice("  1000.000.000 VND   ");
cleanPrice("150.000");
cleanPrice("");

const arrow = (a,b) => a + b ;
const tongTien = arrow(1 ,3 );
console.log(tongTien)

const sanPham = {
  ten : "iphone 17",
  gia : 300000,
  hienthiUI(){
    console.log(`${this.ten} , ${this.gia} VND`)
  },
}

// cách viết 1 hàm nhiều cách gọi 

//function guiThongbao(message , userID ){
//  if (typeof userID ===  'undefined' ){
 //   console.log(`${message}`)
//    return;
 // }
 // if(typeof userID === 'number' ){
 //   console.log(`${message} , ${userID}`)
 //   return
 // }
//console.log (" id kh hợp lệ ")
//}
//guiThongbao("deploy" , "ab")

// viết lại else if 
function guiThongbao(message , userID ){
  if (typeof userID ===  'undefined' ){
    console.log(`${message}`)
  }
   else if(typeof userID === 'number' ){
    console.log(`${message} , ${userID}`)
    
  }
  else {
    console.log("userID kh hợp lệ ")
  }
}
guiThongbao("deploy");
guiThongbao("deploy" , 123);
guiThongbao("deploy" , "ab")


const testRuns = [
  [
    "login smoke",
    { browser: "chromium", env: "staging" },
    "PASS",
   ],

   [
     "checkout payment",
     { browser: "firefox", env: "prod" },
     "FAIL",
   ],

  [
    "search product",
     { browser: "webkit", env: "staging" },
     "PASS",
   ],

  ["  ", { browser: "chromium", env: "dev" }, "PASS"],
 ]
function testBaobao(testRuns){
let invalid = 0;
let passed = [];
let failed = [];
 for(let test of testRuns) {
 const [rawName , {browser , env } , status] = test;
 const cleanRawname = rawName.trim();
 const browerName = browser.trim();
 const envName = env.trim();
 const stutasName = status.toUpperCase().trim();
 if (cleanRawname === ""){
  invalid++;
  continue;
 }
 if(status !== "PASS" && status !== "FAIL"){
  invalid++;
 }
 const report = `${cleanRawname} - ${browerName} - ${envName}`
 if ( stutasName === "PASS" ){
  passed.push(report);
 }
 else  {
  failed.push(report)
 }
 
}
return {
  totalValid : passed.length + failed.length,
  invalid:  invalid,
  passed: passed,
  failed: failed
}
}
console.log(testBaobao(testRuns))
