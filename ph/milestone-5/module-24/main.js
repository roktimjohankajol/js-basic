
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

//  *********************** How to add new innerText in the child 

const placesNewList = document.getElementById('palces-new-list');

const li = document.createElement('li');
li.innerText = 'Day 6';

placesNewList.appendChild(li);

*/


/*********************** Add innerHTML 

const addSection = document.getElementById('new-section-places');

const sectionAdd = document.createElement('section');

sectionAdd.innerHTML = `
<h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h1>This is our goal</h1>
    <ul>
        <li>Day 1</li>
        <li>Day 2</li>
        <li>Day 3</li>
        <li>Day 4</li>
        <li>Day 5</li>
    </ul>
`
addSection.appendChild(sectionAdd);

 */
