const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id =='box1'){
            body.style.backgroundColor ='#F28585'
        }
        if(color.target.id =='box2'){
            body.style.backgroundColor ='#80BCBD'
        }
        if(color.target.id =='box3'){
            body.style.backgroundColor ='#FFFC9B'
        }
        if(color.target.id =='box4'){
            body.style.backgroundColor ='#FF004D'
        }
        if(color.target.id =='box5'){
            body.style.backgroundColor ='#BAD7E9'
        }
        
    })
})

