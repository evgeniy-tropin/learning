let unsortedArr = [5, 65, 97, 34, 9, 58, 20, [6, 76,23, [93,57,84], 19], 82, 14, 71]

const targetElement = document.getElementById("initResult");

function getDeepCopy (arr){
    let taskResult1 = [];
    console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr === "object") {
    //         taskResult1[i] = arr[i].slice();
    //     } else {
    //         taskResult1[i] = arr[i];
    //     }
    // }
    return arr.slice();
    document.getElementById("resultTask1").innerHTML = taskResult1;
}

targetElement.onclick = function() {
    getDeepCopy (unsortedArr);
};