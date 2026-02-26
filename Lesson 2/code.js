// Bài 1
function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Bài 2
function countOccurrences(arr, value) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}

// Bài 3
function removeDuplicates(arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// Bài 4
function flattenArray(arr) {
    let flatArr = [];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            flatArr.push(arr[i][j]);
        }
    }
    return flatArr;
}

// Bài 5
function isSymmetric(arr) {
}
// Bài này em kbt làm @@

// Bài 6
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
    }
    return secondLargest;
}

// Bài 7
// products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];

function sortProductsByPrice(products) {
    for (i = 0; i < products.length - 1; i++) {
        if (products[i].price > products[i + 1].price) {
            let a = products[i];
            products[i] = products[i + 1];
            products[i + 1] = a;
        }
    }
    return products;
}

// Bài 8
function findMostExpensiveProduct(products) {
    let mostExpensive = products[0];
    for (i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }
    return mostExpensive;
}

// Bài 9
// Input:
// arr = [
//     { type: 'fruit', name: 'apple' },
//     { type: 'vegetable', name: 'carrot' },
//     { type: 'fruit', name: 'banana' }
// ];

// Output:
// {
//     fruit: ['apple', 'banana'],
//     vegetable: ['carrot']
// }

function groupByType(arr) {
    let grouped = {};
    for (i = 0; i < arr.length; i++) {
        let type = arr[i].type;
        let name = arr[i].name;
        if (!grouped[type]) {
            grouped[type] = [];
        }
        grouped[type].push(name);
    }
    return grouped;
}

// Bài 10
function isSubset(arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr1.length; j++) {
            let found = false;
            if (arr2[i] === arr1[j]) {
                found = true;
                break;
            }
        }
        if (found === false) {
            return false;
        }
    }
    return true;
}

// Bài 11
function findMaxKey(obj) {
    let max = 0;
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
        }
    }
    return Object.keys(obj).filter(key => obj[key] === max);
}

// Bài 12
function mergeObjectsSumValues(obj1, obj2) {
    let merged = {};
    for (let key in obj1) {
        merged[key] = obj1[key];
    }
    for (let key in obj2) {
        if (merged[key]) {
            merged[key] += obj2[key];
        }
        else {
            merged[key] = obj2[key];
        }
    }
    return merged;
}

// Bài 13
function countElements(arr) {
    let obj = {};
    for (i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

// Bài 14
function cleanObject(obj) {
    let cleaned = {};
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            cleaned[key] = obj[key];
        }
    }
    return cleaned;
}

// Bài 15
function hasDuplicate(arr) {
    let count = [];
    for (i = 0; i < arr.length; i++) {
        if (count.includes(arr[i])) {
            return true;
        }
        else {
            count.push(arr[i]);
        }
    }
    return false;
}

// Bài 16
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// Output:
// {
//     fruit: 40,
//     vegetable: 20
// }

function sumByGroup(arr, key) {
    let grouped = {};
    for (i = 0; i < arr.length; i++) {
        let key = arr[i].type;
        let price = arr[i].price;
        if (!grouped[key]) {
            grouped[key] = 0;
        }
        grouped[key] += price;
    }
    return grouped;
}

// Bài 17
function uniqueValues(arr1, arr2) {
    let arr = [];
    for (i = 0; i < arr1.length; i++) {
        arr.push(arr1[i]);
    }
    for (i = 0; i < arr2.length; i++) {
        if (!arr.includes(arr2[i])) {
            arr.push(arr2[i]);
        }
    }
    return arr;
}

// Bài 18
function isPermutation(arr1, arr2) {
    let obj1 = {};
    let obj2 = {};

    for (i = 0; i < arr1.length; i++) {
        if (obj1[arr1[i]]) {
            obj1[arr1[i]]++;
        }
        else {
            obj1[arr1[i]] = 1;
        }
    }
    for (i = 0; i < arr2.length; i++) {
        if (obj2[arr2[i]]) {
            obj2[arr2[i]]++;
        }
        else {
            obj2[arr2[i]] = 1;
        }
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (let key in obj2) {
        if (!obj1[key]) {
            return false;
        }
    }
    return true;
}

// Bài 19
function findLongestString(arr) {
    let longest = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

// Bài 20
function intersection(arr1, arr2) {
    let arr = [];
    for (i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !arr.includes(arr1[i])) {
            arr.push(arr1[i]);
        }
    }
    return arr;
}

// Bài 21
function filterByMinValue(arr, minValue) {
    let filtered = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].value >= minValue) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

// Bài 22
function findLongestValue(obj) {
    let longest = '';
    for (let key in obj) {
        if (obj[key].length > longest.length) {
            longest = obj[key];
        }
    }
    return longest;
}

// Bài 23
// Input: arr = ['apple', 'banana', 'avocado', 'blueberry']
// Output:
// {
//     a: ['apple', 'avocado'],
//     b: ['banana', 'blueberry']
// }

function groupByFirstLetter(arr) {
    let group = {};
    for (i = 0; i < arr.length; i++) {
        let firstLetter = arr[i][0];
        if (!group[firstLetter]) {
            group[firstLetter] = [];
        }
        group[firstLetter].push(arr[i]);
    }
    return group;
}

// Bài 24
function getAdults(people) {
    let adults = [];
    for (i = 0; i < people.length; i++) {
        if (people[i].age >= 18) {
            adults.push(people[i]);
        }
    }
    return adults;
}

// Bài 25
function convertToArray(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push({ key: key, value: obj[key] });
    }
    return arr;
}

// Bài 26
function sortStringsByLength(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i].length > arr[i + 1].length) {
            let a = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = a;
        }
    }
    return arr;
}

// Bài 27
function sumByKey(arr, key) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i][key];
    }
    return sum;
}

// Bài 28
function countWords(str) {
    let words = str.split(' ');
    let count = 0;
    for (i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            count++;
        }
    }
    return count;
}

// Bài 29 
function findMinKey(obj) {
    let min  = obj[Object.keys(obj)[0]];
    for (let key in obj) {
        if (obj[key] < min) {
            min = obj[key];
        }
    }
    return min;
}