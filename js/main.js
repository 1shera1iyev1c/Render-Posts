let elTemplate = document.querySelector('#template').content;
let elContent = document.querySelector('.wrapper')
let elModalDiv = document.querySelector('.div-modal')

function renderPost(post) {
    let elFragment = document.createDocumentFragment()
    elContent.innerHTML = null

    post.forEach(item => {
        let template = elTemplate.cloneNode(true) 

        template.querySelector('.image').src = 'https://picsum.photos/300'
        template.querySelector('.link').src = `mailto:${item}`
        template.querySelector('.title').textContent = item.title
        template.querySelector('.text').textContent = item.body
        template.querySelector('.modal-btn').dataset.renderModal = item.id

        elFragment.appendChild(template)
    });
    elContent.appendChild(elFragment)
}

;(async function(){
    let responce = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    data = await responce.json()
     
    elContent.addEventListener('click', evt => {
        let moreInfoModal2 = evt.target.dataset.renderModal

        if (moreInfoModal2) {
            let findInfo = data.find( item => item.id == moreInfoModal2)

            elModalDiv.querySelector('.modal-title2').textContent = findInfo.name;
            elModalDiv.querySelector('.movie-text').textContent = findInfo.body;
       }
    })
})()


;(async function(){
    let responce = await fetch('https://jsonplaceholder.typicode.com/posts') 
    data = await responce.json()
    renderPost(data)
    console.log(data);
})()



