// const dataUser = require("./dataUser.json")

const fs = require("fs")
// const dataUser = fs.readFileSync("./dataUser.json", "utf-8")
// console.log(dataUser, "==> INI YAA");

// let manipulateData = JSON.parse(dataUser)
// // console.log(dataUser, "==> INI DATANYA");
// manipulateData.forEach(el => {
//     console.log(el.first_name);
    
// })

const getDataUser = fs.readFile("./dataUser.json", "utf-8", function(err, data) {
    if (err) {
        console.log("ini error woy ga bisa");
    }
    console.log(data, "==> INI DATANYA");
})
