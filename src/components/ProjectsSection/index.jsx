import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useContext } from 'react';
import SectionTitle from '../SectionTitle';
import projects from '../../assets/data/projects';
import projetos from '../../assets/data/projetos';
import ProjectItem from '../ProjectItem';
import { ProjectSectionStyle } from './styles';
import 'swiper/swiper-bundle.min.css';
import { LanguageContext } from '../../providers/language';

SwiperCore.use([Navigation]);

function ProjectsSection() {
  const { language } = useContext(LanguageContext);

  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle
          heading={language ? 'Projetos' : 'Projects'}
          subheading={
            language ? 'Trabalhos recentes...' : 'Some of my recent works'
          }
        />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // untill 640px
              640: {
                slidesPerView: 1,
              },
              // over 768px
              768: {
                slidesPerView: 2,
              },
              // over 1268px
              1268: {
                slidesPerView: 3,
              },
            }}
          >
            {language &&
              projetos.map((project, index) => {
                if (index >= 8) return;
                return (
                  <SwiperSlide key={project.id}>
                    <ProjectItem
                      title={project.name}
                      img={project.img}
                      desc={project.desc}
                      link={project.link}
                      repo={project.repo}
                    />
                  </SwiperSlide>
                );
              })}
            {!language &&
              projects.map((project, index) => {
                if (index >= 8) return;
                return (
                  <SwiperSlide key={project.id}>
                    <ProjectItem
                      title={project.name}
                      img={project.img}
                      desc={project.desc}
                      link={project.link}
                      repo={project.repo}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}

export default ProjectsSection;
