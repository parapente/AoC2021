#!/usr/bin/python3

import re

def calculate_score(board: list[list[str]], number: str) -> None:
    print(board)
    score = 0
    for line in board:
        for item in line:
            if item != '-1':
                score += int(item)
    print(score*int(number))

def mark_number(boards: list[list[list[str]]], number: str) -> None:
    for board in boards:
        for line in board:
            for index, item in enumerate(line):
                if item == number:
                    line[index] = '-1'

def check_for_bingo(boards: list[list[list[str]]], number: str) -> None:
    for board in boards:
        for line in board:
            marked = 0
            for item in line:
                if item == '-1':
                    marked += 1
            if marked == 5: # bingo
                calculate_score(board, number)
                exit(0)
        for index, _ in enumerate(board[0]):
            marked = 0
            for line in board:
                if line[index] == '-1':
                    marked += 1
            if marked == 5: # bingo
                calculate_score(board, number)
                exit(0)

with open('04.dat') as f:
    data = f.read()
board_data = data.split('\n\n')
lottery = board_data[0]
board_data = board_data[1:]

boards = []
for board_section in board_data:
    board = []
    for line in board_section.split('\n'):
        match = re.findall(r'\d+', line)
        if (match):
            board_line = match
            board.append(board_line)
    boards.append(board)

for number in lottery.split(','):
    mark_number(boards, number)
    check_for_bingo(boards, number)