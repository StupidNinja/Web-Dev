n = int(input())
zero_count = 0
while n > 0:
    if n % 10 == 0:
        zero_count += 1
    n //= 10
print(zero_count)