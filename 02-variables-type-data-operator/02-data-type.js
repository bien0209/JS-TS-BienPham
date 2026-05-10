const message = 'Login Error';
console.log(message.length);
console.log(message.toLowerCase());
console.log(message.includes("Login"));

let ngayHomQua = '28/03/2026'
console.log(ngayHomQua.replaceAll('/', ''));

let status = "404 error : page not found";
let possition = status.indexOf(":");
console.log(possition);
console.log(status.substring(11));

let rawText = "    Order ID: ORD-2026-123 | Status: Success   ";
let rawText2 = rawText.trim();
console.log(rawText2)
let chieuDai = rawText2.length;
console.log(chieuDai);
let timVitri = rawText2.indexOf(":");
console.log(timVitri);
let timVitriCuoi = rawText2.indexOf("|");
console.log(timVitriCuoi);
let getText = rawText2.substring(timVitri + 2,timVitriCuoi);
console.log(getText.length);

let oderId = 5;
let newOderId = String(oderId);
let maSanPham = newOderId.padStart(5,'0');      
console.log(`SP-${maSanPham}`);

let giaGoc = "1.000.000 đ";
let result = giaGoc.replaceAll('.' , '') .replaceAll('đ','');
console.log(result);
let phanTramGiang = "20%";
let giaMoi = "800.000 đ"
let acPrice = giaMoi.replace('.', '') .replace('đ','');
console.log(acPrice);
let exPrice = result * ( 100 - 20) / 100;
console.log(exPrice);

let tenSanPham = "   macbook pro m3   ";
let giaGoc2 = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

let productName = tenSanPham.trim();
console.log(productName.toUpperCase());
let firstLo = giaGoc2.indexOf(':');
let lastLo = giaGoc2.indexOf('v');
let result2 = giaGoc2.substring(firstLo + 2 , lastLo - 1);
let finalResult = result2.replaceAll(',' , '');
console.log(finalResult);
let firstNumberOfProduct = soLuong.indexOf(':');
let lastNumberofProduct = soLuong.indexOf('m');
let numberOfProduct = soLuong.substring(firstNumberOfProduct + 2 ,lastNumberofProduct - 1);
console.log(numberOfProduct);

let totalMoney = finalResult * numberOfProduct;
console.log(totalMoney);


let discountStart = maGiamGia.indexOf(':');
let discountEnd = maGiamGia.indexOf('OFF');
let discountPrice = maGiamGia.substring(discountStart + 2 , discountEnd - 1);
console.log(discountPrice);

let changeDiscount = discountPrice.replace('%', '') / 100;

let moneyOfDiscount = totalMoney * changeDiscount;
let totalBill = totalMoney - moneyOfDiscount;
console.log(totalBill.toLocaleString('vi-VN'));

let amount = 9.5;
console.log(amount.toFixed('2').padStart(6,'0'));