var result = [];
var a = 3;
var total = 0;

function foo(a) {
    for (var i = 0; i < 3; i++) {
        console.log(i, 'iii')
        result[i] = function () {
            console.log(total, i, 'total')
            total += i * a;
            console.log(total);
        }
    }
    console.log(i, 'iii87686')
}

foo(1);
result[0]();  // 3
result[1]();  // 6
result[2]();  // 9

