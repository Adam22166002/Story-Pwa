export default class AboutPage {
  async render() {
    return `
      <section class="container">
        <h1>About</h1>
        <div class="bg-white p-6 rounded-lg shadow">
          <div class="mb-6">
            <h2>Story Map App</h2>
            <p class="mt-3">
              Story Map adalah aplikasi untuk berbagi cerita dan pengalaman yang terkait dengan lokasi tertentu. 
              Aplikasi ini memungkinkan pengguna untuk:
            </p>
            <ul class="mt-4 feature-list">
              <li>
                <i class="fas fa-upload"></i>
                <div>
                  <h3>Upload Cerita</h3>
                  <p>Bagikan pengalaman Anda dengan deskripsi, foto, dan lokasi menggunakan peta interaktif.</p>
                </div>
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Jelajahi Peta</h3>
                  <p>Temukan cerita menarik dari lokasi di seluruh Indonesia melalui peta interaktif.</p>
                </div>
              </li>
              <li>
                <i class="fas fa-book-open"></i>
                <div>
                  <h3>Baca Cerita</h3>
                  <p>Baca cerita dan pengalaman dari pengguna lain untuk menambah wawasan Anda.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    const animateElements = () => {
      const featureItems = document.querySelectorAll(".feature-list li");
      const techItems = document.querySelectorAll(".tech-item");
      featureItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate-in");
        }, 100 * index);
      });
      techItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate-in");
        }, 100 * index);
      });
    };
    setTimeout(animateElements, 300);
    const style = document.createElement("style");
    style.textContent = `
      .feature-list {
        list-style: none;
        padding: 0;
      }

      .feature-list li {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding: 1rem;
        border-radius: 8px;
        background-color: #f8f9fa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }

      .feature-list li.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      .feature-list li i {
        font-size: 2rem;
        color: var(--primary-color);
        padding-top: 0.5rem;
      }

      .feature-list li h3 {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.5rem;
      }

      .tech-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 8px;
        background-color: #f8f9fa;
        min-width: 100px;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }

      .tech-item.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      .tech-item i {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        color: var(--primary-color);
      }

      .creator-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 600px;
        margin: 1.5rem auto;
        padding: 1.5rem;
        border-radius: 12px;
        background-color: #f8f9fa;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .creator-avatar {
        font-size: 5rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      .creator-info h3 {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
      }

      .creator-social {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1rem;
      }

      .creator-social a {
        font-size: 1.5rem;
        color: var(--dark-color);
        transition: color 0.3s ease;
      }

      .creator-social a:hover {
        color: var(--primary-color);
      }

      @media (min-width: 768px) {
        .creator-card {
          flex-direction: row;
          text-align: left;
          gap: 2rem;
        }
        
        .creator-social {
          justify-content: flex-start;
        }
      }
    `;
    document.head.appendChild(style);
  }
}
