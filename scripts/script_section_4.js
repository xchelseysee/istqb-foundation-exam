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
      question: "1. T/F - The purpose of a test technique, including those discussed in this section, is to help in identifying test conditions, test cases, and test data.",
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
    },
    {
      question: "9. T/F - Equivalence partitioning is a Black-box Technique. It divides data into partitions (also known as equivalence classes) in such a way that all the members of a given partition are expected to be processed in the same way.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "10. These values should be accepted by the component or system.",
      answers: {
        a: "Valid values",
        b: "Invalid values",
        c: "Liquid values",
        d: "Solid values"
      },
      correctAnswer: "a"
    },
    {
      question: "11. These values should be rejected by the component or system.",
      answers: {
        a: "Valid values",
        b: "Invalid values",
        c: "Liquid values",
        d: "Solid values"
      },
      correctAnswer: "b"
    },
    {
      question: "12. An equivalence partition containing valid values is called _______.",
      answers: {
        a: "Liquid equivalence partition.",
        b: "Solid equivalence partition.",
        c: "Valid equivalence partition.",
        d: "Invalid equivalence partition."
      },
      correctAnswer: "c"
    },
    {
      question: "13. An equivalence partition containing invalid values is called _______.",
      answers: {
        a: "Liquid equivalence partition.",
        b: "Solid equivalence partition.",
        c: "Valid equivalence partition.",
        d: "Invalid equivalence partition."
      },
      correctAnswer: "d"
    },
    {
      question: "14. T/F - Each value must belong to one and only one equivalence partition.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "15. T/F - When invalid equivalence partitions are used in test cases, they should be tested individually, i.e., not combined with other invalid equivalence partitions, to ensure that failures are not masked. ",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "16. To achieve 100% coverage using equivalence partitioning technique, test cases must cover _______.",
      answers: {
        a: "half of all indentified partitions by using a minimum of one value from each partition.",
        b: "all identified partitions by using a minimum of one value from each partition.",
        c: "10% of all identified partitions by using a minimum of one value from each partition.",
        d: "75% of all identified partitions by using a minimum of one value from each partition."
      },
      correctAnswer: "b"
    },
    {
      question: "17. Boundary Value Analysis is a Black-box technique. It is an extension of equivalence partitioning, but can only be used when ______. The minimum and maximum values (or first and last values) of a partition are its boundary values.",
      answers: {
        a: "the partition is ordered, consisting of only sequential data.",
        b: "the partition is ordered, consisting of only numeric data.",
        c: "he partition is ordered, consisting of numeric or sequential data.",
        d: "the partition is ordered, consisting of partial data."
      },
      correctAnswer: "c"
    },
    {
      question: "18. T/F - Boundary value analysis can be applied at all test levels.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "19. Decision Table Testing is a Black-box technique. Decision tables are a good way to record _______ that a system must implement.",
      answers: {
        a: "complex scope of work",
        b: "complex coding languages",
        c: "complex user stories",
        d: "complex business rules"
      },
      correctAnswer: "d"
    },
    {
      question: "20. This black-box technique diagram shows the possible software states, as well as how the software enters, exits, and transitions between states.",
      answers: {
        a: "Boundary Value Analysis",
        b: "Decision Table Testing",
        c: "State Transition Testing",
        d: "Equivalence Partitioning"
      },
      correctAnswer: "c"
    },
    {
      question: "21. A transition is initiated by ______. The ______ results in a transition.",
      answers: {
        a: "an event",
        b: "an API",
        c: "bad codes",
        d: "a defect"
      },
      correctAnswer: "a"
    },
    {
     question: "22. Use Case Technique is a black-box technique. Tests can be derived from use cases, which are a specific way of designing ______ with software items.",
     answers: {
      a: "aesthetics",
      b: "interactions",
      c: "transitions",
      d: "movements"
     },
     correctAnswer: "b"
    },
    {
      question: "23. Which one below is not a White-box test techniques?",
      answers: {
        a: "Transition Testing and Coverage",
        b: "Statement Testing and Coverage",
        c: "Decision Testing and Coverage",
        d: "Interactive Testing and Coverage"
      },
      correctAnswer: "a"
    },
    {
      question: "24. This white-box test technique exercises the potential executable statements in the code. Coverage is measured as the number of statements executed by the tests divided by the total number of executable statements in the test object, normally expressed as a percentage.",
      answers: {
        a: "Transition Testing and Coverage",
        b: "Statement Testing and Coverage",
        c: "Decision Testing and Coverage",
        d: "Interactive Testing and Coverage"
      },
      correctAnswer: "b"
    },
    {
      question: "25. This white-box test technique exercises the decisions in the code and tests the ode that is executed based on the decision outcomes. To do this, the test cases follow the control flows that occur from a decision point (e.g., for an IF statement, one for the true outcome and one for the false outcome; for a CASE statement, test cases would be required for all the possible outcomes, including the default outcome).",
      answers: {
        a: "Transition Testing and Coverage",
        b: "Statement Testing and Coverage",
        c: "Decision Testing and Coverage",
        d: "Interactive Testing and Coverage"
      },
      correctAnswer: "c"
    },
    {
      question: "26. When applying experience-based test techniques, the test cases are derived from the tester’s ____ and ____, and their experience with similar applications and technologies.",
      answers: {
        a: "skill and history",
        b: "skill and intuition",
        c: "history and intuition",
        d: "history and documentation"
      },
      correctAnswer: "b"
    },
    {
      question: "27. These techniques can be helpful in identifying tests that were not easily identified by other more systematic techniques.",
      answers: {
        a: "Black-box test techniques",
        b: "White-box test techniques",
        c: "Experience-based test techniques",
        d: "Regression test techniques"
      },
      correctAnswer: "c"
    },
    {
      question: "28. One of the four listed below are not an experience-based test techniques.",
      answers: {
        a: "Error Guessing",
        b: "Exploratory Testing",
        c: "Automation Testing",
        d: "Checklist-based Testing"
      },
      correctAnswer: "c"
    },
    {
      question: "29. This technique is a technique used to anticipate the occurrence of errors, defects, and failures, based on the tester’s knowledge.",
      answers: {
        a: "Error Guessing",
        b: "Exploratory Testing",
        c: "Automation Testing",
        d: "Checklist-based Testing"
      },
      correctAnswer: "a"
    },
    {
      question: "30. In this technique, informal (not pre-defined) tests are designed, executed, logged, and evaluated dynamically during test execution. The test results are used to learn more about the component or system, and to create tests for the areas that may need more testing.",
      answers: {
        a: "Error Guessing",
        b: "Exploratory Testing",
        c: "Automation Testing",
        d: "Checklist-based Testing"
      },
      correctAnswer: "b"
    },
    {
      question: "31. This technique can be created to support various test types, including functional and non-functional testing. In the absence of detailed test cases, this testing can provide guidelines and a degree of consistency. As these are high-level lists, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability.",
      answers: {
        a: "Error Guessing",
        b: "Exploratory Testing",
        c: "Automation Testing",
        d: "Checklist-based Testing"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}