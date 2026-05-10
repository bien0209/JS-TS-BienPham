const loginOptions = {
    defaultRole: "guest",
    allowedRoles: ["admin", "tester", "viewer", "guest"],
    minPasswordLength: 8
};

const loginTestData = [
    {
        name: "Case 1 - Hợp lệ cơ bản",
        formInput: {
            username: "  Neko_Admin  ",
            password: "  12345678  ",
            role: " tester ",
            rememberMe: "yes",
            device: "  chrome-win11  "
        }
    },
    {
        name: "Case 2 - Role rỗng, phải dùng defaultRole",
        formInput: {
            username: "  guest_user  ",
            password: "  abcdefgh  ",
            role: "   ",
            rememberMe: "no",
            device: " firefox "
        }
    },
    {
        name: "Case 3 - Username rỗng",
        formInput: {
            username: "    ",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 4 - Username có khoảng trắng ở giữa",
        formInput: {
            username: "neko admin",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 5 - Password quá ngắn",
        formInput: {
            username: "valid_user",
            password: "123",
            role: "tester",
            rememberMe: true,
            device: "chrome"
        }
    },
    {
        name: "Case 6 - Role không hợp lệ",
        formInput: {
            username: "valid_user",
            password: "12345678",
            role: "manager",
            rememberMe: "no",
            device: "chrome"
        }
    },
    {
        name: "Case 7 - rememberMe là boolean true",
        formInput: {
            username: "admin01",
            password: "abcdefgh",
            role: "admin",
            rememberMe: true,
            device: "edge"
        }
    },
    {
        name: "Case 8 - rememberMe là chuỗi lạ",
        formInput: {
            username: "viewer01",
            password: "abcdefgh",
            role: "viewer",
            rememberMe: "maybe",
            device: "safari"
        }
    }
];
function taoPayloadDangNhap(formInput, options = {}){
    const {defaultRole = "guest" ,allowedRoles, minPasswordLength = 8 } = options;
    const {username , password , role , rememberMe , device } = formInput;
    const usernameClean = username.trim().toLowerCase();
    const passwordClean = password.trim();
    const roleClean = role.trim().toLowerCase();
    const deviceClean = device.trim();
    let isRemember;
    let rememberValue;

if (rememberMe === true) {
    rememberValue = true;
}
else if (rememberMe === "yes") {
    rememberValue = true;
}
else {
    rememberValue = false;
}

    const errors = [];
    if (usernameClean === ""){
        errors.push("username không đc rỗng")
    }
    if (usernameClean.includes(" ")){
        errors.push("username không được chứa khoảng trắng ở giữa")
    }
    if (passwordClean.length < minPasswordLength){
        errors.push("password kh hợp lệ")
    }
    if (!allowedRoles.includes(roleClean)){
        errors.push("role kh hợp lệ ")
    }

const isValid = errors.length === 0; 

return {
        isValid: isValid,

        payload: {
            username: usernameClean,
            password: passwordClean,
            role: roleClean,
            rememberMe: isRemember,
            device: deviceClean
        },

        errors: errors
    };

}



for (let testCase of loginTestData) {
    console.log("==============");
    console.log(testCase.name);

    console.log(
        taoPayloadDangNhap(testCase.formInput, loginOptions)
    );
}