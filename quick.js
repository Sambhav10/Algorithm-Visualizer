
/*
Algorithm: Quick Sort  
(
process : 1 Quick Sort on the principle of divide and conquer.
             2. First of all we pick the last eleemnt of array as the pivot value and pivot index as the start of the array
             3. loops through the list to find the element greater the pivot element; if so awap the elements 
             4. if value is less than pivot value then incrase the pivot index
             4. then the pivot index's value act as the partition function's end and continues the process  
             5.  since heapSort function is recurisive it continues to work until start is less than end value. 
          
*/

    async function partition(start, end) {
      var barArr = document.querySelectorAll(".bar");
      
      // Storing the value of pivot element
      var pivotValue = parseInt(barArr[end].childNodes[0].innerHTML);
      
      //defining the pivot_index
      var pivot_index = start -1;

      barArr[end].style.backgroundColor = "red";
      for (var j = start; j <= end - 1; j++) {
        // To change background-color of the
        // barArr to be compared
        barArr[j].style.backgroundColor = "yellow";
        // To wait for 700 milliseconds
         await delay(700);

        var value = parseInt(barArr[j].childNodes[0].innerHTML);
      
        // To compare value of two barArr
        if (value < pivotValue) {
          pivot_index++;
          
          //swapping 
          swap(barArr, pivot_index, j);
      
          barArr[pivot_index].style.backgroundColor = "orange";

          if (pivot_index != j){
          barArr[j].style.backgroundColor = "pink";
         
          }
          await delay(700);
        }else {
           barArr[j].style.backgroundColor = "pink";
        }
      }
      // Swapping the pivot_index with pivot element
      pivot_index++;
      
      swap(barArr, pivot_index, end);
     

      barArr[end].style.backgroundColor = "pink";
      barArr[pivot_index].style.backgroundColor = "green";
      
      // To wait for 2100 milliseconds
      await delay(2100);
      
      for (var k = 0; k < barArr.length; k++) 
      barArr[k].style.backgroundColor = "#6b5b95";

      return pivot_index;
    }
      
    // Asynchronous QuickSort function
    async function QuickSort(start ,end) {
      if (start<  end) {
        // Storing the index of pivot element after partition
        var pivot_idx = await partition(start, end);
        // Recursively calling quicksort for left partition (left of pivot element)
        await QuickSort(start, pivot_idx - 1);
        // Recursively calling quicksort for right partition (right of pivot element)
        await QuickSort(pivot_idx + 1, end );
      }
    }


   


