// retrieves all elements in the document with the class name "question"
let question = document.getElementsByClassName("question");

let i;

for (i = 0; i < question.length; i++) {
  //attaches a click event listener to each question element
  question[i].addEventListener("click", function () {
    //toggles the "active" class on the clicked question element
    this.classList.toggle("active");
    //selects the next sibling element of the clicked question... the answer
    let answer = this.nextElementSibling;
    //checks if answer is visible
    if (answer.style.display === "block") {
      answer.style.display = "none"; // hides the answer
    } else {
      answer.style.display = "block"; //makes the answer visible
    }
  });
}
