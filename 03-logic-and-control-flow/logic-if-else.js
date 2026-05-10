//BT nhỏ

let loginStatus = "locked";

//1. nếu loginStatus === 'sucess' -> in 'TEst pass: login thành công'

//2. nếu loginStatus  === 'locked' -> 'Tài khoản bị khóa'

//3. Các TH còn lại -> in 'Test fail: login thất bại'

if (loginStatus === 'sucess')
{
    console.log('Test pass: login thành công');
}


    else if (loginStatus === 'locked')
    {
    console.log('Tài khoản bị khóa');
}
    else {
        console.log('Test fail: login thất bại');
    }

let failedTests = 2;
let suiteStatus;
if (failedTests === 0){
   suiteStatus = "PASS";
}
else if (failedTests <= 2){
    suiteStatus = "WARMING";
}
else {
    suiteStatus = "FAIL";
}
console.log(suiteStatus);

let rawUserName = "    ";
if (rawUserName.trim()){
    console.log('hợp lệ');
}
else {
    console.log('nhập username')
}

//Dùng .trim() để làm sạch rawProjectName và rawEnvName.

let rawProjectName = "   Neko CRM   ";
let rawCleanProjectName = rawProjectName.trim();
let rawEnvName = "   ";
let rawCleanEnvName = rawEnvName.trim();


//Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
let environment;
if (rawCleanEnvName === ""){
    environment = "Deverlopment"
}
else {
    environment = rawCleanEnvName;
}
console.log(environment)

//Ép rawPassRate sang Number.

let rawPassRate = "82";
let rawNumberPassRate = Number(rawPassRate);

//Ép rawHasReport sang Boolean đúng cách.


let rawHasReport = "true";
let isRawReport = Boolean(rawHasReport);

//Tạo hasCriticalBug theo quy tắc:

let rawCriticalMessage = "   ";
let hasCriticalBug;
if (rawCriticalMessage == null ){
    hasCriticalBug = false
}
else if  (rawCriticalMessage.trim() == ""){
    hasCriticalBug = false
}
else {
    hasCriticalBug = true;
}
//Dùng if / else if để xếp hạng:
let comment;
if (rawNumberPassRate >= 95){
    comment =" EXCELLENT"
}
else if (rawNumberPassRate >= 80){
    comment = "GOOD"
}
else if (rawNumberPassRate >= 60){
    comment = "NEEDS IMPROVEMENT"
}
else {
    comment = "CRITICAL"
}
console.log(comment);

//Dùng switch/case để gán tên engine cho browserUsed:

let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"
let engine

switch(browserUsed){
    case "chrome":
        engine = "Chromium";
        break;
    case "edge ":
         engine = "Chromium";
        break;
    case "firefox":
        engine = "Gecko";
        break;
    case "safari":
        engine = "WebKit";
        break;
    default:
        engine = "UNKNOWN";

}
console.log(engine);

//Dùng toán tử 3 ngôi để tạo message cho report:

let hasReport = isRawReport ? "Có report" : "Chưa có report";
console.log(hasReport);


let isReadyToRelease = rawNumberPassRate >= 80 && !hasCriticalBug && isRawReport;
console.log(isReadyToRelease);

