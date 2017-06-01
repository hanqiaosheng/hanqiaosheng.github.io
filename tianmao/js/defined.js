$(function(){
	var win=$('.win')[0];
	var imgbox=$('.imgbox');
	var lis=$('li',imgbox[0]);
	var lunbo=$('.lunbo');
	var l=$('li',lunbo[0]);	
	let index=0;
	var t=setInterval(fn,2000);
	win.onmouseenter=function(){
		clearInterval(t);
	}
	win.onmouseleave=function(){
		t=setInterval(fn,2000);
	}
    // 点击操作
	for(let i=0;i<lis.length;i++){
		l[i].onclick=function(){
			for(let j=0;j<lis.length;j++){
			lis[j].style.display='none';
			l[j].className='';
		}
			lis[i].style.display='block';
			l[i].className='hot';
			index=i;
		}
	}

	function fn(){
		index++;
		if(index==l.length){
			index=0;
		}
		
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			l[i].className='';
		}
		
		lis[index].style.display='block';
		l[index].className='hot';
	}
// 美丽人生楼层
  let tans=document.querySelector('.tann')
    bian(tans)   
    function bian(obj){
    	for(let i=0;i<6;i++){
	let sg=obj.getElementsByClassName('sheng1',obj)
	let index=0;
	let time=setInterval(move,2000)
    function move(){
    	index++
    	if(index==sg.length){
    		index=0
    	}
    	for(let n=0;n<sg.length;n++){
           sg[n].style.display='none'
    	}
    	sg[index].style.display='block';
    }
}
}




// 直播楼层

    let yo=document.querySelector('.ha')
	let you=document.querySelectorAll('.youxia',yo);
	
	 let index2=0,next=0;
    let tim=setInterval(han,3000)
	function han(){
         index2++
         if(index2==you.length){
         	index2=0
         }
   
         for(let i=0;i<you.length;i++){
       
        you[i].style.display='none';

 }   
    
       you[index2].style.display='block'; 
}


 // let uili=$('.youxia')[0];
 // console.log(uili)
 // let diyige1=$('.ha')[0]
 // let diyige=$('.youxia');
 // let toss=diyige1.offsetHeight;
 // console.log(toss)
 // console.log(diyige)
 // let next1=0,csl=0;
 // let t5=setInterval(move8,2000);
 // function move8(){
 //  next1++;
 //  if(next1==diyige.length){
 //    next1=0;
 //  }
 //  diyige[next1].style.bottom=toss+'px';
 //  animate(diyige[csl],{bottom:-toss})
 //  animate(diyige[next1],{bottom:0})
 //  csl=next1;
 // }
 



  })







// 固定搜索框
window.onscroll=function(){
	let nav=document.querySelector('nav');
	// console.log(nav)
	let ch=window.innerHeight;
	let tops=document.body.scrollTop;
	let boo=document.querySelector('.zuo');
	if(tops>=648){
       // animate(nav,{top:0})
         nav.style.transform=`translateY(100px)`
         boo.style.opacity='1';
    }else if(tops<648){
     // animate(nav,{top:-100}) 
         nav.style.transform=`translateY(-100px)`
         boo.style.opacity='0';	
 }
// 左侧固定栏
	let tian=document.querySelectorAll('.tiao1');
	// console.log(tian)
	let bo=document.querySelectorAll('.bot>a');
	// console.log(bo)
    let ar=[];
    tian.forEach(function(value,index){
    	ar.push(value.offsetTop)
    })
    // console.log(ar)
    // 点击操作
    for(let i=0;i<bo.length;i++){
    	bo[i].onclick=function(){
    		bo[n].classList.remove('hott')
    		this.classList.add('hott')
    		n=i
             animate(document.body,{scrollTop:ar[i]})
    	}
    }
    //加载
    let jiazai=document.querySelectorAll('.han')
    let arr=[];
    let n=0
    jiazai.forEach(function(value,index){
    	arr.push(value.offsetTop)
    })
   
    for(let i=0;i<arr.length;i++){
    	if(tops+ch>arr[i]+150){

    		let imgs=jiazai[i].getElementsByTagName('img');
    		for(let j=0;j<imgs.length;j++){
    			imgs[j].src=imgs[j].title
    		}
    	}
    }
}
