export default function ProjectCard({ project }) {
  return (
    <div key={project.id} className="col-md-4">
    <div className="project-card">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h2>{project.name}</h2>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <a href={project.link} className="github-link">GitHub</a>
        </div>
      </div>
      <a href={project.depLink}>
        <img className="w-100" src={project.image} alt="" />
      </a>
    </div>
  </div>
  );
}
