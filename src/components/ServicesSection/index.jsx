import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
} from 'react-icons/io5';
import { SiTailwindcss, SiRedux } from 'react-icons/si';
import { useContext } from 'react';
import SectionTitle from '../SectionTitle';
import ServicesSectionItem from '../ServicesSectionItem';
import { ServicesItemStyles } from './styles';
import { LanguageContext } from '../../providers/language';

function ServicesSection() {
  const { language } = useContext(LanguageContext);

  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="Skills"
          subheading={language ? 'Algumas de minhas...' : 'Some of my...'}
        />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<IoLogoJavascript />}
            title="JS"
            description="JavaScript developer"
          />
          <ServicesSectionItem
            icon={<IoLogoReact />}
            title="React"
            description="React developer"
          />
          <ServicesSectionItem
            icon={<SiRedux />}
            title="Redux"
            description="Redux"
          />
          {window.innerWidth > 768 && (
            <ServicesSectionItem
              icon={<IoLogoHtml5 />}
              title="HTML"
              description="HTML"
            />
          )}

          {window.innerWidth > 768 && (
            <ServicesSectionItem
              icon={<IoLogoCss3 />}
              title="CSS"
              description="CSS"
            />
          )}

          {window.innerWidth > 768 && (
            <ServicesSectionItem
              icon={<SiTailwindcss />}
              title="Tailwind CSS"
              description="Tailwind CSS"
            />
          )}
        </div>
      </div>
    </ServicesItemStyles>
  );
}

export default ServicesSection;
