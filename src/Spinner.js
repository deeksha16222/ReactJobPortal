import React, {useState} from 'react';
import Loader from 'react-loader-spinner';
 
 class SpinnerComponent extends React.component{
     constructor(props){
         super(props);
         this.state={
             loading: true,
         };
     }
     
     async loadData(){
         const data = setState({
             loading:false,
         });
         componentDidMount()
         {
             this.loadData();
         }
         render()
         {
             if(this.state.loading){
                 return(<Loader/>);
             }
             else{
                 return (<Data/>);
             }
         }
     }
     
 export SpinnerComponent;
