import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

export default function App() {
  const [goodFeed, setGoodFeed] = useState(0);
  const [neutralFeed, setNeutralFeed] = useState(0);
  const [badFeed, setBadFeed] = useState(0);

  const handleIncrement = e => {
    const value = e.target.textContent;
    switch (value) {
      case 'Good':
        setGoodFeed(prevState => prevState + 1);

        break;
      case 'Neutral':
        setNeutralFeed(prevState => prevState + 1);

        break;
      case 'Bad':
        setBadFeed(prevState => prevState + 1);

        break;

      default:
        break;
    }

    countTotalFeedback();
  };

  const countTotalFeedback = () => {
    return goodFeed + neutralFeed + badFeed;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((goodFeed / countTotalFeedback()) * 100);
  };

  const btnOptions = ['Good', 'Neutral', 'Bad'];

  return (
    <>
      <Section title={'Please leave your feedback'}>
        <Feedback options={btnOptions} onClick={handleIncrement} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={goodFeed}
            neutral={neutralFeed}
            bad={badFeed}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
// class App extends React.Component {
//   state = {
//     Good: 0,
//     Neutral: 0,
//     Bad: 0,
//   };
//   handleIncrement = e => {
//     const value = e.target.textContent;
//     this.setState(prevState => {
//       return {
//         [value]: prevState[value] + 1,
//       };
//     });
//     this.countTotalFeedback();
//   };
//   countTotalFeedback = () => {
//     const valuesArr = Object.values(this.state);
//     return valuesArr.reduce((acc, val) => {
//       acc += val;
//       return acc;
//     });
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.trunc((this.state.Good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const btnOptions = Object.keys(this.state);
//     console.log(btnOptions);
//     return (
//       <div>
//         <Section title={'Please leave your feedback'}>
//           <Feedback options={btnOptions} onClick={this.handleIncrement} />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={this.state.Good}
//               neutral={this.state.Neutral}
//               bad={this.state.Bad}
//               total={this.countTotalFeedback()}
//               percentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
