import Description from './Description/Description';
import Feedback from "./Feedback/Feedback";
import Options from './Options/Options';
import Notification from './Notification/Notification';
import { useState, useEffect } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,  
  });

  const updateFeedback = feedbackType => {
    setFeedback(prevstate => ({
      ...prevstate,
      [feedbackType]: prevstate[feedbackType] + 1
    }));
  }
  const resetFeedback = () => { setFeedback({ good: 0, neutral: 0, bad: 0 }); };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => { localStorage.setItem("feedback", JSON.stringify(feedback)); }, [feedback]);
  
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    
    if (savedFeedback) { setFeedback(savedFeedback); }
  }, []);

  return (
   <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />
      
    {totalFeedback > 0 ? (<Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback } />) : (<Notification message="No feedback collected yet"/>)}
 
   </div>
  );
};
export default App;
