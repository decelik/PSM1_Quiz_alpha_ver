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
      "When is it most appropriate for a Scrum Team to change the Definition of Done?",
    answers: [
      { text: "During Sprint Planning.", correct: false },
      { text: "During the Sprint Retrospective.", correct: true },
      { text: "During Product Backlog refinement.", correct: false },
      { text: "Prior to starting a new project.", correct: false },
    ],
  },
  {
    question: "What does it mean to say that an event has a timebox?",
    answers: [
      {
        text: "The event must take at least a minimum amount of time.",
        correct: false,
      },
      { text: "The event must happen at a set time.", correct: false },
      {
        text: "The event can take no more than a maximum amount of time.",
        correct: true,
      },
      { text: "The event must happen by a given time.", correct: false },
    ],
  },
  {
    question:
      "Who has the final decision about the order of items in the Product Backlog?",
    answers: [
      { text: "The Stakeholders.", correct: false },
      { text: "The Product Owner.", correct: true },
      { text: "The Scrum Team.", correct: false },
      { text: "The Developers.", correct: false },
      { text: "The Scrum Master.", correct: false },
    ],
  },
  {
    question:
      "What activities would a Product Owner typically undertake in the period between the end of the current Sprint and the start of the next Sprint?",
    answers: [
      { text: "Refine the Product Backlog.", correct: false },
      {
        text: "Work with the Quality Assurance departments on the Increment of the current Sprint.",
        correct: false,
      },
      { text: "Update the project plan with stakeholders.", correct: false },
      {
        text: "There are no such activities. The next Sprint starts immediately after the current Sprint.",
        correct: true,
      },
    ],
  },
  {
    question: "When is the Sprint Backlog created?",
    answers: [
      { text: "During refinement.", correct: false },
      { text: "During the Sprint Retrospective.", correct: false },
      { text: "During Sprint Planning.", correct: true },
      { text: "Prior to Sprint Planning.", correct: false },
    ],
  },
  {
    question: "When does a Sprint conclude?",
    answers: [
      {
        text: "When the Product Owner decides enough has been delivered to meet the Sprint Goal.",
        correct: false,
      },
      { text: "When the Sprint Retrospective is complete.", correct: true },
      {
        text: "When all the tasks are completed by the Developers.",
        correct: false,
      },
      {
        text: "When all Product Backlog items meet their Definition of Done.",
        correct: false,
      },
    ],
  },
  {
    question: "Which outcome is expected as a Scrum Team matures?",
    answers: [
      { text: "There will be no need for a timeboxed Sprint.", correct: false },
      {
        text: "They will improve their Definition of Done to include more stringent criteria.",
        correct: true,
      },
      {
        text: "The Sprint Retrospectives will grow to be longer than 4 hours.",
        correct: false,
      },
      {
        text: "A Scrum Master is no longer needed since they are a mature team now.",
        correct: false,
      },
      { text: "Sprint Reviews will no longer be needed.", correct: false },
    ],
  },
  {
    question:
      "Which of the following best describes an increment of working software?<br>",
    answers: [
      {
        text: "A decomposition of all Product Backlog items into tasks for future Sprint Backlog lists.",
        correct: false,
      },
      {
        text: "Additional features in a usable state that complement those delivered in previous iterations.",
        correct: true,
      },
      {
        text: "A new user interface design for functionality delivered in previous iterations.",
        correct: false,
      },
      {
        text: "An automated test suite to verify functionality delivered in previous iterations.",
        correct: false,
      },
      {
        text: "UML diagrams that describe how to deliver functionality in future iterations.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the main reason for the Scrum Master to be at the Daily Scrum?",
    answers: [
      {
        text: "They do not have to be there; they only need to ensure the Developers have a Daily Scrum.",
        correct: true,
      },
      {
        text: "To gather status and progress information to report to management.",
        correct: false,
      },
      {
        text: "To write down any changes to the Sprint Backlog, Including adding new Items, and tracking progress on the burn-down.",
        correct: false,
      },
      {
        text: "To make sure every team member answers the three questions.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which technique is the best way the Scrum Master can ensure that the Developers communicate effectively with the Product Owner?",
    answers: [
      {
        text: "Observe communications between them and facilitate direct collaboration.",
        correct: true,
      },
      {
        text: "Teach the Product Owner about the technologies employed during the Sprints.",
        correct: false,
      },
      { text: "Function as a go-between for them.", correct: false },
      {
        text: "Teach the Developers to talk in terms of business needs and objectives.",
        correct: false,
      },
    ],
  },
  {
    question:
      "How much work must the Developers complete for each Product Backlog item they select for a Sprint?<br><br>",
    answers: [
      {
        text: "Analysis, design, programming, testing and documentation.",
        correct: false,
      },
      { text: "As much as it can fit into the Sprint.", correct: false },
      {
        text: "All development work and at least some testing.",
        correct: false,
      },
      {
        text: "Enough so that each Product Backlog item they select meets the Definition of Done",
        correct: true,
      },
    ],
  },
  {
    question:
      "True or False: The purpose of a Sprint is to produce a valuable and useful Increment of working product<br><br>",
    answers: [
      { text: "True.", correct: true },
      { text: "False.", correct: false },
    ],
  },
  {
    question:
      "True or False: The Scrum Team must choose at least one high priority process improvement item, identified during the Sprint Retrospective, and place it in the Sprint Backlog<br><br>",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question: "When should a Developer on a Scrum Team be replaced?<br><br>",
    answers: [
      {
        text: "As needed, while taking into account a short-term reduction in productivity.",
        correct: true,
      },
      {
        text: "As needed, with no special allowance for changes in productivity.",
        correct: false,
      },
      { text: "Every Sprint to promote shared learning.", correct: false },
      { text: "Never, it reduces productivity.", correct: false },
    ],
  },
  {
    question:
      "True or False: Every Scrum Team must have a Product Owner and Scrum Master.",
    answers: [
      {
        text: "False. A Scrum Master Is only required when asked for by the Scrum Team.",
        correct: false,
      },
      {
        text: "True. Each must be 100% dedicated to the Scrum Team.",
        correct: false,
      },
      {
        text: "False. A Product Owner can be replaced by a subject matter expert in the Scrum Team.",
        correct: false,
      },
      {
        text: "True. Outcomes are affected by their participation and availablity.",
        correct: true,
      },
    ],
  },
  {
    question: "How should a Scrum Team deal with non-functional requirements?",
    answers: [
      {
        text: "Assign them to the lead developers on the team.",
        correct: false,
      },
      {
        text: "Make sure the release department understands these requirements, but it is not the Scrum Team's responsibility.",
        correct: false,
      },
      { text: "Ensure every Increment meets them.", correct: true },
      {
        text: "Manage them during the Integration Sprint prior to the Release Sprint.",
        correct: false,
      },
    ],
  },
  {
    question:
      "You are the Scrum Master of a new, to be developed Product. Development is going to require 45 people.<br><br> What is a good first question for you to suggest the group thinks about when forming into teams?<br><br>",
    answers: [
      {
        text: "Who are the subject matter experts on each team?",
        correct: false,
      },
      {
        text: "How will we make sure all teams have the right amount of expertise?",
        correct: true,
      },
      { text: "Who are going to be the team leads?", correct: false },
      {
        text: "What is the right mixture of senior and junior people on each team?",
        correct: false,
      },
    ],
  },
  {
    question:
      "If burndown charts are used to visualize progress, what do they track?",
    answers: [
      { text: "Accumulated cost.", correct: false },
      { text: "Individual worker productivity.", correct: false },
      { text: "Work remaining across time.", correct: true },
      {
        text: "Accumulated business value delivered to the customer.",
        correct: false,
      },
    ],
  },
  {
    question: "Who owns the Sprint Backlog?",
    answers: [
      { text: "The Developers.", correct: true },
      { text: "The Scrum Team.", correct: false },
      { text: "The Product Owner.", correct: false },
      { text: "The Scrum Master.", correct: false },
    ],
  },
  {
    question:
      "Which of the following might the Scrum Team discuss during a Sprint Retrospective?",
    answers: [
      { text: "Methods of communication.", correct: false },
      { text: "The way the Scrum Team does Sprint Planning.", correct: false },
      {
        text: "Skills needed to improve the Developers ability to deliver.",
        correct: false,
      },
      { text: "The Definition of Done.", correct: false },
      { text: "All of the above.", correct: true },
    ],
  },
  {
    question: "What is the timebox for the Sprint Planning event?",
    answers: [
      { text: "Monthly.", correct: false },
      { text: "Whenever it is done.", correct: false },
      { text: "8 hours for a one-month Sprint.", correct: true },
      { text: "4 hours for a one-month Sprint.", correct: false },
    ],
  },
  {
    question: "Which best describes the Product Backlog?",
    answers: [
      {
        text: "It contains all foreseeable tasks and requirements from which the Scrum Team can develop and maintain a complete project plan.",
        correct: false,
      },
      {
        text: "It is baselined to follow change management processes.",
        correct: false,
      },
      {
        text: "It is allowed to grow and change as more is learned about the product and its customers.",
        correct: true,
      },
      {
        text: "It provides just enough information to enable a Scrum Team to start the design phase of a product.",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following are true about the length of the Sprint?",
    answers: [
      {
        text: "Sprint length is determined during Sprint Planning, and should be long enough to make sure the Scrum Team can deliver what is to be accomplished in the upcoming Sprint.",
        correct: false,
      },
      {
        text: "The length of the Sprint should be proportional to the work that is done in between Sprints.",
        correct: false,
      },
      {
        text: "Sprint length is determined during Sprint Planning, and should hold the time it will take to build the planned features in the upcoming Sprint, but does not include time for any testing.",
        correct: false,
      },
      { text: "All Sprints must be one month or less.", correct: true },
    ],
  },
  {
    question:
      "Developers are self-managing, which of the following do they manage?",
    answers: [
      { text: "Stakeholders for the Sprint Review.", correct: false },
      { text: "Sprint Backlog.", correct: true },
      { text: "Product Backlog ordering.", correct: false },
      { text: "When to release, based on its progress.", correct: false },
      { text: "Sprint length.", correct: false },
    ],
  },
  {
    question: "What is the timebox for the Sprint Review?",
    answers: [
      { text: "2 hours for a one-month Sprint.", correct: false },
      { text: "1 day.", correct: false },
      { text: "4 hours for a one-month Sprint.", correct: true },
      { text: "As long as needed.", correct: false },
    ],
  },
  {
    question:
      "Who is accountable for managing the progress of work during a Sprint?",
    answers: [
      { text: "The most junior member of the team.", correct: false },
      { text: "The Product Owner.", correct: false },
      { text: "The Scrum Master.", correct: false },
      { text: "The Developers.", correct: true },
    ],
  },
  {
    question: "Which statement best describes the Sprint Review?",
    answers: [
      {
        text: "It is used to congratulate the Developers if they complete their forecast or to punish the Developers if they fail to meet their forecast.",
        correct: false,
      },
      {
        text: "It is when the Scrum Team and stakeholders inspect the outcome of a Sprint and figure out what to do next.",
        correct: true,
      },
      {
        text: "It is a demo at the end of the Sprint for everyone in the organization to check on the work done.",
        correct: false,
      },
      {
        text: "It is a mechanism to control the Developers activities during a Sprint.",
        correct: false,
      },
    ],
  },
  {
    question:
      "A Product Owner wants advice from the Scrum Master about estimating work in Scrum.<br><br> What guidance should a Scrum Master give?<br><br>",
    answers: [
      { text: "Estimates must be in relative units.", correct: false },
      { text: "Scrum forbids estimating.", correct: false },
      {
        text: "Product Backlog items must be estimated in story points.",
        correct: false,
      },
      {
        text: "Estimates are made by the people doing the work.",
        correct: true,
      },
      {
        text: "Estimates are made by the Product Owner, but are best checked with the Developers.",
        correct: false,
      },
    ],
  },
  {
    question:
      "When does a Developer become accountable for the value of a Product Backlog item selected for the Sprint?",
    answers: [
      {
        text: "Whenever a team member can accommodate more work.",
        correct: false,
      },
      { text: "At the Sprint Planning Event.", correct: false },
      { text: "During the Daily Scrum.", correct: false },
      {
        text: "Never. The entire Scrum Team is accountable for creating value every Sprint.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which of the following services are appropriate for a Scrum Master in regard to the Daily Scrum?",
    answers: [
      { text: "Lead the discussions.", correct: false },
      {
        text: "Make sure that all 3 questions have been answered by each member of the team.",
        correct: false,
      },
      {
        text: "Keep track of whether each Developer has a chance to speak.",
        correct: false,
      },
      {
        text: "Teach the Developers to keep the Daily Scrum within 15 minutes.",
        correct: true,
      },
      { text: "All of the above.", correct: false },
    ],
  },
  {
    question:
      "What does it mean for a Development Team to be cross-functional?<br><br>",
    answers: [
      {
        text: "The Development Team includes not only developers but also business analysts, architects, and testers.",
        correct: false,
      },
      {
        text: "Developers on the Development Team work closely with business analysts, architects, developers and testers who are not on the team.",
        correct: false,
      },
      {
        text: "The Development Team includes cross-skilled individuals who are able to contribute to do what is necessary to deliver an increment of software.",
        correct: true,
      },
      {
        text: "The Development Team is a virtual team drawing from separate teams of business analysts, architects, developers and testers.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: A Scrum Master fulfills the same role as a traditional Project Manager.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question: "Which phrase best describes a Product Owner?",
    answers: [
      { text: "Team manager.", correct: false },
      { text: "Requirements engineer.", correct: false },
      { text: "Value optimizer.", correct: true },
      {
        text: "Go-between for the Developers and the customers.",
        correct: false,
      },
    ],
  },
  {
    question:
      "The CEO asks the Developers to add a ''very important'' item to a Sprint that is in progress. <br><br>What should the Developers do?<br><br>",
    answers: [
      {
        text: "Add the item to the current Sprint and drop an item of equal size.",
        correct: false,
      },
      {
        text: "Discuss the item with the other members of the Scrum Team so the team can decide what to do.",
        correct: true,
      },
      {
        text: "Add the item to the current Sprint Backlog and begin work immediately since the request came from the CEO.",
        correct: false,
      },
      {
        text: "Add the item to the Sprint Backlog for the next Sprint.",
        correct: false,
      },
      {
        text: "Add the item to the top of the Product Backlog.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the Scrum Master responsible for during the Sprint Retrospective?",
    answers: [
      {
        text: "Summarizing and reporting the discussions to management.",
        correct: false,
      },
      {
        text: "Acting as a scribe to capture the Scrum Team's answers.",
        correct: false,
      },
      {
        text: "Participating as a Scrum Team member and facilitating as requested or needed.",
        correct: true,
      },
      { text: "Prioritizing the resulting action items.", correct: false },
    ],
  },
  {
    question: "When does the second Sprint start?",
    answers: [
      {
        text: "Once the architectural changes for the second Sprint are approved by the senior architect.",
        correct: false,
      },
      { text: "Immediately after the first Sprint.", correct: true },
      {
        text: "After the Product Backlog items for the second Sprint have been selected.",
        correct: false,
      },
      {
        text: "After the customer completes acceptance testing of the first Sprint.",
        correct: false,
      },
    ],
  },
  {
    question:
      "The Scrum Master observes the Product Owner struggling with ordering the Product Backlog. <br><br>What is an appropriate action for the Scrum Master to take?<br><br>",
    answers: [
      {
        text: "Offer the Product Owner help in understanding that the goal of ordering the Product Backlog is to maximize value.",
        correct: true,
      },
      {
        text: "Suggest that the Developers order the Product Backlog to be sure that it is a feasible ordering of work.",
        correct: false,
      },
      {
        text: "Encourage the Product Owner to work with the Developers to see which items technically are fastest to implement.",
        correct: false,
      },
      {
        text: "Present the Product Owner with an ordered Product Backlog to use.",
        correct: false,
      },
      {
        text: "Suggest the Product Owner extend the Sprint, so he can have more time to order the Product Backlog.",
        correct: false,
      },
    ],
  },
  {
    question: "When might a Sprint be cancelled?",
    answers: [
      {
        text: "When the Developers determine the product plan is infeasible.",
        correct: false,
      },
      {
        text: "When it becomes clear that not everything will be finished by the end of the Sprint.",
        correct: false,
      },
      {
        text: "When the sales department has an important new opportunity.",
        correct: false,
      },
      { text: "When the Sprint Goal becomes obsolete.", correct: true },
    ],
  },
  {
    question: "What may be included in the Sprint Backlog?",
    answers: [
      { text: "User Stories.", correct: false },
      { text: "Tasks.", correct: false },
      { text: "Use Cases.", correct: false },
      { text: "Tests.", correct: false },
      {
        text: "Any of the above (or others) which are a decomposition of the selected Product Backlog items.",
        correct: true,
      },
    ],
  },
  {
    question:
      "True or False: Cross-functional teams are optimized to work on one component or layer of a system only.",
    answers: [
      { text: "True.", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question:
      "How is management that is external to the Scrum Team involved in the Daily Scrum?",
    answers: [
      { text: "The Product Owner represents their opinions.", correct: false },
      { text: "The Scrum Master speaks on their behalf.", correct: false },
      { text: "Managers are not required at the Daily Scrum.", correct: true },
      {
        text: "Management gives an update at the start of each Daily Scrum.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which statement best describes the Sprint Backlog as the output of the Sprint Planning?",
    answers: [
      { text: "It is the Developers plan for the Sprint.", correct: true },
      {
        text: "It is a complete list of all work to be done in a Sprint.",
        correct: false,
      },
      { text: "Each task is estimated in hours.", correct: false },
      { text: "It is ordered by the Product Owner.", correct: false },
      { text: "Every item has a designated owner.", correct: false },
    ],
  },
  {
    question:
      "The Sprint Review is mainly an inspect and adapt opportunity for which group?",
    answers: [
      { text: "The Product Owner and the Developers.", correct: false },
      { text: "The Product Owner and stakeholders.", correct: false },
      { text: "The Developers and stakeholders.", correct: false },
      { text: "The Developers and management.", correct: false },
      { text: "The Product Owner and management.", correct: false },
      { text: "The Scrum Team and stakeholders.", correct: true },
    ],
  },
  {
    question:
      "The Developers ask their Product Owner to re-order the Product Backlog. The team is waiting for an external supplier to deliver a component. Without that component there will not be enough work in the next Sprint to occupy the full team. <br><br>As the Scrum Master, what advice would you give the Product Owner?<br><br>",
    answers: [
      {
        text: "Tell the Product Owner to re-order the Product Backlog so the work involving the external component can be planned in a separate sprint.",
        correct: false,
      },
      {
        text: "Tell the Product Owner that the Product Backlog should be ordered to maximize utilization of the Developers.",
        correct: false,
      },
      {
        text: "Remind the Product Owner that their primary concern is the flow of value reflected in the ordering of the Product Backlog.",
        correct: true,
      },
    ],
  },
  {
    question:
      "As the Developers start work during the Sprint, they realize they have selected too much work to finish in the Sprint. <br><br>What should they do?<br><br>",
    answers: [
      {
        text: "Find another Scrum Team to give the excess work to.",
        correct: false,
      },
      {
        text: "As soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items.",
        correct: true,
      },
      {
        text: "Inform the Product Owner at the Sprint Review, but prior to the demonstration.",
        correct: false,
      },
      {
        text: "Reduce the Definition of Done and get all of the Product Backlog items done by the new definition.",
        correct: false,
      },
    ],
  },
  {
    question: "True or False: Scrum has a role called ''Project Manager''.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question:
      "True or False: Developers do not meet with stakeholders; only the Product Owner meets with stakeholders.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question: "Why do the Developers need a Sprint Goal?",
    answers: [
      { text: "A Sprint Goal only gives purpose to Sprint 0.", correct: false },
      {
        text: "Sprint Goals are not valuable. Everything is known from the Product Backlog.",
        correct: false,
      },
      {
        text: "The Developers are more focused with a common yet specific goal.",
        correct: true,
      },
      {
        text: "A Sprint Goal ensures that all of the Product Backlog items selected for the Sprint are implemented.",
        correct: false,
      },
    ],
  },
  {
    question: "Every Scrum Team should have:",
    answers: [
      {
        text: "One Lead Developer and no more than 8 other members.",
        correct: false,
      },
      {
        text: "The competencies and skills needed to deliver an Increment in a Sprint.",
        correct: true,
      },
      {
        text: "At least one representative from each major department, such as, Quality Assurance, Development, and Marketing.",
        correct: false,
      },
    ],
  },
  {
    question:
      "A Scrum Master is introducing Scrum to a new Team. The Team has decided that a Sprint Retrospective is unnecessary.<br><br> What action should the Scrum Master take?<br><br>",
    answers: [
      {
        text: "Consult with the Product Owner to see how they feel about the situation.",
        correct: false,
      },
      {
        text: "Comply with the decision of the self-managing team.",
        correct: false,
      },
      {
        text: "Call a meeting between the ScrumTeam and senior management.",
        correct: false,
      },
      {
        text: "Begin facilitating productive and useful Sprint Retrospectives.",
        correct: true,
      },
    ],
  },
  {
    question: "Which of these may a Scrum Team deliver at the end of a Sprint?",
    answers: [
      {
        text: "Failing unit tests, to identify acceptance tests for the next Sprint.",
        correct: false,
      },
      {
        text: "A valuable, useful Increment that meets the Definition of Done.",
        correct: true,
      },
      {
        text: "A single document, if that is what management asked for.",
        correct: false,
      },
      {
        text: "An Increment of software with minor known bugs in it.",
        correct: false,
      },
    ],
  },
  {
    question: "What is the typical size for a Scrum Team?",
    answers: [
      { text: "7 plus or minus 3.", correct: false },
      { text: "At least 7.", correct: false },
      { text: "10 or fewer.", correct: true },
      { text: "9.", correct: false },
    ],
  },
  {
    question:
      "What tactic should a Scrum Team use to divide a group of 100 people into multiple Scrum Teams?",
    answers: [
      { text: "Ask the people to divide themselves into teams", correct: true },
      {
        text: "Create teams based on their skills across multiple layers (such as database, UI etc. ).",
        correct: false,
      },
      {
        text: "Ask the Product Owner to assign the people to teams.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the key concern when multiple Scrum Teams are working from the same Product Backlog?",
    answers: [
      {
        text: "Making sure there is enough work for everyone on each team.",
        correct: false,
      },
      { text: "Minimizing dependencies between teams.", correct: true },
      { text: "Maximizing velocity.", correct: false },
      { text: "Clear definition of requirements.", correct: false },
      { text: "Meeting original scope projections.", correct: false },
    ],
  },
  {
    question: "The Development Team should have all the skills needed to:",
    answers: [
      {
        text: "Turn Product Backlog items into a valuable, useful Increment.",
        correct: true,
      },
      {
        text: "Complete the project within the date and cost as calculated by the Product Owner.",
        correct: false,
      },
      {
        text: "Do all of the development work, except for specialized testing that requires additional tools and environments.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: The Product Owner makes sure the Developers select enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question:
      "An organization has decided to adopt Scrum, but management wants to change the terminology to fit with terminology already used. What will likely happen if this is done?",
    answers: [
      {
        text: "Without a new vocabulary as a reminder of the change, very little change may actually happen.",
        correct: false,
      },
      {
        text: "The organization may not understand what has changed within Scrum and the benefits of Scrum may be lost.",
        correct: false,
      },
      { text: "Management may feel less anxious.", correct: false },
      { text: "All answers apply.", correct: true },
    ],
  },
  {
    question:
      "Who should make sure everyone on the Scrum Team does their tasks for the Sprint?",
    answers: [
      { text: "The Project Manager.", correct: false },
      { text: "The Product Owner.", correct: false },
      { text: "The Scrum Master.", correct: false },
      { text: "The Scrum Team.", correct: true },
      { text: "All of the above.", correct: false },
    ],
  },
  {
    question:
      "Which output from Sprint Planning provides the Scrum Team with a target and overarching direction for the Sprint?",
    answers: [
      { text: "The Sprint Backlog.", correct: false },
      { text: "The Sprint Goal.", correct: true },
      { text: "The release plan.", correct: false },
      { text: "Sprint Review minutes.", correct: false },
    ],
  },
  {
    question: "How often should Scrum Team membership change?",
    answers: [
      {
        text: "As needed, while taking into account a short-term reduction in productivity.",
        correct: true,
      },
      { text: "Every Sprint to promote shared learning.", correct: false },
      { text: "Never, it reduces productivity.", correct: false },
      {
        text: "As needed, with no special allowance for changes in productivity.",
        correct: false,
      },
    ],
  },
  {
    question:
      "During the Sprint Retrospective a Scrum Team has identified several high priority process improvements. <br><br>Which of the following statements is most accurate?<br><br>",
    answers: [
      {
        text: "The Scrum Master selects the most important process improvement and places it in the Sprint Backlog.",
        correct: false,
      },
      {
        text: "The Scrum Team should choose at least one high priority process improvement to place in the Product Backlog.",
        correct: false,
      },
      {
        text: "The Scrum Team may add the items to the Sprint Backlog for the next Sprint.",
        correct: true,
      },
      {
        text: "The Scrum Team should decline to add a process improvement to the Sprint Backlog when things are running smoothly.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: When multiple teams work together on the same product, each team should maintain a separate Product Backlog.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question:
      "When does a Developer become accountable for an item in the Sprint Backlog?",
    answers: [
      {
        text: "At Sprint Planning when all of the Sprint Backlog items are split evenly across the Developers.",
        correct: false,
      },
      { text: "During the Daily Scrum.", correct: false },
      {
        text: "Never. All Developers on the Scrum Team share accountability for items in the Sprint Backlog.",
        correct: true,
      },
      {
        text: "As soon as a Developer on the Scrum Team can accommodate more work.",
        correct: false,
      },
    ],
  },
  {
    question:
      "In accordance with Scrum theory, how should a group of 100 people be divided into multiple Scrum Teams?",
    answers: [
      {
        text: "Create a matrix of skills, seniority, and level of experience to assign people to teams.",
        correct: false,
      },
      {
        text: "Check with the allocation department to see who has worked together before and make these the first teams.",
        correct: false,
      },
      {
        text: "Understanding the product, the product vision and the rules of the Scrum framework, the people divide themselves into teams.",
        correct: true,
      },
      {
        text: "It does not really matter since you can rotate the teams every Sprint to spread knowledge.",
        correct: false,
      },
    ],
  },
  {
    question:
      "For the purpose of transparency, when does Scrum say a valuable and useful Increment must be available?",
    answers: [
      { text: "Every 3 Sprints.", correct: false },
      { text: "Before the Release Sprint.", correct: false },
      { text: "At the end of every Sprint.", correct: true },
      { text: "When the Product Owner asks to create one.", correct: false },
      { text: "After the Acceptance Testing phase.", correct: false },
    ],
  },
  {
    question:
      "True or False: Multiple Scrum Teams working on the same product or system all select work from the same Product Backlog.",
    answers: [
      { text: "True.", correct: true },
      { text: "False.", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of an Increment?",
    answers: [
      { text: "A plan for the overall product release.", correct: false },
      { text: "A mock-up of the product marketing materials.", correct: false },
      { text: "A design for the product.", correct: false },
      { text: "A product roll-out plan.", correct: false },
      { text: "A valuable, useful set of product features.", correct: true },
      { text: "All of the above.", correct: false },
    ],
  },
  {
    question: "What enhances the transparency of an Increment?",
    answers: [
      {
        text: "Reporting Sprint progress to the stakeholders daily.",
        correct: false,
      },
      {
        text: "Doing all work needed to meet the Definition of Done.",
        correct: true,
      },
      {
        text: "Updating Sprint tasks properly in the electronic tracking tool.",
        correct: false,
      },
      {
        text: "Keeping track of and estimating all undone work to be completed in a ''hardening'' Sprint.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: To get started in terms of what to build, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, Developers to implement those ideas, and a Scrum Master to help guide the process.",
    answers: [
      { text: "True.", correct: true },
      { text: "False.", correct: false },
    ],
  },
  {
    question: "What is the function or purpose of management in Scrum?",
    answers: [
      {
        text: "To monitor the productivity of the Developers.",
        correct: false,
      },
      {
        text: "To continually monitor staffing levels of the Scrum Team.",
        correct: false,
      },
      {
        text: "To present the Scrum Teams with insights and resources that help them improve.",
        correct: true,
      },
      {
        text: "To identify and remove people that are not working hard enough.",
        correct: false,
      },
    ],
  },
  {
    question:
      "How much time is required after a Sprint to prepare for the next Sprint?",
    answers: [
      {
        text: "The break between Sprints is timeboxed to one-week for a one-month Sprint, and usually less for shorter Sprints.",
        correct: false,
      },
      {
        text: "Enough time for the requirements for the next Sprint to be determined and documented.",
        correct: false,
      },
      {
        text: "Enough time for the Developers to finish the testing from the last Sprint.",
        correct: false,
      },
      {
        text: "None. A new Sprint starts immediately following the end of the previous Sprint.",
        correct: true,
      },
      {
        text: "All of the above are allowed depending on the situation.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which of the following activities will a Product Owner engage in during a Sprint?",
    answers: [
      { text: "Run the Daily Scrum.", correct: false },
      {
        text: "Answer questions from the Developers about items in the current Sprint.",
        correct: true,
      },
      { text: "Update management on what is being worked on.", correct: false },
      {
        text: "Prioritize the Developers' work on the Sprint Backlog.",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of a Sprint Review?",
    answers: [
      {
        text: "To review the Scrum Team's activities and processes during the Sprint.",
        correct: false,
      },
      {
        text: "To take time to judge the validity of the project.",
        correct: false,
      },
      { text: "To build team spirit.", correct: false },
      {
        text: "To inspect the product Increment with the stakeholders and collect feedback on next steps.",
        correct: true,
      },
    ],
  },
  {
    question:
      "A Scrum Master is working with a Scrum Team that has Developers in different physical locations. The Developers meet in a variety of meeting rooms and have much to do logistically (for example: reserve meeting rooms and set up conference calls) before the Daily Scrum. <br><br>What action should the Scrum Master take?<br><br>",
    answers: [
      { text: "Inform management and ask them to solve it.", correct: false },
      {
        text: "Ask the Developers to alternate who is responsible for meeting setup.",
        correct: false,
      },
      {
        text: "Allow the Developers to self-manage and determine for themselves what to do.",
        correct: true,
      },
      {
        text: "Set up the meeting and tell the Scrum Team that is how it will be done.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Who is accountable for clearly expressing Product Backlog items?",
    answers: [
      {
        text: "The Scrum Master, or the Scrum Master may have the Developers do it.",
        correct: false,
      },
      { text: "The Product Owner.", correct: true },
      {
        text: "The business analyst who represents the Product Owner.",
        correct: false,
      },
      { text: "The Scrum Master.", correct: false },
    ],
  },
  {
    question:
      "When Developers are having trouble delivering an Increment because they do not understand a functional requirement, what should they do?",
    answers: [
      { text: "Defer the work to a more appropriate Sprint.", correct: false },
      {
        text: "Partially complete the functionality, and discuss the remaining work at the Sprint Review.",
        correct: false,
      },
      {
        text: "Collaborate with the Product Owner to determine what is possible and acceptable.",
        correct: true,
      },
      { text: "Add a specialist to the Development Team.", correct: false },
    ],
  },
  {
    question:
      "Five new Scrum Teams have been created to build one product. A few of the Developers on one of the Scrum Teams ask the Scrum Master how to coordinate their work with the other teams. <br><br>What should the Scrum Master do?<br><br>",
    answers: [
      {
        text: "Collect the Sprint tasks from the teams at the end of their Sprint Planning and merge that into a consolidated plan for the entire Sprint.",
        correct: false,
      },
      {
        text: "Teach them that it is their responsibility to work with the other teams to create an integrated Increment that is inclusive of all five team's work",
        correct: true,
      },
      {
        text: "Teach the Product Owner to work Kith the lead developers on ordering Product Backlog in a way to avoid too much overlap during a Sprint.",
        correct: false,
      },
      {
        text: "Visit the five teams each day to inspect that their Sprint Backlogs are aligned.",
        correct: false,
      },
    ],
  },
  {
    question: "Who is responsible for collaboration with stakeholders?",
    answers: [
      { text: "The Project Manager.", correct: false },
      { text: "The Team Manager.", correct: false },
      { text: "The Business Analyst.", correct: false },
      { text: "The Scrum Team.", correct: true },
      { text: "The Developers.", correct: false },
    ],
  },
  {
    question:
      "When multiple Scrum Teams are working on the same product, should all of their Increments be integrated every Sprint?",
    answers: [
      {
        text: "Yes, but only for Scrum Teams whose work has dependencies.",
        correct: false,
      },
      {
        text: "Yes, in order to accurately inspect what is done.",
        correct: true,
      },
      {
        text: "No, that is far too hard and must be done in a hardening Sprint.",
        correct: false,
      },
      { text: "No, each Scrum Team stands alone.", correct: false },
    ],
  },
  {
    question:
      "Which Scrum Value is affected by a lack of trust in the Scrum Team?",
    answers: [
      { text: "Focus.", correct: false },
      { text: "Respect.", correct: false },
      { text: "Openness.", correct: false },
      { text: "Courage.", correct: false },
      { text: "Commitment.", correct: false },
      { text: "All of the above.", correct: true },
    ],
  },
  {
    question:
      "True or False: An Increment must be released to customers or users at the end of each Sprint.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question:
      "Which answer best describes the topics covered in Sprint Planning?",
    answers: [
      { text: "What to do and who will do it.", correct: false },
      {
        text: "How conditions have changed and how the Product Backlog should evolve.",
        correct: false,
      },
      {
        text: "What can be done, how to do it, and why to do it.",
        correct: true,
      },
      {
        text: "Who is on the team and what team member roles will be.",
        correct: false,
      },
      {
        text: "What went wrong in the last Sprint and what to do differently this Sprint.",
        correct: false,
      },
    ],
  },
  {
    question: "The Product Backlog is ordered by:",
    answers: [
      {
        text: "Risk, where safer items are at the top, and riskier items are at the bottom.",
        correct: false,
      },
      {
        text: "Size, where small items are at the top and large items are at the bottom.",
        correct: false,
      },
      { text: "Random assignment.", correct: false },
      {
        text: "The Product Owner, with the most valuable items placed at the top.",
        correct: true,
      },
    ],
  },
  {
    question: "How do you know that a Scrum Team is cross-functional?",
    answers: [
      {
        text: "The Scrum Team has all the skills to create an Increment by the end of every Sprint.",
        correct: true,
      },
      {
        text: "Every member of the Scrum Team is able to perform every task.",
        correct: false,
      },
      { text: "There are no conflicts within the Scrum Team.", correct: false },
      {
        text: "A few of the Developers pair program and do Test-Driven Development.",
        correct: false,
      },
    ],
  },
  {
    question:
      "How should Product Backlog items be chosen when multiple Scrum Teams work from the same Product Backlog?",
    answers: [
      { text: "The Product Owner decides.", correct: false },
      {
        text: "The Developers pull in work in agreement with the Product Owner.",
        correct: true,
      },
      {
        text: "Each Scrum Team takes an equal number of items.",
        correct: false,
      },
      {
        text: "The Scrum Team with the highest velocity pulls Product Backlog items first.",
        correct: false,
      },
      {
        text: "The Product Owner should provide each team with its own Product Backlog.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the Product Owner responsible for during the Sprint Retrospective?",
    answers: [
      { text: "Participating as a Scrum Team member.", correct: true },
      {
        text: "The Product Owner should not take part in Sprint Retrospective.",
        correct: false,
      },
      {
        text: "Capturing requirements for the Product Backlog.",
        correct: false,
      },
      {
        text: "Summarizing and reporting the discussions to the stakeholders that they represent in the Scrum Team.",
        correct: false,
      },
    ],
  },
  {
    question:
      "User documentation is part of your Definition of Done. However, there are not enough technical writers for all teams. Your Scrum Team does not have a technical writer. <br><br>What should the Scrum Team do?<br><br>",
    answers: [
      {
        text: "Wait until you have a technical writer on your Scrum Team to take care of this.",
        correct: false,
      },
      {
        text: "Let the user documentation remain undone and accumulate until after the last development Sprint. It will then be done by any available technical writers.",
        correct: false,
      },
      {
        text: "Form a separate team of technical writers that will work on an on-demand basis for the various Product Owners. Work order will be first in, first out.",
        correct: false,
      },
      {
        text: "The Developers on the Scrum Team should write the user documentation.",
        correct: true,
      },
    ],
  },
  {
    question: "For which of the following is the Scrum Master responsible?",
    answers: [
      {
        text: "Properly adopting and using the Scrum framework.",
        correct: true,
      },
      { text: "Keeping track of resource allocation.", correct: false },
      { text: "Managing the performance of the Scrum Team.", correct: false },
      {
        text: "The meetings and the objectives that a Scrum Team sets for itself.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: The purpose of a Sprint is to produce a valuable, useful Increment.",
    answers: [
      { text: "True.", correct: true },
      { text: "False.", correct: false },
    ],
  },
  {
    question:
      "When the Developers determine that they will not be able to finish the complete forecast, who has to be present when reviewing and adjusting the Sprint work selected?",
    answers: [
      { text: "The Scrum Master and the Developers.", correct: false },
      { text: "The Product Owner and all stakeholders.", correct: false },
      { text: "The Product Owner and the Developers.", correct: true },
      {
        text: "The Scrum Master, project manager and the Developers.",
        correct: false,
      },
    ],
  },
  {
    question:
      "Who is accountable for tracking the remaining work toward the Sprint Goal?",
    answers: [
      { text: "The Developers.", correct: true },
      { text: "The Product Owner.", correct: false },
      { text: "The Project Manager.", correct: false },
      { text: "The Scrum Master.", correct: false },
    ],
  },
  {
    question:
      "Which approach is best for Scrum Teams in order to produce valuable Increments?",
    answers: [
      {
        text: "Each Scrum Team works on an independent set of components.",
        correct: false,
      },
      {
        text: "Each Scrum Member works only as an independent layer of the system.",
        correct: false,
      },
      {
        text: "Each Developer works on the component where they feel that they can contribute.",
        correct: false,
      },
      {
        text: "Each Scrum Team is accountable for developing functionality from beginning to end.",
        correct: true,
      },
    ],
  },
  {
    question:
      "How much of the Sprint Backlog must be defined during the Sprint Planning event?",
    answers: [
      {
        text: "Enough so the Developers can create their forecast of what work they can do.",
        correct: true,
      },
      {
        text: "Just enough tasks for the Scrum Master to be confident in the Developers' understanding of the Sprint.",
        correct: false,
      },
      {
        text: "The entire Sprint Backlog must be identified and estimated by the end of Sprint Planning.",
        correct: false,
      },
      {
        text: "Just enough to understand design and architectural implications.",
        correct: false,
      },
    ],
  },
  {
    question: "Which topics should be discussed in the Sprint Review?",
    answers: [
      {
        text: "The Scrum process, and how it was used during the Sprint.",
        correct: false,
      },
      { text: "Coding and engineering practices.", correct: false },
      { text: "The product Increment.", correct: true },
      { text: "All of the above.", correct: false },
    ],
  },
  {
    question: "Who creates the Definition of Done?",
    answers: [
      { text: "The Developers.", correct: false },
      { text: "The Scrum Master.", correct: false },
      { text: "The Scrum Team.", correct: true },
      { text: "The Product Owner.", correct: false },
    ],
  },
  {
    question:
      "Who does the work to make sure Product Backlog items conform to the Definition of Done?",
    answers: [
      { text: "The Developers.", correct: true },
      { text: "The Scrum Master.", correct: false },
      { text: "The Scrum Team.", correct: false },
      { text: "The Product Owner.", correct: false },
      { text: "The Quality Assurance Team.", correct: false },
    ],
  },
  {
    question: "When is a Product Backlog item considered complete?",
    answers: [
      { text: "When the item meets the Definition of Done.", correct: true },
      {
        text: "When the item has gained product sponsor approval.",
        correct: false,
      },
      { text: "At the end of the Sprint.", correct: false },
      { text: "When the item passes all acceptance criteria.", correct: false },
    ],
  },
  {
    question:
      "Who should make sure everyone on the Development Team does his or her tasks for the Sprint?<br><br>",
    answers: [
      { text: "The Project Manager.", correct: false },
      { text: "The Product Owner.", correct: false },
      { text: "The Development Team.", correct: true },
      { text: "The Scrum Master.", correct: false },
      { text: "All of the above.", correct: false },
    ],
  },
  {
    question: "Who can cancel a Sprint?",
    answers: [
      { text: "The Scrum Master.", correct: false },
      { text: "The Scrum Team.", correct: false },
      { text: "The Stakeholders.", correct: false },
      { text: "The Product Owner.", correct: true },
    ],
  },
  {
    question: "Who must attend the Daily Scrum?",
    answers: [
      { text: "The Developers and Product Owner.", correct: false },
      { text: "The Scrum Master and Product Owner.", correct: false },
      { text: "The Scrum Team.", correct: false },
      { text: "The Developers and Scrum Master.", correct: false },
      { text: "The Developers.", correct: true },
    ],
  },
  {
    question:
      "During a Sprint, when is new work or further decomposition of work added to the Sprint Backlog?",
    answers: [
      { text: "When the Scrum Master has time to enter it.", correct: false },
      { text: "As soon as possible after it is identified.", correct: true },
      { text: "When the Product Owner identifies new work.", correct: false },
      {
        text: "During the Daily Scrum after the Developers approve it.",
        correct: false,
      },
    ],
  },
  {
    question:
      "A Developer takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?",
    answers: [
      {
        text: "Ask the Developer to share the concern with the team as soon as possible.",
        correct: true,
      },
      { text: "Create a Product Backlog item for security.", correct: false },
      { text: "Go check with the testers.", correct: false },
      {
        text: "Tell the Product Owner to stop further development of features until the issues are fixed.",
        correct: false,
      },
      { text: "Add security to the Definition of Done.", correct: false },
    ],
  },
  {
    question:
      "Which of the following is an accountability of a Tester on a Scrum Team?",
    answers: [
      {
        text: "Tracking defect rates to ensure they improve each Sprint.",
        correct: false,
      },
      {
        text: "Refreshing and communicating the Definition of Done to the Product Owner.",
        correct: false,
      },
      { text: "Verifying the work of the Developers.", correct: false },
      {
        text: "Executing tests, finding defects, and reporting them to the Developers.",
        correct: false,
      },
      {
        text: "Scrum has no Tester accountability. The Developers are accountable for quality.",
        correct: true,
      },
    ],
  },
  {
    question: "When does the next Sprint begin?",
    answers: [
      {
        text: "Immediately after the conclusion of the previous Sprint.",
        correct: true,
      },
      { text: "When the Product Owner is ready.", correct: false },
      {
        text: "Immediately following the next Sprint Planning.",
        correct: false,
      },
      { text: "The Monday following the Sprint Review.", correct: false },
    ],
  },
  {
    question:
      "A new Developer is having continuing conflicts with existing members of the Scrum Team, which is impacting the delivery of the Increment.<br> If necessary, who is responsible for removing the Developer from the Scrum Team?<br>",
    answers: [
      { text: "The Scrum Team is responsible.", correct: true },
      {
        text: "The Product Owner is responsible, they control the return on investment (ROl).",
        correct: false,
      },
      {
        text: "The hiring manager is responsible, they hired the Developer.",
        correct: false,
      },
      {
        text: "The Scrum Master is responsible, they remove impediments.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the accountability of the Product Owner during Sprint 0?",
    answers: [
      {
        text: "Create the overall release plan to ensure that organizational goals are met.",
        correct: false,
      },
      {
        text: "Make sure enough Product Backlog items are refined to fill the first 3 Sprints.",
        correct: false,
      },
      {
        text: "Determine the composition of the Scrum Team to meet the release plan.",
        correct: false,
      },
      {
        text: "Gathering, eliciting, and analyzing the requirements to build the Product Backlog.",
        correct: false,
      },
      { text: "There is no such thing as Sprint 0.", correct: true },
    ],
  },
  {
    question: "When can Developers cancel a Sprint?",
    answers: [
      { text: "When the Product Owner is absent too often.", correct: false },
      {
        text: "When,the selected Product Backlog items for the Sprint become unachievable.",
        correct: false,
      },
      {
        text: "When functional expectations are not well understood.",
        correct: false,
      },
      {
        text: "When a technical dependency cannot be resolved.",
        correct: false,
      },
      {
        text: "They cannot. Only Product Owners can cancel Sprints.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Why does the Product Owner want the Developers to adhere to its Definition of Done?",
    answers: [
      {
        text: "To be able to reprimand the team when they do not meet their velocity goal for the Sprint.",
        correct: false,
      },
      { text: "To predict the team's productivity over time.", correct: false },
      {
        text: "To have complete transparency into what has been done at the end of each Sprint.",
        correct: true,
      },
      {
        text: "To know what the team will deliver over the nast three Sprints.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: A high-performance Scrum Team ensures that each Increment is complete by running a Release Sprint.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question:
      "How much work is required of the Developers to complete a Product Backlog item selected during the Sprint Planning?",
    answers: [
      {
        text: "As much as is required to meet the Scrum Team's Definition of Done.",
        correct: true,
      },
      {
        text: "A proportional amount of time on analysis, design, development, and testing.",
        correct: false,
      },
      {
        text: "As much as they can fit into the Sprint, with remaining work deferred to the next Sprint.",
        correct: false,
      },
      {
        text: "All development work and at least some testing.",
        correct: false,
      },
    ],
  },
  {
    question: "A Sprint Retrospective should be held:",
    answers: [
      {
        text: "Only when the Scrum Team determines it needs one.",
        correct: false,
      },
      {
        text: "At the end of the last Sprint in a project or a release.",
        correct: false,
      },
      { text: "At the end of each Sprint.", correct: true },
      { text: "At the beginning of each Sprint.", correct: false },
    ],
  },
  {
    question:
      "What factor should be considered when establishing the Sprint length?",
    answers: [
      {
        text: "The need for the team to learn based on doing work and measuring results",
        correct: true,
      },
      { text: "The organization's release schedule.", correct: false },
      {
        text: "The frequency at which team formation can be changed",
        correct: false,
      },
      {
        text: "The organization has mandated similar length sprints.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: The Sprint Backlog is a result of Sprint Planning, and it includes the Sprint Goal.",
    answers: [
      { text: "True.", correct: true },
      { text: "False.", correct: false },
    ],
  },
  {
    question:
      "True or False: Scrum is a methodology that tells in detail how to build software incrementally.<br>",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question: "Select the correct timebox for each Scrum event.<br><br>",
    answers: [
      {
        text: "Sprint Planning - 8 hours, Daily Scrum - 30 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours.",
        correct: false,
      },
      {
        text: "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 4 hours.",
        correct: false,
      },
      {
        text: "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 8 hours, Sprint Retrospective - 4 hours.",
        correct: false,
      },
      {
        text: "Sprint Planning - 8 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours.",
        correct: true,
      },
    ],
  },
  {
    question: "Why is the Daily Scrum held at the same time and same place?",
    answers: [
      { text: "The Product Owner demands it.", correct: false },
      {
        text: "Rooms are hard to book and must be booked in advance.",
        correct: false,
      },
      { text: "The consistency reduces complexity.", correct: true },
      { text: "The place can be named.", correct: false },
    ],
  },
  {
    question:
      "What happens if the Scrum Team cannot complete its work by the end of the Sprint?",
    answers: [
      {
        text: "The Sprint length is unchanged and the Scrum Team continuously learns and adapts.",
        correct: true,
      },
      {
        text: "The Sprint is extended temporarily. Lessons are taken to ensure it does not happen again.",
        correct: false,
      },
      {
        text: "The Sprint is extended and future Sprints use this new duration.",
        correct: false,
      },
    ],
  },
  {
    question: "Which statement best describes Scrum?",
    answers: [
      {
        text: "A complete methodology that defines how to develop software",
        correct: false,
      },
      {
        text: "A defined and predictive process that conforms to the principles of Scientific Management.",
        correct: false,
      },
      {
        text: "A cookbook that defines best practices for software development.",
        correct: false,
      },
      {
        text: "A framework to generate value through adaptive solutions for complex problems.",
        correct: true,
      },
    ],
  },
  {
    question: "When must a Scrum Team release each Increment?",
    answers: [
      { text: "When the Scrum Team finishes their work.", correct: false },
      { text: "Whenever the product is free of defects.", correct: false },
      { text: "When it makes sense to release it.", correct: true },
      { text: "After every Sprint, without exception.", correct: false },
    ],
  },
  {
    question: "The length of a Sprint should be:",
    answers: [
      {
        text: "Short enough to keep the business risk acceptable to the Product Owner.",
        correct: false,
      },
      {
        text: "Short enough to be able to synchronize the development work with other business events.",
        correct: false,
      },
      { text: "No more than one calendar month.", correct: false },
      { text: "All of the above.", correct: true },
    ],
  },
  {
    question:
      "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
    answers: [
      { text: "The Scrum Team.", correct: false },
      { text: "The Product Owner.", correct: false },
      { text: "The Project Manager.", correct: false },
      { text: "The Developers.", correct: true },
    ],
  },
  {
    question: "Who is responsible for the sizing of Product Backlog items?",
    answers: [
      { text: "The Scrum Master.", correct: false },
      {
        text: "The Product Owner with input from the Developers.",
        correct: false,
      },
      {
        text: "The Developers after clarifying requirements with the Product Owner.",
        correct: true,
      },
      {
        text: "The most senior people in the organization, including architects and subject matter experts.",
        correct: false,
      },
      { text: "The Developers, alone.", correct: false },
    ],
  },
  {
    question: "Which of the following is required by Scrum?",
    answers: [
      { text: "Sprint Retrospective.", correct: true },
      { text: "Developers must stand up at the Daily Scrum.", correct: false },
      { text: "Sprint Burndown Chart.", correct: false },
      { text: "Release Planning.", correct: false },
      { text: "All of the above.", correct: false },
    ],
  },
  {
    question: "Who determines how work is performed during the Sprint?",
    answers: [
      { text: "The Developers.", correct: true },
      { text: "The Scrum Team.", correct: false },
      { text: "The Scrum Master.", correct: false },
      { text: "Team manager.", correct: false },
      { text: "Subject matter experts.", correct: false },
    ],
  },
  {
    question:
      "When does a Developer become the sole owner of an item on the Sprint Backlog?<br><br>",
    answers: [
      {
        text: "Never. All Sprint Backlog items are ''owned'' by the Developers on the Scrum Team.",
        correct: true,
      },
      { text: "At the Sprint Planning event.", correct: false },
      {
        text: "Whenever a team member can accommodate more work.",
        correct: false,
      },
      { text: "During the Daily Scrum.", correct: false },
    ],
  },
  {
    question: "The Developers should have all the skills needed to:<br><br>",
    answers: [
      {
        text: "Turn the Product Backlog items they select into an Increment of useful and valuable product functionality.",
        correct: true,
      },
      {
        text: "Complete the project as estimated when the date and cost are committed to the Product Owner.",
        correct: false,
      },
      {
        text: "Do all of the development work, except for specialized testing that requires additional tools and environments",
        correct: false,
      },
    ],
  },
  {
    question: "The three pillars of empiricism are: <br><br>",
    answers: [
      { text: "Transparency, Inspection, Adaptation.", correct: true },
      {
        text: "Respect For People, Kaizen, Eliminating Waste.",
        correct: false,
      },
      { text: "Planning, Demonstration, Retrospective.", correct: false },
      { text: "Transparency, Eliminating Waste, Kaizen.", correct: false },
      { text: "Planning, Inspection, Adaptation.", correct: false },
    ],
  },
  {
    question: "The timebox for the Sprint Review is:<br><br>",
    answers: [
      { text: "1 day.", correct: false },
      { text: "2 hours.", correct: false },
      { text: "As long as needed.", correct: false },
      { text: "4 hours and longer as needed.", correct: false },
      {
        text: "4 hours for a monthly Sprint. For shorter Sprints it is usually shorter.",
        correct: true,
      },
    ],
  },
  {
    question: "Who starts the Daily Scrum?",
    answers: [
      { text: "The Product Owner.", correct: false },
      {
        text: "The Scrum Master. This ensures that the Developers have the event, and it stays within the timebox.",
        correct: false,
      },
      {
        text: "The person coming in last. This encourages people to be on time and helps to stay within the timebox.",
        correct: false,
      },
      { text: "The person who has the token.", correct: false },
      { text: "Whoever the Developers decide should start.", correct: true },
    ],
  },
  {
    question:
      "Who should know the most about the progress toward the Product Goal?",
    answers: [
      { text: "The Developers.", correct: false },
      { text: "The Project Manager.", correct: false },
      { text: "The Scrum Master.", correct: false },
      { text: "The Product Owner.", correct: true },
    ],
  },
  {
    question: "The timebox for a Daily Scrum is?",
    answers: [
      { text: "4 hours.", correct: false },
      { text: "The same time of day every day.", correct: false },
      { text: "15 minutes.", correct: true },
      { text: "Two minutes per person.", correct: false },
    ],
  },
  {
    question:
      "Which statement best describes a Product Owner's responsibility?",
    answers: [
      {
        text: "Maximizing the value of the work the Scrum Team does.",
        correct: true,
      },
      {
        text: "Keep stakeholders from distracting the Developers.",
        correct: false,
      },
      { text: "Directing the Developers.", correct: false },
      {
        text: "Ensuring that the work meets the commitments to the stakeholders.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: Multiple Scrum Teams working on the same product must have the same Sprint start date.",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question: "Upon what type of process control is Scrum based?<br><br>",
    answers: [
      { text: "Defined.", correct: false },
      { text: "Empirical.", correct: true },
      { text: "Complex.", correct: false },
      { text: "Hybrid.", correct: false },
    ],
  },
  {
    question: "The Product Backlog is ordered by:<br><br>",
    answers: [
      {
        text: "Least valuable items at the top to most valuable at the bottom.",
        correct: false,
      },
      { text: "Items are randomly arranged.", correct: false },
      {
        text: "Size, where small items are at the top and large items are at the bottom.",
        correct: false,
      },
      {
        text: "Risk, where safer items are at the top, and riskier items are at the bottom.",
        correct: false,
      },
      {
        text: "Whatever is deemed most appropriate by the Product Owner.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Who should know the most about the progress toward a business objective or a release, and be able to explain the alternatives most clearly? <br><br>",
    answers: [
      { text: "The Project Manager.", correct: false },
      { text: "The Scrum Master.", correct: false },
      { text: "The Developers.", correct: false },
      { text: "The Product Owner.", correct: true },
    ],
  },
  {
    question:
      "The Developers should not be interrupted during the Sprint and the Sprint Goal should remain intact. These are conditions that foster creativity, quality and productivity.<br><br>(Which one the following answers is FALSE?)<br><br>",
    answers: [
      {
        text: "The Developers may work with the Product Owner to add or remove work if they find themselves with more or less capacity than expected.",
        correct: false,
      },
      {
        text: "The Product Owner can help clarify or optimize the Sprint when asked by the Developers.",
        correct: false,
      },
      {
        text: "As a decomposition of the selected Product Backlog items, the Sprint Backlog changes and may grow as the work emerges.",
        correct: false,
      },
      {
        text: "The Sprint Backlog is fully formulated in the Sprint Planning event and does not change during the Sprint.",
        correct: true,
      },
    ],
  },
  {
    question: "The timebox for the Sprint Planning event is?<br><br>",
    answers: [
      { text: "Whenever it is done.", correct: false },
      { text: "4 hours.", correct: false },
      { text: "Monthly.", correct: false },
      {
        text: "8 hours for a monthly Sprint. For shorter Sprints it is usually shorter.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Who is responsible for managing the progress of work during a Sprint?<br><br>",
    answers: [
      { text: "The Product Owner.", correct: false },
      { text: "The Developers.", correct: true },
      { text: "The most junior member of the team.", correct: false },
      { text: "The Scrum Master.", correct: false },
    ],
  },
  {
    question:
      "When many Scrum Teams are working on a single product, what best describes the Definition of Done?<br><br>",
    answers: [
      {
        text: "All Scrum Teams must have a Definition of Done that makes their combined Increment valuable and useful.",
        correct: true,
      },
      { text: "It depends.", correct: false },
      {
        text: "Each Scrum Team uses its own, but must make their definition clear to all other teams so the differences are known.",
        correct: false,
      },
    ],
  },
  {
    question: "When should a Sprint Goal be created?",
    answers: [
      { text: "A Sprint Goal is not mandatory in Scrum.", correct: false },
      {
        text: "It should have been created in the previous Sprint during Product Backlog refinement.",
        correct: false,
      },
      {
        text: "It must be established before Sprint Planning in order to begin planning.",
        correct: false,
      },
      { text: "During Sprint Planning.", correct: true },
      { text: "At any time during the Sprint.", correct: false },
    ],
  },
  {
    question: "What does it mean for a Scrum Team to be cross-functional?",
    answers: [
      {
        text: "The Scrum Team is a virtual team drawing from separate teams of business analysts, architects, developers, and testers.",
        correct: false,
      },
      {
        text: "The Scrum Team includes skilled individuals who together have all the skills necessary to create value each Sprint.",
        correct: true,
      },
      {
        text: "The Scrum Team includes not only developers but also business analysts, architects, and testers.",
        correct: false,
      },
      {
        text: "Developers on the Scrum Team work closely with business analysts, architects, developers, and testers who are not on the team.",
        correct: false,
      },
    ],
  },
  {
    question:
      "The IT manager asks a Scrum Team for a status report describing the progress throughout the Sprint. The Scrum Team asks the Scrum Master for advice. <br><br>The Scrum Master should:<br><br>",
    answers: [
      {
        text: "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review.",
        correct: true,
      },
      {
        text: "Tell the Scrum Team to figure It out themselves.",
        correct: false,
      },
      {
        text: "Create and deliver the report to the manager herself.",
        correct: false,
      },
      {
        text: "Tell the Developers to fit the report into the Sprint Backlog.",
        correct: false,
      },
      {
        text: "Ask the Product Owner to send the manager the report.",
        correct: false,
      },
    ],
  },
  {
    question: "When must the Product Owner participate in the Daily Scrum?",
    answers: [
      {
        text: "When the Scrum Master asks the Product Owner to attend.",
        correct: false,
      },
      {
        text: "When the Product Owner is actively working on items on the Sprint Backlog; however, they participate as a Developer.",
        correct: true,
      },
      { text: "When there are impediments to discuss.", correct: false },
      {
        text: "When the Product Owner needs to represent the stakeholders' point of view to the Developers.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What role is responsible for maintaining the Product Backlog?<br><br>",
    answers: [
      { text: "Scrum Master", correct: false },
      { text: "Product Owner", correct: true },
      { text: "Development Team", correct: false },
      { text: "Stakeholders", correct: false },
    ],
  },
  {
    question:
      "What is the time-box for the Sprint Review in a four-week Sprint?<br><br>",
    answers: [
      { text: "1 hour", correct: false },
      { text: "2 hours", correct: false },
      { text: "4 hours", correct: false },
      { text: "No more than 4 hours", correct: true },
    ],
  },
  {
    question:
      "During which Scrum event do team members volunteer for tasks?<br><br>",
    answers: [
      { text: "Sprint Planning", correct: true },
      { text: "Daily Scrum", correct: false },
      { text: "Sprint Review", correct: false },
      { text: "Sprint Retrospective", correct: false },
    ],
  },
  {
    question: "Who determines how work is performed in the Sprint?<br><br>",
    answers: [
      { text: "Scrum Master", correct: false },
      { text: "Product Owner", correct: false },
      { text: "Development Team", correct: true },
      { text: "External consultants", correct: false },
    ],
  },
  {
    question: "The primary purpose of the Daily Scrum is to:<br><br>",
    answers: [
      { text: "Update the Scrum Master on project progress.", correct: false },
      {
        text: "Make decisions about the next steps in the project.",
        correct: false,
      },
      {
        text: "Inspect progress toward the Sprint Goal and adapt the Sprint Backlog.",
        correct: true,
      },
      { text: "Assign new tasks to team members.", correct: false },
    ],
  },
  {
    question: "A Burn-Up Chart is used to:<br><br>",
    answers: [
      { text: "Track the amount of work completed over time.", correct: false },
      {
        text: "Show the remaining work in the Sprint Backlog.",
        correct: false,
      },
      {
        text: "Display the total work for a project over time.",
        correct: true,
      },
      {
        text: "Indicate how much budget has been burned through.",
        correct: false,
      },
    ],
  },
  {
    question: "The Definition of Done is defined by:<br><br>",
    answers: [
      { text: "The Scrum Master", correct: false },
      { text: "The Product Owner", correct: false },
      { text: "The Development Team", correct: true },
      { text: "The client or stakeholder", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a Scrum Artifact?<br><br>",
    answers: [
      { text: "Product Backlog", correct: false },
      { text: "Sprint Backlog", correct: false },
      { text: "Increment", correct: false },
      { text: "Gantt Chart", correct: true },
    ],
  },
  {
    question:
      "What is the main reason for the Scrum Master to attend the Daily Scrum?<br><br>",
    answers: [
      { text: "To give the team instructions", correct: false },
      {
        text: "To take notes and report progress to stakeholders",
        correct: false,
      },
      { text: "To observe and identify impediments", correct: true },
      { text: "To update the Sprint Backlog", correct: false },
    ],
  },
  {
    question: "The Product Backlog is:<br><br>",
    answers: [
      { text: "Fixed at the beginning of the project.", correct: false },
      {
        text: "A list of tasks assigned to the Development Team.",
        correct: false,
      },
      { text: "Continuously refined and prioritized.", correct: true },
      { text: "Only accessible to the Product Owner.", correct: false },
    ],
  },
  {
    question: "In Scrum, a Spike is used to:<br><br>",
    answers: [
      { text: "Fix urgent bugs.", correct: false },
      { text: "Add extra features to the Increment.", correct: false },
      {
        text: "Investigate, research or explore uncertainties.",
        correct: true,
      },
      { text: "Increase velocity by adding more tasks.", correct: false },
    ],
  },
  {
    question: "Which statement best describes the Sprint Goal?<br><br>",
    answers: [
      {
        text: "A detailed list of deliverables for the Sprint.",
        correct: false,
      },
      { text: "The highest-priority feature for the Sprint.", correct: false },
      {
        text: "An objective set for the Sprint that can be met through the implementation of Product Backlog.",
        correct: true,
      },
      {
        text: "A performance metric for the Development Team.",
        correct: false,
      },
    ],
  },
  {
    question: "The maximum duration of a Sprint is:<br><br>",
    answers: [
      { text: "1 week", correct: false },
      { text: "2 weeks", correct: false },
      { text: "4 weeks", correct: true },
      { text: "Determined by the Development Team", correct: false },
    ],
  },
  {
    question: "The Scrum values include:<br><br>",
    answers: [
      { text: "Precision, Accuracy, Efficiency, and Speed", correct: false },
      {
        text: "Commitment, Courage, Focus, Openness, and Respect",
        correct: true,
      },
      {
        text: "Accountability, Documentation, Measurement, and Reporting",
        correct: false,
      },
      {
        text: "Planning, Execution, Monitoring, and Controlling",
        correct: false,
      },
    ],
  },
  {
    question: "Who is responsible for the Scrum process?<br><br>",
    answers: [
      { text: "The Scrum Master", correct: false },
      { text: "The Product Owner", correct: false },
      { text: "The Development Team", correct: false },
      { text: "The entire Scrum Team", correct: true },
    ],
  },
  {
    question: "The purpose of the Sprint Retrospective is to:<br><br>",
    answers: [
      { text: "Demonstrate the work done to stakeholders.", correct: false },
      { text: "Plan the next Sprint.", correct: false },
      { text: "Inspect the Sprint for improvements.", correct: true },
      { text: "Refine the Product Backlog.", correct: false },
    ],
  },
  {
    question: "Scrum is best described as:<br><br>",
    answers: [
      { text: "A complete methodology", correct: false },
      { text: "A set of guidelines", correct: false },
      { text: "A framework", correct: true },
      { text: "A tool for project management", correct: false },
    ],
  },
  {
    question: "How often should the Product Backlog be refined?<br><br>",
    answers: [
      { text: "Once at the start of the project", correct: false },
      { text: "At the beginning of each Sprint", correct: false },
      { text: "Continuously throughout the project", correct: true },
      { text: "Only when the Product Owner requests it", correct: false },
    ],
  },
  {
    question: "Who attends the Sprint Planning meeting?<br><br>",
    answers: [
      { text: "The Scrum Master and Development Team", correct: false },
      {
        text: "The Scrum Master, Product Owner, and Development Team",
        correct: true,
      },
      { text: "The Scrum Master and Product Owner", correct: false },
      { text: "The entire organization", correct: false },
    ],
  },
  {
    question: "What is velocity in Scrum?<br><br>",
    answers: [
      { text: "The speed at which the Development Team works", correct: false },
      { text: "The rate at which tasks are completed", correct: false },
      {
        text: "An estimate of how much work can be done in a Sprint",
        correct: true,
      },
      { text: "The duration of the Daily Scrum", correct: false },
    ],
  },
  {
    question:
      "User Stories in the Product Backlog are primarily written by:<br><br>",
    answers: [
      { text: "The Scrum Master", correct: false },
      { text: "The Development Team", correct: false },
      { text: "The Product Owner", correct: true },
      { text: "Stakeholders", correct: false },
    ],
  },
  {
    question:
      "Which of the following best describes a self-organizing team?<br><br>",
    answers: [
      { text: "A team that requires micromanagement", correct: false },
      {
        text: "A team that decides internally on its process and workload",
        correct: true,
      },
      { text: "A team led by the Scrum Master", correct: false },
      {
        text: "A team that follows instructions from the Product Owner",
        correct: false,
      },
    ],
  },
  {
    question: "The Increment is:<br><br>",
    answers: [
      { text: "The list of completed tasks during a Sprint", correct: false },
      {
        text: "The sum of all Product Backlog items completed during a Sprint and all previous Sprints",
        correct: true,
      },
      { text: "The feedback from the latest Sprint Review", correct: false },
      {
        text: "A new feature to be developed in the next Sprint",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of a Sprint?<br><br>",
    answers: [
      { text: "To complete all tasks in the Product Backlog", correct: false },
      {
        text: "To ensure that the team has enough work for a month",
        correct: false,
      },
      {
        text: "To create a potentially releasable Increment of product",
        correct: true,
      },
      { text: "To refine and prioritize the Product Backlog", correct: false },
    ],
  },
  {
    question: "Sprint Zero is:<br><br>",
    answers: [
      {
        text: "The first Sprint where no product development occurs, focused only on planning.",
        correct: false,
      },
      {
        text: "A term for the initial planning and setup phase before the first Sprint.",
        correct: false,
      },
      { text: "Not a recognized part of Scrum.", correct: true },
      { text: "The final Sprint in a Scrum project.", correct: false },
    ],
  },
  {
    question: "The Scrum Guide is updated:<br><br>",
    answers: [
      { text: "Every month", correct: false },
      { text: "Every year", correct: false },
      { text: "Every 3 years", correct: false },
      {
        text: "As needed, based on input from the Scrum community",
        correct: true,
      },
    ],
  },
  {
    question: "Technical debt should be addressed: <br><br>",
    answers: [
      { text: "At the end of the project", correct: false },
      { text: "During the Sprint Retrospective", correct: false },
      { text: "As it is identified", correct: true },
      { text: "Only if it impacts the Sprint Goal", correct: false },
    ],
  },
  {
    question: "Cross-functional teams in Scrum mean:<br><br>",
    answers: [
      {
        text: "Teams work on multiple projects at the same time.",
        correct: false,
      },
      {
        text: "Teams have members with all the skills necessary to create the product Increment.",
        correct: true,
      },
      {
        text: "Teams outsource functions they cannot perform internally.",
        correct: false,
      },
      {
        text: "Teams function in multiple roles within the Scrum framework.",
        correct: false,
      },
    ],
  },
  {
    question: "A good user story should be:<br><br>",
    answers: [
      {
        text: "INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable",
        correct: true,
      },
      { text: "FAST: Feasible, Accurate, Simple, Traceable", correct: false },
      {
        text: "DETAILED: Detailed, Estimable, Traceable, Accurate, Independent, Large, Elaborate",
        correct: false,
      },
      {
        text: "SMART: Specific, Measurable, Achievable, Realistic, Timely",
        correct: false,
      },
    ],
  },
  {
    question:
      "How is the Scrum framework primarily upheld and implemented in an organization?<br><br>",
    answers: [
      { text: "Through strict adherence to the Scrum Guide.", correct: false },
      {
        text: "By the development team's commitment to Sprints.",
        correct: false,
      },
      {
        text: "Through the roles of the Scrum Master, Product Owner, and Development Team.",
        correct: true,
      },
      {
        text: "By following traditional project management techniques.",
        correct: false,
      },
    ],
  },
  {
    question: "When is a Sprint over?<br><br>",
    answers: [
      { text: "When the Product Owner says it is done.", correct: false },
      {
        text: "When all Product Backlog items meet their definition of ''Done''.",
        correct: false,
      },
      { text: "When the time-box expires.", correct: true },
      { text: "When all the tasks are completed.", correct: false },
    ],
  },
  {
    question:
      "Which output from Sprint Planning provides the Scrum Team with a target and overarching direction for the Sprint?<br><br>",
    answers: [
      { text: "The Sprint Backlog.", correct: false },
      { text: "The Sprint Goal.", correct: true },
      { text: "The release plan.", correct: false },
      { text: "Sprint Review minutes.", correct: false },
    ],
  },
  {
    question:
      "True or False: A Scrum Team must only work on a single Product Goal at any time.<br><br>",
    answers: [
      { text: "True.", correct: true },
      { text: "False.", correct: false },
    ],
  },
  {
    question: "Product Backlog refinement is...<br><br>",
    answers: [
      { text: "Carried out once per Sprint.", correct: false },
      { text: "The concern of the Product Owner.", correct: false },
      { text: "A Scrum event.", correct: false },
      {
        text: "An ongoing process in which the Product Owner and the Developers collaborate.",
        correct: true,
      },
    ],
  },
  {
    question: "An Increment is...<br><br>",
    answers: [
      {
        text: "The sum of the Done work during a Sprint, plus the work Done in earlier Sprints.",
        correct: true,
      },
      { text: "All work that was carried out in the Sprint.", correct: false },
      {
        text: "All work completed up to now, where there are no bugs present.",
        correct: false,
      },
      {
        text: "An ongoing process in which the Product Owner and the Developers collaborate.",
        correct: false,
      },
    ],
  },
  {
    question: "True or False: A Product Backlog is never complete.<br><br>",
    answers: [
      {
        text: "True - As long as a product exists, its Product Backlog also exists.",
        correct: true,
      },
      {
        text: "False - A complete Product Backlog should be created before starting the first Sprint.",
        correct: false,
      },
    ],
  },
  {
    question:
      "True or False: A Scrum Team uses 2 weeks Sprints and time box their Sprint Planning to 6 hours. Does this break the rules of Scrum?<br><br>",
    answers: [
      { text: "True.", correct: false },
      { text: "False.", correct: true },
    ],
  },
  {
    question:
      "If two Scrum Teams are added to the development of a product that previously had only one Scrum Team, what will be the immediate impact on the productivity of the original Scrum Team? <br><br>",
    answers: [
      { text: "Its productivity is likely to decrease.", correct: true },
      { text: "Its productivity is likely to stay the same.", correct: false },
      { text: "Its productivity is likely to increase.", correct: false },
    ],
  },
  {
    question:
      "When is implementation of a Product Backlog item considered complete? <br><br>",
    answers: [
      {
        text: "When the item has no work remaining in order to be potentially released.",
        correct: true,
      },
      { text: "At the end of the Sprint.", correct: false },
      {
        text: "When QA reports that the item passes all acceptance criteria.",
        correct: false,
      },
      {
        text: "When all work in the Sprint Backlog related to the item is finished.",
        correct: false,
      },
    ],
  },
  {
    question: "Every Development Team should have: <br><br>",
    answers: [
      {
        text: "At least one representative from each major software engineering discipline (like QA, Dev, UX).",
        correct: false,
      },
      {
        text: "One Lead Developer and no more than 8 other members.",
        correct: false,
      },
      {
        text: "The competencies and skills needed to deliver a Done Increment in a Sprint.",
        correct: true,
      },
    ],
  },
];

// Get elements from the DOM related to the quiz functionality
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to track the current question and user's score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0; // Reset the question index to the first question
  score = 0; // Reset the score
  nextButton.innerHTML = "Next"; // Set button label to "Next"
  showQuestion(); // Show the first question
}

// Function to shuffle an array (used for randomizing question order)
function shuffle(array) {
  let currentIndex = array.length;

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

// Create a shuffled array of question indices
var arr = new Array(questions.length).fill().map((v, i) => i);
shuffle(arr); // Shuffle the question indices
console.log(arr); // Log the shuffled array for debugging

// Function to display the current question
function showQuestion() {
  resetState(); // Reset the state of the answer buttons
  let currentQuestion = questions[arr[currentQuestionIndex]]; // Get the current question using the shuffled array
  let questionNo = currentQuestionIndex + 1; // Question number for display
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the question

  // Loop through the answers and create buttons for each
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text; // Set the answer text on the button
    button.classList.add("btn"); // Add a class for styling
    answerButtons.appendChild(button); // Add the button to the DOM

    // If the answer is correct, store that information in the button's dataset
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    // Add a click event listener to check if the selected answer is correct
    button.addEventListener("click", selectAnswer);
  });
}

// Function to reset the answer buttons for the next question
function resetState() {
  nextButton.style.display = "none"; // Hide the next button until an answer is selected
  // Remove all the answer buttons from the previous question
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle the answer selection
function selectAnswer(e) {
  const selectedBtn = e.target; // Get the selected button
  const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the answer is correct

  // If the selected answer is correct, add the "correct" class and increase the score
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    // If the selected answer is wrong, add the "incorrect" class
    selectedBtn.classList.add("incorrect");
  }

  // Highlight the correct answer on all buttons
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    // Disable all buttons after an answer is selected
    button.disabled = true;
  });

  // Show the next button after answering
  nextButton.style.display = "block";
}

// Function to show the final score at the end of the quiz
function showScore() {
  resetState(); // Reset the state of the answer buttons
  // Display the score as "You answered X out of Y correct!"
  questionElement.innerHTML = `You answered ${score} out of ${questions.length} correct!`;
  nextButton.innerHTML = "Try Again"; // Change button label to "Try Again"
  nextButton.style.display = "block"; // Show the button to restart the quiz
}

// Function to handle the logic when the next button is clicked
function handleNextButton() {
  currentQuestionIndex++; // Move to the next question
  // If there are more questions, show the next one
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // If there are no more questions, show the score
    showScore();
  }
}

// Add a click event listener to the next button
nextButton.addEventListener("click", () => {
  // If there are more questions, proceed to the next one
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    // If no more questions, restart the quiz
    startQuiz();
  }
});

// Start the quiz when the page loads
startQuiz();