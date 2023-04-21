const btnImg = document.querySelectorAll('#btnImg');
const modal = document.querySelector('.modal');
const closeBtnModal = document.querySelector('#closeBtn')
const slideImg = document.querySelectorAll('#slideImg')

const btnArray = [...btnImg];




btnArray.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(i);
        modal.classList.remove('hidden');
        modal.classList.add('visible');

        if (i === 0) {
            slideImg.forEach((img,index)=>{
                img.setAttribute('src', `/src/assets/img/Naruto-slide${index}.webp`)
            })
        }

        if(i === 1){
            slideImg.forEach((img,index)=>{
                img.setAttribute('src', `/src/assets/img/Sasuke-slide${index}.webp`)
            })
        }
        
        if(i === 2){
            slideImg.forEach((img,index)=>{
                img.setAttribute('src', `/src/assets/img/Kakashi-slide${index}.webp`)
            })
        }

        if(i === 3){
            slideImg.forEach((img,index)=>{
                img.setAttribute('src', `/src/assets/img/Sakura-slide${index}.webp`)
            })
        }
    })
})



closeBtnModal.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})