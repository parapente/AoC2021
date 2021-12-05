#!/usr/bin/python3

def draw_line(x1: int, y1: int, x2: int, y2: int, buffer: dict[(int, int)]) -> None:
    if x1 == x2:
        dx = 0
    else:
        dx = (x2 - x1) // abs(x2 - x1) # 1 or -1
    if y1 == y2:
        dy = 0
    else:
        dy = (y2 - y1) // abs(y2 - y1) # 1 or -1
    x, y = x1, y1
    while x != x2 or y != y2:
        try:
            buffer[(x, y)] += 1
        except KeyError:
            buffer[(x, y)] = 1
        x += dx
        y += dy
    try:
        buffer[(x, y)] += 1
    except KeyError:
        buffer[(x, y)] = 1

with open('05.dat') as f:
    data = f.read()
lines = data.split('\n')
lines.pop()

buffer = {}
for line in lines:
    pairs = line.split(' -> ')
    [x1, y1] = pairs[0].split(',')
    [x2, y2] = pairs[1].split(',')
    draw_line(int(x1), int(y1), int(x2), int(y2), buffer)
counter = 0
for key in buffer:
    if (buffer[key]) > 1:
        counter += 1
print(counter)