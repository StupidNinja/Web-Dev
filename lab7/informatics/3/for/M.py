n = int(input())
zero_count = 0
for _ in range(n):
    if int(input()) == 0:
        zero_count += 1
print(zero_count)