n = int(input())
min_digit = 9
max_digit = 0
while n > 0:
    digit = n % 10
    if digit < min_digit:
        min_digit = digit
    if digit > max_digit:
        max_digit = digit
    n //= 10
print(min_digit, max_digit)