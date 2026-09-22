## 1. git restore
- git restore --staged . ==> restore toàn bộ từ staging về working directory
- git restore --staged file_1 file_2 ==> restore file_1 file_2 từ staging về working directory

## 2. git un-commit (Repository --> staging)
- Đưa nội dung commit cuối về staging: (Repository --> staging)
```
git reset --soft HEAD~1
```
- Đưa nội dung commit cuối về working directory: (Repository --> working directory)
```
git reset  HEAD~1

git reset HEAD~3: đưa nội dung của 3 commit gần nhất về working directory
```

```
Trong một folder mới được tạo ra, mình thực hiện lần lượt các lệnh sau. Hãy liệt kê các file theo từng vùng sau khi thao tác một loạt các lệnh sau:

a. Tạo 3 file: file1, file2, file3 : Local: file1, file2, file3 | Working: Trống | Staging: Trống | Repo: Trống
b. Chạy lệnh: git init: : Local: file1, file2, file3 | Working: file1, file2, file3 | Staging: Trống | Repo: Trống
c. Chạy lệnh: git add file1: Local: file1, file2, file3 | Working: file2, file3 | Staging: file1 | Repo: Trống
d. Chạy lệnh: git commit -m”first commit”: Local: file1, file2, file3 | Working: file2, file3 | Staging: Trống | Repo: file1
e. Chạy lệnh: git add file2 file3 : Local: file1, file2, file3 | Working: Trống | Staging: file2, file3 | Repo: file1
f. Chạy lệnh: git restore --staged file3: Local: file1, file2, file3 | Working: file3 | Staging: file2 | Repo: file1
h. Chạy lệnh: git commit -m"second commit": Local: file1, file2, file3 | Working: file3 | Staging: Trống | Repo: file1, file2
i. Chạy lệnh: git reset HEAD~1:Local: file1, file2, file3 | Working: file2, file3 | Staging: Trống | Repo: file1
==> 

Local: file 1, file 2, file3

Working Directory: file2, file3
Repository: file1
```

Note: 
- commit đầu tiên ko thể bị reset
- nếu muốn reset --> xoá thư mục .git đi rồi init lại

## 3. git - undo commit message
- Thay đổi commit message mới nhất
```
git commit --amend -m"<message mới>"

ex: git commit --amend -m"feat: add feature"
```
- Thay đổi commit message trước đó vài commit <sẽ học ở bài 9 - Từ khoá "rebase">

## 4. Javascript - Câu điều kiện
- Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy. Nếu điện kiện đúng  thì mới chạy
```
Cú pháp: if (<điều kiện>){
    //code ...
}
Example: 
const hour = 6;
if (hour < 12){
    console.log("Chào buổi sáng");
}


let hour = 8;
if (hour >=6 && hour<=11){
    console.log("Chào buổi sáng");
}
```

## 5. Javascript - Vòng lặp
- Vòng lặp dùng để lặp lại 1 đoạn logic. Có thể lặp lại một số lần nhất định, tuỳ theo điều kiện dừng
- Trong JS, có các loại vòng lặp: for(i), for(of), for(each), for(in), while, do..while

```
Cú pháp vòng lặp for(i):
for(<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>{
    //code
}

Example:
for(let i=0;i<5;i++){
    console.log("Xin chào!")
}
```

## 5. Convention: tạo ra 1 qui tắc để team làm việc dễ hơn
- snake_case (tạm thời ko dùng)
- kebab-case: đặt tên file, folder
- camelCase: đặt tên biến, hàm
- PascalCase: dặt tên cho class
- SCREAMING_SNAKE_CASE