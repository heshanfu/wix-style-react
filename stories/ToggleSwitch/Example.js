import React from 'react';
import {SKINS, SIZES} from 'wix-ui-backoffice/dist/src/components/ToggleSwitch/constants';
import style from './ToggleSwitch.scss';
import ToggleSwitch from 'wix-style-react/ToggleSwitch';
import {Heading} from 'wix-ui-backoffice/Heading';
import {Autocomplete} from 'wix-ui-backoffice/Autocomplete';
import {UIText} from 'wix-ui-backoffice/UIText';

const skinOptions = Object.keys(SKINS).map(value => Autocomplete.createOption({id: value, value}));
const sizeOptions = Object.keys(SIZES).map(value => Autocomplete.createOption({id: value, value}));

class ControlledToggleSwitchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skin: SKINS.standard,
      size: SIZES.large,
      checked: false,
      disabled: false
    };
  }
  render() {
    return (
      <div className={style.container}>
        <div style={{width: '300px'}}>
          <Heading> Props </Heading><br/><br/><br/>

          <Heading appearance="H2">size: </Heading> <Autocomplete options={sizeOptions} onSelect={({value}) => this.setState({size: value})} initialSelectedId={this.state.size}/><br/><br/>
          <Heading appearance="H2">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
          <Heading appearance="H2">checked: </Heading> <ToggleSwitch size="small" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/><br/><br/>
          <Heading appearance="H2">disabled: </Heading> <ToggleSwitch size="small" checked={this.state.disabled} onChange={() => this.setState({disabled: !this.state.disabled})}/><br/><br/>
          <Heading appearance="H2">tabIndex: </Heading> <UIText appearance="T2.4">Tab Index</UIText><br/><br/>
          <Heading appearance="H2">onChange: </Heading> <UIText appearance="T2.4">Callback function when User changes the value of the component</UIText><br/><br/>
          <Heading appearance="H2">id: </Heading> <UIText appearance="T2.4">The ID attribute to put on the toggle</UIText><br/><br/>
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <ToggleSwitch
            size={this.state.size}
            skin={this.state.skin}
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={() => this.setState({checked: !this.state.checked})}
            dataHook="storybook-toggleswitch"
            />
        </div>
      </div>
    );
  }
}

export default () => <ControlledToggleSwitchExample/>;
