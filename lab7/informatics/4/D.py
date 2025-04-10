n = int(input())
array = list(map(int, input().split()))
print(sum(1 for i in range(1, n) if array[i] > array[i - 1]))