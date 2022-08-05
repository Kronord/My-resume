import {AboutMe, AboutMeUA} from './AboutMe/AboutMe';
import {Contacts, ContactsUA} from './Contacts/Contacts';
import {Education, EducationUA} from './Education/Education';
import {SoftSkills, SoftSkillsUA} from './SoftSkills/SoftSkills';
import TechSkills from './TechSkills/TechSkills';
import {WorkExperience, WorkExperienceUA} from './WorkExperience/WorkExperience';
import {Languages, LanguagesUA} from './Languages/Languages';
import {Projects, ProjectsUA} from './Projects/Projects';
import Photo from './Photo/Photo';
import {AdditionalEducation, AdditionalEducationUA} from './Additional Education/AdditionalEducation';
import { Wrapper, AboutBox, ContactsBox } from './App.styled';

export const App = () => {
  return (
    <>
    <Wrapper bottom>
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
    <Wrapper>
      <ContactsBox>
        <Photo />
        <ContactsUA />
        <SoftSkillsUA />
        <TechSkills />
        <LanguagesUA />
      </ContactsBox>
      <AboutBox>
        <AboutMeUA />
        <ProjectsUA />
        <WorkExperienceUA />
        <EducationUA />
        <AdditionalEducationUA />
      </AboutBox>
    </Wrapper>
    </>
  );
};
