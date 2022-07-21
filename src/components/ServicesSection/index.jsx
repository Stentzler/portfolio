import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
} from 'react-icons/io5';
import { SiTailwindcss, SiRedux } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import ServicesSectionItem from '../ServicesSectionItem';
import { ServicesItemStyles } from './styles';

function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Skills" subheading="What are my..." />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<IoLogoJavascript />}
            title="Java Script"
            description="javaScript developer"
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
          <ServicesSectionItem
            icon={<IoLogoHtml5 />}
            title="HTML"
            description="HTML"
          />
          <ServicesSectionItem
            icon={<IoLogoCss3 />}
            title="CSS"
            description="CSS"
          />
          <ServicesSectionItem
            icon={<SiTailwindcss />}
            title="Tailwind CSS"
            description="Tailwind CSS"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}

export default ServicesSection;
