score=0;
cross=true;

 audiogo =new Audio('shinchan_ooh.mp3')
music =new Audio('mario.mp3')
 
         

var qq=document.onkeydown=function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==32){
        music.play();
       
        shinchan=document.querySelector('.shinchan')
        shinchan.classList.add('animateshin');
        setTimeout(() => {
            shinchan.classList.remove('animateshin')
            
        }, 700);
    }
    if(e.keyCode==39){
       
        shinchan=document.querySelector('.shinchan')
        shinx=parseInt(window.getComputedStyle(shinchan,null).getPropertyValue('left'));
        shinchan.style.left= shinx+112+"px";
        if(shinx>1800){
            shinchan.style.left=0
        }
      
    }
    if(e.keyCode==37){
        
        shinchan=document.querySelector('.shinchan')
        shiny=parseInt(window.getComputedStyle(shinchan,null).getPropertyValue('left'));
        shinchan.style.left= shiny-112+"px";
        if(shiny<(-900)){
            shinchan.style.left=900;
        }
        console.log(shiny);
    }

}

var sx=setInterval(()=>{
    shinchan=document.querySelector('.shinchan');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(shinchan,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(shinchan,null).getPropertyValue('bottom'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));
// console.log(dx);
// console.log(ox);
//     offsetx=Math.abs(ox-dx);
//     offsety=Math.abs(oy-dy);
//     console.log()

//     if(offsetx<93 && offsety<52){
//         gameover.style.visiblity='visible';
//         obstacle.classList.remove('obstacleani');
//     }
 console.log(dx);
 console.log(dy);
  console.log(ox);
 console.log(oy);
 

   w2=parseInt('150px');
   
   w1=parseInt('100px');
   h1=parseInt('100px');
   h2=parseInt('100px');


    if(dx<ox+w2 && dx+w1>ox && dy<oy+h2 && dy+h1>oy){
        gameover.style.visibility='visible';
        obstacle.classList.remove('obstacleani');
        clearInterval(sx);
    
        audiogo.play()
        music.pause()
    }
    else if(Math.abs(dx-ox)<100 && cross){
        score++;
        updatescore(score)
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1900);
        setTimeout(()=>{
          
        anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newdur=anidur-0.1;
        obstacle.style.animationDuration=newdur+'s'

         },500 );
        




    }

},10);

function updatescore(score){
    scorecont.innerHTML="Your Score : "+score
}