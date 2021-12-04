#!/usr/bin/python3

def filter_data(testdata: list[str], index: int, element: str) -> list[str]:
    ones = 0
    zeros = 0
    common = ""
    for data in testdata:
        if data[index] == '0':
            zeros += 1
        else:
            ones += 1
    if element == 'O2':
        if (ones >= zeros):
            common = '1'
        else:
            common = '0'
    else:
        if (ones < zeros):
            common = '1'
        else:
            common = '0'
    return [item for item in testdata if item[index] == common]

with open('03.dat') as f:
    data = f.read()
numbers = data.split('\n')
numbers.pop()

# Get oxygen generator rating
testdata = numbers.copy()
index = 0
while len(testdata) > 1:
    testdata = filter_data(testdata, index, 'O2')
    index += 1
O2_rating = testdata[0]
# Get CO2 scrubber rating
testdata = numbers.copy()
index = 0
while len(testdata) > 1:
    testdata = filter_data(testdata, index, 'CO2')
    index += 1
CO2_rating = testdata[0]
print(int(O2_rating, 2)*int(CO2_rating,2))