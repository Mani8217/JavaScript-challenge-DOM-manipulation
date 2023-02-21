/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
   

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const listOfParra = document.querySelectorAll('p');
console.log(listOfParra);

const div1 = document.querySelector('.site-header');
console.log(div1);

const jumbo = document.querySelector('#jumbotron-text');
console.log(jumbo);






/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const button = document.querySelector('#alertBtn');
button.addEventListener('click',function() {
    alert('Thanks for visiting Bikes for Refugees!');
})
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const colors = ['red', 'blue', 'gray', 'pink', 'yellow'];
const colorButton = document.querySelector('#bgrChangeBtn');
let i=0 ;
colorButton.addEventListener('click', function() {
  if(i >= colors.length) {
    i = 0
  }else {
    document.querySelector('body').style.backgroundColor = colors[i]
    i++
  }
})

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const mainArticle = document.querySelector('#mainArticles');
const addTextButton = document.querySelector('#addTextBtn');

    const textContainer= document.createElement('p');
    textContainer.innerText = "this text was added by Mani";
    const article= document.createElement('article');
    article.appendChild(textContainer);

addTextButton.addEventListener('click', function() {
    mainArticle.appendChild(article);
})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
 const links = document.querySelectorAll('a');
document.querySelector('#largerLinksBtn').addEventListener('click', function() {
    links.forEach(link => link.style.fontSize = 32 + 'px')
})
links.forEach(link => {
    link.style.fontSize= 32 + 'px'
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
