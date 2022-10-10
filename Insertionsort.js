

/*
Algorithm: InsertionSort
(how does it works) : needs two loops ; Big O notation: n*2 (n square)
pseudoCode : 1.mark the first element of the array
             2. getting last element of our sorted array
             3. cheked if its greater or equal to zero and current marked element is less than arr[j]
             4. If smaller shift element to right and add the current index elemnt to sorted subarray
             6. continue loop until all elements  are sorted

*/
async function InsertionSort(){ 
  
    // / getting the childnodes(elements) of the bar based upon user entering the length of array
    let barArr = document.querySelectorAll(".bar");
  
    //maring the first element
    barArr[0].style.backgroundColor = "darkblue";
  
    //outer loop
    for (let i = 1; i < barArr.length; ++i){
     
      //assgning j to be lesser than i 
      var j = i-1;
      // getting  value of bararr 
      const current = parseInt(barArr[i].childNodes[0].innerHTML);
  
      //styling  the current var with background color orange 
      barArr[i].style.backgroundColor = "darkblue";
  
      // keeping track of height to swap the element
      var height = barArr[i].style.height;
      
        // To pause the execution of code for 600 milliseconds
         await delay(300);
  
          // For placing selected element at its correct position 
      while (j >= 0 && parseInt(barArr[j].childNodes[0].innerHTML) > current) {
          
        // Provide darkblue color to the jth bar
        barArr[j].style.backgroundColor = "orange";
          
        // For placing jth element over (j+1)th element
        barArr[j + 1].style.height = barArr[j].style.height;
        barArr[j + 1].childNodes[0].innerText =  barArr[j].childNodes[0].innerText;
    
        // Assign j-1 to j
        j = j - 1;
  
        await delay(300);
          
        // Provide lightgreen color to the sorted part
        for(var k=i;k>=0;k--){
          barArr[k].style.backgroundColor = " rgb(49, 226, 13)";
        }
      }
    
      // Placing the selected element to its correct position
      barArr[j + 1].style.height = height;
      barArr[j + 1].childNodes[0].innerHTML = current;
      
        
      // Provide light green color to the ith bar
      barArr[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
  
  }
  
  