import * as fs from 'fs';

const filename = "02.dat";
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    var x = 0;
    var y = 0;

    data.toString().split("\n").forEach(command => {
        var op = command.split(" ");
		if (op[0] === "forward") {
            x += parseInt(op[1]);
        }
        else if (op[0] === "down") {
            y += parseInt(op[1]);
        }
        else if (op[0] === "up") {
            y -= parseInt(op[1]);
        }
	});

    console.log(x*y);
});
