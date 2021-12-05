import * as fs from 'fs';

function filter_data(testdata, index, element)
{
    var ones = 0;
    var zeros = 0;
    var common = "";

    testdata.forEach(function(data) {
        if (data[index] == '0') {
            zeros++;
        } else {
            ones++;
        }
    });
    if (element === 'O2') {
        if (ones >= zeros) {
            common = '1';
        } else {
            common = '0';
        }
    } else {
        if (ones < zeros) {
            common = '1';
        } else {
            common = '0';
        }
    }

    return testdata.filter(value => value[index] === common);
}

const filename = "03.dat";
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    // Get O2 scrubber rating
    var index = 0;
    var testdata = data.toString().split("\n");
    testdata.pop(); // remove last empty line
    while (testdata.length > 1) {
        testdata = filter_data(testdata, index, 'O2');
        index++;
    }
    var O2_rating = testdata[0];

    // Get CO2 scrubber rating
    testdata = data.toString().split("\n");
    index = 0;
    while (testdata.length > 1) {
        testdata = filter_data(testdata, index, 'CO2');
        index++;
    }
    var CO2_rating = testdata[0];
    console.log(parseInt(O2_rating, 2)*parseInt(CO2_rating,2))
});
