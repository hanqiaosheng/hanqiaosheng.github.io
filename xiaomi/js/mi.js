$(function(){
	//顶层购物车
  let gouwu=$('.gouwu')[0];
  let gouwutan=$('.gouwutan');
  gouwu.onmouseenter=function(){
  	gouwutan[0].style.height='100px';
  }
   gouwu.onmouseleave=function(){
  	gouwutan[0].style.height='';
  }
//小米下拉框
  let wenziju=$('.wenziju1')[0]

  let mp=document.querySelectorAll('.mp')
  let chucu=document.querySelectorAll('.chucu')
  let neul=document.querySelectorAll('.neul')
    let lis=document.querySelectorAll('.neul>li')

  	for(let j=0;j<chucu.length;j++){
  		wenziju.onmouseenter=function(){
  	    chucu[j].style.height='230px';
	    chucu[j].style.background='white';
  		for(let i=0;i<neul.length;i++){
  			mp[i].onmouseenter=function(){
            neul[i].style.display='block';
  	   }
  	}
	}
  }  	

  	for(let j=0;j<chucu.length;j++){
  		wenziju.onmouseleave=function(){
  	    chucu[j].style.height='';
	    chucu[j].style.background='';

  		for(let i=0;i<neul.length;i++){
  			mp[i].onmouseenter=function(){
            neul[i].style.display='none';
  	   }
  	}
 }
  	 }
//banner

 let imgbox=document.querySelector('.imgbox');
   let imgs=document.querySelectorAll('.imgbox li');
   let banner=document.querySelector('.banner');
   let btns=document.querySelectorAll('.btn>li')
   console.log(btns);
   let left=document.querySelector('.left');
   let right=document.querySelector('.right');
   let imgwidth=parseInt(getComputedStyle(imgbox,null).width);
   console.log(imgwidth)
   let current=0,next=0;
   let t;
   let flag=true;
   t=setInterval(move,3000);
   banner.onmouseenter=function(){
   	clearInterval(t);
   }
   banner.onmouseleave=function(){
   	t=setInterval(move,3000);
   }
  for(let i=0;i<imgs.length;i++){
	   if(i==0){
	   	continue
	   }
	   imgs[i].style.left=imgwidth+"px";
	 }
       btns.forEach(function(value,index){
         value.onclick=function(){
        	// alert(index)
        	
        	btns[current].className='';
        	this.className='hot';
        	// console.log(value+'---'+index)
        	if(current==index){
        		return
        	}
            if(current<index){
            //右面→左面
        	imgs[index].style.left=imgwidth+'px'
        	animate(imgs[current],{left:-imgwidth});
        	animate(imgs[index],{left:0})
        	current=next=index;
        }
          else if(current>index){
          	//左面→右面
          	
          	imgs[index].style.left=-imgwidth+'px'
        	animate(imgs[current],{left:imgwidth});
        	animate(imgs[index],{left:0})
        	current=next=index;
          }
      
        }
     })
    
     function move(){
     	//更新 next
       next++
       if(next==imgs.length){
       	next=0;
       }
       //按钮走动
       btns[current].className='';
       btns[next].className='hot';
       //就位
       imgs[next].style.left=imgwidth+'px';
       //动画
       animate(imgs[current],{left:-imgwidth});
       animate(imgs[next],{left:0},function(){
       	flag=true;
       });
       current=next;
     }
     function movel(){
     	//更新 next
       next--;
       if(next<0){
       	next=imgs.length-1;
       }
       //按钮走动
       btns[current].className='';
       btns[next].className='hot';
       //就位
       imgs[next].style.left=-imgwidth+'px';
       //动画
       animate(imgs[current],{left:imgwidth});
       animate(imgs[next],{left:0},function(){
       	flag=true;
       });
       current=next; 
     }
    left.onclick=function(){
       if(!flag){
       	return
       }
       	flag=false;
       	movel();
       }
    	
  
    right.onclick=function(){
    	 if(flag){
    		flag=false;
    		move();
    	 }
    }	



  //小米明星单品
  let zuo=$('.zuo')[0];
  let you=$('.you')[0];
  let mo=$('.mo')[0];
  let z=document.querySelectorAll('.z');
  let widthns=parseInt(getStyle(z[0],'width'))+parseInt(getStyle(z[0],'margin-right'));
  let t11,flag11=true;
  let widths1=widthns*5;
  t11=setInterval(move11,2000);
  	mo.onmouseenter=function(){
		clearInterval(t11);
	}
	mo.onmouseleave=function(){
		t11=setInterval(move11,8000);
	}
	zuo.onmouseenter=function(){
		clearInterval(t11);
	}
	zuo.onmouseleave=function(){
		t11=setInterval(move11,8000);
	}
	you.onmouseenter=function(){
		clearInterval(t11);
	}
	you.onmouseleave=function(){
		t11=setInterval(move11,8000);
	}
  	you.onclick=function(){
		if(!flag11){
			// flag11=false;
			moveDown11();
		}
		
	}
	zuo.onclick=function(){
		if(!flag11){
			return;
		}
		flag11=false;
		move11();
	}
  function move11(){
  	animate(mo,{left:-widths1},function(){
  		// let first=getFirst(mo);
  		// mo.style.left='0';
  		// flag11=true;
  	})
  }
  	function moveDown11(){
		// let last=getLast(mo);
		// let first=getFirst(mo);
		// mo.style.left=-widths1+'px';
		animate(mo,{left:0},function(){flag11=true});
	}


  //搭配
  let cn=$('.cn')[0]
  let xiao=$('.xiao',cn)
   let span1=$('span',cn)
  let dadade=$('.dadade')[0]
  let youda=$('.youda',dadade)
  console.log(youda)
  // let xiaoju=$('.xiaoju',youda)
  // console.log(xiaoju)
	  	span1[0].style.color='#ff6700';
		xiao[0].style.borderBottom='2px solid #ff6700';
		span1[1].style.color='';
		xiao[1].style.borderBottom='';
		span1[2].style.color='';
		xiao[2].style.borderBottom='';
		span1[3].style.color='';
		xiao[3].style.borderBottom='';
		youda[0].style.display='block';
	  	youda[1].style.display='none';
	  	youda[2].style.display='none';
	  	youda[3].style.display='none';

     xiao[0].onmouseenter=function(){
	  	span1[0].style.color='#ff6700';
		xiao[0].style.borderBottom='2px solid #ff6700';
		span1[1].style.color='';
		xiao[1].style.borderBottom='';
		span1[2].style.color='';
		xiao[2].style.borderBottom='';
		span1[3].style.color='';
		xiao[3].style.borderBottom='';
		youda[0].style.display='block';
	  	youda[1].style.display='none';
	  	youda[2].style.display='none';
	  	youda[3].style.display='none';
 }
  	xiao[1].onmouseenter=function(){
  		span1[0].style.color='';
		xiao[0].style.borderBottom='';
		span1[2].style.color='';
		xiao[2].style.borderBottom='';
		span1[3].style.color='';
		xiao[3].style.borderBottom='';
	  	span1[1].style.color='#ff6700';
	  	xiao[1].style.borderBottom='2px solid #ff6700';
	  	youda[0].style.display='none';
	  	youda[1].style.display='block';
	  	youda[2].style.display='none';
	  	youda[3].style.display='none';
}
    xiao[2].onmouseenter=function(){
    	span1[1].style.color='';
		xiao[1].style.borderBottom='';
		span1[0].style.color='';
		xiao[0].style.borderBottom='';
		span1[3].style.color='';
		xiao[3].style.borderBottom='';
	  	span1[2].style.color='#ff6700';
	  	xiao[2].style.borderBottom='2px solid #ff6700';
	  	youda[0].style.display='none';
	  	youda[1].style.display='none';
	  	youda[2].style.display='block';
	  	youda[3].style.display='none';
}
    xiao[3].onmouseenter=function(){
    	span1[1].style.color='';
		xiao[1].style.borderBottom='';
		span1[2].style.color='';
		xiao[2].style.borderBottom='';
		span1[0].style.color='';
		xiao[0].style.borderBottom='';
	  	span1[3].style.color='#ff6700';
	  	xiao[3].style.borderBottom='2px solid #ff6700';
	  	youda[0].style.display='none';
	  	youda[1].style.display='none';
	  	youda[2].style.display='none';
	  	youda[3].style.display='block';
}

  //周边
  let jp=$('.jp')[0];
  let youyou=$('.youyou',jp)
   console.log(youyou)
  let cn1=$('.cn1')[0];
  let xiao1=$('.xiao',cn1)
  let span=$('span',cn1)
  console.log(span)
  console.log(xiao1)
  	  	span[0].style.color='#ff6700';
		xiao1[0].style.borderBottom='2px solid #ff6700';
		span[1].style.color='';
		xiao1[1].style.borderBottom='';
		span[2].style.color='';
		xiao1[2].style.borderBottom='';
		span[3].style.color='';
		xiao1[3].style.borderBottom='';
		youyou[0].style.display='block';
	  	youyou[1].style.display='none';
	  	youyou[2].style.display='none';
	  	youyou[3].style.display='none';

     xiao1[0].onmouseenter=function(){
	  	span[0].style.color='#ff6700';
		xiao1[0].style.borderBottom='2px solid #ff6700';
		span[1].style.color='';
		xiao1[1].style.borderBottom='';
		span[2].style.color='';
		xiao1[2].style.borderBottom='';
		span[3].style.color='';
		xiao1[3].style.borderBottom='';
		youyou[0].style.display='block';
	  	youyou[1].style.display='none';
	  	youyou[2].style.display='none';
	  	youyou[3].style.display='none';
 }
  	xiao1[1].onmouseenter=function(){
  		span[0].style.color='';
		xiao1[0].style.borderBottom='';
		span[2].style.color='';
		xiao1[2].style.borderBottom='';
		span[3].style.color='';
		xiao1[3].style.borderBottom='';
	  	span[1].style.color='#ff6700';
	  	xiao1[1].style.borderBottom='2px solid #ff6700';
	  	youyou[0].style.display='none';
	  	youyou[1].style.display='block';
	  	youyou[2].style.display='none';
	  	youyou[3].style.display='none';
}
    xiao1[2].onmouseenter=function(){
    	span[1].style.color='';
		xiao1[1].style.borderBottom='';
		span[0].style.color='';
		xiao1[0].style.borderBottom='';
		span[3].style.color='';
		xiao1[3].style.borderBottom='';
	  	span[2].style.color='#ff6700';
	  	xiao1[2].style.borderBottom='2px solid #ff6700';
	  	youyou[0].style.display='none';
	  	youyou[1].style.display='none';
	  	youyou[2].style.display='block';
	  	youyou[3].style.display='none';
}
    xiao1[3].onmouseenter=function(){
    	span[1].style.color='';
		xiao1[1].style.borderBottom='';
		span[2].style.color='';
		xiao1[2].style.borderBottom='';
		span[0].style.color='';
		xiao1[0].style.borderBottom='';
	  	span[3].style.color='#ff6700';
	  	xiao1[3].style.borderBottom='2px solid #ff6700';
	  	youyou[0].style.display='none';
	  	youyou[1].style.display='none';
	  	youyou[2].style.display='none';
	  	youyou[3].style.display='block';
}

   //为您推荐
   let mo1=$('.mo1')[0];
   console.log(mo1)
   let z1=$('.z1',mo1);
   let yy=$('.yy')[1]
   let zuo1=$('.zuo1')[0];
   let you1=$('.you1')[0];
   let widths2=parseInt(getStyle(z1[0],'width'))+parseInt(getStyle(z1[0],'margin-right'))
   let widths3=widths2*4;
   let t5,flag13=true;
   t5=setInterval(fn5,2000);

	mo1.onmouseenter=function(){
		clearInterval(t5);
	}
	mo1.onmouseleave=function(){
		t5=setInterval(fn5,8000);
	}
	zuo1.onmouseenter=function(){
		clearInterval(t5);
	}
	zuo1.onmouseleave=function(){
		t5=setInterval(fn5,8000);
	}
	you1.onmouseenter=function(){
		clearInterval(t5);
	}
	you1.onmouseleave=function(){
		t5=setInterval(fn5,8000);
	}
  	you1.onclick=function(){	
		if(!flag13){
			fndown();
		}
		
	}
	zuo1.onclick=function(){
		if(!flag13){
			return;
		}
		flag13=false;
		fn5();
	}
   function fn5(){
   	 animate(mo1,{left:-widths3},function(){
/*  		let first=getFirst(mo1);
  		mo1.appendChild(first)
  		mo1.style.left=0;*/
  		/*flag13=true;*/

   })
}
  	function fndown(){
		/*let last=getLast(mo);
		let first=getFirst(mo);
		mo1.appendChild(first);
		mo1.style.left=-widths3+'px';*/
		if(!flag13){

		animate(mo1,{left:0},function(){flag13=true});
		}
	}


//内容
  let key=$('.key')[0];
   let large=$('.large',key)[0];
   let keyBox=$('.keyBox')[0]
   let li1=$('.li1',keyBox);
   let widths4=parseInt(getStyle(li1[0],'width')); 
   let wheel2=$('.wheel2',large)[0];
   let li2=$('li',wheel2);
   let posLeft=$('.posLeft')[0];
   let posRight=$('.posRight')[0];
   //function.js
   let t14;
   let flag14=true;
   let next1=0,current5=0;
   // t14=setInterval(move14,2000);
/*      for(let i=0;i<li1.lenght;i++){
   	if(i==0){
   		continue
   	}
   	li1[i].style.left=widths4+'px';
   }*/
 posLeft.onclick=function(){
   	next1++;
   	if(next1==li2.length){
   		next1=0
   	}
   	  li2[current5].className='';
      li2[next1].className='li12';
      current5=next1;
    animate(keyBox,{left:-widths4},function(){
      	let first=getFirst(keyBox);
        keyBox.appendChild(first);
        keyBox.style.left='0';
      })

   }
   posRight.onclick=function(){
    clearInterval(t14)
   	next1--;
	   	if(next1<0){
	   		next1=li2.length-1;
	   	}

	   	  li2[current5].className='';
	      li2[next1].className='li12';	      
      	let last=keyBox.lastElementChild;
      	let first=getFirst(keyBox);     	
      	console.log(keyBox.style.left)
      	keyBox.insertBefore(last,first);
        keyBox.style.left=-widths4+'px';
        animate(keyBox,{left:0})   	
	     current5=next1;
   }
   for(let i=0;i<li2.length;i++){
   	li2[i].onclick=function(){
   		clearInterval(t14);
   		li2[next1].className='';
        li2[i].className='li12';
   		animate(keyBox,{left:-widths4*(i)})
        current5=next1=i;
   	}

   }
/*   function move14(){
   	// next1++;
   	// if(next1==li2.length){
   	// 	next1=0
   	// }
   	  li2[current5].className='';
      li2[next1].className='li12';
      
      animate(keyBox,{left:-widths4},function(){
      	// let first=getFirst(keyBox);
       //  keyBox.appendChild(first);
       //  keyBox.style.left='0';
      })
      current5=next1;
   }*/
 /*   function movedown14(){
	   	// next1--;
	   	// if(next1<0){
	   	// 	next1=li2.length-1;
	   	// }

	   	  li2[current5].className='';
	      li2[next1].className='li12';
	      


      	// let last=getLast(keyBox);
      	// let last=keyBox.lastElementChild;

      	// let first=getFirst(keyBox);
      	
      	// console.log(keyBox.style.left)
      	// keyBox.insertBefore(last,first);
       //  keyBox.style.left=-widths4+'px';
        animate(keyBox,{left:0})   	
	     current5=next1;
	   }*/




   //dierge
   let key1=$('.key')[0]
   let largee=$('.large',key1)[1];
   let keyBox1=$('.keyBox')[1]
   let li11=$('.li1',keyBox1);
   let widths41=parseInt(getStyle(li11[0],'width')); 
   let wheel21=document.querySelector('.wheel21')
   console.log(wheel21)
   let li21=$('li',wheel21);
   console.log(li21)
   let posLeft1=$('.posLeft')[1];
   let posRight1=$('.posRight')[1];
   //function.js
   let t141;
   let flag141=true;
   let next11=0,current51=0;
   // t14=setInterval(move14,2000);
/*      for(let i=0;i<li1.lenght;i++){
   	if(i==0){
   		continue
   	}
   	li1[i].style.left=widths4+'px';
   }*/
   posLeft1.onclick=function(){
   	next11++;
   	if(next11==li21.length){
   		next11=0
   	}
   	  li21[current51].className='';
      li21[next11].className='li121';
      current51=next11;
    animate(keyBox1,{left:-widths41},function(){
      	let first=getFirst(keyBox1);
        keyBox1.appendChild(first);
        keyBox1.style.left='0';
      })

   }
   posRight1.onclick=function(){
    clearInterval(t141)
   	next11--;
	   	if(next11<0){
	   		next11=li21.length-1;
	   	}

	   	li21[current51].className='';
	    li21[next11].className='li121';	      
      	let last=keyBox1.lastElementChild;
      	let first=getFirst(keyBox1);     	
      	console.log(keyBox1.style.left)
      	keyBox1.insertBefore(last,first);
        keyBox1.style.left=-widths41+'px';
        animate(keyBox1,{left:0})   	
	    current51=next11;
   }
   for(let m=0;m<li21.length;m++){
   	li21[m].onclick=function(){

   		li21[next11].className='';
        li21[m].className='li121';
   		animate(keyBox1,{left:-widths41*(m)})
        current51=next11=m;
   	}

   }
  // disange
   let keyBox0=$('.keyBox')[2]
   let li10=$('.li1',keyBox0);
   let widths40=parseInt(getStyle(li10[0],'width')); 
   let wheel20=document.querySelector('.wheel20')
   console.log(wheel20)
   let li20=$('li',wheel20);
   console.log(li20)
   let posLeft0=$('.posLeft')[2];
   let posRight0=$('.posRight')[2];
   //function.js
   let t140;
   let flag140=true;
   let next10=0,current50=0;
   posLeft0.onclick=function(){
   	next10++;
   	if(next10==li20.length){
   		next10=0
   	}
   	  li20[current50].className='';
      li20[next10].className='li120';
      current50=next10;
    animate(keyBox0,{left:-widths40},function(){
      	let first=getFirst(keyBox0);
        keyBox0.appendChild(first);
        keyBox0.style.left='0';
      })

   }
   posRight0.onclick=function(){
    clearInterval(t140)
   	next10--;
	   	if(next10<0){
	   		next10=li20.length-1;
	   	}

	   	li20[current50].className='';
	    li20[next10].className='li120';	      
      	let last=keyBox0.lastElementChild;
      	let first=getFirst(keyBox0);     	
      	console.log(keyBox0.style.left)
      	keyBox0.insertBefore(last,first);
        keyBox0.style.left=-widths40+'px';
        animate(keyBox0,{left:0})   	
	    current50=next10;
   }
   for(let n=0;n<li20.length;n++){
   	li20[n].onclick=function(){

   		li20[next10].className='';
        li20[n].className='li120';
   		animate(keyBox0,{left:-widths40*(n)})
        current50=next10=n;
   	}

   }
   //disi
   let keyBox4=$('.keyBox')[3]
   let li14=$('.li1',keyBox4);
   let widths44=parseInt(getStyle(li14[0],'width')); 
   let wheel24=document.querySelector('.wheel24')
   console.log(wheel24)
   let li24=$('li',wheel24);
   console.log(li24)
   let posLeft4=$('.posLeft')[3];
   let posRight4=$('.posRight')[3];
   //function.js
   let t144;
   let flag144=true;
   let next14=0,current54=0;
     posLeft4.onclick=function(){
   	next14++;
   	if(next14==li24.length){
   		next14=0
   	}
   	  li24[current54].className='';
      li24[next14].className='li124';
      current54=next14;
    animate(keyBox4,{left:-widths44},function(){
      	let first=getFirst(keyBox4);
        keyBox4.appendChild(first);
        keyBox4.style.left='0';
      })

   }
   posRight4.onclick=function(){
    clearInterval(t144)
   	next14--;
	   	if(next14<0){
	   		next14=li24.length-1;
	   	}

	   	li24[current54].className='';
	    li24[next14].className='li124';	      
      	let last=keyBox4.lastElementChild;
      	let first=getFirst(keyBox4);     	
      	console.log(keyBox4.style.left)
      	keyBox4.insertBefore(last,first);
        keyBox4.style.left=-widths44+'px';
        animate(keyBox4,{left:0})   	
	    current54=next14;
   }
   for(let n=0;n<li24.length;n++){
   	li24[n].onclick=function(){

   		li24[next14].className='';
        li24[n].className='li124';
   		animate(keyBox4,{left:-widths44*(n)})
        current54=next14=n;
   	}

   }













})

























