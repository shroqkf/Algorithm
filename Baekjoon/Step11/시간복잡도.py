## 24262번(알고리즘 수업 - 알고리즘의 수행 시간1)
# MenOfPassion(A[], n) {
#     i = ⌊n / 2⌋;
#     return A[i]; # 코드1
# }
# 코드1 이 1회 수행되고 알고리즘은 상수 시간이 소요된다.
input()  # n 입력, 사용하지 않음
print(1)  # 수행 횟수 T(n)
print(0)  # 최고차항 차수

## 24263번(알고리즘 수업 - 알고리즘의 수행 시간2)
# MenOfPassion(A[], n) {
#     sum <- 0;
#     for i <- 1 to n
#         sum <- sum + A[i]; # 코드1
#     return sum;
# }
# 코드1 이 7회 수행되고 알고리즘의 수행 시간이 n에 비례한다.
n = int(input())
print(n)
print(1)

## 24264번(알고리즘 수업 - 알고리즘의 수행 시간3)
# MenOfPassion(A[], n) {
#     sum <- 0;
#     for i <- 1 to n
#         for j <- 1 to n
#             sum <- sum + A[i] × A[j]; # 코드1
#     return sum;
# }
# 코드1 이 49회 수행되고 알고리즘의 수행 시간이 n**2에 비례한다.
n = int(input())
print(n**2)
print(2)

## 24265번(알고리즘 수업 - 알고리즘의 수행 시간4)
# MenOfPassion(A[], n) {
#     sum <- 0;
#     for i <- 1 to n - 1
#         for j <- i + 1 to n
#             sum <- sum + A[i] × A[j]; # 코드1
#     return sum;
# }
# 코드1 이 21회 수행되고 알고리즘의 수행 시간이 n**2에 비례한다.
n = int(input())
print(n * (n - 1) // 2)
print(2)

## 24266번(알고리즘 수업 - 알고리즘의 수행 시간5)
# MenOfPassion(A[], n) {
#     sum <- 0;
#     for i <- 1 to n
#         for j <- 1 to n
#             for k <- 1 to n
#                 sum <- sum + A[i] × A[j] × A[k]; # 코드1
#     return sum;
# }
# 코드1 이 343회 수행되고 알고리즘의 수행 시간이 n**3에 비례한다.
n = int(input())
print(n**3)
print(3)

## 24267번(알고리즘 수업 - 알고리즘의 수행 시간6)
# MenOfPassion(A[], n) {
#     sum <- 0;
#     for i <- 1 to n - 2
#         for j <- i + 1 to n - 1
#             for k <- j + 1 to n
#                 sum <- sum + A[i] × A[j] × A[k]; # 코드1
#     return sum;
# }
# 코드1 이 35회 수행되고 알고리즘의 수행 시간이 n**3에 비례한다.
n = int(input())
print(n * (n - 1) * (n - 2) // 6)
print(3)

## 24313번(알고리즘 수업 - 점근적 표기1)
# O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다}
a1, a0 = map(int, input().split())
c = int(input())
n0 = int(input())
print(1 if (a1 <= c and a1 * n0 + a0 <= c * n0) else 0)
