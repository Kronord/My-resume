import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Education from './Education/Education';
import SoftSkills from './SoftSkills/SoftSkills';
import TechSkills from './TechSkills/TechSkills';
import WorkExperience from './WorkExperience/WorkExperience';
import Languages from './Languages/Languages';
import { Wrapper, AboutBox, ContactsBox } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <AboutBox>
        <AboutMe />
        <WorkExperience />
        <Education />
      </AboutBox>
      <ContactsBox>
        <Contacts />
        <SoftSkills />
        <TechSkills />
        <Languages />
      </ContactsBox>
    </Wrapper>
  );
};