const zalyData = [
    {
        imageUrl: '/assets/images/halls/1concert_hall.jpg',
        title: 'Концертный зал',
        area: '700',
        capacity: 'до 800 человек',
        link: 'koncertniy.html',
        minArea: 700
    },
    {
        imageUrl: '/assets/images/halls/2foye1.jpg',
        title: 'Фойе концертного зала',
        area: '290',
        capacity: 'до 400 человек',
        link: 'Foye.html',
        minArea: 500
    },
    {
        imageUrl: '/assets/images/halls/3zhykovskiy1.jpg',
        title: 'Жуковский зал',
        area: '120',
        capacity: 'до 80 человек',
        link: 'zhucovskiy.html',
        minArea: 300
    },
    {
        imageUrl: '/assets/images/halls/4small1.jpg',
        title: 'Арт-Холл «Малый зал»',
        area: '240',
        capacity: 'до 220 человек',
        link: 'maliy.html',
        minArea: 200
    },
    {
        imageUrl: '/assets/images/halls/5ballada1.jpg',
        title: 'Гусарская баллада',
        area: '60',
        capacity: 'до 50 человек',
        link: 'ballada.html',
        minArea: 150
    }
];

// Функция для рендеринга карточек залов
function renderZalyCards(minArea = 0) {
    const zalyContainer = document.getElementById('zaly-cards');
    if (!zalyContainer) return;

    zalyContainer.innerHTML = ''; // Очищаем текущие карточки
    const filteredZaly = zalyData.filter(zal => zal.minArea >= minArea);

    filteredZaly.forEach(zal => {
        const card = document.createElement('a');
        card.className = 'zaly-card';
        card.href = zal.link;
        card.innerHTML = `
            <div class="zaly-image" style="background-image: url(${zal.imageUrl})"></div>
            <div class="zaly-info">
                <div class="zaly-title">${zal.title}</div>
                <div class="zaly-details">
                    <div class="area">
                        <span class="number">${zal.area}</span>
                        <span class="unit">
                            <span class="meter">м</span>
                            <span class="square">²</span>
                        </span>
                    </div>
                    <div class="zaly-details-dot"></div>
                    <div class="capacity">${zal.capacity}</div>
                </div>
            </div>
        `;
        zalyContainer.appendChild(card);
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderZalyCards();
});