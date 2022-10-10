

/*
Algorithm: SelectionSort 
(how does it works) : needs two loops ; Big O notation: n*2 (n square)
pseudoCode : 1.inside first loop assign minimum index to the first element
             2. next loop starts from the second element of array to last element 
             3. compare the minimum index with rest of the array
             4. If smaller than the minindex then new minIndex will becomes j
             5. swap the elements 
             6. continue loop until all elements are swaped and are sorted

*/
async function SelectionSort() {

    // getting the childnodes(elements) of the bar based upon user entering the length of array
    let barArr = document.querySelectorAll(".bar");
  
    // gettng 0 to minimum index
   var minIndex = 0;
   for (var i =0; i < barArr.length; ++i){
  
    // min index becomes i;
    minIndex = i;
   // giving darkblue color to current bar
   barArr[i].style.backgroundColor = "6b5b95";
  
    //inner loop
    for (var j = i + 1; j < barArr.length; j++){
   
      // assinging red so that we know which element is being compared 
      barArr[j].style.backgroundColor = "red";
  
         await delay(600);
        
         // getting the int value of jth bar  for comparing 
         var value1 = parseInt(barArr[j].childNodes[0].innerHTML);
    
         // To store the integer value of (minIndex)th bar to var2 
         var value2 = parseInt(barArr[minIndex].childNodes[0].innerHTML);
           
         // Compare val1 & val2
         if (value1 < value2) {
           if (minIndex !== i) {
     
             // if minIndex id not the first element then minIndex is changed 
             //and  skyblue color is applied to new  (min-idx)th bar 
             // 
             barArr[minIndex].style.backgroundColor = "rgb(24, 190, 255";
           }
           minIndex = j;
         } else {
           // Provide skyblue color to the jth bar
           
             barArr[j].style.backgroundColor = "rgb(24, 190, 255";
         
    }
    }
  
    // using swap function to swap the elements 
    swap(barArr, minIndex, i);

    await delay(600);
    
    // Provide skyblue color to the minimum Index for comparision against other elements in the array
    barArr[minIndex].style.backgroundColor = "rgb(24, 190, 255";
  
    // Providing green color which doentes the sorting 
    barArr[i].style.backgroundColor = " rgb(49, 226, 13)";
  
  
   }
  
  }
  