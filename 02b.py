#!/usr/bin/python3

with open('02.dat') as f:
    data = f.read()
commands = data.split('\n')
commands.pop()

x = 0
y = 0
aim = 0
for command in commands:
    op = command.split(' ')
    if (op[0] == 'forward'):
        x += int(op[1])
        y += aim * int(op[1])
    elif (op[0] == 'down'):
        aim += int(op[1])
    elif (op[0] == 'up'):
        aim -= int(op[1])
print(x*y)