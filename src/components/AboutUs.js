import React from 'react';
import {
  NavigationBar, Title, Screen, Button, Subtitle,
} from '@shoutem/ui';
import Icon from 'react-native-vector-icons/Entypo';
import { Link } from '../common';


const AboutUs = () => (
  <Screen>
    <NavigationBar
      styleName="inline"
      title="ABOUT US"
      rightComponent={(
        <Link href="https://github.com/starnavi-team" component={Button}>
          <Icon name="github" size={26} color="#424242" />
        </Link>
            )}
    />
    <Screen style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Title style={{ textAlign: 'center', paddingTop: 15, fontSize: 30 }}>
                We are Starnavi
      </Title>
      <Subtitle style={{ textAlign: 'center', paddingTop: 25, fontSize: 26 }}>
                With
        {' '}
        <Icon name="heart" size={26} color="#F44336" />
        {' '}
                to
        {' '}
        <Icon name="code" size={26} color="#2AC5EE" />
      </Subtitle>
    </Screen>
  </Screen>
);

export default AboutUs;
