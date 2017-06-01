window.onload=function () {
    let audio=document.querySelector('audio'),
        box=document.querySelector('.box'),
        songs=document.querySelector('.songs'),
        name=document.querySelector('.name'),
        lyrics=document.querySelector('.lyrics'),
        kaishi=document.querySelector('.play');
    let shang=document.querySelector('.shang');
    let xia=document.querySelector('.xia');
    let info=document.querySelector('.info'),
        img=document.querySelector('img'),
        ctime=document.querySelector('.ctime'),
        dtime=document.querySelector('.dtime');
    let playG=document.querySelector('.playG');
    let showG=document.querySelector('.showG');
    let yl=document.querySelector('icon-yinliang')
    let index=0;

    kaishi.onclick=function () {
        if(audio.paused){
            audio.play();
            kaishi.classList.toggle('icon-weibiaoti1');
        }else {
            audio.pause();
            kaishi.classList.toggle('icon-weibiaoti1');
        }
    }

    chushi(database[0]);
    let i=x=0;
    audio.ontimeupdate=function () {
        let weizhi=geshi(audio.currentTime);
        let changdu=geshi(audio.duration);
        let string='';
        ctime.innerText=weizhi;
        dtime.innerText=changdu;

        showG.style.width=audio.currentTime/audio.duration*100+'%';

        lyrics.innerHTML='';
        database[index]['lyrics'].forEach(function(value,aa){
            if(value.time==weizhi){
                x=i=aa
            }
        })

        if(x<6){
            i=0
        }else{
            i = x - 6;
        }

        for(let n=i;n<database[index]['lyrics'].length;n++){
            if(n==x){
                string+=`
                <li class="hot">
                  ${database[index]['lyrics'][n]['lyric']}
                 </li>`;
            }else{
                string+=`
                 <li>
                  ${database[index]['lyrics'][n]['lyric']}
                  </li>`;
            }
        }
        lyrics.innerHTML = string;

    }

    //初始化进度时间
    function geshi(time) {
        let fen=Math.floor(time/60)>=10?Math.floor(time/60):'0'+Math.floor(time/60),
            miao=Math.floor(time%60)>=10?Math.floor(time%60):'0'+Math.floor(time%60);
        return  `${fen}:${miao}`
    }

    //初始化内容歌词
    function chushi(obj) {
        let string='';
        // songs.innerText=obj.songs;
        // name.innerText=obj.name;
        audio.src=obj.src;
        //赋 内容歌词
        obj.lyrics.forEach(function(value,index){
            string+=`<li>${value.lyric}</li>`
        })
        lyrics.innerHTML='';
        lyrics.innerHTML=string;

        // 赋 进度框
        info.innerText=`${obj.songs}-${obj.name}`;
         img.src=obj.photo;
         ctime.innerText = '00:00';
         dtime.innerText = obj.alltime
    }


    xia.onclick=function () {
        index++
        if(index>database.length){
            index=0
        }
        chushi(database[index])
        kaishi.className="iconfont icon-bofang play"
        audio.ontimeupdate();
        audio.play();
        i=x=0;
    }


    shang.onclick=function () {
        index--
        if(index<0){
            index=database.length
        }
        chushi(database[index])
        kaishi.className="iconfont icon-bofang play"
        audio.ontimeupdate();
        audio.play();
        i=x=0;
    }


    sy.onmousedown=function(e){
        let ox=e.offsetX;
        let bx=sy1.offsetLeft;
        let cx=e.clientX;
        let lefts=cx-ox-bx;
        if(lefts>ox-10&&lefts<ox+110){
            syy.style.left=lefts+'px';
            sy1.style.width=lefts+8+'px';
            audio.volume=lefts/120;
        }
    }


    syy.onmousedown=function(e){
        let ox=e.offsetX;
        syy.onmousemove=function(e){
            let bx=sy1.offsetLeft;
            let cx=e.clientX;
            // 鼠标相对于事件源位置
            let lefts=cx-ox-bx;
            // console.log(lefts);
            if(lefts>ox-10&&lefts<ox+110){
                syy.style.left=lefts+'px';
                sy1.style.width=lefts+8+'px';
                // audio.valume=lefts/100;
            }
        }
        syy.onmouseup=function(){
            syy.onmousemove=null;
            syy.onmouseup=null;
        }
    }



}