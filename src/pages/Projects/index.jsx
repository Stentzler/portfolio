import { MdSearch } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import ProjectItem from '../../components/ProjectItem';
import { ProjectStyles } from './styles';
import ProjectInfo from '../../assets/data/projects';
import Projetos from '../../assets/data/projetos';
import { LanguageContext } from '../../providers/language';

function Projects() {
  const { language } = useContext(LanguageContext);

  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(
    language ? Projetos : ProjectInfo
  );

  useEffect(() => {
    if (language) {
      setProjectData(Projetos);
    } else {
      setProjectData(ProjectInfo);
    }
  }, [language]);

  useEffect(() => {
    if (searchText !== '' && !language) {
      setProjectData(() =>
        ProjectInfo.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        )
      );
    }

    if (searchText !== '' && language) {
      setProjectData(() =>
        Projetos.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        )
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  function handleChange(e) {
    setSearchText(e.target.value);

    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle
          heading={language ? 'Projetos' : 'Projects'}
          subheading={language ? 'Trabalhos recentes' : 'My recent works'}
        />
        <div className="projects__searchBar">
          <div className="form">
            <input
              type="text"
              placeholder={language ? 'Nome do Projeto' : 'Project Name'}
              value={searchText}
              onChange={handleChange}
            />
            <MdSearch className="searchIcon" />
          </div>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
              repo={item.repo}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}

export default Projects;
