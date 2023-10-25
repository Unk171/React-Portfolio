export default function ProjectCard({ project }) {
  return (
    <div className="col-md-4 p-3">
    <div className="project-card">
      <div className="row">
        <div className="col-md-8 d-flex align-items-center ">
          <h3>{project.name}</h3>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <a href={project.link} className="github-link">GitHub</a>
        </div>
      </div>
      <a href={project.depLink} className="project-link">
        <img className="w-100" src={project.image} alt="" />
      </a>
    </div>
  </div>
  );
}
