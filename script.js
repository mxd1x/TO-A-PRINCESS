document.getElementById('proposalButton').addEventListener('click', function() {
    document.getElementById('proposalMessage').classList.remove('hidden');
    this.disabled = true;

    // Create butterflies
    for (let i = 0; i < 5; i++) {
        createButterfly();
    }
});

function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.style.left = `${Math.random() * window.innerWidth}px`;
    butterfly.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(butterfly);
}
