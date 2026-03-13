# Defligration arrestors
* Learning to code and help engineers build something that could save a life


### Authorship & Attribution
*   **Developer:** Eric Staggs
*   **Resources:** MDN Web Docs, Bootstrap 5.0 Documentation, W3School,YouTube
*   **Libraries/Assets:** Google Fonts (Roboto), FontAwesome Icons, Bootstrap CSS/JS, vsCode,

> "Precisioin is the art of saying what matters- and nothing more."

---

### User Story
**As a** busy college student,  
**I want** get a place to start to organize data for the "Big Idea" and allow others to view it,  
**so that** we can create something that may save lives and companies money in the future with this project.

---

### Links & Verification
*   **Repository:** https://github.com/ericlstaggs/ericslearningrepo.git
*   **Live Deployment:** https://ericlstaggs.github.io/ericslearningrepo
*   **Design Evidence:** https://github.com/ericlstaggs/ericslearningrepo.git
*   **Verification Note:** This application has been tested and verified for responsiveness on **Mobile (iOS/Android Chrome)** and **Desktop (Chrome/Safari)**. All accessibility best practices (alt text, labels, and contrast) have been implemented.

---

### Model & Inspiration Evidence
<img width="1888" height="801" alt="dribble-screen-shot" src="https://github.com/user-attachments/assets/6b55a50c-6995-4b13-ab41-3591589f327f" />

https://github.com/ericlstaggs/ericslearningrepo/wiki

**Inspiration Source:** Dribble  
**Analysis:** I modeled my grid layout/navigation bar after this site because of its clean hierarchy. i didn't really copy any code I just trie to keep it simple and potentially business like. 

---

### Code Block & Explanation
* this is the toolbar and all the reference to each page
```html
// Example of the toobar
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://github.com/" target="_blank">

        <i class="bi bi-robot"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.youtube.com/watch?v=QZ7fIsUrkeE" target="_blank">Video</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Biographies
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="../pages/nick-german.html">Nick German</a></li>
              <li><a class="dropdown-item" href="../pages/shelby-stanly.html">Shelby Stanly</a></li>
              <li><a class="dropdown-item" href="../pages/eric-staggs.html">Eric Staggs</a></li>
            </ul>
          </li>
          <li class="about">
            <a class="nav-link" href="../pages/about.html">About</a>
          </li>
          <li class="navTemplate">
            <a class="nav-link" href="../pages/content.html">Content</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
            <a class="nav-link" href="../pages/author.html">Author</a>
          </li>
        </ul>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>












