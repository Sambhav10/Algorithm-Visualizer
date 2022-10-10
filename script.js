
const container = document.querySelector(".main_div");

// function to generate bars 
function generatebars( ) {

 var num = document.getElementById("sizeArray").value;

 
for (let i = 0; i < num; i += 1) {
  //generation random values 
  const value = Math.floor(Math.random() * 100) + 10; 
  //creating a div 
  const bar = document.createElement("div");
  //adding the bar to class list 
  bar.classList.add("bar");
  // giving height to the bar 
  bar.style.height = `${value * 3}px`;
 // designing the bar 
 bar.style.transform = `translateX(${i * 30}px)`;
 // adding label for the numbers
  const barLabel = document.createElement("label");
  barLabel.classList.add("barLabel");
  barLabel.innerHTML = value;
    // adding barLabel to bar 
  bar.appendChild(barLabel);
 // adding bar to the container 
  container.appendChild(bar);
}
}

// swap function whcih swaps the elements(chidnodes) 
// childnodes[0] = first elements of the array
function swap ( array, min, i){
  var temp1 = array[min].style.height;
  var temp2 = array[min].childNodes[0].innerText;
  array[min].style.height = array[i].style.height;
  array[i].style.height = temp1;
  array[min].childNodes[0].innerText = array[i].childNodes[0].innerText;
  array[i].childNodes[0].innerText = temp2;
    
 
}





// creating a Promise for some delay by using setTimeout function
var delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}


function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("genArray").disabled = true;
  document.getElementById("genArray").style.backgroundColor = '#00B7FF';
  
}



/*
disable Functions
disables the specific buttons upon clicks 
*/

function disableSelection (){

  document.getElementById("selection").disabled = true;
  document.getElementById("selection").style.backgroundColor = '#00B7FF';
}
function disableBubble (){
  document.getElementById("bubble").disabled = true;
  document.getElementById("bubble").style.backgroundColor = '#00B7FF';
}

function disableInsertion (){
  document.getElementById("insertion").disabled = true;
  document.getElementById("insertion").style.backgroundColor = '#00B7FF';
}

function disableHeap (){
  document.getElementById("heap").disabled = true;
  document.getElementById("heap").style.backgroundColor = '#00B7FF';
}

function disableQuick(){
  document.getElementById("quick").disabled = true;
  document.getElementById("quick").style.backgroundColor = '#00B7FF';
}


//calling Quick sort by using Event Listener  to pass the parameters  to QuickSort function 
document.getElementById("quick").addEventListener("click", function(){ 
  var barArr = document.querySelectorAll(".bar"); 
  QuickSort(0, barArr.length-1);
});


//calling the function to generate the array
generatebars();

// calling InsertionSort
InsertionSort();

//calling SelectionSort
SelectionSort();

//calling BubbleSort 
BubbleSort();

//calling HeappSort 
HeapSort();


