
fetch('games.json')
  .then(resp => resp.json())
  .then(data => {
    const container = document.getElementById('game-list');
    data.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="card-content">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
          <a href="${game.download}" target="_blank">تحميل من MediaFire</a>
        </div>`;
      container.appendChild(card);
    });
  });
