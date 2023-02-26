// import PropTypes from "prop-types";
import React, { useState } from 'react';
import { FeedBackStyle } from './FeedBack.styled';
import { FeedbackOptions } from '../FeedBackOptions/FeedbackOptions';
import { Statistic } from '../Statistic/Statistic';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export function FeedBackList({ g, n, b }) {
  const [good, setGood] = useState(g);
  const [neutral, setNeutral] = useState(n);
  const [bad, setBad] = useState(b);

  const onLeaveFeedbacks = e => {
    const dataName = e.currentTarget.value;
    switch (dataName) {
      case 'good':
        setGood(pS => pS + 1);
        break;
      case 'neutral':
        setNeutral(pS => pS + 1);
        break;
      case 'bad':
        setBad(pS => pS + 1);
        break;
      default:
        throw new Error('error');
    }
    return countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    let goodsPercent = 0;
    if (total > 0) {
      goodsPercent = Math.round((good / total) * 100);
      return goodsPercent;
    }
    return goodsPercent;
  };

  const oneFeedback = countTotalFeedback() <= 0;
  const options = Object.keys({ good, neutral, bad });

  return (
    <FeedBackStyle>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedbacks} />
      </Section>

      <Section title="Statistics">
        {oneFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </FeedBackStyle>
  );
}
// }
