n = int(input())
array = list(map(int, input().split()))
print("YES" if any(array[i] * array[i - 1] > 0 for i in range(1, n)) else "NO")