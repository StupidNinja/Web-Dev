n = int(input())
array = list(map(int, input().split()))
for i in range(n // 2):
    array[i], array[n - i - 1] = array[n - i - 1], array[i]
print(" ".join(map(str, array)))