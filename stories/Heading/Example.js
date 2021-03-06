import * as React from 'react';
import ToggleSwitch from '../../src/ToggleSwitch';
import Dropdown from '../../src/Dropdown';
import Heading from '../../src/Heading';
import Input from '../../src/Input';
import Text from '../../src/Text';

const appearanceOptions = ['H1', 'H2', 'H3', 'H4', 'H5'].map(value => ({id: value, value}));

export default class ControlledHeadingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearance: 'H1',
      light: false,
      children: 'Some text',
      ellipsis: false,
      forceHideTitle: false
    };
  }

  render() {
    return (
      <div>
        <div style={{background: 'azure', width: '355px', margin: '30px 20px'}}><Text>{`import {Heading} from 'wix-ui-backoffice/Heading';`}</Text></div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '120px'}}>
            <Heading> Props </Heading><br/><br/><br/>
            <Heading appearance="H3">appearance: </Heading> <Dropdown options={appearanceOptions} onSelect={({value}) => this.setState({appearance: value})} selectedId={this.state.appearance}/><br/><br/>
            <Heading appearance="H3">light: </Heading> <ToggleSwitch size="small" checked={this.state.light} onChange={() => this.setState({light: !this.state.light})}/><br/><br/>

            <Heading appearance="H3">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>
            <Heading appearance="H3">ellipsis: </Heading> <ToggleSwitch size="small" checked={this.state.ellipsis} onChange={() => this.setState({ellipsis: !this.state.ellipsis})}/><br/><br/>
            <Heading appearance="H3">forceHideTitle: </Heading> <ToggleSwitch size="small" checked={this.state.forceHideTitle} onChange={() => this.setState({forceHideTitle: !this.state.forceHideTitle})}/><br/><br/>

          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={this.state.ellipsis ? {width: '150px'} : {width: '300px'}}>
              <Heading
                appearance={this.state.appearance}
                light={this.state.light}
                ellipsis={this.state.ellipsis}
                forceHideTitle={this.state.forceHideTitle}
                dataHook="storybook-heading"
                >
                {this.state.children}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
