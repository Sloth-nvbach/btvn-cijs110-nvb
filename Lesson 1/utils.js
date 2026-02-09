// Bài 1
export function productInfo(name, price) {
    console.log(`Sản phẩm: ${name}, Giá: ${price} VND`);
}

// Bài 2
export function greet(name) {
    console.log(`Xin chào, ${name}!`);
}

// Bài 3
export function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

// Bài 4
export function square(number) {
    console.log(number * number);
    return number * number;
}

// Bài 5
export function isEven(number) {
    const result = number % 2 === 0;
    console.log(result);
    return result;
}

// Bài 6
export function firstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined; 
}

// Bài 7
export function sum(...num) {
    let sum = 0;
    for ( let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum);
    return sum;
}

// Bài 8
export function tachGiaTri(obj) {
    console.log(`Name: ${obj.name}, Age: ${obj.age}`)
}

// Bài 9
export function inTen(arr) {
    arr.forEach((obj) => {
        console.log(obj.name);
    });
}

// Bài 10
export function stringLength(str) {
    console.log(str.length);
    return str.length;
}

// Bài 11
export function toUpperCase(str) {
    const upperStr = str.toUpperCase();
    console.log(upperStr);
    return upperStr;
}

// Bài 12
export function formatCurrency(num) {

}

// Bài 13
export function max(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
    return maxNum;
}

// Bài 14
export function isPrime(num) {
    if (num <= 1) {
        console.log(false);
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

// Bài 15
export function repeatString(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    console.log(result);
    return result;
}

// Bài 16
export function sumOdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
    return sum;
}

// Bài 17
export function sumGreaterThan(arr, num) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            sum += arr[i];
        }
    }
    console.log(sum);
    return sum;
}

// Bài 18 YYYY-MM-DD -> DD/MM/YYYY
export function formatDate(date) {
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    return formattedDate;
}

// Bài 19
export function firstThree(arr) {
    const result = arr.slice(0, 3);
    console.log(result);
    return result;
}

// Bài 20
export function containChar(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(char)) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

// Bài 21
export function mergeArrays(arr1, arr2) {
    const merged = arr1.concat(arr2);
    console.log(merged);
    return merged;
}

// Bài 22
export function countOccurrences(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    console.log(count);
    return count;
}

// Bài 23
export function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Bài 24
export function greaterThan(arr, num) {
    return arr.filter(item => item > num);
}

// Bài 25
export function factorial(n) {
    if (n === 0 || n === 1) {
        console.log(1);
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    console.log(result);
    return result;
}

// Bài 26
export function separateEvenOdd(arr) {
    let even = [];
    let odd = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    });
    console.log({even, odd});
    return {even, odd};
}

// Bài 27
export function sortAsc(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    console.log(sorted);
    return sorted;
}

// Bài 28
export function sumEvenIndex(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
}   

// Bài 29
export function multiplyByTwo(arr) {
    const result = arr.map(num => num * 2);
    console.log(result);
    return result;
}

// Bài 30
export function arrayToString(arr) {
    const result = arr.join('');
    console.log(result);
    return result;
}