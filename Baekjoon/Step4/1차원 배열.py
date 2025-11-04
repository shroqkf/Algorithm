# 10807번
N = int(input())
numbers = list(map(int, input().split()))
v = int(input())

print(numbers.count(v))

# 10818번
N = int(input())
numbers = list(map(int, input().split()))
print(min(numbers), max(numbers))

min_val = numbers[0]
max_val = numbers[0]

for num in numbers:
    if num < min_val:
        min_val = num
    if num > max_val:
        max_val = num

print(min_val, max_val)

# 2562번
numbers = [int(input()) for _ in range(9)]

max_value = max(numbers)
max_index = numbers.index(max_value) + 1

print(max_value)
print(max_index)

#10810번
N, M = map(int, input().split())
basket = [0] * N  # 바구니 초기화 (0으로 N개 생성)

for _ in range(M):
    i, j, k = map(int, input().split())
    for x in range(i - 1, j):  # 인덱스는 0부터 시작하므로 -1
        basket[x] = k

print(*basket)

# 10813번
N, M = map(int, input().split())
basket = [i for i in range(1, N+1)]
for _ in range(M):
    i, j = map(int, input().split())
    basket[i-1], basket[j-1] = basket[j-1], basket[i-1]
print(*basket)

# 5597번
students = {int(input()) for _ in range(28)}    # set으로 저장
for idx in range(1,31):
    if idx not in students:
        print(idx)

# 3052번
numbers = [int(input()) for _ in range(10)]
remainders = {n % 42 for n in numbers}

print(len(remainders))

# 10811번
N, M = map(int, input().split())
basket = [i for i in range(1, N+1)]
for _ in range(M):
    i, j = map(int, input().split())
    basket[i - 1 : j] = reversed(basket[i - 1 : j])
print(*basket)

# 1546번
N = int(input())
scores = list(map(int, input().split()))
max_val = max(scores)
avg = sum(n / max_val * 100 for n in scores) / N
print(avg)

