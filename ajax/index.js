// console.log("aku terpanggil");


// let dataBase = require("./database.json")
// console.log(dataBase, "===> INI VALUENYA");


// const xhr = new XMLHttpRequest()

// let tampData5 = []
// // Define a callback function
// xhr.onload = function() {
// //   console.log("ini kapan dijalanin");
//     // console.log(xhr.responseText, "==> Ini hasilnya");   
//     // if(xhr.status === 400 || xhr.status === 500) {
//     //     console.log("ini error woy");
        
//     // }
//     let cekData = xhr.responseText
//     let manipulateData = JSON.parse(cekData)
//     // console.log(cekData, "==> ini ");
//     for (let index = 0; index < 5; index++) {
//         // const element = array[index];
//         tampData5.push(manipulateData[index])
//     }
//     console.log(tampData5, "==> FINAL");
    
// }

// // Send a request
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.send();



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(result) {
//         let data = result.json() // ini jangan lupa dibuat json dulu
//         console.log(data, "==> INI YANG PROMISE");
        
//         return data //
//     })
//     .then(dataFinal => {
//         // console.log(dataFinal);
//         dataFinal.forEach(element => {
//             document.getElementById("list-user").innerHTML += `
//                 <li>
//                     ${element.name}
//                 </li>
//             `
//         });
//     })
//     .catch((err) => {
//         console.log(err, "==> INI ERROR"); 
//     });


async function requestApi() {
    try{ 
        let getData = await fetch("https://jsonplaceholder.typicode.com/users")
        let result = await getData.json()
        console.log(result);
    }catch(err) {
        console.log(err);
    }
}

requestApi()


/**
 * 1. ambil data di db
 * 2. request ke api luar
 */

// let xhr = new XMLHttpRequest()

// xhr.onload = function() {
//     let tampData = xhr.responseText
//     console.log(tampData);
// }

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
// xhr.send()