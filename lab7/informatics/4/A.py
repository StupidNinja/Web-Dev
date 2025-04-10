n = int(input())
array = list(map(int, input().split()))
print(" ".join(map(str, array[0::2])))