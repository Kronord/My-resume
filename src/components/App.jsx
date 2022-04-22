import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Education from './Education/Education';
import SoftSkills from './SoftSkills/SoftSkills';
import TechSkills from './TechSkills/TechSkills';
import WorkExperience from './WorkExperience/WorkExperience';
import Languages from './Languages/Languages';
import Projects from './Projects/Projects';
import Photo from './Photo/Photo';
import AdditionalEducation from './Additional Education/AdditionalEducation';
import { Wrapper, AboutBox, ContactsBox } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <ContactsBox>
        <Photo />
        <Contacts />
        <SoftSkills />
        <TechSkills />
        <Languages />
      </ContactsBox>
      <AboutBox>
        <AboutMe />
        <Projects />
        <WorkExperience />
        <Education />
        <AdditionalEducation />
      </AboutBox>
    </Wrapper>
  );
};
