const numbers = [1,2,3];
[n1,n2] = numbers;
console.log(n1,n2);
// print 1,2

[n1, , n2] = numbers;
console.log(n1,n2);
// print 1,3