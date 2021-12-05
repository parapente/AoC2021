import * as fs from 'fs';

const filename = "03.dat";
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    var number_len = /(\d+)/.exec(data.toString()).at(0).length;
    var zeros = [];
    var ones = [];
    for (var i = 0; i < number_len; i++) {
        zeros.push(0);
        ones.push(0);
    }

    var gamma = "";
    var epsilon = "";

    data.toString().split("\n").forEach(number => {
        for (var i = 0; i < number.length; i++) {
            if (number[i] === '0') {
                zeros[i]++;
            } else {
                ones[i]++;
            }
        }
    });

    for (var i = 0; i < number_len; i++) {
        if (zeros[i] > ones[i]) {
            gamma += "0";
            epsilon += "1";
        }
        else {
            gamma += "1";
            epsilon += "0";
        }
    }
    console.log(parseInt(gamma, 2)*parseInt(epsilon,2));
});
