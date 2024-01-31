document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card-wrapper .cards .card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('card-burst');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let currentBurstCard = null;
    document.querySelectorAll('.card-wrapper .cards .card').forEach(card => {
        card.addEventListener('click', () => {
            if (currentBurstCard) {
                currentBurstCard.classList.remove('card-burst');
                currentBurstCard.classList.add('card-popin');
                setTimeout(() => currentBurstCard.classList.remove('card-popin'), 200);
            }
            if (currentBurstCard !== card) {
                card.classList.add('card-burst');
                currentBurstCard = card;
                setTimeout(() => {
                    document.body.style.backgroundImage = `url(${card.dataset.bg})`;
                }, 600); 
            } else {
                currentBurstCard = null;
                setTimeout(() => {
                    document.body.style.backgroundImage = '';
                }, 600); 
            }
        });
    });
});
