import React from 'react';
import { 
  Header,
  SkillsText,
  SkillsContainer,
} from './home.styles';

const Layout = () => {
  return (
    <Header>
      <br/>
      <p>vvyn</p>
      <p> Expirence Projects Skills Resume Contact</p>
      <br/>
      <br/>
      <p>Hi, my name is</p>
      <h1>Victoria Vynnychok</h1>
      <p>I'm a CS student at UT Dallas with frontend website and app development expirence.</p>
      <br/>
      Expirence
      <ul>
        <li>Above & Beyond Studios Inc.</li>
      </ul>
      <br/>
      Projects
      <ul>
        <li>PawMatch</li>
        <li>EJS Project</li>
        <li>portfolio code</li>
      </ul>
      <br/>
      Skills
      <SkillsContainer>
        <ul>
          <SkillsText>languages: JS, Java, C++, HTML, CSS</SkillsText>
          <SkillsText>tools: React, React Native, Bootstrap, Git</SkillsText>
          <SkillsText>some exposure to: SQL, EJS, NodeJS, ExpressJS, Python</SkillsText>
        </ul>
    </SkillsContainer>
      <br/>
      Resume
      <ul>
        <li>Please contact me for my resume</li>
      </ul>
      <br/>
      Contact
      <ul>
        <li>Email</li>
        <li>Linkedin</li>
        <li>Github</li>
      </ul>
      <br/>
    </Header>
  );
};
  
export default Layout;
