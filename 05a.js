import * as fs from 'fs';

function draw_line(x1, y1, x2, y2, buffer)
{
    if (x1 === x2) {
        if (y1 > y2) {
            [y1, y2] = [y2, y1];
        }
        while (y1 <= y2) {
            var key = String(x1)+","+String(y1);
            if (buffer[key] === undefined) {
                buffer[key] = 1;
            } else {
                buffer[key] += 1;
            }
            y1++;
        }
    }
    if (y1 === y2) {
        if (x1 > x2) {
            [x1, x2] = [x2, x1];
        }
        while (x1 <= x2) {
            var key = String(x1)+","+String(y1);
            if (buffer[key] === undefined) {
                buffer[key] = 1;
            } else {
                buffer[key] += 1;
            }
            x1++;
        }
    }
}

const filename = "05.dat";
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    var lines = data.toString().split('\n');
    lines.pop();

    var buffer = {};
    lines.forEach(line => {
        var pairs = line.split(' -> ');
        var x1, y1;
        var x2, y2;
        [x1, y1] = pairs[0].split(',');
        [x2, y2] = pairs[1].split(',');
        if (x1 === x2 || y1 === y2) {
            draw_line(parseInt(x1), parseInt(y1), parseInt(x2), parseInt(y2), buffer);
        }
    });
    var counter = 0;
    Object.keys(buffer).forEach(key => {
        if ((buffer[key]) > 1) {
            counter++;
        }
    });
    console.log(counter);
});