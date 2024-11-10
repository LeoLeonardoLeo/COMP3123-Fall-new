import React from 'react';

function InformationPage(props) {
  return (
      <div>
          <h1>Welcome to FullStack Development 1</h1>
          <h2>React JS Programming Week 9 lab exercise</h2>
          <p>{props.studentNum}</p>
          <p>{props.name}</p>
          <p>{props.college}</p>
      </div>
  );
}


export default InformationPage; 