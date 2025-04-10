n = int(input())
sum_of_digits = 0
while n > 0:
    sum_of_digits += n % 10
    n //= 10
print(sum_of_digits)