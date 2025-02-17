export const templates = [
  {
    id: 1,
    name: "Classic",
    html: `
      <div class="container">
        <h1 class="mt-4">{{name}}</h1>
        <p>{{bio}}</p>
        <h3>Skills</h3>
        <ul>
          {{skills}}
        </ul>
        <h3>Projects</h3>
        <div>
          {{projects}}
        </div>
      </div>
    `,
  },
  {
    id: 2,
    name: "Modern",
    html: `
      <div class="container text-center">
        <header class="my-4">
          <h1>{{name}}</h1>
          <p class="lead">{{bio}}</p>
        </header>
        <section>
          <h4>Skills</h4>
          <div class="d-flex justify-content-center">
            {{skills}}
          </div>
        </section>
        <section class="mt-4">
          <h4>Projects</h4>
          <div>
            {{projects}}
          </div>
        </section>
      </div>
    `,
  },
  {
    id: 3,
    name: "Interactive Cards",
    html: `
      <div class="container">
        <header class="text-center my-4">
          <h1>{{name}}</h1>
          <p>{{bio}}</p>
        </header>
        <section class="my-4">
          <h3>Skills</h3>
          <div class="row">
            {{skills}}
          </div>
        </section>
        <section class="my-4">
          <h3>Projects</h3>
          <div class="row">
            {{projects}}
          </div>
        </section>
      </div>
      <style>
        .skill-card {
          transition: transform 0.3s;
          cursor: pointer;
          padding: 10px;
          margin: 5px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f8f9fa;
        }
        .skill-card:hover {
          transform: scale(1.1);
          background-color: #e9ecef;
        }
        .project-card {
          transition: box-shadow 0.3s;
          cursor: pointer;
        }
        .project-card:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
      </style>
    `,
  },
  {
    id: 4,
    name: "Interactive Navigation",
    html: `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
              <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container mt-4">
        <section id="about">
          <h1>{{name}}</h1>
          <p>{{bio}}</p>
        </section>
        <section id="skills" class="mt-4">
          <h3>Skills</h3>
          <div class="row">
            {{skills}}
          </div>
        </section>
        <section id="projects" class="mt-4">
          <h3>Projects</h3>
          <div class="row">
            {{projects}}
          </div>
        </section>
        <section id="contact" class="mt-4">
          <h3>Contact</h3>
          <p>{{socialLinks}}</p>
        </section>
      </div>
      <style>
        a.nav-link {
          cursor: pointer;
        }
      </style>
    `,
  },
  {
    id: 5,
    name: "Minimalistic Hero",
    html: `
      <div class="container text-center">
        <header class="hero-section py-5">
          <h1 class="display-4">{{name}}</h1>
          <p class="lead">{{bio}}</p>
        </header>
        <section>
          <h4 class="mt-4">Skills</h4>
          <div class="d-flex flex-wrap justify-content-center">
            {{skills}}
          </div>
        </section>
        <section class="mt-5">
          <h4>Projects</h4>
          <div class="row">
            {{projects}}
          </div>
        </section>
      </div>
      <style>
        .hero-section {
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          color: white;
          padding: 60px 20px;
          border-radius: 10px;
        }
      </style>
    `,
  },
  {
    id: 6,
    name: "Grid-Based Portfolio",
    html: `
      <div class="container">
        <header class="text-center my-5">
          <h1>{{name}}</h1>
          <p>{{bio}}</p>
        </header>
        <section>
          <h3 class="text-center">Skills</h3>
          <div class="row">
            {{skills}}
          </div>
        </section>
        <section class="mt-5">
          <h3 class="text-center">Projects</h3>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {{projects}}
          </div>
        </section>
      </div>
      <style>
        .row-cols-md-2 > div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
      </style>
    `,
  },
  {
    id: 7,
    name: "Dark Mode Professional",
    html: `
      <div class="container text-light bg-dark p-5 rounded">
        <header class="text-center">
          <h1>{{name}}</h1>
          <p>{{bio}}</p>
        </header>
        <section class="mt-4">
          <h3>Skills</h3>
          <div class="row">
            {{skills}}
          </div>
        </section>
        <section class="mt-4">
          <h3>Projects</h3>
          <div class="row">
            {{projects}}
          </div>
        </section>
      </div>
      <style>
        .container {
          background-color: #222;
          border-radius: 10px;
          padding: 20px;
        }
      </style>
    `,
  },
  {
    id: 8,
    name: "Animated Showcase",
    html: `
      <div class="container">
        <header class="text-center my-4">
          <h1 class="fade-in">{{name}}</h1>
          <p class="fade-in">{{bio}}</p>
        </header>
        <section class="mt-4">
          <h3>Skills</h3>
          <div class="row">
            {{skills}}
          </div>
        </section>
        <section class="mt-4">
          <h3>Projects</h3>
          <div class="row">
            {{projects}}
          </div>
        </section>
      </div>
      <style>
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.5s ease-in forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      </style>
    `,
  },
];
