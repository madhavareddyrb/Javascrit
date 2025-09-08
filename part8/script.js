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











