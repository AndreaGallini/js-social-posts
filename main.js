const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
const container = document.getElementById('container');
const arrayNomi = posts.map((val)=> {
    return val.author
});

let arrayLike =[];
posts.forEach(function(value,index){
    let date =value.created;
    date = date.split("-").reverse().join("-");
    let post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${value.author.image}" alt="${value.author.name}">              
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${value.author.name}</div>
            <div class="post-meta__time">${date}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${value.content}</div>
<div class="post__image">
    <img src="${value.media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a  class="like-button  js-like-button"  data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${value.id}"   class="js-likes-counter ">${value.likes}</b> persone
        </div>
    </div> 
</div>`;
container.append(post)
//console.log(value,index)

})
let likeCounterHTML = document.querySelectorAll('.js-likes-counter');
//console.log(likeCounterHTML)

let likeCounterArray = Array.from(likeCounterHTML)
//console.log(likeCounterArray)
for(let x = 0 ; x < likeCounterArray.length; x++){
    let pLike = parseInt(likeCounterArray[x].innerHTML);
  //  console.log(pLike)
}



let check = false
let likeBtns = document.querySelectorAll('a');
let likesBtn = Array.from(likeBtns);

//console.log(likesBtn)

for(let i = 0; i < likesBtn.length; i++){
   // console.log(likesBtn[i])
    likesBtn[i].addEventListener('click', function(){
    if(!arrayLike.includes(likesBtn[i])){
          arrayLike.push(likesBtn[i])
         likesBtn[i].classList.add('like-button--liked')
         let likeCounterHTML = document.querySelector('.js-likes-counter');
        console.log(likeCounterHTML)
         

        


    }else{
        console.log('Già incluso')
        likesBtn[i].classList.toggle('like-button--liked')


    }
 } )
}



