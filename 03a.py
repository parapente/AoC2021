#!/usr/bin/python3

with open('03.dat') as f:
    data = f.read()
numbers = data.split('\n')
numbers.pop()

ones = [0]*len(numbers[0])
zeros = [0]*len(numbers[0])
gamma = ""
epsilon = ""
for number in numbers:
    for index, digit in enumerate(number):
        if digit == '0':
            try:
                zeros[index] += 1
            except IndexError:
                zeros[index] = 1
        else:
            try:
                ones[index] += 1
            except IndexError:
                ones[index] = 1
for index, _ in enumerate(zeros):
    if (zeros[index] > ones[index]):
        gamma += "0"
        epsilon += "1"
    else:
        gamma += "1"
        epsilon += "0"
print(int(gamma, 2)*int(epsilon,2))