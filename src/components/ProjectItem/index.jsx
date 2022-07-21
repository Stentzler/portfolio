import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/projectImg.png';
import { ProjectItemStyles } from './styles';

function ProjectItem({
  img = ProjectItem,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni!',
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
      </div>
    </ProjectItemStyles>
  );
}

export default ProjectItem;
