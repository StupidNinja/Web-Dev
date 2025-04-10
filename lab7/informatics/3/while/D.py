n = int(input())
binary_reversed = ""
while n > 0:
    binary_reversed += str(n % 2)
    n //= 2
print(binary_reversed)