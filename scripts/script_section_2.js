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
      question: "1. A software development lifecyle model describes what?",
      answers: {
        a: "The types of activity performed at each stage in the scope of work.",
        b: "The types of activity performed at each stage in the software development project, and how the activities relate to one another logically and chronologically.",
        c: "The types of activity performed depending on the budget, the client’s needs, and the capacity of the developers.",
        d: "The types of activity prior to the clients paying the company."
      },
      correctAnswer: "b"
    },
    {
      question: "2. T/F - There are a number of different software development lifecycles models, each of which requires different approaches to testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "3. There are several characteristics of good testing. Which one below is not one of the characteristics?",
      answers: {
        a: "For every development activity, there is a corresponding test activity.",
        b: "Each test level has test objectives specific to that level.",
        c: "Test analysis and design for a given test level begin during the corresponding development activity.",
        d: "Testers participate in discussions on writing the scope of work with the clients and product owner."
      },
      correctAnswer: "d"
    },
    {
      question: "4. No matter which software development lifecycle model is chosen, test activities should should start at which stages of the lifecycle?",
      answers: {
        a: "Early stages.",
        b: "After the first deployment of the software.",
        c: "After the last sprint.",
        d: "After the last deployment of the software."
      },
      correctAnswer: "a"
    },
    {
      question: "5. T/F - A sequential development model describes the software development process as a linear, sequential flow of activities.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "6. T/F - In sequential development model, any phase in the development process should always begin before the previous phase is complete.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "7. In this model, test activities only occur after all other development activities have been completed.",
      answers: {
        a: "Agile method",
        b: "Waterfall model",
        c: "Incremental model",
        d: "Systemic method"
      },
      correctAnswer: "b"
    },
    {
      question: "8. T/F - the V-model includes test levels associated with each corresponding development phase, which further supports early testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "9. Sequential development models deliver software that contains partial sets of features to the stakeholders and users, which can occur often as little as a few weeks or a few months.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "10. T/F - Incremental development involves establishing requirements, designing, building, and testing a system in pieces, which means that the software’s features grow incrementally.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "11. T/F - The size of features in incremental development are always the same size.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "12. T/F - Iterative development occurs when groups of features are specified, designed, built, and tested together in a series of cycles, often of a fixed duration.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "13. Which one is not an example of Iterative development?",
      answers: {
        a: "Straight-line Process",
        b: "Scrum",
        c: "Kanban",
        d: "Spiral"
      },
      correctAnswer: "a"
    },
    {
      question: "14. T/F - Software development lifecycle models must be selected and adapted to the content of projet and product characteristics.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "15. An appropriate software development lifecyle model should be selected and adapted based a set of characteristics. Which one is not one of the characteristics?",
      answers: {
        a: "The number of owners.",
        b: "The type of product being development.",
        c: " Business proriorites.",
        d: "Identified product and project risks."
      },
      correctAnswer: "a"
    },
    {
      question: "16. T/F - Software development lifecycles models may never be combined.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "17. Reasons why software development models must be adapted to the context of project and product characteristics include the following except for one? Which one is not a characteristic?",
      answers: {
        a: "Difference in product risks of systems (complex or simple project).",
        b: "Many business units can be part of a project or program (combination of sequential and agile development).",
        c: "Similarity in tests that needs to be performed.",
        d: "Short time to deliver a product to the market (merge of test levels and/or integration of test types in test levels)."
      },
      correctAnswer: "c"
    },
    {
      question: "18. T/F - Test levels are groups of test activities that are organized and managed together.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "19. The are four test levels. They are:",
      answers: {
        a: "Component testing, integration testing, regression testing, acceptance testing.",
        b: "Component testing, integration testing, system testing, acceptance testing.",
        c: "Integration testing, regression testing, system testing, acceptance testing.",
        d: "Integration testing, regression testing, acceptance testing, straight line testing."
      },
      correctAnswer: "b"
    },
    {
      question: "20. Test levels are characterized by a number of attributes. Which one below is not an attribute?",
      answers: {
        a: "Specific objectives.",
        b: "Test basis and test object.",
        c: "Typical defects and failures.",
        d: "Time lines."
      },
      correctAnswer: "d"
    },
    {
      question: "21. ",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "22. T/F - Component testing is also known as unit or module testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "23. T/F - Component testing focuses on components that are separately testable.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "24. Which of the following is not an objective of component testing?",
      answers: {
        a: "Building confidence in the component’s quality.",
        b: "Verifying whether the functional and non-functional behaviors of the component are as designed and specified.",
        c: "Reducing the amount of time required to refactor codes.",
        d: "Finding defects in the component."
      },
      correctAnswer: "c"
    },
    {
      question: "25. T/F - In some cases, especially in incremental and iterative development models where code changes are ongoing, automated component regression tests play a key role in building confidence that changes have not broken existing components.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "26. T/F - Component testing is often done together with the rest of the system.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "27. Examples of work products that can be used as a test basis for component testing includes:",
      answers: {
        a: "Detailed design, early documentation, data model, code.",
        b: "Detailed design, code, data model, component specification.",
        c: "Component specification, code, data model, documentation.",
        d: "Component specification, code, data model, detailed scope of work."
      },
      correctAnswer: "b"
    },
    {
      question: "28. Typical test objects for component testing include:",
      answers: {
        a: "Components, units or modules; code and data structures; classes; data.",
        b: "Components, units or modules; code and data structures; classes; test cases.",
        c: "Components, units or systems; code and data structure; classes; database modules.",
        d: "Components, units or modules; code and data structures; classes; database modules."
      },
      correctAnswer: "d"
    },
    {
      question: "29. Examples of typical defects and failures for component testing include 3 of the 4 listed below. Which one is not a typical defect or failure?",
      answers: {
        a: "Incorrect functionality.",
        b: "Data flow problems.",
        c: "Incorrect code and logic.",
        d: "Bad scripts."
      },
      correctAnswer: "d"
    },
    {
      question: "30. T/F - Defects are typically fixed as soon as they are found, often with no formal defect management. However, when developers do report defects, this provides important information for root cause analysis and process improvement.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "31. T/F - Component testing is usually performed by the tester who did not write the codes and have not seen the codes.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "32. T/F - Tests may be written and executed after the codes have been written for a component. However, in Agile development, writing automated component test cases may precede writing application code.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "33. T/F - Test driven development is highly iterative and is based on cycles of developing automated test cases, then building and integrating small pieces of code, then executing the component tests, correcting any issues, and re-factoring the code.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "34. T/F - Integration testing focuses on interactions between components or systems.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "35. Objectives of integration testing includes reducing risk, building confidence in the quality of the interfaces, and three of the below objectives. Which one of the below is not an objective?",
      answers: {
        a: "Verifying whether the functional and non-functional behaviors of the interfaces are as designed and specified.",
        b: "Finding defects.",
        c: "Building confident test cases.",
        d: "Preventing defecdts from escaping to higher test levels."
      },
      correctAnswer: "c"
    },
    {
      question: "36.  T/F - In some cases automated integration regression tests provide confidence that changes have not broken existing interfaces, components, or systems.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "37. Component integration testing focuses on the _____ and _____ between integrated components.",
      answers: {
        a: "Interactions and processes.",
        b: "Interactions and interfaces.",
        c: "Interfaces and processes.",
        d: "Processes and automation."
      },
      correctAnswer: "b"
    },
    {
      question: "38. System integration testing focuses on the interactions and interfaces between _____, _____, and ____.",
      answers: {
        a: "Systems, packages, and designs.",
        b: "Systems, designs, and microservices.",
        c: "Systems, packages, and microservices.",
        d: "Packages, designs, and microservices."
      },
      correctAnswer: "c"
    },
    {
      question: "39. T/F - System integration testing can also cover interactions with, and interfaces provided by, external organizations (e.g., web services).",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "40. When can system integration testing be performed?",
      answers: {
        a: "After ongoing system test activities and parallel with system testing.",
        b: "Parallel system testing.",
        c: "Before system testing.",
        d: "After system testing or in parallel with ongoing system test activities."
      },
      correctAnswer: "d"
    },
    {
      question: "41. T/F - Component integration testing is often the responsibility of developers.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "42. T/F - System integration testing is often the responsibility of testers.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "43. System testing focuses on the ____ and ____ of a whole system or product, often considering the end-to-end tasks the system can perform and the non-fuctional behaviors it exhibits while performing those tasks.",
      answers: {
        a: "Behavior and Movements.",
        b: "Behavior and Capabilities.",
        c: "Movements and Capabilities.",
        d: "Behaviors and Focuses."
      },
      correctAnswer: "b"
    },
    {
      question: "44. T/F - System testing often produces information that is used by stakeholders to make release decisions.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "45. System testing should focus on the _____, _______, both functional and non-functional.",
      answers: {
        a: "Overall, front-end behavior.",
        b: "Overall, back-end behavior.",
        c: "Overall, end-to-end behavior.",
        d: "Overall, systemic behavior."
      },
      correctAnswer: "c"
    },
    {
      question: "46. System testing is typically carried out by _______ testers who rely heavily on specifications.",
      answers: {
        a: "Collective",
        b: "Organized",
        c: "Young",
        d: "Independent"
      },
      correctAnswer: "d"
    },
    {
      question: "47. Early involvement of testers in user story refinement or static testing activities, such as reviews, do not help reduce the incidence of such situations.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "48. Acceptance testing typically focuses on the ______ and _____ of a whole system or product.",
      answers: {
        a: "Behavior and Movements.",
        b: "Behavior and Capabilities.",
        c: "Movements and Capabilities.",
        d: "Behaviors and Focuses."
      },
      correctAnswer: "b"
    },
    {
      question: "49. Objectives of acceptance tseeting include:",
      answers: {
        a: "Establishing confidence in the quality of the system as a whole.",
        b: "Validating that the system is complete and will work as expected.",
        c: "Establish a strong coding patterns between developers.",
        d: "Verifying that functional and non-functional behaviors of the system are as specified."
      },
      correctAnswer: "c"
    },
    {
      question: "50. T/F - Defects may be found during acceptance testing, but finding defects is often not an objective.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "51. T/F - Acceptance testing can not be usted to satisfy legal or regulatory requirements or standards.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "52. Common forms of acceptance testing include the following:",
      answers: {
        a: "User acceptance testing (UAT), operational acceptance testing (OAT), and static testing.",
        b: "User acceptance testing (UAT), operational acceptance testing (OAT), static testing, and dynamic testing.",
        c: "User acceptance testing (UAT), operational acceptance testing (OAT), contractual and regulatory acceptance testing, and alpha and beta testing.",
        d: "User acceptance testing (UAT), static testing, dynamic testing, and contractual and regulatory acceptance testing."
      },
      correctAnswer: "c"
    },
    {
      question: "53. A test type is a ________ aimed at testing specific characteristics of a software system, or a part of a system, based on specific test objectives.",
      answers: {
        a: "group of test activities",
        b: "group of test cases",
        c: "group of test write-ups",
        d: "technical documentation"
      },
      correctAnswer: "a"
    },
    {
      question: "54. T/F - Functional testing of a system involves tests that evaluate functions that the system should perform.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "55. Functional testing considers the behavior of the software, so ____________ may be used to derive test conditions and test cases for the functionality of the component of system.",
      answers: {
        a: "White box techniques",
        b: "Black box techniques",
        c: "Dynamic testing",
        d: "Static testing"
      },
      correctAnswer: "b"
    },
    {
      question: "56. The thorough of functional testing can be measured through functional coverage. What is functional coverage?",
      answers: {
        a: "The extent to which testers find clusters of defects and the percentage of them fixed.",
        b: "The extent to which testers find clusters of defects and the perfectage of coverage they clutter into an area of the software.",
        c: "The extent to which some functionality has been exercised by tests, and is expressed as a percentage of the type(s) of element being covered.",
        d: "The extent to which some functionality has been exercised by the developers."
      },
      correctAnswer: "c"
    },
    {
      question: "57. Non-functionality testing of a system evaluates characteristics of systems and software such as _____, _____ or ____.",
      answers: {
        a: "usability, performance efficiency or test case.",
        b: "usability, performance efficiency or security.",
        c: "usability, security or lack of defects.",
        d: "security, usability or acceptance designs."
      },
      correctAnswer: "b"
    },
    {
      question: "58. T/F - Contrary to common misperceptions, non-functional testing can and often should be performed at all test levels, and done as early as possible.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "59. White-box testing derives tests based on the system’s _______ or implementation.",
      answers: {
        a: "external structure",
        b: "skeleton",
        c: "internal structure",
        d: "body"
      },
      correctAnswer: "c"
    },
    {
      question: "60. The thoroughness of white-box testing can be measured through structural coverage, which is the extent to which _____.",
      answers: {
        a: "some type of structural element has been exercised by tests, and is expressed as a percentage of the type of element being covered.",
        b: "some type of structural element has been exercised by designs, and is expressed as a percentage of the type of element covered in new designs.",
        c: "some type of structural element has been exercised by tests, and is expressed as total coverage.",
        d: "some types of ambiguous element expressed as covered by white-box testing."
      },
      correctAnswer: "a"
    },
    {
      question: "61. After a defect is fixed, the software may be tested with all test cases that failed due to the defect, which should be re-executed on the new software version. Which kind of testing needs to be done?",
      answers: {
        a: "White-box testing.",
        b: "Black-box testing.",
        c: "Regression testing.",
        d: "Confirmation testing."
      },
      correctAnswer: "d"
    },
    {
      question: "62. This type of testing involves running tests to detect unintended side-effects.",
      answers: {
        a: "White-box testing.",
        b: "Black-box testing.",
        c: "Regression testing.",
        d: "Confirmation testing."
      },
      correctAnswer: "c"
    },
    {
      question: "63. T/F - Confirmation testing and regression testing are performed at all test levels.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "64. Confirmation testing and regression testing are types of what kind of testing?",
      answers: {
        a: "White-box testing.",
        b: "Black-box testing.",
        c: "Change-related testing.",
        d: "Acceptance testing."
      },
      correctAnswer: "c"
    },
    {
      question: "65. In this functional test example, tests are designed based on how a component should calculate compound interest. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "b"
    },
    {
      question: "66. In this functional test example, tests are designed based on how account information captured at the user interface is passed to the business logic. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "c"
    },
    {
      question: "67. In this functional test example, tests are designed based on how account holders can apply for a line of credit on their checking accounts. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "c"
    },
    {
      question: "68. In this functional test example, tests are designed based on how the system uses an external microservice to check an account holder’s credit score. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "d"
    },
    {
      question: "69. In this functional test example, tests are designed based on how the banker handles approving or declining a credit application. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "a"
    },
    {
      question: "70. In this non-functional test example,  performance tests are designed to evaluate the number of CPU cycles required to perform a complex total interest calculation. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "b"
    },
    {
      question: "71. In this non-functional test example, security tests are designed for buffer overflow vulnerabilities due to data passed from the user interface to the business logic. What kind of testing was done?      ",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "c"
    },
    {
      question: "72. In this non-functional test example, portability tests are designed to check whether the presentation layer works on all supported browsers and mobile devices. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "c"
    },
    {
      question: "73. In this non-functional test example, reliability tests are designed to evaluate system robustness if the credit score microservice fails to respond. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "d"
    },
    {
      question: "74. In this non-functional test example, usability tests are designed to evaluate the accessibility of the banker’s credit processing interface for people with disabilities. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "a"
    },
    {
      question: "75. In this white-box test example, tests are designed to exercise how each screen in the browser interface passes data to the next screen and to the business logic. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "c"
    },
    {
      question: "76. In this white-box test example, tests are designed to achieve complete statement and decision coverage (see section 4.3) for all components that perform financial calculations. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "b"
    },
    {
      question: "77. In this white-box test example, tests are designed to cover all supported financial data file structures and value ranges for bank-to-bank transfers. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "a"
    },
    {
      question: "78. In this white-box test example, tests are designed to cover sequences of web pages that can occur during a credit line application. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "c"
    },
    {
      question: "79. In this white-box test example, tests are designed to exercise all possible inquiry types sent to the credit score microservice. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "d"
    },
    {
      question: "80. In this change-related test example, all previously-failed tests are re-executed after a defect found in acceptance testing is fixed. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "a"
    },
    {
      question: "81. In this change-related test example, automated regression tests are built for each component and included within the continuous integration framework. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "System testing.",
        d: "System integration testing."
      },
      correctAnswer: "b"
    },
    {
      question: "82. In this change-related test example, tests are designed to confirm fixes to interface-related defects as the fixes are checked into the code repository. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System integration testing."
      },
      correctAnswer: "c"
    },
    {
      question: "83. In this change-related testing example, all tests for a given workflow are re-executed if any screen on that workflow changes. What kind of testing was done?",
      answers: {
        a: "Acceptance testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System testing."
      },
      correctAnswer: "d"
    },
    {
      question: "84. In this change-related testing example, tests of the application interacting with the credit scoring microservice are re-executed daily as part of continuous deployment of that microservice. What kind of testing was done?",
      answers: {
        a: "System integration testing.",
        b: "Component testing.",
        c: "Component integration testing.",
        d: "System testing."
      },
      correctAnswer: "a"
    },
    {
      question: "85. T/F - Once deployed to production environments, software and systems need to be maintained.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "86. The scope of maintenance testing depends on 3 of the 4 below. Which one is not one of the 3?",
      answers: {
        a: "The degree of risk of the change, for example, the degree to which the changed area of software communicates with other components or systems.",
        b: "The size of the existing system.",
        c: "The size of the change.",
        d: "The quantity of defects."
      },
      correctAnswer: "d"
    },
    {
      question: "87. T/F - There are triggers that lead to maintenance testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "88. ______ evaluates the changes that were made for a maintenance release to identify the intended consequences as well as expected and possible side effects of a change, and to identify the areas in the system that will be affected by the change. Impact analysis can also help to identify the impact of a change on existing tests.",
      answers: {
        a: "Risk analysis",
        b: "Impact analysis",
        c: "Component analysis",
        d: "System analysis"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();