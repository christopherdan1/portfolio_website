import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillDribbbleCircle } from 'react-icons/ai';
import {FaFigma} from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/christopherdan1/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://dribbble.com/christopherDan1">
          <AiFillDribbbleCircle size="3rem" />
        </SocialIcons>
         <SocialIcons href="https://figma.com/@chrish1">
          <FaFigma size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
