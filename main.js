const arrLength = 100;
const maxRandom = 999;
const minRandom = -999;
let arr = [];
const sortDirection = true;
const sortMethod = 1;
//1 === BubbleSort
//2 === InsertionSort
//3 === SelectionSort

function FillArray() {   
    arr = [];
    for (let i = 0; i < arrLength; i++) {
        const minCeiled = Math.ceil(minRandom);
        const maxFloored = Math.floor(maxRandom);
        const x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        arr.push(x);
    }
}

function BubbleSort(arr){
    if(sortDirection == true){
        for (let i = 0; i < arr.length ; i++){
            for (let l = 0; l < (arr.length - i - 1); l++){
                if (arr[l] > arr[l + 1]){
                    let n = arr[l]
                    arr[l] = arr[l + 1]
                    arr[l + 1] = n
                }
            }
        }
    }else if(sortDirection == false){
        for (let i = 0; i < arr.length ; i++){
            for (let l = 0; l < (arr.length - i - 1); l++){
                if (arr[l] < arr[l + 1]){
                    let n = arr[l]
                    arr[l] = arr[l + 1]
                    arr[l + 1] = n
                }
            }
        }
    }
}

function InsertionSort(arr) {
    if (sortDirection == true){
        for (let i = 1; i < arr.length; i++) {
            let currentValue = arr[i]
            let j
            for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
              arr[j + 1] = arr[j]
            }
            arr[j + 1] = currentValue
          }   
          return arr
    } else if(sortDirection == false){
        for (let i = 1; i < arr.length; i++) {
            let currentValue = arr[i]
            let j
            for (j = i - 1; j >= 0 && arr[j] < currentValue; j--) {
              arr[j + 1] = arr[j]
            }
            arr[j + 1] = currentValue
          }   
          return arr
    }
}

function SelectionSort(arr) { 
    if (sortDirection == true){
        let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr; 
    }else if (sortDirection == false){
        let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] > arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr; 
    }
}


FillArray();
console.log(arr);
let t0 = performance.now();
if (sortMethod === 1){
    BubbleSort(arr);
    console.log(`BubbleSort`);
}else if(sortMethod === 2){
    InsertionSort(arr);
    console.log(`InsertionSort`);
}else if(sortMethod === 3){
    SelectionSort(arr);
    console.log(`SelectionSort`);

}
let t1 = performance.now();
console.log(arr);
let t2 = t1 - t0
console.log("\x1b[34mШвидкість виконання функції сортування\x1b[32m " + t2.toFixed(3) + "\x1b[34m ms.\x1b[0m");                         