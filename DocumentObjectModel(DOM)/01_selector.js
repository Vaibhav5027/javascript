document.getElementById('id');
document.getElementsByClassName("className")
document.querySelector("tagName");// it will give the first name
document.querySelectorAll()// it will give you the collection of all tags

innerText// it will give the containt which are visible to the user
textContent// it will shows the all in conatint inclusing hiiden part
innerHTML//  it will give all html 


const tag = document.querySelector("tagName");
tag.style.color = ""  // like this we can add all the properties

const tag = document.querySelectorAll(); //ut will give you nodelist
tag[0].style.color = "green"; 