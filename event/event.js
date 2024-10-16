// document.getElementById("red").onclick = function () {
//     alert("red button clicked");
// };
// document.getElementById("red").addEventListener("click", function () {
//     alert("button clicked"), false
// })

// type, timestamp, defaultprevent, target, toelement,
//  srcelemrt, currentTarget.clientx,clienty,screenx,screeny


// document.getElementById("button").addEventListener("click", function () {
//     console.log("UI clicked");
// })
//bubble type event propagation( fron child to parent)
// document.getElementById("red").addEventListener("click", function () {
//     console.log("red button clikced");
// }, false)


// event propagation( fron parent to child)
// document.getElementById("red").addEventListener("click", function () {
//     console.log("red button clikced");
// }, true)

// want to remove element on click

document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.tagName)
    if (e.target.tagName == "BUTTON") {
        let removeIt = e.target.parentNode
        removeIt.remove()
        removeIt.parentNode.ch
    }
})
