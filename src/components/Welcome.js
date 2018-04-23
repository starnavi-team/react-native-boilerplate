// @flow

import * as React from 'react';
import {
  Screen, NavigationBar, Title, View, Subtitle, Divider, ListView,
} from '@shoutem/ui';
import { connect } from 'react-redux';

import { getData } from '../actions';

type Props = {
    getData: () => void,
    technologies: Array<string>
};

class Welcome extends React.Component<Props> {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  renderRow = (technology: string) => (
    <View>
      <Subtitle style={{
        textAlign: 'center', paddingTop: 10, paddingBottom: 10, color: '#424242',
      }}
      >
        {technology}
      </Subtitle>
      <Divider styleName="line" />
    </View>
  );

  render() {
    const { technologies } = this.props;
    return (
      <Screen>
        <NavigationBar
          styleName="inline"
          title="HOME"
        />
        <Title style={{ textAlign: 'center', paddingTop: 15, paddingBottom: 15 }}>
            This boilerplate includes
        </Title>
        {
           technologies && (
           <ListView
             data={technologies}
             renderRow={this.renderRow}
           />
           )
        }
        <Title style={{ textAlign: 'center', paddingTop: 10, paddingBottom: 20 }}>
            Have fun!
        </Title>
      </Screen>
    );
  }
}


type State = {
    data: {
        technologies: Array<string>
    }
};

const mapStateToProps = (state: State) => state.data;

export default connect(mapStateToProps, { getData })(Welcome);
