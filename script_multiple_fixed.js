// Set the time limit in minutes and convert it to seconds
var timeLimitInMinutes = 60;
var timeLimitInSeconds = timeLimitInMinutes * 60;

// Get the timer element from the DOM to display the countdown
var timerElement = document.getElementById("timer");

// Function to start the countdown timer
function startTimer() {
  // Decrease the remaining time by one second
  timeLimitInSeconds--;

  // Calculate the minutes and seconds from the total seconds
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;

  // If the timer runs out, display '00:00' and stop the timer
  if (timeLimitInSeconds < 0) {
    timerElement.textContent = "00:00";
    clearInterval(timerInterval); // Stop the interval when time is up
    return;
  }

  // Add a leading zero to minutes if less than 10 (e.g., 09:00)
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Add a leading zero to seconds if less than 10 (e.g., 00:09)
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Display the formatted time on the screen
  timerElement.textContent = minutes + ":" + seconds;
}

// Start the timer, updating every second (1000ms)
var timerInterval = setInterval(startTimer, 1000);

// Enter the questions
const questions = [
  {
    question:
      "As the Sprint Planning progresses, the Developers realize that the workload may be greater than their capacity to complete the work. Which two are valid actions? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "Remove or change selected Product Backlog items.",
        correct: true,
      },
      {
        text: "The Developers ensure that the Scrum Team is aware, start the Sprint, and monitor progress.",
        correct: true,
      },
      {
        text: "Recruit additional Developers before the work can begin.",
        correct: false,
      },
      { text: "Cancel the Sprint.", correct: false },
      {
        text: "The Developers work overtime during this Sprint.",
        correct: false,
      },
    ],
  },
  {
    question:
      "At the end of a Sprint, a Product Backlog item worked on during the Sprint does not meet the Definition of Done. What two things should happen with the undone Product Backlog item? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "Review the item, add the done part of the estimate to the velocity and create a Story for the remaining work.",
        correct: false,
      },
      {
        text: "Do not include the item in the Increment this Sprint.",
        correct: true,
      },
      {
        text: "If the stakeholders agree, the Product Owner can accept it and release it to the users.",
        correct: false,
      },
      {
        text: "Put it on the Product Backlog for the Product Owner to decide what to do with it.",
        correct: true,
      },
    ],
  },
  {
    question:
      "One of the Scrum events is the Daily Scrum. What are two intended outcomes of the Daily Scrum? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "A shared understanding of the most important work to be undertaken next to achieve the best possible progress toward the Sprint goal.",
        correct: true,
      },
      {
        text: "Identification of impediments that may prevent the Developers from achieving the Sprint Goal.",
        correct: true,
      },
      {
        text: "An updated Scrum board to make Sprint progress transparent for the stakeholders.",
        correct: false,
      },
      {
        text: "A status report for the upper management indicating what each individual has done, will be doing, and what is impeding him/her.",
        correct: false,
      },
      {
        text: "An update of completed tasks and of the remaining work so the Scrum Master can plan the next day.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which three of the following are feedback loops in Scrum? <br><br> (choose the best three answers)<br><br>",
    answers: [
      { text: "Release Planning.", correct: false },
      { text: "Refinement Meeting.", correct: false },
      { text: "Sprint Review.", correct: true },
      { text: "Sprint Retrospective.", correct: true },
      { text: "Daily Scrum.", correct: true },
    ],
  },
  {
    question:
      "Choose two responsibilities of self-managing Developers. <br><br>(choose the best two answers)<br><br>",
    answers: [
      { text: "Report daily progress to stakeholders.", correct: false },
      { text: "Increase velocity.", correct: false },
      { text: "Do the work planned in the Sprint Backlog.", correct: true },
      { text: "Pull Product Backlog items for the Sprint.", correct: true },
      { text: "Reorder the Product Backlog.", correct: false },
    ],
  },
  {
    question:
      "What are the two primary ways a Scrum Master helps a Scrum Team work at its highest level of productivity? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "By ensuring the meetings start and end at the proper time.",
        correct: false,
      },
      { text: "By facilitating Scrum Team decisions.", correct: true },
      {
        text: "By removing impediments that hinder the Scrum Team.",
        correct: true,
      },
      {
        text: "By keeping high value features high in the Product Backlog.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What are three benefits of self-management? <br><br>(choose the best three answers) <br><br>",
    answers: [
      { text: "Increased commitment.", correct: true },
      { text: "Increased rule compliance.", correct: false },
      { text: "Increased self-accountability.", correct: true },
      { text: "Increased accuracy of estimates.", correct: false },
      { text: "Increased creativity.", correct: true },
    ],
  },
  {
    question:
      "Which three behaviors demonstrate that a Scrum Team is self-managing? <br><br>(choose the best three answers)<br><br>",
    answers: [
      { text: "The Scrum Master is no longer needed.", correct: false },
      {
        text: "Developers collaboratively selecting their own work during the Sprint.",
        correct: true,
      },
      {
        text: "The Developers create their own Sprint Backlog, reflecting all work that is part of the Definition of Done.",
        correct: true,
      },
      {
        text: "Stakeholders are attending the Daily Scrum to check progress and work with the Scrum Master to optimize the functional scope for the Sprint.",
        correct: false,
      },
      {
        text: "The Scrum Team has all the skills needed to create an Increment.",
        correct: true,
      },
      {
        text: "The Scrum Team members are working within the boundaries of their functional description and nicely handing off work from analyst to developer to tester to integration.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What are two effective ways for the Scrum Team to make non-functional requirements visible? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "Run the integration and regression tests before the end of the Sprint, and capture the open work for the Sprint Backlog of the next Sprint.",
        correct: false,
      },
      {
        text: "Put them on a separate list on the Scrum board, available for all to see.",
        correct: false,
      },
      {
        text: "Add them to the Definition of Done so the work is taken care of every Sprint.",
        correct: true,
      },
      {
        text: "Add them to the Product Backlog to ensure transparency.",
        correct: true,
      },
    ],
  },
  {
    question:
      "During a Sprint Retrospective, the Developers propose moving the Daily Scrum to only occur on Tuesdays and Thursdays. Which two are the most appropriate responses for the Scrum Master to recommend? <br><br>(choose the best two answers)<br><br>",
    answers: [
      { text: "Have the Developers vote.", correct: false },
      {
        text: "Acknowledge and support the self-managing team's decision.",
        correct: false,
      },
      {
        text: "Coach the team on why the Daily Scrum is important as an opportunity to update the plan.",
        correct: true,
      },
      {
        text: "Consider the request and decide on which days the Daily Scrum should occur.",
        correct: false,
      },
      {
        text: "Learn why the Developers want this and work with them to improve the outcome of the Daily Scrum.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which three of the following are timeboxed events in Scrum? <br><br>(choose the best three answers)<br><br>",
    answers: [
      { text: "Release Planning.", correct: false },
      { text: "Sprint Planning.", correct: true },
      { text: "Sprint 0.", correct: false },
      { text: "Daily Scrum.", correct: true },
      { text: "Sprint Testing.", correct: false },
      { text: "Sprint Retrospective.", correct: true },
      { text: "Release Retrospective", correct: false },
    ],
  },
  {
    question:
      "Who is on the Scrum Team? <br><br>(choose the best three answers)<br><br>",
    answers: [
      { text: "Stakeholders.", correct: false },
      { text: "Developers.", correct: true },
      { text: "Scrum Master.", correct: true },
      { text: "Project Manager.", correct: false },
      { text: "Product Owner.", correct: true },
    ],
  },
  {
    question:
      "Which two ways of creating Scrum Teams are consistent with Scrum's values? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "Bring all the people together and let them organize into Scrum Teams.",
        correct: true,
      },
      {
        text: "Managers personally re-assign current subordinates to new teams.",
        correct: false,
      },
      {
        text: "Existing teams propose how they would like to go about organizing into the new structure.",
        correct: true,
      },
      {
        text: "Managers collaborate to assign individuals to specific teams.",
        correct: false,
      },
      {
        text: "The Chief Product Owner determines the new team structures and assignments.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which are appropriate topics for discussion in a Sprint Retrospective? <br><br>(choose the best three answers)<br><br>",
    answers: [
      {
        text: "Arranging the Sprint Backlog for the next Sprint.",
        correct: false,
      },
      {
        text: "The value of work currently represented in the Product Backlog.",
        correct: false,
      },
      { text: "Team relations.", correct: true },
      { text: "Definition of Done.", correct: true },
      { text: "How the Scrum Team does its work.", correct: true },
    ],
  },
  {
    question:
      "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the Developers come to you complaining that work identified for the upcoming two Sprints will require full-time commitment from a specialist who is external to the teams. <br><br>What should the Scrum Master consider in this situation?<br><br><br><br> (choose the best two answers)<br><br>",
    answers: [
      { text: "The desire to maintain a stable velocity.", correct: false },
      {
        text: "The benefit of Developers figuring out a solution for themselves.",
        correct: true,
      },
      {
        text: "The need to have enough work to keep all Developers busy.",
        correct: false,
      },
      {
        text: "The ability of the Scrum Teams to produce integrated Increments.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which two things should the Scrum Team do during the first Sprint? <br><br>(choose the best two answers)<br><br>",
    answers: [
      { text: "Make up a plan for the rest of the project.", correct: false },
      {
        text: "Create at least one valuable, useful Increment.",
        correct: true,
      },
      {
        text: "Build at least one piece of valuable functionality.",
        correct: true,
      },
      {
        text: "Define the major product features and a release plan architecture.",
        correct: false,
      },
      {
        text: "Analyze, describe, and document the requirements for the subsequent Sprints.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which are characteristics of the Daily Scrum? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog.",
        correct: true,
      },
      { text: "Its location and time remain constant.", correct: true },
      { text: "It is facilitated by the team lead.", correct: false },
      {
        text: "It consists of the Scrum Master asking the team for status.",
        correct: false,
      },
      { text: "It is held first thing in the morning.", correct: false },
    ],
  },
  {
    question:
      "During Sprint Planning the Product Owner and the Developers are unable to reach an understanding about the highest order Product Backlog items. Because of this, the Developers are unable to determine how many Product Backlog items they can forecast for the upcoming Sprint However, the Product Owner and the Developers are able to agree on a Sprint Goal. <br><br>Which of the following actions should the Scrum Master support?<br><br>(Choose the best two answers)<br><br>",
    answers: [
      {
        text: "During the next Sprint Retrospective discuss why this happened and what changes will make it less likely to recur.",
        correct: true,
      },
      {
        text: "Continue the Sprint Planning event past its timebox until an adequate number of Product Backlog items are well enough understood for the Developers to make a complete forecast. Then start the Sprint.",
        correct: false,
      },
      {
        text: "Ask everyone to take as much time as needed to analyze the Product Backlog first, and then reconvene another Sprint Planning meeting.",
        correct: false,
      },
      {
        text: "Cancel the Sprint. Send the entire team to an advanced Scrum training and then start a new Sprint.",
        correct: false,
      },
      {
        text: "Forecast the Product Backlog items that are most likely to meet the Sprint Goal and create the Sprint Backlog. Conclude Sprint Planning and start the development work. Continue to analyze, decompose, and create additional functionality during the Sprint.",
        correct: true,
      },
    ],
  },
  {
    question:
      "A Scrum Team is required to deliver a done Increment by the end of a Sprint. Select two statements that explain what done means. <br><br>(choose the best two answers)<br><br>",
    answers: [
      { text: "Ready for integration.", correct: false },
      {
        text: "Whatever the Product Owner defines as quality.",
        correct: false,
      },
      { text: "Ready to be released to end users.", correct: true },
      {
        text: "No work is left to meet the Definition of Done.",
        correct: true,
      },
      { text: "All work the Developers are willing to do.", correct: false },
    ],
  },
  {
    question:
      "What techniques could the Scrum Master use when the Scrum Team gets caught in an internal disagreement about which agile practices to apply? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "Involve the complete Scrum Team in making a decision.",
        correct: true,
      },
      {
        text: "Ask team members to take the issue up with the company's Human Resources department.",
        correct: false,
      },
      {
        text: "Use coaching techniques, such as open questions and active listening.",
        correct: true,
      },
      {
        text: "Ask an external agile coach what they recommend.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following are true about the Product Owner? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "The Product Owner is accountable for ordering the Product Backlog.",
        correct: true,
      },
      { text: "The Product Owner is one person.", correct: true },
      {
        text: "The Product Owner can be represented by a committee or a team of people.",
        correct: false,
      },
      {
        text: "The Scrum Team can have multiple Product Owners.",
        correct: false,
      },
    ],
  },
  {
    question:
      "A Scrum Team has been working on a product for nine Sprints. A new Product Owner comes in, understanding she is accountable for the Product Backlog. However, she is unsure about her responsibilities. <br><br> Which of the following are responsibilities of a Product Owner on a Scrum Team? <br><br>(choose the best two answers)<br><br>",
    answers: [
      { text: "Interacting with stakeholders.", correct: true },
      { text: "Creating detailed functional test cases.", correct: false },
      {
        text: "Providing the Developers with detailed specifications.",
        correct: false,
      },
      { text: "Describing features as Use Cases.", correct: false },
      {
        text: "Ensuring that the most valuable functionality is produced first.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which two of the following are true about the Scrum Master? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "The Scrum Master helps those outside the team interact with the Scrum Team.",
        correct: true,
      },
      {
        text: "The Scrum Master is responsible for updating the Sprint Burndown.",
        correct: false,
      },
      {
        text: "The Scrum Master teaches the Scrum Team to use timeboxes.",
        correct: true,
      },
      {
        text: "The Scrum Master assigns tasks to Developers when they need work.",
        correct: false,
      },
      {
        text: "At the Sprint Review, the Scrum Master identifies what work is done and not done.",
        correct: false,
      },
    ],
  },
  {
    question:
      "You are the Scrum Master on a newly formed Scrum Team. Which two of the following activities would probably help the team in starting up? <br><br>(choose the best two answers)<br><br>",
    answers: [
      {
        text: "Have the manager for each Developer introduce their direct reports and go over their responsibilities on the Scrum Team.",
        correct: false,
      },
      {
        text: "Ensure the Scrum Team members have compatible personalities.",
        correct: false,
      },
      {
        text: "Ask the Product Owner to discuss the product, its vision, history, goals, and context, as well answer questions.",
        correct: true,
      },
      {
        text: "Introduce a bonus system for the top performers in the team.",
        correct: false,
      },
      {
        text: "Ensure the team understands they need a Definition of Done.",
        correct: true,
      },
    ],
  },
  {
    question:
      "A Scrum Team is experiencing a growing list of impediments. Which techniques would be most helpful in this situation? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "The Scrum Master discusses the impediments with the Scrum Team.",
        correct: true,
      },
      { text: "Arrange a triage meeting with management.", correct: false },
      {
        text: "The Product Owner should add the open impediments to the Product Backlog.",
        correct: false,
      },
      {
        text: "As a Scrum Team, prioritize the list and work on them in order.",
        correct: true,
      },
    ],
  },
  {
    question:
      "During the Sprint, the Scrum Master's role is to do which two of the following: <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "Monitor the progress of the Developers.", correct: false },
      {
        text: "Escalate team conflicts to functional line managers.",
        correct: false,
      },
      {
        text: "Facilitate inspection and adaptation opportunities as requested or needed.",
        correct: true,
      },
      {
        text: "Ensure the Product Owner attends all Scrum events.",
        correct: false,
      },
      { text: "Assign tasks with the Scrum Team.", correct: false },
      { text: "Coaching the team members in self-management.", correct: true },
    ],
  },
  {
    question:
      "What are two effective ways for a Scrum Team to ensure security concerns are satisfied? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "Add a Sprint to specifically resolve all security concerns.",
        correct: false,
      },
      {
        text: "Postpone the work until a specialist can perform a security audit and create a list of security-related Product Backlog items.",
        correct: false,
      },
      {
        text: "Have the Scrum Team create Product Backlog items for each concern.",
        correct: true,
      },
      {
        text: "Add security concerns to the Definition of Done.",
        correct: true,
      },
      { text: "Delegate the work to the security department.", correct: false },
    ],
  },
  {
    question:
      "You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams. These teams will build one product. Select two conditions you should strive for in this scenario. <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "There should be six Product Owners, one for each Scrum Team.",
        correct: false,
      },
      {
        text: "There should be six Product Owners, reporting to a Chief Product Owner.",
        correct: false,
      },
      { text: "The product has one Product Backlog.", correct: true },
      {
        text: "Each Scrum Team should have a separate Product Backlog.",
        correct: false,
      },
      { text: "There should be only one Product Owner.", correct: true },
    ],
  },
  {
    question:
      "What are two ways that regulatory compliance requirements are dealt with in Scrum? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "They are discussed, analyzed, and documented before the first Sprint can begin.",
        correct: false,
      },
      {
        text: "They are addressed as part of meeting the Definition of Done during each Sprint.",
        correct: true,
      },
      {
        text: "They are added to the Product Backlog and addressed during each Sprint, alongside the creation of new Product capabilities.",
        correct: true,
      },
      {
        text: "They are addressed by a separate team who is responsible for compliance issues.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which three of the following are true about Scrum? <br><br>(choose the best three answers)<br><br>",
    answers: [
      {
        text: "Scrum is based on empiricism and lean thinking.",
        correct: true,
      },
      {
        text: "Scrum is a methodology where you can pick and choose which parts of Scrum you think will work for your environment.",
        correct: false,
      },
      {
        text: "Scrum is a framework for developing and sustalning complex products.",
        correct: true,
      },
      {
        text: "Each component of Scrum serves a specific purpose and is essential to Scrum's success and your usage of Scrum to develop complex products.",
        correct: true,
      },
      {
        text: "Scrum implements self-management by replacing Project Managers with Scrum Masters.",
        correct: false,
      },
    ],
  },
  {
    question:
      "A Scrum Team is a cohesive unit of professionals that consists of which of the following? <br><br>(choose the best three answers) <br><br>",
    answers: [
      { text: "One Product Owner.", correct: true },
      { text: "Developers.", correct: true },
      { text: "Customers.", correct: false },
      { text: "One Scrum Master.", correct: true },
      { text: "Users.", correct: false },
    ],
  },
  {
    question:
      "Which of the following are topics for the Developers to discuss at the Daily Scrum as they inspect their progress toward the Sprint Goal? <br><br>(choose the best three answers) <br><br>",
    answers: [
      {
        text: "Are there any impediments blocking progress toward the Sprint Goal?",
        correct: true,
      },
      { text: "Why were you late?", correct: false },
      {
        text: "Will today's work negatively impact our ability to meet the Sprint Goal for the Sprint following this one?",
        correct: false,
      },
      {
        text: "What have we learned since yesterday, and how should we modify our plan to increase our ability to meet the Sprint Goal?",
        correct: true,
      },
      {
        text: "How many hours did I spend on the project yesterday?",
        correct: false,
      },
      { text: "What will I be working on tomorrow?", correct: false },
      {
        text: "Are there any decisions that need to be made to maintain progress toward the Sprint Goal?",
        correct: true,
      },
    ],
  },
  {
    question:
      "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Several of the Developers come to you complaining that work identified for the upcoming two Sprints is not meeting the Sprint Goal. The next two Sprints will require full-time commitment from a specialist who is external to the teams.<br><br> What should the Scrum Master consider in this situation? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "The need to have enough work to keep all Developers busy.",
        correct: false,
      },
      {
        text: "The benefit of Developers figuring out a solution for themselves.",
        correct: true,
      },
      { text: "The desire to maintain a stable velocity.", correct: false },
      {
        text: "The ability of the Scrum Teams to produce integrated Increments.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following are appropriate topics for discussion during a Sprint Retrospective? <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "The order of items in the Product Backlog.", correct: false },
      {
        text: "Documenting acceptance criteria for items in the next Sprint.",
        correct: false,
      },
      {
        text: "Identifying high priority process improvements for the next Sprint.",
        correct: true,
      },
      { text: "How the team collaborates.", correct: true },
    ],
  },
  {
    question:
      "At the seventh Sprint Review, the stakeholders are disappointed and angry. They have determined that the product or system being built will not meet their needs and will cost more than they are willing to spend. What factors likely led to this? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "The stakeholders have not been using the Sprint Reviews to inspect and evaluate progress.",
        correct: true,
      },
      {
        text: "The Product Owner has not been keeping the stakeholders aware of the progress of the project.",
        correct: true,
      },
      {
        text: "The Project Management Office (PMO) has not been engaged adequately",
        correct: false,
      },
      {
        text: "The stakeholders were not allowed to prioritize Product Backlog items.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What are three incorrect, untrue, or misleading statements about Scrum? <br><br>(choose the best three answers) <br><br>",
    answers: [
      {
        text: "Scrum is a framework for developing and sustaining complex products.",
        correct: false,
      },
      {
        text: "Scrum is founded on empiricism and lean thinking.",
        correct: false,
      },
      {
        text: "Scrum is a framework that eliminates complexity.",
        correct: true,
      },
      {
        text: "Each component of Scrum serves a specific purpose and is essential to your ability to use Scrum to develop complex products.",
        correct: false,
      },
      {
        text: "Scrum is like traditional processes but with self-organization to replace Project Managers.",
        correct: true,
      },
      {
        text: "Scrum is a methodology where you can pick and choose which parts of Scrum you think will work for your environment.",
        correct: true,
      },
    ],
  },
  {
    question:
      "The Definition of Done serves which three purposes? <br><br>(choose the best three answers) <br><br>",
    answers: [
      {
        text: "Describe the work that must be mostly done before the Sprint is allowed to end.",
        correct: false,
      },
      {
        text: "Describe the purpose, objective, and timebox of each Scrum event.",
        correct: false,
      },
      { text: "Increase transparency.", correct: true },
      {
        text: "Create a shared understanding of when work is complete.",
        correct: true,
      },
      {
        text: "Guide the Developers on how many Product Backlog items to select for the Sprint.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Several Sprints into a project, the Product Owner tells the Scrum Master that a key stakeholder just started using the product. The stakeholder is unhappy with the quality of the product. What are two good options for the Scrum Master? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "Encourage the Product Owner to put quality specifications on the Product Backlog and express the stakeholder's concern to the Developers.",
        correct: true,
      },
      {
        text: "Bring the concern to the testers to improve how the Product is verified.",
        correct: false,
      },
      {
        text: "Coach the Product Owner on how to talk with the Developers about this concern.",
        correct: true,
      },
      {
        text: "Wait to bring this up until the Sprint Retrospective.",
        correct: false,
      },
      {
        text: "Explain to the Product Owner that it is up to the Developers to decide on acceptable quality standards.",
        correct: false,
      },
    ],
  },
  {
    question:
      "The Product Owner is not collaborating with the Developers during the Sprint. What are two valuable actions for a Scrum Master to take? <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "Nominate a proxy Product Owner.", correct: false },
      {
        text: "Stop the Sprint, send the Product Owner to a course and restart.",
        correct: false,
      },
      {
        text: "Inform the Product Owner's functional manager.",
        correct: false,
      },
      {
        text: "Bring up the problem in the Sprint Retrospective.",
        correct: true,
      },
      {
        text: "Coach the Product Owner in the values of Scrum and incremental delivery.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following are the Developers accountable for? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "Organizing the work required to meet the Sprint Goal.",
        correct: true,
      },
      { text: "Selecting the Product Owner.", correct: false },
      { text: "Reporting productivity.", correct: false },
      {
        text: "Creating a plan for the Sprint, the Sprint Backlog.",
        correct: true,
      },
    ],
  },
  {
    question:
      "A Scrum Master is keeping a list of open impediments, but it is growing and he/she has been able to resolve only a small portion of the impediments. Which three techniques would be most helpful in this situation? <br><br> (choose the best three answers)<br><br>",
    answers: [
      { text: "Consulting with the Development Team.", correct: true },
      {
        text: "Prioritizing the list and working on them in order.",
        correct: true,
      },
      {
        text: "Arranging a triage meeting with all project managers.",
        correct: false,
      },
      {
        text: "Alerting management to the impediments and their impact.",
        correct: true,
      },
    ],
  },
  {
    question:
      "What is a Development Team responsible for? <br><br> (choose the best two answers)<br><br>",
    answers: [
      { text: "Resolving internal team conflicts.", correct: true },
      { text: "Reporting productivity.", correct: false },
      { text: "Selecting the Product Owner.", correct: false },
      {
        text: "Organizing the work required to meet the Sprint Goal.",
        correct: true,
      },
    ],
  },
  {
    question:
      "What two factors are best considered when establishing the Sprint length? <br><br> (choose the best two answers)<br><br>",
    answers: [
      {
        text: "The organization has mandated similar length sprints.",
        correct: false,
      },
      {
        text: "The level of uncertainty over the technology to be used.",
        correct: true,
      },
      {
        text: "The frequency at which team formation can be changed.",
        correct: false,
      },
      {
        text: "The risk of being disconnected from the stakeholders.",
        correct: true,
      },
    ],
  },
  {
    question:
      "The Product Owner is not collaborating with the Development Team during the Sprint. What are two valuable actions for a Scrum Master to take? <br><br> (choose the best two answers)<br><br>",
    answers: [
      {
        text: "Inform the Product Owner's functional manager.",
        correct: false,
      },
      {
        text: "Stop the Sprint, send the Product Owner to a course and restart.",
        correct: false,
      },
      {
        text: "Bring up the problem in the Sprint Retrospective.",
        correct: true,
      },
      {
        text: "Coach the Product Owner in the values of Scrum and incremental delivery.",
        correct: true,
      },
      { text: "Nominate a proxy Product Owner.", correct: false },
    ],
  },
  {
    question:
      "Which two activities will a Product Owner engage in during a Sprint? <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "Run the Daily Scrum.", correct: false },
      {
        text: "Prioritize the Development Team's work on the Sprint Backlog.",
        correct: false,
      },
      { text: "Update management on what is being worked on.", correct: false },
      {
        text: "Answer questions from the Development Team about items in the current Sprint.",
        correct: true,
      },
      { text: "Work with the stakeholders.", correct: true },
    ],
  },
  {
    question:
      "Which three questions might be answered by Development Team members at the Daily Scrum? <br><br> (choose the best three answers)<br><br>",
    answers: [
      { text: "How is the Sprint proceeding?", correct: false },
      {
        text: "What did I do yesterday that helped the Development Team meet the Sprint Goal?",
        correct: true,
      },
      { text: "Why were you late?", correct: false },
      {
        text: "What will I do today to help the Development Team meet the Sprint Goal?",
        correct: true,
      },
      {
        text: "How many hours did I spend on the project yesterday?",
        correct: false,
      },
      {
        text: "Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?",
        correct: true,
      },
    ],
  },
  {
    question:
      "Select two ways in which technical debt impacts transparency. <br><br> (choose the best two answers)<br><br>",
    answers: [
      {
        text: "When calculated and estimated, the total amount of technical debt shows exactly how long until the Product Owner can release the Increment.",
        correct: false,
      },
      {
        text: "It leads to false assumptions about the current state of the system, specifically of an Increment being releasable at the end of a Sprint.",
        correct: true,
      },
      {
        text: "As development progresses and code is added, the system becomes more difficult to stabilize, which results in future work being slowed down in unpredictable ways.",
        correct: true,
      },
      {
        text: "It enhances transparency for the Product Owner as a Development Team is not allowed to do additional feature development in a Sprint as long as there is technical debt.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following are true about the length of the Sprint? <br><br> (choose the best two answers)<br><br>",
    answers: [
      {
        text: "The length of the Sprint should be proportional to the work that is done in between Sprints.",
        correct: false,
      },
      {
        text: "It is best to have Sprints of consistent length throughout a development effort.",
        correct: true,
      },
      {
        text: "Sprint length is determined during Sprint Planning, and should hold the time it will take to code the planned features in the upcoming Sprint, but does not include time for any testing.",
        correct: false,
      },
      {
        text: "Sprint length is determined during Sprint Planning, and should be long enough to make sure the Development Team can deliver what is to be accomplished in the upcoming Sprint.",
        correct: false,
      },
      { text: "All Sprints must be 1 month or less.", correct: true },
    ],
  },
  {
    question:
      "What are three ways Scrum promotes self-organization? <br><br> (choose the best three answers)<br><br>",
    answers: [
      { text: "By not allowing documentation.", correct: false },
      {
        text: "By the Development Team deciding what work to do in a Sprint.",
        correct: true,
      },
      {
        text: "By preventing stakeholders from entering the development room.",
        correct: false,
      },
      {
        text: "By removing titles for Development Team members.",
        correct: true,
      },
      { text: "By being a lightweight framework.", correct: true },
    ],
  },
  {
    question:
      "Which Scrum Values are violated by building Product Backlog items that have low business value? <br><br>(choose the best three answers) <br><br>",
    answers: [
      { text: "Earned Value.", correct: false },
      { text: "Focus.", correct: true },
      { text: "Courage.", correct: true },
      { text: "Economic Value Added.", correct: false },
      { text: "Respect.", correct: true },
    ],
  },
  {
    question:
      "Which of the following are examples of a Scrum Team practicing Scrum poorly or not exhibiting traits of a self-managing Scrum Team?<br><br>(choose the best three answers)<br><br>",
    answers: [
      {
        text: "The Developers are working within the boundaries of their organizations functional description and nicely handing off work from analyst to developer to tester to integration.",
        correct: true,
      },
      {
        text: "The Developers have all the skills they need to create a valuable, useful Increment.",
        correct: false,
      },
      {
        text: "The Developers create their own Sprint Backlog, reflecting all work that is required to meet the Definition of Done.",
        correct: false,
      },
      {
        text: "The Developers are collaboratively selecting their own work during the Sprint.",
        correct: false,
      },
      {
        text: "The Developers invite external stakeholders to the Sprint Planning to ask them how to turn a Product Backlog item into an Increment via a complete and detailed Sprint Backlog.",
        correct: true,
      },
      {
        text: "Stakeholders attend the Daily Scrum to check on the Scrum Team's progress.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which two things are appropriate for a Scrum Master to do, if the Scrum Team does not have the tools and environment to completely finish each selected Product Backlog item? <br><br>(choose the best two answers) <br><br>",
    answers: [
      {
        text: "Refocus the current Sprint on establishing the Scrum Team's environment instead of delivering an Increment.",
        correct: false,
      },
      {
        text: "Encourage the Product Owner to accept partially done Increments until the situation improves.",
        correct: false,
      },
      { text: "Declare the Scrum Team not ready for Scrum.", correct: false },
      {
        text: "Coach the Scrum Team to improve its skills, tools and environment over time and adjust the Definition of Done accordingly.",
        correct: true,
      },
      {
        text: "Have the Scrum Team establish a Definition of Done that is actually possible to achieve given current circumstances.",
        correct: true,
      },
    ],
  },
  {
    question:
      "The Daily Scrum is an event that happens every day. What would be three key concerns if the frequency were to be lowered to every two or three days? <br><br>(choose the best three answers) <br><br>",
    answers: [
      {
        text: "Too much work is spent updating the Scrum board before the meeting.",
        correct: false,
      },
      {
        text: "The Product Owner cannot accurately report progress to the stakeholders.",
        correct: false,
      },
      {
        text: "Opportunities to inspect and adapt the Sprint Backlog are lost.",
        correct: true,
      },
      { text: "The Sprint Backlog may become inaccurate.", correct: true },
      {
        text: "Impediments are raised and resolved more slowly.",
        correct: true,
      },
      {
        text: "The Scrum Master loses the ability to update the Gantt chart properly.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Commitment is essential to achieve the benefits of Scrum. What actions demonstrate the commitment of Scrum Team members? <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "Do your best work.", correct: true },
      { text: "Help your fellow Scrum Team members.", correct: true },
      { text: "Work late.", correct: false },
      {
        text: "Always deliver the items in the Sprint forecast.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which are NOT appropriate topics for discussion in a Sprint Retrospective? <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "Team relations and collaboration.", correct: false },
      {
        text: "The value of work currently represented in the Product Backlog.",
        correct: true,
      },
      { text: "Sprint Backlog for the next Sprint.", correct: true },
      { text: "Definition of Done.", correct: false },
    ],
  },
  {
    question:
      "What are two responsibilities of testers in a Scrum Team? <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "Finding bugs.", correct: false },
      { text: "The Developers are responsible for quality.", correct: true },
      { text: "Scrum has no ''tester'' role.", correct: true },
      { text: "Verifying the work of programmers.", correct: false },
      { text: "Tracking quality metrics.", correct: false },
    ],
  },
  {
    question:
      "What are the characteristics of a Product Backlog Item that is “ready” for selection in a Sprint Planning? <br><br> (choose the best three answers)<br><br>",
    answers: [
      { text: "Has little detail.", correct: false },
      { text: "Well refined.", correct: true },
      {
        text: "Can be implemented within one Sprint and tested in the next Sprint.",
        correct: false,
      },
      { text: "Can be done within one Sprint.", correct: true },
      { text: "Is at the top of the Product Backlog.", correct: true },
      { text: "Is at the bottom of the Product Backlog.", correct: false },
    ],
  },
  {
    question:
      "Select all that apply: <br><br>(choose the best three answers) <br><br>",
    answers: [
      { text: "Daily Scrums improve communication.", correct: true },
      { text: "Daily Scrums last at least 15 minutes.", correct: false },
      { text: "Daily Scrums help to identify impediments.", correct: true },
      {
        text: "Daily Scrums highlight and promote quick decision-making.",
        correct: true,
      },
      {
        text: "Daily Scrums can take place in different rooms each day.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What are the two areas NOT considered by the Product Owner when performing Value Driven Development? <br><br>",
    answers: [
      {
        text: "Coaching the Developers in cross-functionality and self-management.",
        correct: true,
      },
      { text: "Facilitator of Key Stakeholder involvement.", correct: false },
      {
        text: "Causing the removal of impediments to the Scrum Team's progress.",
        correct: true,
      },
      { text: "Product Marketplace Expert.", correct: false },
      { text: "Being a Value Maximizer.", correct: false },
    ],
  },
  {
    question:
      "How can you determine that the Product Owner and the Developers are interacting enough throughout a Sprint? <br><br>(choose the best two answers) <br><br>",
    answers: [
      { text: "See the level of velocity of the Developers.", correct: false },
      {
        text: "See whether the Stakeholders / users are satisfied with the increment.",
        correct: true,
      },
      {
        text: "See whether the Product Owner is satisfied with the increment.",
        correct: true,
      },
      {
        text: "See if the Product Owner is present at every Daily Scrum.",
        correct: false,
      },
    ],
  },
  {
    question:
      "How can the Product Owner bring his Product vision to life? <br><br>(choose the best three answers) <br><br>",
    answers: [
      { text: "Asking for an approval from Upper Management.", correct: false },
      {
        text: "Utilizing the underlying empirical product planning features of Scrum.",
        correct: true,
      },
      {
        text: "Via the Product Backlog and iterating towards that vision every Sprint.",
        correct: true,
      },
      {
        text: "Articulating the product vision to the Scrum Team and the Key Stakeholders early and often.",
        correct: true,
      },
      {
        text: "Making the Scrum Master bring the vision to the Scrum Team and the Key Stakeholders.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What does Product Backlog management include? <br><br>(choose the best three answers) <br><br>",
    answers: [
      {
        text: "Moving Product Backlog items into the Sprint Backlog.",
        correct: false,
      },
      {
        text: "Ensuring that all Product Backlog items are visible, transparent and clear to all and show what the Scrum Team will work on next.",
        correct: true,
      },
      {
        text: "Presenting the Product Backlog items to Key Stakeholders and the CEO once a week.",
        correct: false,
      },
      {
        text: "Creating and clearly communicating Product Backlog items.",
        correct: true,
      },
      {
        text: "Ordering the items in the Product Backlog to optimize value.",
        correct: true,
      },
    ],
  },
  {
    question:
      "What are the artifacts in Scrum? <br><br>(choose the best three answers) <br><br>",
    answers: [
      { text: "Sprint Goal.", correct: false },
      { text: "Product Backlog.", correct: true },
      { text: "Increment.", correct: true },
      { text: "List of removed impediments.", correct: false },
      { text: "Sprint Backlog.", correct: true },
    ],
  },
  {
    question:
      "What is true for the Sprint Retrospective? <br><br>(select all that apply) <br><br>",
    answers: [
      {
        text: "It's purpose is to plan ways to increase effectiveness and quality.",
        correct: true,
      },
      {
        text: "The team talks about what went well during the Sprint, discusses any potential issues during the Sprint and how those issues were/weren't solved.",
        correct: true,
      },
      {
        text: "It is the time when the Scrum Team inspects the last Sprint in terms of individuals, processes, tools, interactions and their Definition of Done.",
        correct: true,
      },
      {
        text: "Get feedback from the stakeholders that were invited by the Product Owner.",
        correct: false,
      },
      {
        text: "It is timeboxed to a maximum of four hours for a one-month Sprint.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Although they may vary with the domain of work, Product Backlog items often have the following attributes: <br><br>(select all that apply) <br><br>",
    answers: [
      { text: "Description.", correct: true },
      { text: "Order.", correct: true },
      { text: "Size.", correct: true },
      { text: "Complexity.", correct: false },
      { text: "Velocity.", correct: false },
      { text: "Risk.", correct: false },
    ],
  },
  {
    question:
      "What are the three commitments of Scrum? <br><br>(choose the best three answers) <br><br>",
    answers: [
      { text: "Sprint Backlog.", correct: false },
      { text: "Sprint Goal.", correct: true },
      { text: "Product Goal.", correct: true },
      { text: "Definition of Done.", correct: true },
      { text: "Product Backlog.", correct: false },
      { text: "Increment.", correct: false },
    ],
  },
  {
    question:
      "You are the Scrum Master on a newly formed Scrum Team. Which three of the following activities would probably help the team in starting up? <br>",
    answers: [
      {
        text: "Have the Scrum Team members introduce themselves to each other and give a brief background of their skills and work history.",
        correct: true,
      },
      {
        text: "Introduce a bonus system for the top performers in the team.",
        correct: false,
      },
      {
        text: "Have the development managers for each Developer introduce their direct reports and go over their responsibilities on the Scrum Team.",
        correct: false,
      },
      {
        text: "Ensure the Scrum Team members have compatible personalities.",
        correct: false,
      },
      {
        text: "Ask the Product Owner to discuss the product, its history, goals and context and answer questions.",
        correct: true,
      },
      {
        text: "Ensure the Scrum Team understands they need a Definition of Done.",
        correct: true,
      },
    ],
  },
  {
    question:
      "What are considered attributes of a Product Backlog? <br><br>(choose the best three answers)<br><br>",
    answers: [
      { text: "It is never complete.", correct: true },
      {
        text: "When the final version of a product is rolled out, a Product Backlog is no longer needed.",
        correct: false,
      },
      { text: "It is dynamic.", correct: true },
      {
        text: "Product Backlog could be closed when it contains no items to include in the next Sprint.",
        correct: false,
      },
      {
        text: "As long as a product exists, its Product Backlog also exists.",
        correct: true,
      },
    ],
  },
  {
    question:
      "How does the Definition of Done help the Scrum Team? <br><br>(choose the best three answers)<br><br>",
    answers: [
      {
        text: "The Definition of Done ensures artifact transparency.",
        correct: true,
      },
      {
        text: "The Definition of Done helps to calculate velocity of the Scrum Team.",
        correct: false,
      },
      {
        text: "The Definition of Done is used to assess when work is complete on the Increment.",
        correct: true,
      },
      {
        text: "The Definition of Done helps with Product Backlog refinement.",
        correct: false,
      },
      {
        text: "Guides the Developers in knowing how many Product Backlog items it can select during a Sprint Planning.",
        correct: true,
      },
    ],
  },
  {
    question: "Who usually doesn't participate in the Daily Scrum?<br><br>",
    answers: [
      { text: "The Product Owner.", correct: true },
      { text: "The Developers.", correct: false },
      { text: "The CEO.", correct: true },
      { text: "The Stakeholders.", correct: true },
      { text: "The Scrum Master.", correct: true },
    ],
  },
  {
    question: "Who are the typical Key Stakeholders?<br><br>",
    answers: [
      {
        text: "The people responsible for making the funding decisions for the product development.",
        correct: true,
      },
      {
        text: "The people responsible for paying to use the product.",
        correct: true,
      },
      {
        text: "The people responsible for product development.",
        correct: false,
      },
      { text: "The people who actually use the product.", correct: true },
      { text: "The people responsible for product marketing.", correct: false },
    ],
  },
  {
    question:
      "What are the three most applicable characteristics of the Product Owner? <br><br>",
    answers: [
      { text: "Product Value Maximizer.", correct: true },
      { text: "Product Marketplace Expert.", correct: true },
      { text: "Facilitator of Scrum events.", correct: false },
      { text: "Lead Scrum evangelist in the organization.", correct: false },
      {
        text: "Lead facilitator of Key Stakeholder Involvement.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Product Backlog Refinement...<br><br> (choose the best two answers)<br><br>",
    answers: [
      {
        text: "answers the question: How will the work needed to deliver the Increment be achieved.",
        correct: false,
      },
      {
        text: "is the act of breaking down and further defining Product Backlog items into smaller more precise items.",
        correct: true,
      },
      { text: "is time-boxed to a maximum of 4 hours.", correct: false },
      {
        text: "is only used to prepare for the next Sprint Planning.",
        correct: false,
      },
      {
        text: "is an ongoing activity to add details, such as description, order and size.",
        correct: true,
      },
    ],
  },
  {
    question: "The pillars of Empiricism include: <br><br>",
    answers: [
      { text: "Inspection.", correct: true },
      { text: "Transparency.", correct: true },
      { text: "Flexibility.", correct: false },
      { text: "Change.", correct: false },
      { text: "Adaption.", correct: true },
    ],
  },
  {
    question: "What are the two true statements?<br><br>",
    answers: [
      {
        text: "The coherence between Product Backlog items in a Sprint is made transparent by the Sprint Goal.",
        correct: true,
      },
      {
        text: "The Scrum Team is responsible for formulating the Sprint Goal.",
        correct: true,
      },
      {
        text: "When existing Product Backlog items in the Sprint Backlog are modified the Sprint Goal is bound to become invalid",
        correct: false,
      },
    ],
  },
  {
    question:
      "Select the two meetings in which people outside the Scrum Team are allowed to participate <br><br>",
    answers: [
      { text: "The Sprint Planning.", correct: true },
      { text: "The Sprint Retrospective.", correct: false },
      { text: "The Daily Scrum.", correct: false },
      { text: "The Sprint Review.", correct: true },
      { text: "The status report meeting.", correct: false },
    ],
  },
  {
    question:
      "Who is NOT responsible for the changes in the Product Backlog? <br><br>(select all that apply)<br><br>",
    answers: [
      { text: "The Stakeholders.", correct: true },
      { text: "The Product Owner.", correct: false },
      { text: "The Scrum Master.", correct: true },
      { text: "The Developers.", correct: true },
      { text: "The CEO.", correct: true },
    ],
  },
  {
    question:
      "Who has to participate in every Sprint Planning?<br><br>(select all that apply)<br><br> ",
    answers: [
      { text: "The Developers.", correct: true },
      { text: "The Stakeholders.", correct: false },
      { text: "The Product Owner.", correct: true },
      { text: "The Scrum Master.", correct: true },
      { text: "The CEO.", correct: false },
      { text: "Domain experts.", correct: false },
    ],
  },
  {
    question:
      "How does the Scrum Master serve the Organization? <br><br>(choose the best three answers)<br><br>",
    answers: [
      {
        text: "Leading, training, and coaching the organization in its Scrum adaption.",
        correct: true,
      },
      {
        text: "Removing barriers between stakeholders and Scrum Team.",
        correct: true,
      },
      {
        text: "Planning and advising Scrum implementations within the organization.",
        correct: true,
      },
      {
        text: "Ensuring that the Product Backlog is transparent, visible and understood.",
        correct: false,
      },
      {
        text: "Instilling quality by adhering to a Definition of Done.",
        correct: false,
      },
    ],
  },
];

// Get references to the question, answer buttons, and next button from the DOM
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Initialize the current question index and score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0; // Reset the question index to 0
  score = 0; // Reset the score
  nextButton.innerHTML = "Next"; // Set the next button text
  showQuestion(); // Display the first question
}

// Function to shuffle an array (used to randomize question order)
function shuffle(array) {
  let currentIndex = array.length; // Get the length of the array

  // While there are elements left to shuffle
  while (currentIndex != 0) {
    // Pick a random element
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

// Create an array of question indices and shuffle them for random question order
var arr = new Array(questions.length).fill().map((v, i) => i);
shuffle(arr); // Shuffle the array of indices
console.log(arr); // Log the shuffled array for debugging

// Function to display the current question and answers
function showQuestion() {
  resetState(); // Reset the state (clear previous answers)

  // Get the current question using the shuffled array
  let currentQuestion = questions[arr[currentQuestionIndex]];
  let questionNo = currentQuestionIndex + 1; // Calculate the current question number
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the question

  // Loop through the answers and create buttons for each
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button"); // Create a new button for each answer
    button.innerHTML = answer.text; // Set the button text to the answer
    button.classList.add("btn"); // Add styling class
    answerButtons.appendChild(button); // Append the button to the answer container

    // If the answer is correct, store that information in the button's dataset
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    // Add a click event listener to check if the selected answer is correct
    button.addEventListener("click", selectAnswer);
  });
}

// Function to reset the quiz state (clear previous answers)
function resetState() {
  nextButton.style.display = "none"; // Hide the next button until an answer is selected
  // Remove all child elements (previous answer buttons) from the answer container
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle answer selection
function selectAnswer(e) {
  const selectedBtn = e.target; // Get the selected button
  const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct

  // If the answer is correct, add the 'correct' class
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    // If the answer is incorrect, add the 'incorrect' class
    selectedBtn.classList.add("incorrect");
  }

  nextButton.style.display = "block"; // Show the next button after an answer is selected
}

// Function to display the final message when the quiz is completed
function showScore() {
  resetState(); // Reset the state (clear previous answers)
  // Display a message indicating the quiz is finished
  questionElement.innerHTML = `Well done. That was ${questions.length} questions!`;
  nextButton.innerHTML = "Try Again"; // Change the next button text to "Try Again"
  nextButton.style.display = "block"; // Show the button to allow the user to restart the quiz
}

// Function to handle the logic when the next button is clicked
function handleNextButton() {
  currentQuestionIndex++; // Move to the next question index
  // If there are more questions, show the next question
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // If no more questions, show the final score
    showScore();
  }
}

// Add a click event listener to the next button to handle moving to the next question
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton(); // Go to the next question if any left
  } else {
    startQuiz(); // Restart the quiz if all questions are completed
  }
});

// Start the quiz when the page loads
startQuiz();