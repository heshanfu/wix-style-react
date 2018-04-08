import * as React from 'react';
import ToggleSwitch from '../../src/ToggleSwitch';
import Dropdown from '../../src/Dropdown';
import {Heading} from 'wix-ui-backoffice/Heading';
import Input from '../../src/Input';
import Text from '../../src/Text';
import {SKINS} from 'wix-ui-backoffice/dist/src/components/Text/constants';

const skinOptions = Object.keys(SKINS).map(value => ({id: value, value}));
const sizeOptions = ['small', 'medium'].map(value => ({id: value, value}));

class ControlledTextExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'medium',
      secondary: false,
      skin: 'standard',
      light: false,
      bold: false,
      children: 'Some text',
      ellipsis: false,
      forceHideTitle: false
    };
  }

  render() {
    return (
      <div>
        <div style={{background: 'azure', width: '310px', margin: '30px 20px'}}><Text>{`import Text from 'wix-style-react/Text';`}</Text></div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '120px'}}>
            <Heading> Props </Heading><br/><br/><br/>
            <Heading appearance="H2">size: </Heading> <Dropdown options={sizeOptions} onSelect={({value}) => this.setState({size: value})} selectedId={this.state.size}/><br/><br/>
            <Heading appearance="H2">secondary: </Heading> <ToggleSwitch checked={this.state.secondary} onChange={() => this.setState({secondary: !this.state.secondary})}/><br/><br/>
            <Heading appearance="H2">skin: </Heading> <Dropdown options={skinOptions} onSelect={({value}) => this.setState({skin: value})} selectedId={this.state.skin}/><br/><br/>
            <Heading appearance="H2">light: </Heading> <ToggleSwitch checked={this.state.light} onChange={() => this.setState({light: !this.state.light})}/><br/><br/>
            <Heading appearance="H2">bold: </Heading> <ToggleSwitch checked={this.state.bold} onChange={() => this.setState({bold: !this.state.bold})}/><br/><br/>
            <Heading appearance="H2">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>
            <Heading appearance="H2">ellipsis: </Heading> <ToggleSwitch checked={this.state.ellipsis} onChange={() => this.setState({ellipsis: !this.state.ellipsis})}/><br/><br/>
            <Heading appearance="H2">forceHideTitle: </Heading> <ToggleSwitch checked={this.state.forceHideTitle} onChange={() => this.setState({forceHideTitle: !this.state.forceHideTitle})}/><br/><br/>

          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={this.state.ellipsis ? {width: '40px'} : {width: '300px'}}>
              <Text
                size={this.state.size}
                secondary={this.state.secondary}
                skin={this.state.skin}
                light={this.state.light}
                bold={this.state.bold}
                ellipsis={this.state.ellipsis}
                forceHideTitle={this.state.forceHideTitle}
                dataHook="storybook-text"
                >
                {this.state.children}
              </Text>
            </div>
          </div>
        </div>
        <br/><br/><br/>

        <Heading>Multiline Example: </Heading><br/>
        <Text>{`First line\nSecond line`}</Text>
        <br/><br/>
      </div>
    );
  }
}
export default () => <ControlledTextExample/>;
