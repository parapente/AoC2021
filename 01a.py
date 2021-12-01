#!/usr/bin/python3

with open('01.dat') as f:
    data = f.read()
measurements = data.split('\n')
measurements.pop()

previous_measurement = measurements[0]
increased = 0
for measurement in measurements:
    if (int(measurement) > int(previous_measurement)):
        increased += 1
    previous_measurement = measurement
print(increased)