import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        The Metaverse
      </SectionTitle>
      <SectionText>
        An immersive look into the lives of early adopters of the metaverse -- both real and virtual -- on their quest to create a new path to wealth.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.co.in'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;