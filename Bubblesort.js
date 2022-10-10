

/*
Algorithm: BubbleSort 
(how does it works) : needs two loops ; 
pseudoCode : 1.first loop goes through the entire list and finds the largest and puts the element at the last 
             2. next loop starts from the second last and compares to next adjacent element 
             3. if the value is smaller then next adjacent then swaps the position
             4. continue to check with every unsorted elements 
             5.  continues the loop until array is sorted 
          
*/
async function BubbleSort() {
    var barArr = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < barArr.length; i++) {
        for (var j = 0; j < barArr.length - i - 1; j++) {
  
            // To change background-color of the
            // blocks to be compared
            barArr[j].style.backgroundColor = "red";
            barArr[j + 1].style.backgroundColor = "red";
  
            // setting  timeOut to pause the function
            await delay(600);
          
           // getting elements for comparision
            var value1 = parseInt(barArr[j].childNodes[0].innerHTML);
            var value2 = parseInt(barArr[j + 1] .childNodes[0].innerHTML);
  
            // To compare value of two bars
            if (value1 > value2) {
                
              swap(barArr, j, j+1);
                 barArr = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            barArr[j].style.backgroundColor = "#6b5b95";
            barArr[j + 1].style.backgroundColor = "rgb(49, 226, 13)";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        barArr[barArr.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
    }
  }
  
  