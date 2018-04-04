import React from 'react';
import {Container, Row, Col, Card} from '../../src/Grid';
import styles from './ExampleGrid.scss';

import TextField from '../../src/TextField';
import Input from '../../src/Input';
import Label from '../../src/Label';
import Badge from '../../src/Badge';
import Button from '../../src/Button';

function renderStandardInput() {
  return (
    <TextField>
      <Label for="textField">Text Field</Label>
      <Input id="textField" placeholder="Default text goes"/>
    </TextField>
  );
}

export default () => {
  return (
    <div data-hook="card-example" className={styles.exampleContainer}>
      <Container>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={6}>
                <Card>
                  <Card.CollapsedHeader title="Card with collapsed header">
                    <Card.Content>
                      <Row>
                        <Col span={12}>{renderStandardInput()}</Col>
                      </Row>
                    </Card.Content>
                  </Card.CollapsedHeader>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Card.CollapsedHeader
                    title="Card with collapsed header"
                    subtitle="and subtitle"
                    toggleStyle="button"
                    >
                    <Card.Content>
                      <Row>
                        <Col span={6}>{renderStandardInput()}</Col>
                      </Row>
                    </Card.Content>
                  </Card.CollapsedHeader>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Card>
                  <Card.CollapsedHeader
                    title="Card with collapsed header"
                    subtitle="and subtitle, no divider"
                    withoutDivider
                    >
                    <Card.Content>
                      <Row>
                        <Col span={12}>{renderStandardInput()}</Col>
                      </Row>
                    </Card.Content>
                  </Card.CollapsedHeader>
                </Card>
              </Col>
            </Row>
            <ControlledExample/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

class ControlledExample extends React.Component {
  state = {
    collapsed: false,
    toggled: false
  };

  onCollapsedChange() {
    this.setState({toggled: true});
    setTimeout(() => this.setState({toggled: false}), 500);
  }

  render() {
    const {collapsed} = this.state;
    return (
      <Row>
        <Col span={8}>
          <Card>
            <Card.CollapsedHeader
              collapsed={collapsed}
              controlled
              title="Card with controlled collapsed header"
              onCollapsedChange={() => this.onCollapsedChange()}
              >
              <Card.Content>
                <Row>
                  <Col span={12}>{renderStandardInput()}</Col>
                </Row>
              </Card.Content>
            </Card.CollapsedHeader>
          </Card>
        </Col>
        <Col span={4}>
          <Row>
            <Col span={6}>
              <Button
                onClick={() => this.setState(({collapsed}) => ({collapsed: !collapsed}))}
                height="large"
                theme={collapsed ? 'fullred' : 'fullblue'}
                >
                {collapsed ? 'Collapsed' : 'Open'}
              </Button>
            </Col>
            <Col span={2}>
              <Badge skin={this.state.toggled ? 'success' : 'standard'}>Toggled</Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
