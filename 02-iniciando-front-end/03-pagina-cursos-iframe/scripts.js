const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const pageId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`
    })
}

function closeModal() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
}

function maximizeModal() {
    const modal = document.querySelector('.modal')
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
        modal.querySelector('.maximize-modal').innerHTML = '<i class="material-icons">maximize</i>'
    } else {
        modal.classList.add('maximize')
        modal.querySelector('.maximize-modal').innerHTML = '<i class="material-icons">minimize</i>'
    }
}

document.querySelector('.close-modal').addEventListener('click', closeModal)
document.querySelector('.maximize-modal').addEventListener('click', maximizeModal)
//modalOverlay.addEventListener('click', closeModal)
