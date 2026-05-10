let soLuongDon = 5;
for(let i = 1; i <= soLuongDon; i++){
let maDonHang = `Order ${i}`;
console.log(maDonHang);
}

let url = ["/login" , "/dashboard" , "/profile"];

for( let danhSachUrl of url ){
    console.log(`đang kiểm tra ${danhSachUrl}`);
}

let products =[
    {ten: "Iphone", gia: 200000},
    {ten: "airpod", gia: 30000},
    {ten: "macbook", gia: 10000,}
]

for( let product of products){
    for( let key in product){
        console.log(`${key} - ${product[key]}` );
    }
    console.log('---');
}

let sanPhams =[
    {ten: "Iphone", gia: true},
    {ten: "airpod", gia: false},
    {ten: "macbook", gia: true,}
]

for( let product of sanPhams){
    console.log(product);
  
        if (product.gia === false){
            console.log(`${product.ten}`);
            break;
        }
    }
for( let product of sanPhams){
    
  
        if (product.gia === false){
            //console.log(`${product.ten}`);
            continue;
        }
        console.log(`${product.ten}`);
    }
    
    let userInfor ={
        ten : "bien",
        email : "bien@123.com",
        password : "12345",
        role : " admin",

    }
    let field = ["password"]

    for(let infor in userInfor){
        if(field.includes(infor)){
            continue;
        }
        console.log(`${infor}-${userInfor[infor]}`)
    }


    let danhSachGia = [50000 , 1000000 , 120000 , 200000 , 300000]
    let danhSachVip = [];
    for(let sP of danhSachGia ){
        if (sP > 100000){
           danhSachVip.push(sP)
        }
        console.log("Danh sach vip :",  danhSachVip)
    }

    let apiResponse = {
    userId: 101,
    username: "neko_tester",
    email: null,
    isActive: "true",  // Bug: phải là boolean, không phải string
    phone: "",
    role: "admin"
};
let errorCount = 0;
for(let key in apiResponse){
    if (apiResponse[key] === null || apiResponse[key] === ""){
        console.log(`Cảnh báo ${key}`)
        errorCount++;
    }
}
let hasAcerrorCounttive = apiResponse.isActive;
if (typeof hasActive !== 'boolean'){
    console.log("sai kiểu")
    errorCount++;
}
console.log(`Tổng số lỗi tìm đc ${errorCount}`);

let testUrls = [
    { url: "/api/users", status: 200 },
    { url: "", status: null },
    { url: "/api/products", status: 200 },
    { url: "/api/orders", status: 500 },
    { url: "/api/reviews", status: 200 }
]
let countUrl = 0;
for (let keyUrl of testUrls ){
  if (keyUrl.url === ""){
    console.log("URl rỗng")
    continue;
  }
  console.log(`${keyUrl.url}`)
  if (keyUrl.status === 500){
    console.log("critical bug ")
    countUrl++;
    break;
  }
  console.log(`Pass : ${keyUrl.url}`)
  countUrl++;
  
  }


console.log(`Tổng URL đã test ${countUrl}`)