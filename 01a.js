import * as fs from 'fs';

const filename = "01.dat";
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    var inserted = 0;
    var prev;

    data.toString().split("\n").forEach(line => {
		if ((prev !== undefined) && (parseInt(line) > prev))
			inserted++;
		prev = parseInt(line);
	});

    console.log(inserted);
});
