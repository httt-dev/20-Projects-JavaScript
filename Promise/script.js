// promise co 3 trang thai
//  1. pending
//  2. fulfilled ( khi resolve duoc goi)
//  3. Reject ( khi reject duoc goi)

var promise = new Promise(
    // executor function duoc goi ngay khi khoi tao doi tuong
    // nhan vao 2 ham , xu ky khi thanh cong va that bai
    // khi thanh cong thi se goi resolce()
    // khi that bai thi goi reject()
    // phai goi 1 trong 2 ham thanh cong / that bai
    function (resolve, reject) {
        // logic

        // call resolve() khi thanh cong
        resolve('data');
        // call reject() khi that bai

        reject('Co loi xay ra');
    }
);

// suu dung promise
// ca 3 ham deu nhan callbacl function
promise
    .then(function (data) {
        // duoc goi resolve duoc goi
        console.log(data);
        // return 1; // tra data cho then tiep theo

        // neu tai function nay khong tra ve 1 promise thi se chay ngay then tiep theo
        // tuy nhien neu tra ve 1 promise thi then tiep thep phai cho cho promise thuc hien xong

        return new Promise(function (resolve) {
            // setTimeout(resolve, 3000);
            setTimeout(function () {
                resolve([1, 2, 3]);
            }, 3000);
        });
    })
    .then(function (data) {
        // duoc goi resolve duoc goi
        console.log(data);
        return 2;
    })
    .then(function (data) {
        // duoc goi resolve duoc goi
        console.log(data);
        return 3;
    })
    .catch(function (err) {
        // duoc goi khi reject duoc goi
        console.log(err);
    })
    .finally(function () {
        // duoc goi khi resolve hoac reject duoc goi
    });

// ham so sleep ms : su dung Promise
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
// in ra 1,2,3.... sau moi giay
sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000);
    })
    .then(function () {
        console.log(2);
        return sleep(1000);
    })

    .then(function () {
        console.log(3);
        return sleep(1000);
    });
