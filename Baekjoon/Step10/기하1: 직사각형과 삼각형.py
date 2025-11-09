## 27323번(직사각형)
A = int(input())
B = int(input())
print(A * B)

## 1085번(직사각형에서 탈출)
x, y, w, h = map(int, input().split())
print(min(x, y, w, h, (w - x), (h - y)))

## 3009번(네 번째 점)
x = []
y = []

for _ in range(3):
    nx, ny = map(int, input().split())
    x.append(nx)
    y.append(ny)
for i in range(3):
    if x.count(x[i]) == 1:
        nx = x[i]
    if y.count(y[i]) == 1:
        ny = y[i]

print(nx, ny)

## 15894번(수학은 체육과목 입니다)
n = int(input())
print(4 * n)

## 9063번(대지)
import sys

input = sys.stdin.readline

n = int(input())
min_x = 10**10
max_x = -(10**10)
min_y = 10**10
max_y = -(10**10)

for _ in range(n):
    x, y = map(int, input().split())
    if x < min_x:
        min_x = x
    if x > max_x:
        max_x = x
    if y < min_y:
        min_y = y
    if y > max_y:
        max_y = y

print(0 if n == 1 else (max_x - min_x) * (max_y - min_y))

## 10101번(삼각형 외우기)
x = int(input())
y = int(input())
z = int(input())

if x == 60 and y == 60 and z == 60:
    print("Equilateral")
elif x + y + z == 180:
    if x == y or y == z or z == x:
        print("Isosceles")
    else:
        print("Scalene")
else:
    print("Error")

## 5073번(삼각형과 세 변)
import sys

input = sys.stdin.readline

while True:
    a, b, c = map(int, input().split())
    if a == b == c == 0:
        break

    # 정렬 후 판정
    x, y, z = sorted([a, b, c])

    if z >= x + y:
        print("Invalid")
    else:
        k = len({x, y, z})  # 집합으로 분류(1: 모두 같음, 2: 두 개 같음, 3: 모두 다름)
        print("Equilateral" if k == 1 else "Isosceles" if k == 2 else "Scalene")

## 14215번(세 막대)
a, b, c = map(int, input().split())
x, y, z = sorted([a, b, c])
if z >= x + y:
    z = x + y - 1
    print(x + y + z)
else:
    print(x + y + z)
