import React from 'react';
import {Email} from 'wix-style-react/Icons';
import DropdownComposite from '../../src/DropdownComposite';
import Dropdown from '../../src/Dropdown';
import Label from '../../src/Label';
import Text from '../../src/Text/deprecated';
import {SKIN} from 'wix-ui-backoffice/dist/src/components/StylableCounterBadge/constants';
import style from './CounterBadge.scss';
import CounterBadge from 'wix-style-react/CounterBadge';

const skinOptions = Object.keys(SKIN).map(value => ({id: value, value}));

const childrenOptions = [{id: '12', value: '12'}, {id: '1', value: '1'}, {id: 'Email', value: 'Email'}];

class ControlledCounterBadgeExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skin: SKIN.general,
      children: '12'
    };
  }
  render() {
    return (
      <div>
        <div style={{background: 'azure', width: '420px'}}><Text>{`import CounterBadge from 'wix-style-react/CounterBadge';`}</Text></div>
        <div className={style.container}>
          <div style={{width: '200px'}}>
            <h1> Props </h1>
            <DropdownComposite><Label>children</Label><Dropdown selectedId={this.state.children} options={childrenOptions} onSelect={option => this.setState({children: option.value})}/></DropdownComposite>
            <DropdownComposite><Label>skin</Label><Dropdown selectedId={this.state.skin} options={skinOptions} onSelect={option => this.setState({skin: option.value})}/></DropdownComposite>
          </div>
          <div>
            <h1> Preview </h1>

            <br/><br/><br/><br/><br/><br/>

            <CounterBadge
              skin={this.state.skin}
              data-hook="storybook-counterbadge"
              >
              {this.state.children === 'Email' ? <Email/> : this.state.children}
            </CounterBadge>
          </div>
        </div>
      </div>
    );
  }
}

export default () => <ControlledCounterBadgeExample/>;
