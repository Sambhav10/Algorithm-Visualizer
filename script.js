const container = document.querySelector(".main_div");

function generatebars( ) {

    num = document.getElementById("sizeArray").value;
  for (let i = 0; i < num; i += 1) {

    const value = Math.floor(Math.random() * 100) + 10; 

    const bar = document.createElement("div");

    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
   
    bar.style.transform = `translateX(${i * 30}px)`;
   
    const barLabel = document.createElement("label");
  

    barLabel.classList.add("barLabel");
  

    barLabel.innerHTML = value;
      

    bar.appendChild(barLabel);
  
 
    container.appendChild(bar);
  }
}



 function generateArray()
{
    generatebars();
 }
  
 function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("genArray").disabled = true;
  document.getElementById("genArray").style.backgroundColor = '#00B7FF';
  
 
}
let barArr = document.querySelectorAll(".bar");

console.log(barArr.length);


//selection sort 
function selectionSort(barArr){
for (let i=0; i< barArr.length; i++){
  let min = i;
   for (let j = i + 1;  i < n;  j++){
    if (inputArr[j] < inputArr[min] ){
      min = j;
    }
   }
   if (min != j) {

    let temp = barArr[i];
    barArr[i] = barArr[min];
    barArr[min] = temp;
   }

}
return barArr;
}















