const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5 ">
        <a
          href="https://github.com/Unk171"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dmitry-rogovoy-b20473298/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link mx-5"
        >
          <i className="fab fa-github"></i> LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users/22801728/dmitry-rogovoy"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <i className="fab fa-github"></i> Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
