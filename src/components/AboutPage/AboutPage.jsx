import React from 'react';
import RegisterPage from '../RegisterPage/RegisterPage';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>In Stock is a household food inventory application.  Enter your recently purchased groceries into your account and see what's in stock at home! 
        Sign up for free today. 
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
