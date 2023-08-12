
/* ***************************** Module 24-2 

const allListItem = document.getElementsByTagName('li');

for( const li of allListItem){
    document.write(li.innerText + '<br>');
}

const allHeadingTag = document.querySelectorAll('h1, h2');

for( const h1H2 of allHeadingTag){
    document.write('<h1>' + h1H2.innerText + '<h1>');
}


*/

// document.getElementById('test').style.color = 'red';

// let elements = document.getElementsByClassName('testClass')[0].style.color = 'red';

/* ************************************** How to add Class 

const addClass = document.getElementById('test');

addClass.classList.add('newClass');

*/
/*

//  *********************** How to add new Element in the child 

const placesNewList = document.getElementById('palces-new-list');

const li = document.createElement('li');
li.innerText = 'Day 6';

placesNewList.appendChild(li);

*/



