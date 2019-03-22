import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './NewCalculation.module.css';

// eslint-disable-next-line
class Navbar extends Component {
  state = {
    label: '',
    firstNum: '',
    secondNum: '',
    operation: ''
  };

  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      // eslint-disable-next-line no-unused-vars
      firstNum,
      secondNum,
      label,
      operation
    } = this.state;
    const { name } = this.props;

    // eslint-disable-next-line
    return (
      <div className={styles.navbarContainer}>
        <p>Enter an expression below</p>
        <div className={styles.formContainer}>
          <form>
            <input
              className={styles.label}
              name="label"
              type="text"
              value={label}
              placeholder="Label"
              onChange={this.handleChange}
            />
            <input
              className={styles.input}
              name="firstNum"
              type="text"
              value={firstNum}
              placeholder="First Operand"
              onChange={this.handleChange}
            />
            <input
              className={styles.input}
              name="operation"
              type="text"
              value={operation}
              placeholder="Operation (+,-,*,/)"
              onChange={this.handleChange}
            />
            <input
              className={styles.input}
              name="secondNum"
              type="text"
              value={secondNum}
              placeholder="Second Operand"
              onChange={this.handleChange}
            />
            <button
              className={styles.button}
              type="submit"
              onClick={this.handleSubmit}
            >
              Calculate
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired
};

function mapStateToProps({ name }) {
  return { name };
}

export default connect(mapStateToProps)(Navbar);
