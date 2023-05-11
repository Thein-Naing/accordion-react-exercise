import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const[questions, setQuestions]   = useState(data);


  //  map the questions and return <SingleQuestion /> component with (question.key}{... question}
  return (
    <main>
      <div className="container">
        <h3> questions and answers about login</h3>
        <section className='info'>
          { questions.map((question) => {
            return(
            <SingleQuestion key={question.id} {...question}/>
            )
          })};
        </section>
        </div>
    </main>
  )
}

export default App;
