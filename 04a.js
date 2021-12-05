import * as fs from 'fs';

function calculate_score(board, number)
{
    var score = 0;
    board.forEach(line => {
        line.forEach(item => {
            if (item !== '-1') {
                score += parseInt(item);
            }
        });
    });
    console.log(score*parseInt(number))
}

function mark_number(boards, number)
{
    boards.forEach(board => {
        board.forEach(line => {
            line.forEach((item, index) => {
                if (item == number) {
                    line[index] = '-1';
                }
            });
        });
    });
}

function check_for_bingo(boards, number)
{
    boards.forEach(board => {
        board.forEach(line => {
            var marked = 0
            line.forEach(item => {
                if (item === '-1') {
                    marked++;
                }
            });
            if (marked === 5) { // bingo
                calculate_score(board, number);
                process.exit(0);
            }
        });
        board[0].forEach((item, index) => {
            var marked = 0;
            board.forEach(line => {
                if (line[index] === '-1') {
                    marked++;
                }
            });
            if (marked === 5) { // bingo
                calculate_score(board, number)
                process.exit(0);
            }
        });
    });
}

const filename = "04.dat";
fs.readFile(filename, (err, data) => {
    if (err) throw err;

    var board_data = data.toString().split('\n\n');
    var lottery = board_data[0];
    board_data = board_data.slice(1);
    
    var boards = [];
    board_data.forEach(board_section => {
        var board = [];
        board_section.split('\n').forEach(line => {
            var match = [...line.matchAll(/\d+/g)];
            if (match) {
                var board_line = match;
                board.push(board_line);
            }
        });
        boards.push(board);
    });
    
    lottery.split(',').forEach(number => {
        mark_number(boards, number);
        check_for_bingo(boards, number);
    });
});