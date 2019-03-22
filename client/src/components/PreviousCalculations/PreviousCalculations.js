import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import styles from './PreviousCalculations.module.css';
import * as actions from '../../actions';

// eslint-disable-next-line
class PreviousCalculations extends Component {
  state = {
    calculations: [
      {
        _id: '',
        label: '',
        firstNum: '',
        secondNum: '',
        operation: '',
        result: ''
      }
    ]
  };

  async componentDidMount() {
    const res = await axios.get('/api/calculation');
    this.setState({
      calculations: res.data
    });
    console.log(24, res);
  }

  render() {
    const { calculations } = this.state;

    // eslint-disable-next-line
    return (
      <div className={styles.navbarContainer}>
        <p>Here are your previous calculations</p>
        {calculations.map(calculation => (
          <div className={styles.container}>
            <div className={styles.item}>
Label:
{' '}
{calculation.label}
</div>
            <div className={styles.item}>{calculation.firstNum}</div>
            <div className={styles.item}>{calculation.operation}</div>
            <div className={styles.item}>{calculation.secondNum}</div>
            <div className={styles.item}>=</div>
            <div className={styles.item}>{calculation.result}</div>
          </div>
        ))}
      </div>
    );
  }
}

PreviousCalculations.propTypes = {
  // addCalculation: PropTypes.func.isRequired
};

function mapStateToProps({ previousCalculations }) {
  return { previousCalculations };
}

export default connect(mapStateToProps)(PreviousCalculations);
