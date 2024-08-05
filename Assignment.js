//write bubble sirt function
function bubbleSort(array) {
    for (var i = 0; i < array.length; i++)
        for (var j=0; j < array.length -i; j++) {
            if(array[j]>array[j+1])
            {
                var temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }

        }
    
    for(var i=0; i<array.length; i++)
        console.log(array[i]," ")
}
var array=[1,2,3,5,7,4,9,3,1,3]
// bubbleSort(array)

function selectionSort(array) {
    for (var i = 0; i < array.length; i++) { 
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    for (var i = 0; i < array.length; i++) {
        console.log(array[i], " ");
    }
}
// selectionSort(array)

function secondLargestNumber(array)
{
    var firstLargest=Number.MIN_SAFE_INTEGER
    for(var i=0; i<array.length; i++)
    {
        if(firstLargest<array[i])
        {
            firstLargest=array[i];
        }
    }
    console.log(firstLargest)
    var secondLargestNumber=Number.MIN_SAFE_INTEGER
    for(var i=0; i<array.length; i++)
        {
            if(array[i]>secondLargestNumber && array[i]<firstLargest)
            {
                secondLargestNumber=array[i];
            }
        }
    console.log(secondLargestNumber)
}
secondLargestNumber(array)