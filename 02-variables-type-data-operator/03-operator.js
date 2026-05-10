let userAge = 20;

let passwordInput = "Neko1234";

let isTermAccepted = true;

let isAgeVaild = userAge >= 18;
console.log(isAgeVaild);
let isPasswordValid = passwordInput.length >= 8;
console.log(isPasswordValid);
let isRegister = isAgeVaild && passwordInput && isTermAccepted;
console.log(isRegister);

let i = 3;
let resultPostFix = i * 2;
i++;
console.log(resultPostFix);
console.log(i)

// Bài tập

//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên

let rawAge = " 25 tuổi";

let rawisVIP = "true";

let rawTicketPrice = "  500.000 đ ";

//yêu cầu

// 1. làm sạch và ép kiểu

// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên

// 3. in kết quả
let cleanRawAge = parseInt(rawAge);
let isValidAge = cleanRawAge >= 18;
let isDiscount = cleanRawAge && rawisVIP; 
console.log(isDiscount);
let cleanRawTicketPrice = rawTicketPrice.trim().replaceAll('.', '').replaceAll('đ','');
let discount = 0.3;
let priceTicket = cleanRawTicketPrice * discount;
let finalPrice = cleanRawTicketPrice - priceTicket;
console.log(`giá sau giảm ${finalPrice}`);