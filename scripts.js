const modal = document.querySelector('.modal_overlay')

document.querySelector(".modal-close").addEventListener('click',function(){
    modal.classList.remove('active')
})

const curses = document.querySelectorAll('.curse');

for (let curse of curses) {
    curse.addEventListener('click',function(){
        modal.classList.add('active')
    })
}
