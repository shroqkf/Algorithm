## 2738번(행렬 덧셈)
N, M = map(int, input().split())

A, B = [], []

for row in range(N):
    row = list(map(int, input().split()))
    A.append(row)
for row in range(N):
    row = list(map(int, input().split()))
    B.append(row)
for row in range(N):
    for col in range(M):
        print(A[row][col] + B[row][col], end=" ")
    print()

## 2566번(최댓값)
import sys

input = sys.stdin.readline

ans = []

for _ in range(9):
    row = list(map(int, input().split()))
    ans.append(row)

max_val = max(map(max, ans))
print(max_val)

for i in range(9):
    for j in range(9):
        if ans[i][j] == max_val:
            print(i + 1, j + 1)
            break

## 10798번(세로읽기)
ans = []
for _ in range(5):
    word = input().strip()
    ans.append(list(word))
max_len = max(len(word) for word in ans)
for i in range(max_len):
    for j in range(5):
        if i < len(ans[j]):
            print(ans[j][i], end="")

## 2563번(색종이)
n = int(input())
cells = set()

for _ in range(n):
    x, y = map(int, input().split())
    for i in range(x, x + 10):
        for j in range(y, y + 10):
            cells.add((i, j))

print(len(cells))
