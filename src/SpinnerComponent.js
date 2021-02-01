import React, {useState} from 'react';
import Loader from 'react-loader-spinner';

 const Loading =()=>
 <div className="loading">
 <div></div>
 <div></div>
 </div>
 
 class SpinnerComponent extends React.component{
     constructor(props){
         super(props);
         this.state={
             loading: true,
         };
     }
     
     componentDidMount(){
         this.isLoading = setTimeout(()=> 
         {this.setState({loading:false})}, 3300);
     }
     componentWillUnmount(){
         clearTimeout(this.isLoading);
     }
     timer = () => setTimeout(()=>{
         this.setState({loading: false})
     }, 3300);
      render(){
          const{loading}=this.state;
          return(
              loading ? (<Loading/>): (<div className="content">
              <h1> Hello </h1>
              </div>
              )
          )
      }
 }

export default SpinnerComponent;