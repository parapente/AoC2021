import * as fs from 'fs';

function draw_line(x1, y1, x2, y2, buffer)
{
    var dx, dy;
    if (x1 === x2) {
        dx = 0;
    } else {
        dx = parseInt((x2 - x1) / Math.abs(x2 - x1)); // 1 or -1
    }
    if (y1 === y2) {
        dy = 0;
    } else {
        dy = parseInt((y2 - y1) / Math.abs(y2 - y1)); // 1 or -1
    }
    var x, y;
    [x, y] = [x1, y1];
    while (x != x2 || y != y2) {
        var key = String(x)+","+String(y);
        if (buffer[key] === undefined) {
            buffer[key] = 1;
        } else {
            buffer[key] += 1;
        }
        x += dx;
        y += dy;
    }
    var key = String(x)+","+String(y);
    if (buffer[key] === undefined) {
        buffer[key] = 1;
    } else {
        buffer[key] += 1;
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
        draw_line(parseInt(x1), parseInt(y1), parseInt(x2), parseInt(y2), buffer);
    });
    var counter = 0;
    Object.keys(buffer).forEach(key => {
        if ((buffer[key]) > 1) {
            counter++;
        }
    });
    console.log(counter);
});