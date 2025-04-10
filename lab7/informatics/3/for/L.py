binary_number = input()
decimal_number = 0
for i, digit in enumerate(reversed(binary_number)):
    decimal_number += int(digit) * (2 ** i)
print(decimal_number)