// Example-1

// 1.add event listener and get the element

document.getElementById('changeTextButton').addEventListener('click', function (){
  //console.log(this);

  let paragraph = document.getElementById("myParagraph");
  //console.log(paragraph);
  //console.log(paragraph.textContent);
  
  paragraph.textContent = "The Paragraph is changed"
});

/*
Conclusion for Example 1:
0.First get elemnt on what event id and later add get element of what need to chnage
1.whole html file is document thats the reason why documnet works to get elements of html
2.There are differnt methods to get element by getElementById(specific to only id) but there are querySelectors(#idname) they are differnt not much specific to id or class for that we use querySelectors(#idnmae) and querySelectors(.classname)
3.addEventLister comes with 2 paramters one for event and one for function what need to do here we use click event because when we click on button need to change paragraph
4.Use Only function (){}(normal functions) beacuse it give us the exact context we can check using console.log(this) and on otherhand when we use arrow functions it gives us window context so it not recommended
5.for changing get element need to change store i variable and by using innerHtml,innerText,TextContent we chnage the text or content inside html

*/

// Example-2

document.getElementById(highlightFirstCity).addEventListener('click', function (){
  let citiesList = document.getElementsById('citiesList');
  citiesList.firstElementChild.classList.add('highlight');
  
}
);
