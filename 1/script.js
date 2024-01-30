let header = document.querySelector('header');
let li = document.querySelectorAll('li');
let button = document.querySelector('button');
let video =  document.querySelector('video');


li.forEach(function(item,index){
    item.addEventListener('click',() =>{
        console.log(item,index);
        li.forEach(function(item){
            item.classList.remove('active');
        });
        item.classList.add('active');
        button.classList.remove('active');
        video.src = `video/${index}.mp4`;
        
        

    })
});

button.addEventListener('click', function() {
    button.classList.toggle('active');
    if(button.classList.contains('active')){
        button.style.opacity ='0.1';
        header.style.opacity='0';

        video.play();
        video.classList.add('active');
        console.log(video.duration);
        video.style.animationDuration=`${video.duration}s`;
    } else{
        button.style.opacity='1';
        header.style.opacity='1';

        video.pause();
        video.currentTime = 0;
    }


})