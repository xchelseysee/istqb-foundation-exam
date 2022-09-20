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
      question: "1. This type of testing relies on the manual examination of work products (i.e., reviews) or tool-driven evaluation of the code or other work products (i.e., static analysis).",
      answers: {
        a: "Dynamic testing",
        b: "Static testing",
        c: "User Acceptance testing",
        d: "Systemic testing"
      },
      correctAnswer: "b"
    },
    {
      question: "2. T/F - Static analysis is important for safety-critical computer systems (e.g., aviation, medical, or nuclear software), but static analsyis has also become important and common in other settings.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "3. T/F - Amost any work product can be examined using static testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "4. When applied ______ the software development lifecycle, static testing enables the early detection of defects before dynamic testing is performed (e.g., in requirements or design specifications reviews, backlog refinement, etc.).",
      answers: {
        a: "in the middle of",
        b: "early in",
        c: "late in",
        d: "continuous through"
      },
      correctAnswer: "b"
    },
    {
      question: "5. Static testing can be used to improve the consistency and ______ quality of work products, while dynamic testing typically focuses on ______ visible behaviors.",
      answers: {
        a: "externally, internally",
        b: "internally, externally",
        c: "short term, long term",
        d: "long term, short term"
      },
      correctAnswer: "b"
    },
    {
      question: "6. These types of reviews are characterized by not following a defined process and not having formal documented output.",
      answers: {
        a: "Formal",
        b: "Static",
        c: "Dynamic",
        d: "Informal"
      },
      correctAnswer: "d"
    },
    {
      question: "7. These types of reviews are characterized by team participation, documented results of the review, and documented procedures for conducting the review.",
      answers: {
        a: "Formal",
        b: "Static",
        c: "Dynamic",
        d: "Informal"
      },
      correctAnswer: "a"
    },
    {
      question: "8. T/F - The formality of a review process is related to factors such as the software development lifecycle model, the maturity of the development process, the complexity of the work product to be reviewed, any legal or regulatory requirements, and/or the need for an audit trail.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "9. T/F - The focus of a review depends on the agreed objectives of the review (e.g., finding defects, gaining understanding, educating participants such as testers and new team members, or discussing and deciding by consensus).",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "10. The review process comprises the following main activities:",
      answers: {
        a: "Planning, review of codes from beginning to end, issue communication, documentation.",
        b: "Planning, initial review, individual review, issue communication and analysis, fixing and reporting.",
        c: "Planning, initial review, individual review, issue communication and analysis.",
        d: "Initial review, planning, individual review, fixing and reporting defects, research."
      },
      correctAnswer: "b"
    },
    {
      question: "11. A typical formal review will include the roles below:",
      answers: {
        a: "Project Manager, Scrum Master, Lead Developer, and Lead Tester.",
        b: "Project Manager, Author, Review Leader, Tester individuals, and a Moderator.",
        c: "Author, Management, Facilitator, Review Leader, Reviewers, and Scribe.",
        d: "Author, Scrum Master, Scribe, and Reviewers."
      },
      correctAnswer: "c"
    },
    {
      question: "12. T/F - One person may never play more than one role in a review.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "13. T/F - With the advent of tools to support the review process, especially the logging of defects, open points, and decisions, there is often no need for a scribe.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "14. The following lists the four most common types of reviews and their associated attributes.",
      answers: {
        a: "Formal Review, Walkthrough, Technical Review, and Inspection.",
        b: "Formal Review, Informal Review, Walkthrough, and Technical Review.",
        c: "Informal Review, Formal Review, Walkthrough, Inspection.",
        d: "Informal Review, Walkthrough, Technical Review, and Inspection."
      },
      correctAnswer: "d"
    },
    {
      question: "15. ",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "16. This review technique is needs little preparation and is highly dependent on reviewer skills and may lead to many duplicate issues being reported by different reviewers.",
      answers: {
        a: "Perspective-based",
        b: "Scenarios and dry runs",
        c: "Checklist-based",
        d: "Ad hoc"
      },
      correctAnswer: "d"
    },
    {
      question: "17. This review technique is a systematic technique. The reviewers detect issues based on checklists that are distributed at review initiation.",
      answers: {
        a: "Perspective-based",
        b: "Scenarios and dry runs",
        c: "Checklist-based",
        d: "Ad hoc"
      },
      correctAnswer: "c"
    },
    {
      question: "18. In this review technique, reviewers are provided with structured guidelines on how to read through the work product.",
      answers: {
        a: "Ad hoc",
        b: "Checklist-based",
        c: "Role-based",
        d: "Scenarios and dry runs"
      },
      correctAnswer: "d"
    },
    {
      question: "19. In this review technique, the reviewers take on different stakeholder viewpoints in individual reviewing. Typical stakeholder viewpoints include end user, marketing, designer, tester, or operations. Using different stakeholder viewpoints leads to more depth in individual reviewing with less duplication of issues across reviewers.",
      answers: {
        a: "Ad hoc",
        b: "Checklist-based",
        c: "Role-based",
        d: "Perspective-based"
      },
      correctAnswer: "d"
    },
    {
      question: "20.This review technique have the reviewers evaluate the work product from the perspective of individual stakeholder roles. Typical roles include specific end user types (experienced, inexperienced, senior, child, etc.), and specific roles in the organization (user administrator, system administrator, performance tester, etc.).",
      answers: {
        a: "Ad hoc",
        b: "Checklist-based",
        c: "Role-based",
        d: "Scenarios and dry runs"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();