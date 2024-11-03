import css from "./Feedback.module.css";


const Feedback = ({ feedback, totalFeedback, positiveFeedback}) => {
    
  return (
    <div className={css.container}>
          <h2>Statistics</h2>
              <p>Good: {feedback.good}</p>
              <p>Neutral: {feedback.neutral}</p>
              <p>Bad: {feedback.bad}</p>
              <p>Total Feedback: {totalFeedback}</p>
              <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  )
};

export default Feedback;