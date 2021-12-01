#!/usr/bin/python3

with open('01.dat') as f:
    data = f.read()
measurements = data.split('\n')
measurements.pop()

buffer = []
buffer_sum = 0
previous_sum = None
increased = 0
for measurement in measurements:
    buffer.append(int(measurement))
    if (len(buffer) < 3):
        continue
    if (len(buffer) == 4):
        del buffer[0]
    buffer_sum = sum(buffer)
    if (previous_sum != None and buffer_sum > previous_sum):
        increased += 1
    previous_sum = buffer_sum
print(increased)