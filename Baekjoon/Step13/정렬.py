## 2750번(수 정렬하기)
n = int(input())
result = [int(input()) for _ in range(n)]
result.sort()

for num in result:
    print(num)

## 25887번(대표값2)
nums = [int(input()) for _ in range(5)]
nums.sort()
print(sum(nums) // 5)
print(nums[2])

## 25305번(커트라인)
n, k = map(int, input().split())
scores = map(int, input().split())
print(sorted(scores)[-k])

## 2751번(수 정렬하기2)
import sys

input = sys.stdin.readline

n = int(input())
nums = [int(input()) for _ in range(n)]
nums.sort()

print("\n".join(map(str, nums)))

## 10989번(수 정렬하기3)
import sys

input = sys.stdin.readline
n = int(input())

cnt = [0] * 10001

for _ in range(n):
    num = int(input())
    cnt[num] += 1

for i in range(1, 10001):
    if cnt[i] > 0:
        for _ in range(cnt[i]):
            print(i)

## 1427번(소트인사이드)
n = list(input().strip())
n.sort(reverse=True)
print("".join(n))

## 11650번(좌표 정렬하기)
# 풀이1: (x, y) 쌍을 튜플로 묶어서 정렬
import sys

input = sys.stdin.readline
n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]

points.sort()

for x, y in points:
    print(x, y)

# 풀이2: 이중 리스트로 모두 저장한 후 정렬
N = int(input())
arr = []
for i in range(N):
    a, b = map(int, input().split())
    arr.append((a, b))
arr.sort()
for i in range(N):
    print(arr[i][0], arr[i][1])

## 11651번(좌표 정렬하기2)
import sys

input = sys.stdin.readline
n = int(input())

points = [tuple(map(int, input().split())) for _ in range(n)]
points.sort(key=lambda p: (p[1], p[0]))

for x, y in points:
    print(x, y)

## 1181번(단어 정렬)
import sys

input = sys.stdin.readline
n = int(input())
words = [input().strip() for _ in range(n)]

words = list(set(words))  # 중복 단어 제거
# 먼저 len(s) 기준 오름차순. 길이가 같으면 s 기준 사전순(오름차순)으로 정렬
words.sort(key=lambda s: (len(s), s))

for s in words:
    print(s)

## 10814번(나이순 정렬)
import sys

input = sys.stdin.readline
n = int(input())
member = [tuple(input().split()) for _ in range(n)]
member.sort(key=lambda n: int(n[0]))

for age, name in member:
    print(age, name)

## 18870번(좌표 압축)
import sys

input = sys.stdin.readline
n = int(input())
points = list(map(int, input().split()))
new_points = sorted(set(points))
rank = {num: idx for idx, num in enumerate(new_points)}

for p in points:
    print(rank[p], end=" ")
