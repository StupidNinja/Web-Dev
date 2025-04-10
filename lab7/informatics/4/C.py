n = int(input())
array = list(map(int, input().split()))
print(sum(1 for x in array if x > 0))