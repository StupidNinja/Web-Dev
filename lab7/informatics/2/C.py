system_answer = int(input())
student_answer = int(input())
print("YES" * (system_answer != 1 or student_answer != 1) + "NO" * (system_answer == 1 and student_answer == 1))