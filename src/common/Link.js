/* eslint-disable no-unused-expressions */
// @flow
import * as React from 'react';
import { Linking } from 'react-native';

type Props = {
    href: string,
    onPress?: () => void,
    children?: React.Node,
    component: Class<React$Component<*, *>>
};

class Link extends React.Component<Props> {
    handlePress = () => {
      const { href, onPress } = this.props;
      Linking.openURL(href);
      onPress && onPress();
    };

    render() {
      const { component: Component, children } = this.props;
      return (
        <Component {...this.props} onPress={this.handlePress}>
          {children}
        </Component>
      );
    }
}

export { Link };
