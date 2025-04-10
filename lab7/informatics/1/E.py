v = int(input())
t = int(input())
mkad_length = 109
position = (v * t) % mkad_length
print(position if position >= 0 else position + mkad_length)