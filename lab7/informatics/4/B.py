n = int(input())
array = list(map(int, input().split()))
print(" ".join(map(str, [x for x in array if x % 2 == 0])))