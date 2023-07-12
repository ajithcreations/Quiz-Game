var quiz = document.getElementById('quiz');
var result = document.getElementById('result');
var questions = [
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "Who painted the famous artwork 'Mona Lisa'?",
    options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
    answer: 1
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Perth"],
    answer: 1
  },
  {
    question: "Who wrote the novel 'Pride and Prejudice'?",
    options: [" Jane Austen", "William Shakespeare", "Charles Dickens", "George Orwell"],
    answer: 0
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: 1
  }
  // Add more questions here...
];

function generateQuiz() {
  var output = "";
  for (var i = 0; i < questions.length; i++) {
    output += "<h3>" + questions[i].question + "</h3>";
    for (var j = 0; j < questions[i].options.length; j++) {
      output += "<label><input type='radio' name='question" + i + "' value='" + j + "'>" + questions[i].options[j] + "</label><br>";
    }
    output += "<br>";
  }
  quiz.innerHTML = output;
}

function submitQuiz() {
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    var selectedOption = document.querySelector("input[name=question" + i + "]:checked");
    if (selectedOption !== null && parseInt(selectedOption.value) === questions[i].answer) {
      score++;
    }
  }
  result.innerHTML = "Your score: " + score + "/" + questions.length;
}

generateQuiz();
