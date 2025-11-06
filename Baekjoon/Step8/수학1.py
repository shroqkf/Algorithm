## 2745번(진법 변환)
N, B = input().split()
print(int(N.upper(), int(B)))

## 11005번(진법 변환2)
N, B = map(int, input().split())
digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

if N == 0:
    print(0)
else:
    ans = []
    while N:
        ans.append(digits[N % B])
        N //= B
    print("".join(reversed(ans)))

## 2720(세탁소 사장 동혁)
T = int(input())
ans = []
for i in range(T):
    C = int(input())
    result = []  # 동전별 개수 저장
    for coin in [25, 10, 5, 1]:
        result.append(C // coin)
        C %= coin
    ans.append(result)

for n in ans:
    print(*n)

## 2903번(중앙 이동 알고리즘)
# 점 개수 = (2**n+1)**2
N = int(input())
print((2**N + 1) ** 2)

## 2292번(벌집)
N = int(input())
layer, end = 1, 1

while end < N:
    end += 6 * layer
    layer += 1
print(layer)

## 1193번(분수찾기)
X = int(input)
line = 1

while X > line:
    X -= line
    line += 1

# 짝수 라인: 분모가 1씩 늘어나고 분자가 1씩 줄어듦
if line % 2 == 0:
    num = X  # 분자
    den = line - X + 1  # 분모

# 홀수 라인: 분자가 1씩 늘어나고 분모가 1씩 줄어듦
else:
    num = line - X + 1  # 분자
    den = X  # 분모

print(f"{num}/{den}")

## 2869번(달팽이는 올라가고 싶다)
day, night, height = map(int, input().split())

n = (height - night) / (day - night)
if n == int(n):
    print(int(n))
else:
    print(int(n) + 1)
