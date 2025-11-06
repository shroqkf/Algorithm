## 5086번(배수와 약수)
while True:
    a, b = map(int, input().split())
    if a == 0 and b == 0:
        break
    elif b % a == 0:
        print("factor")
    elif a % b == 0:
        print("multiple")
    else:
        print("neither")

## 2501번(약수 구하기)
N, K = map(int, input().split())
cnt = 0
for i in range(1, N + 1):
    if N % i == 0:
        cnt += 1
        if cnt == K:
            print(i)
            break
else:
    print(0)

## 9506번(약수들의 합)
while True:
    n = int(input())
    if n == -1:
        break

    divisors = [i for i in range(1, n) if n % i == 0]

    if sum(divisors) == n:  # 완전수 조건
        print(f"{n} = {' + '.join(map(str, divisors))}")
    else:
        print(f"{n} is NOT pergect.")

## 1978번(소수 찾기)
import math

N = int(input())
cnt = 0
nums = list(map(int, input().split()))

for x in nums:
    if x < 2:
        continue
    is_prime = True
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            is_prime = False
            break
    if is_prime:
        cnt += 1

print(cnt)

## 2581번(소수)
import math

M = int(input())
N = int(input())
primes = []
for x in range(M, N + 1):
    if x < 2:
        continue
    is_prime = True
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            is_prime = False
            break
    if is_prime:
        primes.append(x)
if primes == []:
    print(-1)
else:
    print(sum(primes))
    print(min(primes))

# 11653번(소인수분해)
N = int(input())
i = 2  # 가장 작은 소수
while N > 1:
    if N % i == 0:
        print(i)
        N //= i
    else:
        i += 1
