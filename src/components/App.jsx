import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const leaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
    
      case 'bad':
        setBad(bad + 1);
        break;
      
      default: console.log("Invalid option")
    }
  }

  const total = good + neutral + bad

  const countTotalFeedback = () => {
   return  total  
  }
  
  const countPositiveFeedbackPercentage = () => {
  const total = countTotalFeedback()
  const positivePercentage = Math.round(
      (good / total) * 100)
    return total > 0 ? positivePercentage : 0    
  }
    
  const positivePercentage = countPositiveFeedbackPercentage()

    return <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']}
         onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">

       { total > 0 ? 
        <Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage} />:
        <Notification message="There is no feedback" />}
      </Section> 
      </div>
  }
