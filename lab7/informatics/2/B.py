year = int(input())
print("YES" * ((year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)) + "NO" * ((year % 4 != 0) or (year % 100 == 0 and year % 400 != 0)))