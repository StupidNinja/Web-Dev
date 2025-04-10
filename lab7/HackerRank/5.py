n = int(input("Enter a number: "))
print(*[num**2 for num in range(n)], sep='\n')