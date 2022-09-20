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
      question: "1. Software that does not work correctly can lead to everything listed except for…",
      answers: {
        a: "Loss of money.",
        b: "Gaining new projects.",
        c: "Loss of business reputation.",
        d: "Injury or death."
      },
      correctAnswer: "b"
    },
    {
      question: "2. What is the purpose of software testing?",
      answers: {
        a: "Assess the quantity of the software needed for a business.",
        b: "Recruitment of research subjects and gather market research.",
        c: "Assess the quality of the software and to reduce the risk of software failure in operation.",
        d: "Risk analysis of how often a team uses a software."
      },
      correctAnswer: "c"
    },
    {
      question: "3. What is a common misperception of testing?",
      answers: {
        a: "That it only consists of running tests (i.e.executing the software and checking the results).",
        b: "That it only consists of reading codes (i.e. impacting the codes using the inspector on a browser).",
        c: "That it only consists of manual testing.",
        d: "That it is only used on websites and not applications or hardwares."
      },
      correctAnswer: "a"
    },
    {
      question: "4. The test process includes which steps?",
      answers: {
        a: "Planning, analyzing, designing, implementing, reporting test progress and results, and evaluating the quality of a test object.",
        b: "Planning, analyzing, drawing, executing, collecting data, reading manuals, writing reports, and presenting.",
        c: "Planning, designing, executing, checking results, reading manuals, leading scrum teams.",
        d: "Manages scrum team, planning, designing, executing, reporting test progress and results, and presenting new ideas to clients."
      },
      correctAnswer: "a"
    },
    {
      question: "5. This test involves the execution of the component or system being tested.",
      answers: {
        a: "Static testing",
        b: "Black box testing",
        c: "Dynamic testing",
        d: "Systemic testing"
      },
      correctAnswer: "c"
    },
    {
      question: "6. This test does not involve the execution of the component or system being tested",
      answers: {
        a: "Static testing",
        b: "Black box testing",
        c: "Dynamic testing",
        d: "Systemic testing"
      },
      correctAnswer: "a"
    },
    {
      question: "7. Testing includes reviewing work products such as…",
      answers: {
        a: "Requirements, quantity, and the software language used.",
        b: "Requirements, user stories, and the software language used.",
        c: "Requirement, user stories, and source code.",
        d: "Requirement, source code, and the software language used."
      },
      correctAnswer: "c"
    },
    {
      question: "8. Testing involves validation, which is…",
      answers: {
        a: "Checking whether the system will meet the developer’s expectation of their coding experience.",
        b: "Checking whether the system will meet user and other stakeholder needs in its operational environment(s).",
        c: "Checking whether the system will meet all the scope of work according to the CEO’s mission and vision.",
        d: "Checking whether the system will meet user and developer needs in its experience using the software."
      },
      correctAnswer: "b"
    },
    {
      question: "9. Test activities are organized and carried out differently in different…",
      answers: {
        a: "Lifespans",
        b: "Lifetimes",
        c: "Lifestages",
        d: "Lifecyles"
      },
      correctAnswer: "d"
    },
    {
      question: "10. For any given project, the objectives of testing may include everything listed except for…",
      answers: {
        a: "Prevent defects by evaluating work products such as requirements, user stories, design, and code.",
        b: "Verify whether all specified requirements have been ignored.",
        c: "Check if the test object is complete and validate if it works as the users and other stakeholders expect.",
        d: "Comply with contractual, legal, or regulatory requirements or standards."
      },
      correctAnswer: "b"
    },
    {
      question: "11. T/F - The objectives of testing can vary, depending upon the context of the component or system being tested, the test level, and the software development life cycle model.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "12. T/F - Testing and debugging are the same.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "13. T/F - Executing tests can show failures that are caused by defects in the software.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "14. T/F - Debugging is the development activity that finds, analyzes, and fixes the defects.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "15. T/F - Testers are never in charge of debugging, only developers are.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "16. T/F -  In Agile development and in some other software development lifecycles, testers may be involved in debugging and component testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "17. Rigorous testing of components and systems, and their associated documentation, can help…",
      answers: {
        a: "Decrease the amount of time needed to complete the project.",
        b: "Reduce risk of failures occurring during operation.",
        c: "Decrease the amount of operation time.",
        d: "Reduce risk of failures occurring during development."
      },
      correctAnswer: "b"
    },
    {
      question: "18. T/F - When defects are detected, and subsequently fixed, this contributes to the quality of the components of systems.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "19. T/F - Software testing is not required to meet contractual or legal requirements or industry-specific standards.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "20. Throughout the history of computing, it is quite common for software and systems to be delivered into operation and, due to the presence of defects, to subsequently cause failures or not meet the stakeholders’ needs. However, using appropriate test techniques can...",
      answers: {
        a: "Reduce the frequency of such problematic deliveries, when those techniques are applied with the appropriate level of test expertise, in the appropriate test levels, and at the appropriate points in the software development lifecycle.",
        b: "Reduce the frequency of such problematic deliveries, when those techniques are applied by all testers, developers, and project managers.",
        c: " Reduce the frequency of such problematic deliveries, when those techniques are applied with any testing expertise, in the least expensive test softwares, and at the beginning of the software development lifecycle.",
        d: "Reduce the frequency of such problematic deliveries, when those techniques are applied at the beginning of the development lifecylcles and end when the software is initially deployed."
      },
      correctAnswer: "a"
    },
    {
      question: "21. T/F - Having testers involved in requirements reviews or user story refinement could detect defects in these work products.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "22. T/F - The identification and removal of requirements defects increases the risk of incorrect or untestable features being developed.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "23. T/F - Having testers work closely with system designers while the system is being designed can reduce each party’s understanding of the design and how to test it.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "24. T/F - The understanding of the design and how to test it can reduce the risk of fundamental design defects and enable tests to be identified at an early stage.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "25. T/F - Having testers work closely with developers while the code is under development can increase each party’s understanding of the code and how to test it.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "26. T/F - Understanding of the code and how to test it can reduce the risk of defects within the code and the tests.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "27. T/F - Having testers verify and validate the software prior to release can detect failures that might otherwise have been missed, but does not support the process of removing the defects that caused the failures.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "28. T/F - Quality assurance and testing are the same.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "29. What does quality management include?",
      answers: {
        a: "All activities that develop the codes for the product.",
        b: "All activities that direct and control an organization with what software language to use.",
        c: "All activities that direct, develop, and control the development lifecyle.",
        d: "All activities that direct and control an organization with regard to quality."
      },
      correctAnswer: "d"
    },
    {
      question: "30. Quality assurance is typically focused on what?",
      answers: {
        a: "Proper scrum management.",
        b: "Proper documentation prior to the development of the product.",
        c: "Proper processes, in order to provide confidence that the appropriate levels of quality will be achieved.",
        d: "Proper processes, in order to provide confidence that testing is not needed."
      },
      correctAnswer: "c"
    },
    {
      question: "31. What is the use of root cause analysis?",
      answers: {
        a: "Document the risks of not debugging.",
        b: "Detect and remove the causes of defect.",
        c: "Eliminate technical debt.",
        d: "Detect and eliminate risks before development even started."
      },
      correctAnswer: "b"
    },
    {
      question: "32. T/F - Quality control involves various activities, including test activities, that support the achievement of appropriate levels of quality.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "33. T/F - Test activities are not a part of the overall software development or maintenance process.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "34. Quality assurance is concerned with the proper execution of the entire process, therefore quality assurance supports proper…",
      answers: {
        a: "Evaluation",
        b: "JavaScript",
        c: "Testing",
        d: "Presentation"
      },
      correctAnswer: "c"
    },
    {
      question: "35. T/F - An error that leads to the introduction of a defect in one work product can trigger an error that leads to the introduction of a defect in a related work product.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "36. T/F - If a defect in the code is executed, this always cause a failure all the times.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "37. T/F - Some defects require very specific inputs or reconditions to trigger a failure, which may occur rarely or never.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "38. Errors may occur for the following reasons except for...",
      answers: {
        a: "Time pressure.",
        b: "Miscommunication between project participants, including miscommunication about requirements and design.",
        c: "Using agile method.",
        d: "New, unfamiliar technologies"
      },
      correctAnswer: "c"
    },
    {
      question: "39. T/F - Failures can be caused by environmental conditions.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "40. What are false negatives in testing?",
      answers: {
        a: "Tests that do not detect defects that they should have detected.",
        b: "Tests that report defects, but aren’t actually defects.",
        c: "Tests that report defects as they should.",
        d: "Tests that do not report defects as they should."
      },
      correctAnswer: "a"
    },
    {
      question: "41. What are false positives in testing?",
      answers: {
        a: "Tests that do not detect defects that they should have detected.",
        b: "Tests that report defects, but aren’t actually defects.",
        c: "Tests that report defects as they should.",
        d: "Tests that do not report defects as they should."
      },
      correctAnswer: "b"
    },
    {
      question: "42. T/F - The root causes of defects are the earliest actions or conditions that contributed to creating the defect.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "43. Defects cannot be analyzed to identified their root causes.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "44. By focusing on the least significant root causes, root cause analysis can lead to process improvements that prevent a significant number of future defects from being introduced.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "45. Suppose incorrect interest payments, due to a single line of incorrect code, result in customer complaints. The defective code was written for a user story which was ambiguous, due to the product owner’s misunderstanding of how to calculate interest. If a large percentage of defects exist in interest calculations, and these defects have their _________  in similar misunderstandings, the product owners could be trained in the topic of interest calculations to reduce such defects in the future. Fill in the blank.",
      answers: {
        a: "Origin",
        b: "Beginning",
        c: "Root cause",
        d: "Finding"
      },
      correctAnswer: "c"
    },
    {
      question: "46. T/F - Testing shows the presence of defects, not their absence.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "47. T/F - Exhaustive testing is possible.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "48. T/F - Early testing does not save time and money.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "49. Early testing is sometimes referred to as…",
      answers: {
        a: "Shift right",
        b: "Shift left",
        c: "Shift up",
        d: "Shift down"
      },
      correctAnswer: "b"
    },
    {
      question: "50. T/F - Defects cluster together.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "51. T/F - Predicted defect clusters, and the actual observed defect clusters in test or operation, are not an important input into a risk analysis used to focus the test effort.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "52. What is the pesticide paradox in testing?",
      answers: {
        a: "When developers keep making the same mistakes.",
        b: "When testers find bugs in a module that they initially cleared as passed.",
        c: "When the same tests are repeated over and over again and eventually no longer find any new defects.",
        d: "When the same tests are repeated over and over again and always find new defects."
      },
      correctAnswer: "c"
    },
    {
      question: "53. T/F - Testing is done the same in different contexts.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "54. T/F - Absence-of-errors is a fallacy.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "55. What is a test process?",
      answers: {
        a: "The way a test is written.",
        b: "The way developers and QA testers document issues.",
        c: "Common sets of test activities without which testing will be less likely to achieve its established objectives.",
        d: "Different sets of test activities used by developers and not QA."
      },
      correctAnswer: "c"
    },
    {
      question: "56. All but one of these are contextual factors that influence the test process for an organization. Which one is not one of the factors?",
      answers: {
        a: "Software development lifecyle model and project methodologies being used.",
        b: "Product and project risks.",
        c: "Organizational policies and practices.",
        d: "Employees working from home."
      },
      correctAnswer: "d"
    },
    {
      question: "57. T/F - It is not useful if the test basis has measurable coverage criteria defined.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "58. What is coverage criteria used for?",
      answers: {
        a: "Act effectively as key performance indicators to drive the activities that demonstrate achievement of software test objectives.",
        b: "Act effectively as key performance indicators to drive the activities that demonstrate achievement of software developer objectives.",
        c: "Act effectively as key performance indicators that drive how testers work with project managers.",
        d: "Act effectively as key performance indicators that drive the activities outside of testing objectives."
      },
      correctAnswer: "a"
    },
    {
      question: "59. A test process consists of the following main groups of activities:",
      answers: {
        a: "Test planning, test monitoring and control, test analysis, test design, test implementation, and test observation.",
        b: "Test planning, test observation, test analysis, test design, test execution, and exhaustive testing.",
        c: "Test planning, test monitoring and control, test analysis, test design, test implementation, test execution, and test completion.",
        d: "Test planning, test monitoring and control, test observation, and exhaustive testing."
      },
      correctAnswer: "c"
    },
    {
      question: "60. What is the hierarchy of test activities and tasks?",
      answers: {
        a: "Individual tasks > constituent activity > testing main group",
        b: "Testing main group > constituent activity > individual tasks",
        c: "Constituent activity > testing main group > individual tasks",
        d: "Constituent activity > individual tasks > Testing main group"
      },
      correctAnswer: "b"
    },
    {
      question: "61. T/F - Test planning involves activities that define the objectives of testing and the approach of meeting test objectives within constraints imposed by the context.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "62. T/F - Test monitoring involves the on-going comparison of actual progress against planned progress using any test monitoring metrics defined in the test plan.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "63. T/F - Test control involves taking actions necessary to meet the objectives of the product designers (which may be updated over time).",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b. "
    },
    {
      question: "The evaluation of exit criteria for test execution as part of a given test level may include all of the following except for one. Which one is not included?",
      answers: {
        a: "Checking test results and logs against specified coverage criteria.",
        b: "Assessing the level of component or system quality based on test results and logs.",
        c: "Document the clients compliant and critique of working with developers and testers.",
        d: "Determining if more tests are needed (e.g., if tests originally intended to achieve a certain level of prodluct risk coverage failed to do so, requiring additional tests)."
      },
      correctAnswer: "c"
    },
    {
      question: "65. T/F - Test progress against the plan does not need to be communicated to stakeholders in test progress reports.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "66. What does test analysis determines in terms of measurable coverage criteria?",
      answers: {
        a: "What to develop.",
        b: "What to eliminate.",
        c: "What to test.",
        d: "What to write-off."
      },
      correctAnswer: "c"
    },
    {
      question: "67. All of one of the followings are included as major activities in Test Analsysis. Which one is not a major activity?",
      answers: {
        a: "Analyze the test basis appropriate to the test level being considered.",
        b: "Evaluate the test basis and test items to identify defects of various types.",
        c: "Defining and prioritizing test conditions for each feature based on analysis of the test basis.",
        d: "Identifying bugs to remove and bugs to leave alone."
      },
      correctAnswer: "d"
    },
    {
      question: "68. The application of black-box, white-box, and experience-based test techniques can be useful in the process of test analysis to…",
      answers: {
        a: "reduce the likelihood of omitting important test conditions and to define more precise and accurate test conditions.",
        b: "reduce the likelihood of having to refactor codes.",
        c: "reduce the likelihood of omitting important test conditions and to write more precise documentation.",
        d: "reduce the likelihood of retesting the same features after initial tests of such features."
      },
      correctAnswer: "a"
    },
    {
      question: "69. While test analysis answers the question “what to test?”, test design answers what question?",
      answers: {
        a: "What to design?",
        b: "What to code?",
        c: "How to code?",
        d: "How to test?"
      },
      correctAnswer: "d"
    },
    {
      question: "70. Test designs include 3 of the 4 following major activities. Which one is not one of the 3?",
      answers: {
        a: "Designing and prioritizing test cases and sets of test cases.",
        b: "Identifying necessary test data to support test conditions and test cases.",
        c: "Identifying features and sets of features to be tested.",
        d: "Designing the test environment and ientifying any required infrastructure and tools."
      },
      correctAnswer: "c"
    },
    {
      question: "71. Test implementation answers what question?",
      answers: {
        a: "Do we now have everything in place to run the tests?",
        b: "Do we now have everything in place to finish the tests?",
        c: "Do we now have everything in place to run?",
        d: "Do we now have everything in place to execute the design?"
      },
      correctAnswer: "a"
    },
    {
      question: "72. Test implementation includes 3 of the 4 following major activities? Which one is not of the 3?",
      answers: {
        a: "Creating test suites from the test procedures and (if any) automated test scripts.",
        b: "Capturing bi-directional traceability between the test basis, test conditions, and test cases.",
        c: "Arranging the test suites within a test execution schedule in a way that results in efficient test execution.",
        d: "Preparing test data and ensuring it is properly loaded in the test environment."
      },
      correctAnswer: "b"
    },
    {
      question: "73. T/F - Test design and test implementation tasks are often combined.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "74. T/F - During test execution, test suites are run in accordance with the test execution schedule.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "75. Test execution includes 3 of the 4 following major activities? Which one is not of the 3?",
      answers: {
        a: "Executing tests either manually or by using test execution tools.",
        b: "Comparing actual results with expected results.",
        c: "Fixing codes that are faulty.",
        d: "Reporting defects based on the failures observed."
      },
      correctAnswer: "c"
    },
    {
      question: "76. T/F - Test completion activities do not collect data from completed test activities in order to consolidate experience, testware, and any other relevant information.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "77. Test completion activities occur at 3 of the 4 milestones below. Which one is not of the 3?",
      answers: {
        a: "When a software system is released.",
        b: "A test project is completed (or cancelled).",
        c: "When a software is no longer going to be updated.",
        d: "A test level is completed."
      },
      correctAnswer: "c"
    },
    {
      question: "78. T/F - Test work products are created as part of the test process.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "79. T/F - Test planning work products typically include one or more test plans.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "80. Test plan includes 3 of the 4 following activities. Which is not one of the 3?",
      answers: {
        a: "Information about the UX/UI designs used.",
        b: "Information about the test basis.",
        c: "Which other test work products will be related via traceability information.",
        d: "Exit criteria."
      },
      correctAnswer: "a"
    },
    {
      question: "81. T/F - Test monitoring and control work products typically include various types of test cases, including test progress reports produced on an ongoing and/or a regular basis, and client’s recommendation at various completion milestones.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "82. T/F - All test reports should provide audience-relevant details about the test progress as of the date of the report, including summarizing the test execution results once those become available.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "83. Test monitoring and control work products should also address project managements concerns. Which one of the following is not a project management concerns for test monitoring and control work products?",
      answers: {
        a: "Task completion",
        b: "Resource allocation",
        c: "Number of people working on a test",
        d: "Effort"
      },
      correctAnswer: "c"
    },
    {
      question: "84. T/F - Test analysis work products include defined and prioritized test conditions, each of which is ideally bi-directionally traceable to the specific element(s) of the test basis it covers.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "85. T/F - For exploratory testing, test analysis never involve the creation of test charters.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "86. T/F - Test design results in test cases and sets of test cases to exercise the test conditions defined in test analysis.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "87. It is often a good practice to design high-level test caes, without concrete values for input data and expected results.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "88. T/F - High-level test cases are not reusable across multiple test cycles with different concrete data.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "89. Test design results in 3 of the 4 followings. Which one is not one of the 3?",
      answers: {
        a: "The design and/or identification of the necessary test data.",
        b: "The design of the software interface.",
        c: "The design of the test environment.",
        d: "The identification of the infrastructure and tools."
      },
      correctAnswer: "b"
    },
    {
      question: "90. Test implementation work products include 3 of the 4 followings. Which one is not one of the 3?",
      answers: {
        a: "Test procedures and the sequencing of those test procedures.",
        b: "Test suites.",
        c: "A test execution schedule.",
        d: "A long list of tests that failed."
      },
      correctAnswer: "d"
    },
    {
      question: "91. Test execution work products include 3 of the 4 followings. Which one is not one of the 3?",
      answers: {
        a: "Documentation of the status of individual test cases or test procedures.",
        b: "Defect reports.",
        c: "Recommendation on how to get rid of defects.",
        d: "Documentation about which test item(s), test object(s), test tools, and testware were involved in the testing."
      },
      correctAnswer: "c"
    },
    {
      question: "92. T/F - Test completion work products include test summary reports, action items for improvement of subsequent projects or iterations, change requests or product backlog items, and finalized testware.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "93. T/F - It is not necessary to establish and maintain traceability throughout the test process between each element of the test basis and the various test work products.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "94. T/F - Human psychology has important effects on software testing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "95. An element of human psychology called _________ can make it difficult to accept information that disagrees with currently held beliefs.",
      answers: {
        a: "Racism",
        b: "Confirmation bias",
        c: "Discrimination",
        d: "Ego"
      },
      correctAnswer: "b"
    },
    {
      question: "96. Since developers expect their code to be correct, they have a _______ that makes it difficult to accept that their code is correct.",
      answers: {
        a: "Racism",
        b: "Confirmation bias",
        c: "Discrimination",
        d: "Ego"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
buildQuiz();

// Event listeners
submitButton.addEventListener('click', showResults);
})();

