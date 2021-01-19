import React from 'react';

const Demo = () => {
return(
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home-page</title>
</head>

<body style="padding: 30px">
  <div class="main-heading">
    <h1>Exercise 1: understanding JSX</h1>
    <p>You need to convert this html code into JSX.</p>
  </div>
  <div class="company-name">
    <h2>MentorStudents Job-Portal</h2>
    <img src="https://picsum.photos/id/180/500/200" class="company-banner">
  </div>
  <div class="search-panel" style="margin-top: 20px;">
    <span>
      <label for="search-what">What</label>
      <input id="search-what" type="text" placeholder="Job title, keywords or company">
    </span>
    <span style="margin-left: 20px;">
      <label for="search-where">Where</label>
      <input id="search-where" type="text" placeholder="Enter city">
    </span>
    <span style="margin-left: 20px;">
      <button style="color: blue;">Find jobs</button>
    </span>
  </div>
  <div class="jobs" style="max-width: 20vw;">
    <div>
      <h4>Full-stack developer</h4>
      <h5>Delhi</h5>
      <img src="https://picsum.photos/id/180/200/100" class="job-post-image">
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div class="salary">Salary: 30K - 40K</div>
      <button style="background-color: blue; color: white;">Apply</button>
      <button style="background-color: red; color: white;">Not interested</button>
      <hr>
    </div>
    <div>
      <h4>Front-end developer</h4>
      <h5>Pune</h5>
      <img src="https://picsum.photos/id/180/200/100" class="job-post-image">
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div class="salary">Salary: 15K - 30K</div>
      <button style="background-color: blue; color: white;">Apply</button>
      <button style="background-color: red; color: white;">Not interested</button>
      <hr>
    </div>
    <div>
      <h4>Back-end developer</h4>
      <h5>Mumbai</h5>
      <img src="https://picsum.photos/id/180/200/100" class="job-post-image">
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div class="salary">Salary: 20K - 30K</div>
      <button style="background-color: blue; color: white;">Apply</button>
      <button style="background-color: red; color: white;">Not interested</button>
      <hr>
    </div>
  </div>

  <div class="pagination" style="margin-top: 20px;">
    <button> < Prev</button>
    <button>Next > </button>
  </div>
</body>

</html>

);
};
 export default Demo;