const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
};

const arr = [88, 10001, 4, 2, 7, 3, -9, 0, 33];
console.log('-----before-----');
console.log(arr);

console.log('-----after-----');
console.log(bubbleSort(arr));
