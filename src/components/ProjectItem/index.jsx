import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/projectImg.png';
import { ProjectItemStyles } from './styles';

function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni!',
  link,
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__Img">
        <img src={img} alt="project_Image" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="projectButton"
          >
            Open Project
          </a>
        )}
      </div>
    </ProjectItemStyles>
  );
}

export default ProjectItem;
