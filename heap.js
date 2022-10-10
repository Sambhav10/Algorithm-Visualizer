


/*
Algorithm: Heap Sort  
(
process : 1.first we need to create a heap which find out the largest number in the array which is root element
             2. elminate the root element and swaps the elements to put into the sorted list array
             3. make next largest number the root element and divide the bniary tree into two parts
             4. and find the next root element 
             4.continue the process 
             5.  continues the heapify until array is sorted 
          
*/



async function Heapify(n, i) {
    var barArr = document.querySelectorAll(".bar");

   
    
    var largest = i; // Initialize largest as root
    var left = 2 * i + 1; // left = 2*i + 1
    var right = 2 * i + 2; // right = 2*i + 2
    
    // If left child is larger than root
    if (left < n && parseInt(barArr[left].childNodes[0].innerHTML) > parseInt(barArr[largest].childNodes[0].innerHTML)){
      largest = left;
     
    }
    // If right child is larger than largest so far
    if ( right < n && parseInt(barArr[right].childNodes[0].innerHTML) >parseInt(barArr[largest].childNodes[0].innerHTML)){
      largest = right;
     
    }
    
    // If largest is not root
    if (largest != i) {
        swap(barArr, i, largest);
        barArr[largest].style.backgroundColor = "pink";
      await delay(600);
    
      // Recursively Hapify the affected sub-tree
      await Heapify(n, largest);
    }
  }
    
  // Asynchronous HeapSort function
  async function HeapSort() {
    var barArr = document.querySelectorAll(".bar");
    
    var n = barArr.length;
    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2 - 1); i >= 0; i--) {
      await Heapify(n, i);
    }
    
    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
    
      // Move current root to end
      swap(barArr, 0, i);
      barArr[i].style.backgroundColor = "rgb(49, 226, 13)";
     
     
      await delay(600);
      // Call max Heapify on the reduced heap
      await Heapify(i, 0);
    }
    barArr[0].style.backgroundColor = "rgb(49, 226, 13)";
  }
    

  // Calling HeapSort function
