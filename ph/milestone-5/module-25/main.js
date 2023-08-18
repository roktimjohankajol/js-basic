// System = 2 for add event click
function systemTwo(){
    document.body.style.backgroundColor = 'blue';
}

// System = 3 for add event click 
const systemThree = document.getElementById('system3');
systemThree.onclick = systemThreeFunction;
function systemThreeFunction(){
    document.body.style.backgroundColor ='yellow';
}

// System = 4 for add event click 
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleFunction(){
    document.body.style.backgroundColor = 'purple';
}

// System = 5  use addEventListener  
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor='pink';
}

// system = 6 use addEventListener 

document.getElementById('make-green').addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});


// Option = 1 Text change by onclik attribute 
function makeChange(){
    document.getElementById('change-text').innerText='lorem ipsum by'; 
}

// Option = 2 Text change by use Add Event listsener

document.getElementById('text-change-by-litsener').addEventListener('click', function(){
    document.getElementById('change-text').innerText='Text Change by Add Event Litsener';
});


// Take input text & add the text in paragraph 

document.getElementById('text-update').addEventListener('click', function(){
    const inputText = document.getElementById('input-text');
    const inputField = inputText.value;

    const p = document.getElementById('add-text');
    p.innerText = inputField;
    inputText.value = '';

});



// Comments add litsener 

// Step - 1 
document.getElementById('add-comment-btn').addEventListener('click', function(){

    // Step - 2 
    const addPostText = document.getElementById('add-new-comments');
    const addPostAreaText = addPostText.value;

    // Step - 3 
    const addPostContent = document.getElementById('add-post-content');
    const p = document.createElement('p');
    p.innerText = addPostAreaText;
    addPostContent.appendChild(p);

    // Step - 4 
    addPostText.value = '';

});


// Delete file or text code like GitHub 

document.getElementById('input-delete').addEventListener('keyup', function(event){
    const textType = event.target.value;
    const deleteButton = document.getElementById('delete-btn');
    if( textType === 'Delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
});

document.getElementById('delete-btn').addEventListener('click', function(){
    const deleteText = document.getElementById('remove-text');
    deleteText.style.display = 'none';
    document.getElementById('input-delete').value = '';
});


// Item add & Remove That's Call Bubble 

document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});

document.getElementById('add-btn').addEventListener('click', function(event){

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = 'New Item added';
    li.classList.add('item');
    listContainer.appendChild(li);

});