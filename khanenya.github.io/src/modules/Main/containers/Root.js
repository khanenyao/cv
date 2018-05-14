import React from 'react';
import School from 'material-ui/svg-icons/social/school';

import Header from '../../../components/Header';
import Body from '../../../components/Body';
import Section from '../../../components/Section';

import Education from '../components/Education';

const styles = {
  section: {
    maxWidth: 500,
  },
  iconE: {
    fontSize: 26, 
  },
};

const Root = () => (
    <div>
      <Header />
      <Body title={'Orest Khanenya'}>
        <Section label={'Education'} style={styles.section} icon={<School style={styles.iconE} />}>
          <Education
            date={'2013 - 2017'}
            school={'University of Pardubice, Pardubice'}
            faculty={'Faculty of Electrical Engineering and Informatics'}
            degree={'Bachelor of Information Technology'}
            workName={'Design and implementation of an application for localization of rolling stock using Raspberry Pi and a web service.'}
            workUrl={'https://dk.upce.cz/handle/10195/68089'}
          />
          <Education
            date={'2012 - 2013'}
            school={'Charles University in Prague'}
            faculty={'Institute for Language and Preparatory Studies'}
            degree={'Full Year Czech Course, B2 Level'}
          />
        </Section>
      </Body>
    </div>
);

export default Root;
