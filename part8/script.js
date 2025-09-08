// Example-1

// 1.add event listener and get the element

document.getElementById('changeTextButton').addEventListener('click', function (){
  //console.log(this);

  let paragraph = document.getElementById("myParagraph");
  //console.log(paragraph);
  //console.log(paragraph.textContent);
  
  paragraph.textContent = "The Paragraph is changed"
});



// Example-2 Traversing the DOM

document.getElementById('highlightFirstCity').addEventListener('click', function () {
  console.log(this);
  let citiesList = document.getElementById('citiesList');
  citiesList.firstElementChild.classList.add('highlight');
}
);


// Example -3  -Manipulation DOM Elements

document.getElementById("changeOrder").addEventListener('mouseover',function (){
  let coffeType = document.getElementById('coffeeType');
  coffeType.textContent = "Espresso";
  coffeType.style.backgroundColor = "red";
  coffeType.style.padding = "10px";
})


// Example-4: Creating and Inserting Elements

// Process: we have to create Element item and later insert

document.getElementById("addNewItem").addEventListener('click', function(){
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);

});


// Example-5 -> Removing DOM Elements

document.getElementById("removeLastTask").addEventListener("click", function (){
  console.log(this);
  
  let lastTask = document.getElementById("taskList");
  console.log(lastTask);
  lastTask.lastElementChild.remove();
});


// Example-6 -> Event Handling in DOM
/*
document.getElementById("clickMeButton").addEventListener('dblclick', function(event) {
  alert("Events in DOM");
})*/
document.getElementById("clickMeButton").addEventListener("mouseup", function(){
  alert("Events in DOM");
})
// mouseover,click,etc



// Example-7 -> Event Delegation


document.getElementById('teaList').addEventListener('click', function(event){
  if (event.target && event.target.matches(".teaItem")){
    alert('you selected:'+ event.target.textContent);
  };
});


// Example-8 --> Form Handling

/*
document.getElementById("feedbackForm").addEventListener("click", function(event){
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput").value;
  document.getElementById('feedbackDisplay').textContent = `Feedback is: ${feedback}`;
});

*/
document.getElementById("feedbackForm").addEventListener("click",function(event){
  event.preventDefault();
 
  //let label = document.getElementsByTagName("label")
  //console.log(label);
  
  let feedback = document.getElementById("feedbackInput").value;
  document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`
})


// Example-9 : DOM Contented Loaded

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});
 

// Example-10: CSS CLasses Manipulation

document.getElementById("toggleHighlight").addEventListener('click',function(){
 let descriptionText =  document.getElementById("descriptionText");
 descriptionText.classList.toggle('highlight');
})





