# 27866번
S = str(input())
i = int(input())
print(S[i - 1])

# 2743번
word = str(input())
print(len(word))

# 9086번
T = int(input())
for _ in range(T):
    string = str(input())
    print(string[0] + string[-1])

# 11654번
print(ord(input()))

# 11720번
N = int(input())
number = list(map(int, input().strip()))
print(sum(number))

# 10809번 - ord() 활용
positions = [-1] * 26
for i in range(len(S)):
    idx = ord(S[i]) - ord("a")
    if positions[idx] == -1:
        positions[idx] = i
print(*positions)

# 10809번 - find() 활용
S = input()
alphabet = "abcdefghijklmnopqrstuvwxyz"

for ch in alphabet:
    print(S.find(ch), end=" ")

# 2675번
T = int(input())

for _ in range(T):
    R, S = input().split()
    R = int(R)
    for ch in S:
        print(ch * R, end="")
    print()

# 1152번
sentence = input().strip()
if sentence == "":
    print(0)
else:
    print(len(sentence.split()))

# 2908번
A, B = input().split()
print(max(int(A[::-1]), int(B[::-1])))

# 5622번
word = input()

dial = {
    "ABC": 3,
    "DEF": 4,
    "GHI": 5,
    "JKL": 6,
    "MNO": 7,
    "PQRS": 8,
    "TUV": 9,
    "WXYZ": 10,
}

time = 0

for ch in word:
    for key in dial:
        if ch in key:
            time += dial[key]
            break
print(time)

# 11718번
import sys

while True:
    line = sys.stdin.readline()
    if not line:
        break
    print(line.strip())
