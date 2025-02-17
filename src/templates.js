
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
];
