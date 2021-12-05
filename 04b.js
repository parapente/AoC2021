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
    return score*parseInt(number);
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

function check_for_bingo(boards, number, wins)
{
    var already_won = wins.map(item => item[0]);
    boards.forEach((board, board_index) => {
        if (!(already_won.includes(board_index))) {
            board.forEach(line => {
                var marked = 0
                line.forEach(item => {
                    if (item === '-1') {
                        marked++;
                    }
                });
                if (marked === 5) { // bingo
                    var score = calculate_score(board, number);
                    wins.push([board_index,score]);
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
                    var score = calculate_score(board, number);
                    wins.push([board_index,score]);
                }
            });    
        }
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
    
    var wins = [];
    lottery.split(',').forEach(number => {
        mark_number(boards, number);
        check_for_bingo(boards, number, wins);
    });
    console.log(wins[wins.length - 1][1])
});