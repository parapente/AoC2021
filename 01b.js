import * as fs from 'fs';

const filename = "01.dat";
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    var buffer = [];
    var buffer_sum = 0;
    var previous_sum;
    var increased = 0;

    data.toString().split("\n").forEach(line => {
        buffer.push(parseInt(line));
        if (buffer.length >= 3) {
            if (buffer.length == 4)
                buffer.shift();
            buffer_sum = buffer.reduce((sum, item) => sum + item);
            if (previous_sum !== undefined && buffer_sum > previous_sum)
                increased++;
            previous_sum = buffer_sum;
        }
	});

    console.log(increased);
});
