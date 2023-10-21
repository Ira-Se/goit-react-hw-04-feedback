import { Item, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
      <List>
          {options.map(option => (
          <Item key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}>
            {option}
          </Item>
      
      ))}
    </List>
  );
};
