import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  leaveFeedback =(option) => {
    this.setState(prevState => ({
     [option]: prevState[option] + 1,
      
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    return  total  
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = Math.round(
      (good / total) * 100)
    return total > 0 ? positivePercentage : 0    
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()

    return <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)}
         onLeaveFeedback={this.leaveFeedback}
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
}