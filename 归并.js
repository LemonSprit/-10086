// /**
//  * 归并函数
//  * @param arr
//  * @param L 数组的起点
//  * @param M 数组的分割点
//  * @param R 数组的终点
//  */
// const merger = function (arr, L, M, R) {
//     // 左边数组大小和右边数组大小
//     let left_size = M - L;
//     let right_size = R - M + 1;
//     // 声明左边数组和右边数组
//     let leftArr = new Array(left_size);
//     let rightArr = new Array(right_size);
//     let i,j,k;

//     // 填充左数组(从L开始到M结束)
//     for (i = L; i < M; i++){
//         leftArr[i-L] = arr[i];
//     }
//     // 填充右数组(从M开始到R结束)
//     for (i = M; i <= R; i++){
//         rightArr[i-M] = arr[i];
//     }

//     // 数组合并
//     i = 0; j = 0; k = L;
//     while (i < left_size && j < right_size){
//         // 如果左边数组的i项小于右边数组的j项，则数组的k项就为左边数组的i项。否则数组的k项就为右边数组的j项
//         if(leftArr[i] < rightArr[j]){
//             arr[k] = leftArr[i];
//             i++;
//             k++;
//         }else{
//             arr[k] = rightArr[j];
//             j++;
//             k++;
//         }
//     }
//     // 当右边数组到顶部后，左边数组还未到顶部，则将剩余元素放进arr中
//     while (i < left_size){
//         arr[k] = leftArr[i];
//         i++;
//         k++
//     }
//     // 当左边数组到顶部后，右边数组还未到顶部，则将剩余元素放进arr中
//     while (j < right_size){
//         arr[k] = rightArr[j];
//         j++;
//         k++;
//     }
// };

var mergesort = function (arr){
    var len = arr.length;
    if(len<2) return arr;
    var mid = Math.floor(len/2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return merge(mergesort(left),mergesort(right));
    
}
var merge = function (left, right) {
    var result=[];
    while(left.length&&right.length){
        var l = left[0], r= right[0];
        if(l<=r) result.push(left.shift());
        else result.push(right.shift());
    }
    while(left.length!=0) result.push(left.shift());
    while(right.length!=0) result.push(right.shift());
    return result;
}
// sort();