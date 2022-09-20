(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. T/F - The purpose of a test technique, including those discussed in this section, is to help in identifying test conditions, test cases, and test data. .",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "2. Test techniques are classified as:",
      answers: {
        a: "White-box, black-box, or real-time.",
        b: "White-box, static, or experienced-based.",
        c: "Black-box, white-box, or experienced-based.",
        d: "Black-box, acceptance, or experienced-based."
      },
      correctAnswer: "c"
    },
    {
      question: "3. These techniques are also called behavioral or behavior-based techniques.",
      answers: {
        a: "White-box techniques",
        b: "Black-box techniques",
        c: "Experienced-based techniques",
        d: "Real time techniques"
      },
      correctAnswer: "b"
    },
    {
      question: "4. These techniques are also known as structural or structure-based techniques.",
      answers: {
        a: "White-box techniques",
        b: "Black-box techniques",
        c: "Experienced-based techniques",
        d: "Real time techniques"
      },
      correctAnswer: "a"
    },
    {
      question: "5. These test techniques leverage the experience of developers, testers and users to design, implement, and execute tests.",
      answers: {
        a: "White-box techniques",
        b: "Black-box techniques",
        c: "Experienced-based techniques",
        d: "Real time techniques."
      },
      correctAnswer: "c"
    },
    {
      question: "6. Test conditions, test cases, and test data are derived from a test basis that may include software requirements, specifications, use cases, and user stories describe these techniques.",
      answers: {
        a: "White-box techniques",
        b: "Black-box techniques",
        c: "Experienced-based techniques",
        d: "Real time techniques."
      },
      correctAnswer: "b"
    },
    {
      question: "7. Test conditions, test cases, and test data are derived from a test basis that may include knowledge and experience of testers, developers, users and other stakeholders describe these techniques.",
      answers: {
        a: "White-box techniques",
        b: "Black-box techniques",
        c: "Experienced-based techniques",
        d: "Real time techniques."
      },
      correctAnswer: "c"
    },
    {
      question: "8. Test conditions, test cases, and test data are derived from a test basis that may include code, software architecture, detailed design, or any other source of information regarding the structure of the software describe these techniques.",
      answers: {
        a: "White-box techniques",
        b: "Black-box techniques",
        c: "Experienced-based techniques",
        d: "Real time techniques"
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();