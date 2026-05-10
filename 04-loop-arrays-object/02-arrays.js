

//1. In ra tổng số sản phẩm

// 2. In ra sản phẩm đầu tiên

//3. In ra tên sản phẩm cuối cùng

//4. thêm 1 cái lót chuột vào cuối giỏ hàng
let gioHang = [

  "Bàn phím cơ",

  "Chuột gamin",

  "Màn hình 27 inch",

  "Tai nghe bluetooth",

];

console.log(gioHang.length);
console.log(gioHang[0]);
console.log(gioHang[gioHang.length - 1]);
gioHang.push("chuột");
console.log(gioHang);


let apiResponse = {

  userId: 9999,

  userName: "neko_auto",

  role: "admin",

  isActive: "yes",

};

//Dùng Objet.keys để đếm xem API trả về bao nhiêu trường

//Dùng Objet.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"

// kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof ) Nếu sai kiểu, in ra cảnh báo

// Dùng Object.values + includes đeer kieerm tra xem co gai tri nao la "admin"

console.log(Object.keys(apiResponse).length);
console.log(Object.hasOwn(apiResponse , "userId"));
console.log(Object.hasOwn(apiResponse , "userName"));
console.log(Object.hasOwn(apiResponse , "role"));
let checkValue = apiResponse.role;
if( typeof checkValue !== 'boolean' ){
    console.log("không phải kiểu boolean ")
}
let hasAdmin = Object.values(apiResponse);
console.log(hasAdmin);
console.log(hasAdmin.includes('admin'));