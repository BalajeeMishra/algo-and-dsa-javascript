// insertion of max heapp
// here is how its look...:::->
var arr=[];
function maxHeap(val) {
    arr.push(val);
    var index =arr.indexOf(val);
    var parentindex= Math.floor((index-1)/2);
    while(arr[index]>arr[parentindex]){
        const temp= arr[index];
        arr[index]=arr[parentindex];
        arr[parentindex] = temp;
        index = parentindex;
        parentindex=Math.floor((index-1)/2);
    }
    return arr;
}

maxHeap(5);
maxHeap(10);
maxHeap(15);
maxHeap(6);
maxHeap(50);
