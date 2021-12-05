#!/usr/bin/python3

def draw_line(x1: int, y1: int, x2: int, y2: int, buffer: dict[(int, int)]) -> None:
    if x1 == x2:
        if y1 > y2:
            y1, y2 = y2, y1
        while y1 <= y2:
            try:
                buffer[(x1, y1)] += 1
            except KeyError:
                buffer[(x1, y1)] = 1
            y1 += 1
    if y1 == y2:
        if x1 > x2:
            x1, x2 = x2, x1
        while x1 <= x2:
            try:
                buffer[(x1, y1)] += 1
            except KeyError:
                buffer[(x1, y1)] = 1
            x1 += 1

with open('05.dat') as f:
    data = f.read()
lines = data.split('\n')
lines.pop()

buffer = {}
for line in lines:
    pairs = line.split(' -> ')
    [x1, y1] = pairs[0].split(',')
    [x2, y2] = pairs[1].split(',')
    if x1 == x2 or y1 == y2:
        draw_line(int(x1), int(y1), int(x2), int(y2), buffer)
counter = 0
for key in buffer:
    if (buffer[key]) > 1:
        counter += 1
print(counter)