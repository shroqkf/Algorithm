## 2798번(블랙잭)
# N: 카드의 개수, M: 플레이어가 고른 카드의 합의 최대
n, m = map(int, input().split())
cards = list(map(int, input().split()))
result = 0

for i in range(n):
    for j in range(i + 1, n):
        for k in range(j + 1, n):
            if cards[i] + cards[j] + cards[k] > m:
                continue
            else:
                result = max(result, cards[i] + cards[j] + cards[k])

print(result)

## 2231번(분해합)
# 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합
n = int(input())
result = 0

for i in range(max(1, n - 9 * len(str(n))), n):
    if i + sum(map(int, str(i))) == n:
        result = i
        break

print(result)

## 19532번(수학은 비대면강의입니다)
a, b, c, d, e, f = map(int, input().split())

# 풀이1: 연립방정식
y = (c * d - a * f) // (b * d - a * e)
x = (c * e - b * f) // (a * e - b * d)

print(x, y)

# 풀이2: 모든 경우의 수를 찾기(브루트 포스)
for i in range(-999, 1000):
    for j in range(-999, 1000):
        if (a * i) + (b * j) == c and (d * i) + (e * j) == f:
            print(i, j)

## 1018번(체스판 다시 칠하기)
# MxN 크기의 보드
import sys

input = sys.stdin.readline
n, m = map(int, input().split())
board = []
result = []

for _ in range(n):
    board.append(input().strip())

# 체스판의 시작점을 이동하면서 모든 8×8 영역을 검사하기
for i in range(n - 8 + 1):
    for j in range(m - 8 + 1):
        draw1 = 0  # 시작 지점이 검은색일 경우 다시 칠해야 할 개수
        draw2 = 0  # 시작 지점이 흰색일 경우 다시 칠해야 할 개수

        # 시작점부터 8x8크기의 체스판을 탐색하여 칠할 개수를 찾기
        for k in range(i, i + 8):
            for w in range(j, j + 8):
                if (k + w) % 2 == 0:
                    if board[k][w] != "B":
                        draw1 += 1
                    if board[k][w] != "W":
                        draw2 += 1
                else:
                    if board[k][w] != "W":
                        draw1 += 1
                    if board[k][w] != "B":
                        draw2 += 1
        result.append(draw1)
        result.append(draw2)

print(min(result))

## 1436번(영화감독 숌)
n = int(input())
cnt = 0  # 종말의 수 개수
num = 666  # 현재 검사 중인 숫자

# num을 1씩 증가시키면서 num을 문자열로 반환했을 때 "666"이 포함되어 있다면 cnt 증가시키기
while True:
    if "666" in str(num):
        cnt += 1
        if cnt == n:
            print(num)
            break
    num += 1

## 2839번(설탕 배달)
n = int(input())  # 배달해야 하는 설탕 무게
ans = []

for i in range(n // 3 + 1):
    for j in range(n // 5 + 1):
        if 3 * i + 5 * j == n:
            ans.append(i + j)

if not ans:
    print(-1)
else:
    print(min(ans))
