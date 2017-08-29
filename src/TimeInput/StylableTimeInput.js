import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import moment from 'moment';

import Input from '../Input';

import {SBComponent as sbcomponent} from 'stylable-react-component';
import styles from './TimeInput.st.css';

class TimeInput extends Component {
  static displayName = 'TimePicker'

  static propTypes = {
    defaultValue: PropTypes.object,
    onChange: PropTypes.func,
    rtl: PropTypes.bool,
    style: PropTypes.object,
    disableAmPm: PropTypes.bool,
    dataHook: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    defaultValue: moment(),
    onChange: () => {},
    style: {},
    disableAmPm: false,
    disabled: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      lastCaretIdx: 0,
      hover: false,
      ...this.getInitTime(this.props.defaultValue)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setState(this.getInitTime(nextProps.defaultValue));
    }
  }

  isAmPmMode() {
    return !this.props.disableAmPm && moment('2016-04-03 13:14:00').format('LT').indexOf('PM') !== -1;
  }

  getInitTime(value) {
    let time = value || moment(),
      am = time.hours() < 12;

    const ampmMode = this.isAmPmMode();

    ({time, am} = this.normalizeTime(am, time, ampmMode));
    const text = this.formatTime(time, ampmMode);

    return {time, am, text, ampmMode};
  }

  momentizeState(timeSet) {
    let time, am;
    const {ampmMode} = this.state;

    if (timeSet) {
      ({time, am} = timeSet);
    } else {
      ({time, am} = this.state);
    }

    let hours = time.hours();

    if (ampmMode && !am && hours < 12) {
      hours += 12;
    }

    if (ampmMode && am && hours === 12) {
      hours = 0;
    }

    const momentized = moment();
    momentized.hours(hours);
    momentized.minutes(time.minutes());
    momentized.seconds(0);
    return momentized;
  }

  bubbleOnChange(timeSet) {
    const time = this.momentizeState(timeSet);
    this.props.onChange(time);
  }

  timeStep(direction) {
    const time = this.momentizeState();
    const timeUnit = this.state.lastFocusedTimeUnit || 'minutes';
    const amount = timeUnit === 'hours' ? 1 : 20;
    time.add(direction * amount, timeUnit);
    const am = time.hours() < 12;
    this.updateDate({am, time});
  }

  formatTime(time, ampmMode = this.state.ampmMode) {
    return ampmMode ? time.format('hh:mm') : time.format('HH:mm');
  }

  getFocusedTimeUnit(caretIdx, currentValue) {
    let colonIdx = currentValue.indexOf(':');
    colonIdx = Math.max(0, colonIdx);
    return caretIdx <= colonIdx ? 'hours' : 'minutes';
  }

  normalizeTime(am, time, ampmMode = this.state.ampmMode) {
    const hours = time.hours();

    if (ampmMode) {
      if (hours === 0) {
        return {time: time.clone().hours(12), am: true};
      }

      if (hours > 12) {
        return {time: time.clone().hours(hours - 12), am: false};
      }
    }

    return {time: time.clone().hours(hours), am};
  }

  updateDate({time, am}) {
    am = isUndefined(am) ? this.state.am : am;
    let newTime = moment(time, 'HH:mm');
    newTime = newTime.isValid() ? newTime : this.state.time;
    const normalizedTime = this.normalizeTime(am, newTime);
    ({time, am} = normalizedTime);
    const text = this.formatTime(time);
    this.setState({time, am, text});
    this.bubbleOnChange({time, am});
  }

  handleAmPmClick = () =>
    !this.props.disabled && this.updateDate({am: !this.state.am})

  handleFocus = input =>
    this.setState({focus: true, lastFocus: input})

  handleBlur = () => {
    this.setState({focus: false});
    this.updateDate({time: this.state.text});
  }

  handleInputChange = ({target}) =>
    this.setState({text: target.value})

  handleHover = hover =>
    this.setState({hover})

  handleMinus = () =>
    this.timeStep(-1)

  handlePlus = () =>
    this.timeStep(1)

  handleInputBlur = ({target}) => {
    const caretIdx = target.selectionEnd || 0;
    let lastFocusedTimeUnit;

    if (caretIdx >= 0) {
      lastFocusedTimeUnit = this.getFocusedTimeUnit(caretIdx, target.value);
    }

    this.setState({lastCaretIdx: caretIdx, lastFocusedTimeUnit});
    this.updateDate({time: target.value});
  }

  renderTimeTextbox() {
    const suffix = (
      <Input.Group>
        {this.state.ampmMode &&
          <span
            className="ampm"
            onClick={this.handleAmPmClick}
            data-hook="am-pm-indicator"
            >
            {this.state.am ? 'am' : 'pm'}
          </span>
        }
        <Input.Ticker
          upDisabled={this.props.disabled}
          downDisabled={this.props.disabled}
          onUp={this.handlePlus}
          onDown={this.handleMinus}
          />
      </Input.Group>
    );

    return (
      <div className="input">
        <Input
          ref="input"
          value={this.state.text}
          onFocus={this.handleFocus}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          suffix={suffix}
          dataHook="time-input"
          disabled={this.props.disabled}
          />
      </div>
    );
  }

  render() {
    const {style, dataHook, rtl, disabled} = this.props;
    const {focus, hover} = this.state;

    return (
      <div
        cssStates={{disabled}}
        style={style}
        data-hook={dataHook}
        >
        <div
          onMouseOver={() => this.handleHover(true)}
          onMouseOut={() => this.handleHover(false)}
          cssStates={{focus, hover: hover && !focus, rtl}}
          className="time"
          >
          {this.renderTimeTextbox()}
        </div>
      </div>
    );
  }
}

export default sbcomponent(TimeInput, styles);