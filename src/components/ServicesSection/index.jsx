import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import {
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDjango,
} from 'react-icons/si';
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
            description="Front-end"
          />
          <ServicesSectionItem
            icon={<IoLogoReact />}
            title="React"
            description="Front-end"
          />
          <ServicesSectionItem
            icon={<SiTypescript />}
            title="TS"
            description="Front-end"
          />
          {window.innerWidth > 768 && (
            <ServicesSectionItem
              icon={<SiNodedotjs />}
              title="Node.JS"
              description="Back-end"
            />
          )}

          {window.innerWidth > 768 && (
            <ServicesSectionItem
              icon={<SiPostgresql />}
              title="PostgreSQL"
              description="Back-end"
            />
          )}

          {window.innerWidth > 768 && (
            <ServicesSectionItem
              icon={<SiDjango />}
              title="Django framework"
              description="Back-end"
            />
          )}
        </div>
      </div>
    </ServicesItemStyles>
  );
}

export default ServicesSection;
