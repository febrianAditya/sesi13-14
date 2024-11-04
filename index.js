// function coba() {
//     console.log("ini function coba");
// }

// function handleRupiah(iniValueDariCalculate) {
//     console.log(`Rp. ${iniValueDariCalculate}`);

// }

// function calculate(value1, value2, callback) {
//     // console.log("==> in function pertama");
//     // callback()
//     // let result = value1 + value2
//     // callback() // ini titiknya
//     // callback()
//     // callback()
//     // coba()
//     // console.log("aku kepanggil juga");
//     let result = value1 + value2
//     // callback(result)
//     handleRupiah(result)
//     // return result
// }

// calculate(2000, 3000, function(iniHasilDariPenjumlahan) {
//     console.log(`Rp. ${iniHasilDariPenjumlahan}`)    
// }); // Rp. 5000

/**
 * Cara panggil function = di invoke ()
 */

let students = ["ari", "amjad", "febri"]

// ini yang looping biasa
// // for (lx
// function tangkapValue(iniValuenya) {
//     console.log(iniValuenya, "==> INI BISA BANGET");
    
// }


// function miripForEach(students, callback) {
//     for (let index = 0; index < students.length; index++) {
//         callback(students[index])
//     }
// }

// miripForEach(students, function(el) {
//     console.log(el, "==> ini yang forEach KW super");
    
// })


// students.forEach(function(el) {
//     console.log(el, "==> Ini result");
// })



/**
 * function belanja
 * 
 * 
 * Dia akan belanja terus jika uang cukup, tapi dibuatkan function callback
 */


function belanja(uang, namaBarang, hargaBarang, cb) {
    if (uang >= hargaBarang) {
        let uangKembali = uang - hargaBarang
        // console.log(`Berhasil beli ${namaBarang} dan sisa uang ${uangKembali}`);
        cb(uangKembali)
    }else {
        cb("Maaf uang and tidak cukup");
    }
}


// belanja(50000, "sabun cuci piring", 5000, function(sisaUang) {

//     belanja(sisaUang, "sabun mandi", 10000, function(sisaUangKedua) {

//         belanja(sisaUangKedua, "pasta gigi", 15000, function(sisaUangKetiga) {

//             belanja(sisaUangKedua, "beras", 50000, (hasil) => {
//                 console.log(hasil);
                
//             })
//         })
        
//     })
// })

belanja(50000, "sabun cuci piring", 5000, function(sisaUang) {

    belanja(sisaUang, "sabun mandi", 10000, function() {

    })

})



function belanjaDua(uang, namaBarang, hargaBarang) {
    return new Promise(function(resovle, reject) { // resolve itu success case, dan reject itu yang failed case
        if (uang >= hargaBarang) {
            let uangKembali = uang - hargaBarang
            console.log(`Berhasil beli ${namaBarang} dan sisa uang ${uangKembali}`);
            // cb(uangKembali)
            resovle(uangKembali) // ini akan ditangkap di .then
        }else {
            // cb("Maaf uang and tidak cukup");
            reject("Maaf uang and tidak cukup") // ini akan ditangkap d .catch
        }
    })
}


belanjaDua(50000, "sabun cuci piring", 5000)
    .then(sisaUang => {
        return belanjaDua(sisaUang, "sabun mandi", 80000)
    })
    .then(sisaUang => {
        return belanjaDua(sisaUang, "pasta gigi", 50000)
    })
    .catch(hasil => {
        console.log("ini belanja ketiga ", hasil);
    })
