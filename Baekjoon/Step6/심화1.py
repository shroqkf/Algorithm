## 25083번(새싹)
print("         ,r'\"7")
print("r`-_   ,'  ,/")
print(" \\. \". L_r'")
print("   `~\\/")
print("      |")
print("      |")

## 3003번(킹, 퀸, 룩, 비숍, 나이트, 폰)
chess = [1, 1, 2, 2, 2, 8]
numbers = list(map(int, input().split()))
for i in range(len(chess)):
    print(chess[i] - numbers[i])

## 2444번(별 찍기 - 7)
N = int(input())
for i in map(abs, range(1 - N, N)):
    print(" " * i + "*" * ((N - i) * 2 - 1))

## 10988번(팰린드롬인지 확인하기)
word = input()
print(1 if word == word[::-1] else 0)

## 1157번(단어 공부)
word = input().upper()
word_list = list(set(word))

# 각 알파벳 등장 횟수 계산
cnt = []
for i in word_list:
    cnt.append(word.count(i))

# 최빈도 판별 및 출력
if cnt.count(max(cnt)) > 1:
    print("?")
else:
    print(word_list[cnt.index(max(cnt))])

## 2941번(크로아티아 알파벳)
s = input().strip()
cra = {"c=", "c-", "d-", "lj", "nj", "s=", "z="}

i = 0
cnt = 0
n = len(s)

while i < n:
    # 'dz=' 먼저 확인
    if i + 2 <= n and s[i : i + 3] == "dz=":
        i += 3
    elif i + 1 < n and s[i : i + 2] in cra:
        i += 2
    else:
        i += 1
    cnt += 1
print(cnt)

## 1316번(그룹 단어 체커)
import sys

input = sys.stdin.readline

N = int(input())
cnt = N

for _ in range(N):
    word = input().strip()
    for j in range(0, len(word) - 1):
        if word[j] == word[j + 1]:
            pass
        elif word[j] in word[j + 1 :]:
            cnt -= 1
            break
print(cnt)

## 25206번(너의 평점은)
import sys

input = sys.stdin.readline

rating = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"]
grade = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0]

total = 0  # 학점 총합을 담을 변수
result = 0  # (학점 * 과목평점) 총합을 담을 변수
for _ in range(20):
    s, p, g = input().split()
    p = float(p)
    if g != "P":  # 등급이 P인 과목은 계산 안함
        total += p
        result += p * grade[rating.index(g)]

print(format(result / total, ".6f"))
