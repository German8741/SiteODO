// Объединенный и оптимизированный код для спонсоров
document.addEventListener('DOMContentLoaded', function() {
  class SponsorsManager {
    constructor() {
   this.sponsors = [
    { image: '/assets/images/sponsors/arabensk.png', alt: 'Sponsor 1' },
    { image: '/assets/images/sponsors/1.png', alt: 'Sponsor 2' },
    { image: '/assets/images/sponsors/2.png', alt: 'Sponsor 3' },
    { image: '/assets/images/sponsors/3.png', alt: 'Sponsor 4' },
    { image: '/assets/images/sponsors/4.png', alt: 'Sponsor 5' },
    { image: '/assets/images/sponsors/5.png', alt: 'Sponsor 6' },
    { image: '/assets/images/sponsors/6.png', alt: 'Sponsor 7' }
];
      this.trackElement = document.getElementById('sponsors-track');
      this.animation = null;
    }

    init() {
      this.renderSponsors();
      this.initAnimation();
    }

    renderSponsors() {
      let html = '';
      const sponsorsHTML = this.sponsors.map(sponsor => 
        `<div class="sponsor-item">
          <img src="${sponsor.image}" alt="${sponsor.alt}" class="sponsor-logo">
        </div>`
      ).join('');
      
      // Дублируем для бесшовной анимации
      this.trackElement.innerHTML = sponsorsHTML + sponsorsHTML;
    }

    initAnimation() {
      this.animation = this.trackElement.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-50%)' }
        ],
        {
          duration: 30000,
          iterations: Infinity
        }
      );

      // Останавливаем при наведении
      this.trackElement.addEventListener('mouseenter', () => {
        this.animation.pause();
      });

      // Возобновляем при уходе курсора
      this.trackElement.addEventListener('mouseleave', () => {
        this.animation.play();
      });
    }

    addSponsor(sponsorData) {
      this.sponsors.push(sponsorData);
      this.renderSponsors();
    }

    removeSponsor(index) {
      this.sponsors.splice(index, 1);
      this.renderSponsors();
    }
  }

  // Инициализация
  const sponsorsSection = document.getElementById('sponsors-section');
  sponsorsSection.innerHTML = `
    <div class="sponsors-container">
      <div class="sponsors-track" id="sponsors-track"></div>
    </div>
  `;

  const sponsorsManager = new SponsorsManager();
  sponsorsManager.init();
});