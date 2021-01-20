import React,{Component} from 'react';
class Demo extends Component {
    render(){
return(
  <>
<div>
  <div className="mainHeading">
    <h1>Exercise 1: understanding JSX</h1>
    <p>You need to convert this html code into JSX.</p>
  </div>
  <div className="companyName">
    <h2>MentorStudents Job-Portal</h2>
    <img src="https://picsum.photos/id/180/500/200" className="companyBanner"/>
  </div>
  <div className="searchPanel" style={{marginTop: '20px'}}>
    <span>
      <label for="searchWhat">What</label>
      <input id="searchWhat" type="text" placeholder="Job title, keywords or company"/>
    </span>
    <span style={{marginLeft: '20px'}}>
      <label for="searchWhere">Where</label>
      <input id="searchWhere" type="text" placeholder="Enter city"/>
    </span>
    <span style={{marginLeft: '20px'}}>
      <button style={{color: 'blue'}}>Find jobs</button>
    </span>
  </div>
  <div className="jobs" style={{maxWidth: '20vw'}}>
      <h4>Full-stack developer</h4>
      <h5>Delhi</h5>
      <img src="https://picsum.photos/id/180/200/100" className="jobPostImage"/>
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div className="salary">Salary: 30K - 40K</div>
      <button style={{backgroundColor: 'blue' , color: 'white'}}>Apply</button>
      <button style={{backgroundColor: 'red',  color: 'white'}}>Not interested</button>
      <hr/>
    </div>
    <div>
      <h4>Front-end developer</h4>
      <h5>Pune</h5>
      <img src="https://picsum.photos/id/180/200/100" className="jobPostImage"/>
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div className="salary">Salary: 15K - 30K</div>
      <button style={{backgroundColor: 'blue' , color: 'white'}}>Apply</button>
      <button style={{backgroundColor: 'red', color: 'white'}}>Not interested</button>
      <hr/>
      </div>
      <div>
    <div>
      <h4>Back-end developer</h4>
      <h5>Mumbai</h5>
      <img src="https://picsum.photos/id/180/200/100" className="jobPostImage"/>
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div className="salary">Salary: 20K - 30K</div>
      <button style={{backgroundColor: 'blue', color: 'white'}}>Apply</button>
      <button style={{backgroundColor: 'red', color: 'white'}}>Not interested</button>
      <hr/>
    </div>
  </div>
  <div className="pagination" style={{marginTop: '20px'}}>
    <button> &#10094; Prev </button>
    <button>Next &#10095; </button>
  </div>
  </div>
  </>
);
}
}
 export default Demo;