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
      question: "1. T/F - Test tools can be used to support one or more testing activities.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "2. There are several test tools. Which one of the listed below is not a testing tool?",
      answers: {
        a: "Tools that are directly used in testing, such as test execution tools and test data preparation tools.",
        b: "Tools that are used for analysis and evaluation.",
        c: "Tools that are used to make coding easier.",
        d: "Tools that help to manage requirements, test cases, test procedures, automated test scripts, test results, test data, and defects, and for reporting and monitoring test execution."
      },
      correctAnswer: "c"
    },
    {
      question: "3. Test tools can have one or more of the following purposes depending on the context. Which one is not a purpose?",
      answers: {
        a: "Improve the efficiency of test activities by automating repetitive tasks or tasks that require significant resources when done manually.",
        b: "Improve the efficiency of test activities by supporting manual test activities throughout the test process.",
        c: "Improve the quality of test activities by allowing for more consistent testing and a higher level of defect reproducibility.",
        d: "Improve code refactoring timelines."
      },
      correctAnswer: "d"
    },
    {
      question: "4. T/F - Some tools clearly support only or mainly one activity; others may support more than one activity, but are classified under the activity with which they are most closely associated.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "5. T/F - Some types of test tools can be intrusive, which means that they do not affect the actual outcome of the test.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "6. Examples of tools that support management of testing and testware include:",
      answers: {
        a: "Test management tools and application lifescyle management tools; requirements management tools; defect management tools; configuration mangement tools; and continuous integration tools.",
        b: "Test management tools and application lifecycle management tools are all you need.",
        c: "There are no tools for support management of testing and testware.",
        d: "Test management tools and application lifecycle management tools; defect management tools; debugging tools."
      },
      correctAnswer: "a"
    },
    {
      question: "7. T/F - Static analysis tools are used to support static testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "8. Many tools exist to support and enhance test execution and logging activities. Which one below is not an example of these tools?",
      answers: {
        a: "Test execution tools (e.g., to run regression tests).",
        b: "Coverage tools (e.g., requirements coverage, code coverage (D)).",
        c: "Test harnesses (D).",
        d: "Test monitoring."
      },
      correctAnswer: "d"
    },
    {
      question: "9. T/F - Performance measurement and dynamic analysis tools are essential in supporting performance and load testing activities, as these activities cannot effectively be done manually.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "10. T/F - Simply acquiring a tool does not guarantee success. There are potential benefits and opportunities with the use of tools in testing, but there are also risks.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "11. T/F - Test execution tools execute test objects using automated test scripts. This type of tools often requires significant effort in order to achieve significant benefits.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "12. Capturing tests by recording the actions of a manual tester seems attractive, but this approach does not scale to large numbers of test scripts. A captured script is a linear representation with specific data and actions as part of each script. This type of script may be unstable when unexpected events occur, and require ongoing maintenance as the system’s user interface evolves over time. Which approach is this?",
      answers: {
        a: "Capturing test approach",
        b: "Firm detecting approach",
        c: "Data-driven test approach",
        d: "Keyword-driven test approach"
      },
      correctAnswer: "a"
    },
    {
      question: "13. This test approach, a generic script processes keywords describing the actions to be taken (also called action words), which then calls keyword scripts to process the associated test data. Which approach is this?",
      answers: {
        a: "Capturing test approach",
        b: "Firm detecting approach",
        c: "Data-driven test approach",
        d: "Keyword-driven test approach"
      },
      correctAnswer: "d"
    },
    {
      question: "14. This test approach separates out the test inputs and expected results, usually into a spreadsheet, and uses a more generic test script that can read the input data and execute the same test script with different data. Which approach is this?",
      answers: {
        a: "Capturing test approach",
        b: "Firm detecting approach",
        c: "Data-driven test approach",
        d: "Keyword-driven test approach"
      },
      correctAnswer: "c"
    },
    {
      question: "15. Test management tools often need to interface with other tools or spreadsheets for various reasons. Which one below is not a reason?",
      answers: {
        a: "To produce consistent debugging results.",
        b: "To produce useful information in a format that fits the needs of the organization.",
        c: "To maintain consistent traceability to requirements in a requirements management tool.",
        d: "To link with test object version information in the configuration management tool."
      },
      correctAnswer: "a"
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