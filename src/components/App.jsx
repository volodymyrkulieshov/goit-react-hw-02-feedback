import { Component } from 'react';
import css from './App.module.css';
import Title from './Title/Title';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Statistics from './Statistics/Statictics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const buttons = Object.keys(this.state);
    return (
      <div className={css.container}>
        <Title title="Please leave feedback"></Title>
        <FeedbackButtons buttons={buttons} />
        <Statistics title="Statistic" />
      </div>
    );
  }
}
export default App;
