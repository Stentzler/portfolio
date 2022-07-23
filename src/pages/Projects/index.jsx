import { MdSearch } from 'react-icons/md';
import { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import ProjectItem from '../../components/ProjectItem';
import { ProjectStyles } from './styles';
import ProjectInfo from '../../assets/data/projects';

function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText !== '') {
      setProjectData(() =>
        ProjectInfo.filter((item) =>
          item.name.toLowerCase().match(searchText.toLowerCase())
        )
      );
    }
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
        <SectionTitle heading="Projects" subheading="My recent works" />
        <div className="projects__searchBar">
          <div className="form">
            <input
              type="text"
              placeholder="Project Name"
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
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}

export default Projects;
