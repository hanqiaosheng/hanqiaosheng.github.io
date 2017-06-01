$(function () {
    let poke=[];
    let color=['h','c','s','d'];
    let biao={};
    let dir={}
    //产生数字和花色样
    while (poke.length<52){
        let huase=color[Math.floor(Math.random()*4)];
        let shuzi=Math.floor(Math.random()*13+1);
        if(!biao[huase+'_'+shuzi]){
            biao[huase+'_'+shuzi]=true;
            poke.push({huase,shuzi});
            // document.write(`${huase}---${shuzi}***`)
        }
    }

    ////开始发牌
    let index=0;
    for(let i=0;i<=7;i++){
        for(let j=0;j<=i;j++){
           let item=poke[index];
           //item就是{花色：‘h’ ，数字：‘5’}
           index++
            let  src='url(img/'+item.shuzi+item.huase+'.png)';
            $('<div>').addClass('poke')
                .css('backgroundImage',src)
                .data('num',item.shuzi)
                // .html(`${item.huase}---${item.shuzi}`)
                .delay(50*index)
                .prop('id',i+'_'+j)
                .animate({left:300-i*50+100*j,
                    top:60*i,
                     opacity:1})
                .appendTo('.table')
        }
    }
    ///剩余的牌
    for(;index<poke.length;index++){
         let item=poke[index];
         let  src='url(img/'+item.shuzi+item.huase+'.png)';
         $('<div>').addClass('poke zuo')
         .css('backgroundImage',src)
         .data('num',item.shuzi)
         .delay(50*index)
         .animate({left:50,
            top:580,
            opacity:1})
         .appendTo('.table')
    }

    let first=null;
///点击 选中效果
    $('.poke').click(function(){
        let coords=$(this).prop('id').split('_');
        //'1_1 '   2_1  2_2    元素  $(#2_2)
        //'1','1'
        // coords[0],coords[1]         //点击当时的牌的坐标
        //parseInt(coords[0])+1,parseInt(coords[1]+1)     //可能压住点击的牌的两个坐标
        //`#${parseInt(conrds[0])+1}_${parseInt(coords[1])+1}`   元素
        let ele=`#${parseInt(coords[0])+1}_${coords[1]}`
        let ele1=`#${parseInt(coords[0])+1}_${parseInt(coords[1])+1}`
        console.log(ele);
        console.log(ele1);
        if($(ele).length==1||$(ele1).length==1){
           return
        }
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).animate({top:'-=20'})
        }else{
            $(this).animate({top:'+=20'})
        }
        ////判断相加是否13
        if(!first){
            first=this;
            let sum=$(first).data('num')
            if(sum==13) {
                $('.active').animate({left: 600, top: 0}, function () {
                    $(this).remove()
                })
            }
            }else {
                let sum=$(first).data('num')+$(this).data('num')
                if(sum==13){
                    $('.active').animate({left:600,top:0},function () {
                        $(this).remove()
                    })
                }else {
                    $('.active').animate({top:'+=20'}).removeClass('active')

                }
                first=null
            }
    })

/////点击向左
     let left=$('.btnL')
     let right=$('.btnR')
     let z=1
    right.on('click',function(){
        z++;
        $('.zuo:last')
            .removeClass('zuo')
            .addClass('you')
            .css('zIndex',z)
            .animate({left:'+=500'})
    })

     left.on('click',function(){
         let you=$('.you')
         if(you.length==0){
             return
         }
         for(let i=you.length-1;i>=0;i--){
             $(you[i])
                 .delay(200*i)
                 .animate({left:'-=500'},function () {
                     $(this).css('zIndex',0)
                 })
                 .addClass('zuo')
                 .removeClass('you')
         }
    })
})
