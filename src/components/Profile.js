import React, {Component} from 'react';
import Education from './Education';
import PersonalInformation from './PersonalInformation';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const timeoutId = setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    this.setState({ timeoutId });
  }

  componentWillUnmount() {
    const { timeoutId } = this.state;
    if (timeoutId) clearTimeout(timeoutId);
  }

  render(){
    if(this.state.isLoading) return <span>Loading...</span>
      return (
        <div className="container">
          <div>
              <PersonalInformation />
              <br/>
              <WorkExperience />
              <br/>
              <Education/>
              <br/>
              <Skills />
          </div>
        </div>
      )
  } 
}

export default Profile;
