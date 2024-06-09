const hasContiguousSubarray = (arr, target) => {
    let left = 0, sum = 0;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum > target) sum -= arr[left++];
        if (sum === target) return true;
    }
    return false;
};
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarray(arr, target));
