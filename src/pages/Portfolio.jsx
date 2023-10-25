import {projects} from '../Data/Projects'
import ProjectCard from '../components/cards/ProjectCard'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
        <div className="row">
         {projects.map(project => <ProjectCard key={project.id} project = {project} />)}
        </div>
      </div>
    </div>
  );
}
