import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, LinkedItem } from "./HeroStyles";

let site = "HolderDesigns";
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of {site} is to showcase valuable design and development practices to assist with modern business problems.
          Let's take your project to the next level and build something awesome.
        </SectionText>
<LinkedItem>
        <Button onClick="location.href='location.href='mailto:christopher@holdersolutions.us';">Learn More</Button>
</LinkedItem>     
</LeftSection>
    </Section>
  </>
);

export default Hero;
