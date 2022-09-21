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
      question: "1. T/F - A certain degree of independence often makes the tester more effective at finding defects due to differences between the author’s and the tester’s cognitive biases",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "2. For most types of projects, it is usually best to have ______.",
      answers: {
        a: "one test level.",
        b: "multiple test levels.",
        c: "no test level.",
        d: "exhaustive test levels."
      },
      correctAnswer: "b"
    },
    {
      question: "3. T/F - Tests should be handled by independent testers. Developers should never participate in testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "4. Benefit or drawback? Independent testers are likely to recognize different kinds of failures compared to developers because of their different backgrounds, technical perspectives, and biases.",
      answers: {
        a: "Benefit of test independence",
        b: "Drawback of test independence"
      },
      correctAnswer: "a"
    },
    {
      question: "5. Benefit or drawback? Isolation from the development team, may lead to a lack of collaboration, delays in providing feedback to the development team, or an adversarial relationship with the development team.",
      answers: {
        a: "Benefit of test independence",
        b: "Drawback of test independence"
      },
      correctAnswer: "b"
    },
    {
      question: "6. Benefit or drawback? An independent tester can verify, challenge, or disprove assumptions made by stakeholders during specification and implementation of the system.",
      answers: {
        a: "Benefit of test independence",
        b: "Drawback of test independence"
      },
      correctAnswer: "a"
    },
    {
      question: "7. Benefit or drawback? Developers may lose a sense of responsibility for quality.",
      answers: {
        a: "Benefit of test independence",
        b: "Drawback of test independence"
      },
      correctAnswer: "b"
    },
    {
      question: "8. Benefit or drawback? Independent testers of a vendor can report in an upright and objective manner about the system under test without (political) pressure of the company that hired them.",
      answers: {
        a: "Benefit of test independence",
        b: "Drawback of test independence"
      },
      correctAnswer: "a"
    },
    {
      question: "9. Benefit or drawback? Independent testers may lack some important information (e.g., about the test object).",
      answers: {
        a: "Benefit of test independence",
        b: "Drawback of test independence"
      },
      correctAnswer: "b"
    },
    {
      question: "10. T/F -  The test management role might be performed by a professional test manager, or by a project manager, a development manager, or a quality assurance manager.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "11. Who coordinate the test plan(s) with project managers, product owners, and others?",
      answers: {
        a: "Lead developer",
        b: "Tester",
        c: "Client",
        d: "Test manager"
      },
      correctAnswer: "d"
    },
    {
      question: "12. Who analyze, review, and assess requirements, user stories and acceptance criteria, specifications, and models for testability (i.e., the test basis)?",
      answers: {
        a: "Lead developer",
        b: "Tester",
        c: "Client",
        d: "Test manager"
      },
      correctAnswer: "b"
    },
    {
      question: "13. T/F - At the acceptance test level, the role of a tester is often done by business analysts, subject matter experts, and users.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "14. T/F - At the system test level and the system integration test level, the role of a tester is often done by an independent test team.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "15. T/F - At the operational acceptance test level, the role of a tester is often done by operations and/or systems administration staff.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "16. ____ outlines test activities for development and maintenance projects.",
      answers: {
        a: "Test Case",
        b: "Scope of Work",
        c: "Standard and Process",
        d: "Test Plan"
      },
      correctAnswer: "d"
    },
    {
      question: "17. T/F - Test planning is a continuous activity and is performed throughout the product's lifecycle.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "18. T/F - Planning may be documented in a master test plan and in separate test plans for test levels, such as system testing and acceptance testing, or for separate test types, such as usability testing and performance testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "19. This type of test strategy is based on an analysis of some factor (e.g., requirement or risk). Risk-based testing is an example of an analytical approach, where tests are designed and prioritized based on the level of risk.",
      answers: {
        a: "Model-Based",
        b: "Methodical",
        c: "Analytical",
        d: "Process-compliant"
      },
      correctAnswer: "c"
    },
    {
      question: "20. This type of test strategy relies on making systematic use of some predefined set of tests or test conditions, such as a taxonomy of common or likely types of failures, a list of important quality characteristics, or company-wide look-and-feel standards for mobile apps or web pages.",
      answers: {
        a: "Model-Based",
        b: "Methodical",
        c: "Analytical",
        d: "Process-compliant"
      },
      correctAnswer: "b"
    },
    {
      question: "21. In this type of test strategy, tests are designed based on some model of some required aspect of the product, such as a function, a business process, an internal structure, or a non-functional characteristic (e.g., reliability). Examples of such models include business process models, state models, and reliability growth models.",
      answers: {
        a: "Model-Based",
        b: "Methodical",
        c: "Analytical",
        d: "Process-compliant"
      },
      correctAnswer: "a"
    },
    {
      question: "22. This type of test strategy is driven primarily by the advice, guidance, or instructions of stakeholders, business domain experts, or technology experts, who may be outside the test team or outside the organization itself.",
      answers: {
        a: "Model-Based",
        b: "Process-compliant (or standard-compliant)",
        c: "Directed (or consultative)",
        d: "Analytical"
      },
      correctAnswer: "c"
    },
    {
      question: "23. This type of test strategy involves analyzing, designing, and implementing tests based on external rules and standards, such as those specified by industry-specific standards, by process documentation, by the rigorous identification and use of the test basis, or by any process or standard imposed on or by the organization.",
      answers: {
        a: "Model-Based",
        b: "Process-compliant (or standard-compliant)",
        c: "Directed (or consultative)",
        d: "Analytical"
      },
      correctAnswer: "b"
    },
    {
      question: "24. This type of test strategy is motivated by a desire to avoid regression of existing capabilities. This test strategy includes reuse of existing testware (especially test cases and test data), extensive automation of regression tests, and standard test suites.",
      answers: {
        a: "Model-Based",
        b: "Process-compliant (or standard-compliant)",
        c: "Regression-averse",
        d: "Reactive"
      },
      correctAnswer: "c"
    },
    {
      question: "25. In this type of test strategy, testing is reactive to the component or system being tested, and the events occurring during test execution, rather than being pre-planned (as the preceding strategies are). Tests are designed and implemented, and may immediately be executed in response to knowledge gained from prior test results. Exploratory testing is a common technique employed in reactive strategies.",
      answers: {
        a: "Model-Based",
        b: "Process-compliant (or standard-compliant)",
        c: "Regression-averse",
        d: "Reactive"
      },
      correctAnswer: "d"
    },
    {
      question: "26. This define the preconditions for undertaking a given test activity.",
      answers: {
        a: "Exit criteria",
        b: "Middle criteria",
        c: "Pre-conditioning",
        d: "Entry criteria"
      },
      correctAnswer: "d"
    },
    {
      question: "27. This define what conditions must be achieved in order to declare a test level or a set of tests completed.",
      answers: {
        a: "Exit criteria",
        b: "Middle criteria",
        c: "Pre-conditioning",
        d: "Entry criteria"
      },
      correctAnswer: "a"
    },
    {
      question: "28. _____ involves predicting the amount of test-related work that will be needed in order to meet the objectives of the testing for a particular project, release, or iteration.",
      answers: {
        a: "Test influencing",
        b: "Test effort estimation",
        c: "Test correction",
        d: "Test planning"
      },
      correctAnswer: "b"
    },
    {
      question: "29. These kind of techniques are used to determine the effort required for adequate testing.",
      answers: {
        a: "Determination techniques",
        b: "Effort techniques",
        c: "Estimation techniques",
        d: "Measuring techniques"
      },
      correctAnswer: "c"
    },
    {
      question: "30. Two of the most commonly used estimation techniques are:",
      answers: {
        a: "Metrics-based and expert-based",
        b: "Metric-based and skill-based",
        c: "Expert-based and skill-based",
        d: "Expert-based and history-based"
      },
      correctAnswer: "a"
    },
    {
      question: "31. What is the purpose of test monitoring?",
      answers: {
        a: "to keep track of the defects found and what is being fixed.",
        b: "o gather information and provide feedback and visibility about rest activities.",
        c: "to gather information, create test plans, and collect data on defects.",
        d: "to gather information, keep track of defects and what is being fixed."
      },
      correctAnswer: "b"
    },
    {
      question: "32. What is the purpose of test reporting?",
      answers: {
        a: "to document test plans and the list of techniques used.",
        b: "to document test activities toward the end of the test activity.",
        c: "to summarize and communicate test activity information, both during and at the end of a test activity.",
        d: "to document test issues and present to dev team."
      },
      correctAnswer: "c"
    },
    {
      question: "33. When exit criteria are reached, the ______ issues the test summary report.",
      answers: {
        a: "test manager",
        b: "tester",
        c: "leader developer",
        d: "project manager"
      },
      correctAnswer: "a"
    },
    {
      question: "34. What is the purpose of configuration management?",
      answers: {
        a: "to establish and maintain the integrity of the coding languages, the scripts written for testing, and the relationships between developers and testers.",
        b: "to establish and maintain the integrity of the component or system, the testware, and their relationships to one another through the project and product lifecyle.",
        c: "to establish and maintain the integrity of the coding languages and the systems used to test the software.",
        d: "to establish and maintain the integrity of the component or system, the testware, and the relationships between developers and testers."
      },
      correctAnswer: "b"
    },
    {
      question: "35. To properly support resting, configuration management may involve ensuring the following three out of four. Which one is not one of the four?",
      answers: {
        a: "All test items are uniquely identified, version controlled, tracked for changes, and related to each other.",
        b: "All items of testware are uniquely identified, version controlled, tracked for changes, related to each other and related to versions of the test item(s) so that traceability can be maintained throughout the test process.",
        c: "All identified documents and software items are referenced unambiguously in test documentation.",
        d: "All codes are inspected."
      },
      correctAnswer: "d"
    },
    {
      question: "36. _____ involves the possibility of an event in the future which has negative consequences.",
      answers: {
        a: "Risk",
        b: "Estimates",
        c: "Prediction",
        d: "Possibilities"
      },
      correctAnswer: "a"
    },
    {
      question: "37. _______ involves the possibility that a work product (e.g., a specification, component, system, or test) may fail to satisfy the legitimate needs of its users and/or stakeholders.",
      answers: {
        a: "Potential risk",
        b: "Project risk",
        c: "Product risk",
        d: "Program risk"
      },
      correctAnswer: "c"
    },
    {
      question: "38. T/F - A risk-based approach to testing provides proactive opportunities to reduce the levels of product risk. It involves product risk analysis, which includes the identification of product risks and the assessment of each risk’s likelihood and impact.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "39. In a risk-based approach, the results of product risk analysis are used to do several things. Which one listed below is not a result?.",
      answers: {
        a: "Determine the test techniques to be employed.",
        b: "Determine the extent of testing to be carried out.",
        c: "Determine the extend of refactoring that needs to happen.",
        d: "Determine whether any activities in addition to testing could be employed to reduce risk (e.g., providing training to inexperienced designers)."
      },
      correctAnswer: "c"
    },
    {
      question: "40. T/F - Since one of the objectives of testing is to find defects, defects found during testing should be logged..",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "41. When should defects be reported?",
      answers: {
        a: "Defects may be reported during coding, static analysis, reviews, or during dynamic testing, or use of a software product.",
        b: "Defects may be reported during testing.",
        c: "Defects may be reported during coding and review.",
        d: "Defects may only be reported during reviews."
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();