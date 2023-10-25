import avatar from '../components/images/avatar.png'

export default function About() {
  return (
    <div className="row">
      <div className="col-md-4 ">
      <img src={avatar} alt="avatar" width="90%"/>
      </div>
      <div className="col-md-8">
        .<h2>About Me</h2>
        <p>
          Hello, and welcome to my web developer portfolio! My name is Dmitry,
          and I'm thrilled to have you here.
        </p>
        <h3>Who Am I?</h3>
        <p>
          I am a passionate beginner in the world of web development. I've
          always been captivated by the way technology can shape our world, and
          that curiosity led me to embark on this exciting journey in web
          development. Every day, I am learning, growing, and exploring new
          possibilities in this ever-evolving field.
        </p>
        <h3>My Journey</h3>
        <p>
          My web development journey began with the simple desire to create
          something unique, something that could make a difference, no matter
          how small. With dedication and a lot of late-night coding sessions,
          I've honed my skills in front-end technologies like HTML, CSS, and
          JavaScript. I'm also delving into the world of back-end development
          and databases, eager to master the tools that power the internet.
        </p>
        <h3>Why Web Development?</h3>
        <p>
          I'm drawn to web development because it's not just about writing code.
          It's about solving problems and bringing ideas to life. The web is a
          canvas for creativity and innovation, and I'm excited to contribute my
          part to it. I believe that every website or web application I create
          has the potential to make someone's life a little easier, more
          enjoyable, or more informative.
        </p>
        <h3>What I Love</h3>
        <p>
          Apart from coding, I have a deep appreciation for user experience (UX)
          and design. I believe that great functionality should go hand-in-hand
          with aesthetics. I'm also passionate about open-source projects and
          the spirit of collaboration that thrives in the developer community.
        </p>
        <h3>Let's Connect</h3>
        <p>
          I'm always eager to learn, collaborate, and take on new challenges.
          Whether you're a fellow developer, a potential client, or someone who
          simply shares the love for technology, I'd love to connect with you.
          Feel free to explore my portfolio, check out my projects, and don't
          hesitate to reach out. Let's build something amazing together!
        </p>
        <p>
          Thank you for visiting my portfolio, and I look forward to our journey
          together in the ever-evolving world of web development.
        </p>
      </div>
    </div>
  );
}
