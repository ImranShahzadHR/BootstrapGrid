const title=document.getElementById('title')
const bio=document.getElementById('bio')

// title.innerHTML="Ali Akmal"

title.style.backgroundColor="orange"

title.addEventListener('click',function(){
title.classList.add('name')   
})

bio.addEventListener('mouseover',function(){
  bio.classList.add('bio')
})
bio.addEventListener('mouseout',function(){
bio.classList.remove('bio')

  
})