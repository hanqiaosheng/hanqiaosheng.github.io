	function Game(){
        this.charArr=
            ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','M','N','B']
        ;
        this.charLength=3;
        this.cw=window.innerWidth;
        this.currentele=[];
        this.currentelekong=[];
        this.speed=10;
        this.shengming=10;
        this.fenshu=0;
        this.sm=document.querySelector('.shengming');
        this.fs=document.querySelector('.fenshu');
        this.guanqia=10;
        this.guanqianm=1;
        this.gqm=document.querySelector('.guanqianm');
        console.log(this.gqm)
	}
	Game.prototype={
		start:function(){
			//创建元素
            this.getElements(this.charLength);
            this.diao();
            this.key();
		},//产生字符
		getElements:function(length){
            for(let i=0;i<length;i++){
              this.getChar();
            }
		},
        //去除重复字
        quchongzi:function(text){
            return this.currentele.some(function(value){
                return text==value.innerText;
            });
        },
        // //去重叠
        quchongwei:function(lefts){
            return this.currentelekong.some(function(value){
                return value+100>lefts&&lefts+100>value;
            });
        },
        //随机产生一个字符
		getChar:function(){
			//产生随机下标  this.charArr[num]
			let num=Math.floor(Math.random()*this.charArr.length);
			//创建div
            
            let tops=Math.random()*100,
                lefts=Math.random()*(this.cw-400)+200;
                
            while (this.quchongzi(this.charArr[num])){
                num=Math.floor(Math.random()*this.charArr.length)
            }

            while (this.quchongwei(lefts)){
                lefts=Math.random()*(this.cw-400)+200;
            }
            let ele=document.createElement('div');
            ele.style.cssText=`
            width:100px;
            height:100px;
            border-radius:50%;
            background-image: url(img/1.jpg);
            background-repeat:no-repeat;
            background-size:cover;
            font-size:40px;
            color:rgb(127, 36, 39);
            text-align:center;
            line-height:80px;
            position:absolute;
            left:${lefts}px;top:${tops}px`;
            //将ele[num]放入
            ele.innerText=this.charArr[num];
            document.body.appendChild(ele);
            this.currentele.push(ele);
            this.currentelekong.push(lefts);
            console.log(this.currentelekong)
		},
		diao:function(){
			let self=this;
            self.t=setInterval(function(){
            	for(let i=0;i<self.currentele.length;i++){
                   let tops=self.currentele[i].offsetTop+self.speed;
                   self.currentele[i].style.top=tops+'px';
                   //判断>500时 返上去再掉
                    if(tops>540){
                        document.body.removeChild(self.currentele[i])
                        self.currentele.splice(i,1);
                        self.currentelekong.splice(i,1);

                        self.shengming--
                        self.sm.innerText=self.shengming
                        //  重新开始
                        if(self.shengming==0){
                            let flsg=window.confirm('Game Ocer！骚年仍需努力！')
                            if(flsg){
                                self.kaishi();
                            }else{
                                close()
                            }
                        }
                    }
            	}
                //失去一个再添一个  调用getChar
            	if(self.currentele.length<self.charLength){
                    self.getChar()
                }
            },400)
		},

        key:function(){
		    let self=this;
            document.body.onkeydown=function (e) {
		       for(let i=0;i<self.currentele.length;i++){
                let code= String.fromCharCode(e.keyCode)
                if(code==self.currentele[i].innerText){
                    document.body.removeChild(self.currentele[i])
                    self.currentele.splice(i,1);
                    self.currentelekong.splice(i,1);
                    self.fenshu++

                    self.fs.innerText=self.fenshu
                    if(self.fenshu==self.guanqia){
                        self.next()
                        self.guanqianm++
                       self.gqm.innerText=self.guanqianm

                    }
                }
               }
                if(self.currentele.length<self.charLength){
                    self.getChar()
                }
            }
    },
    //重新开始
    kaishi:function(){
        // let self=this;
      clearInterval(this.t);
     for(let i=0;i<this.currentele.length;i++){
        document.body.removeChild(this.currentele[i])
             
    }
    this.currentele=[];
    this.currentelekong=[];
    this.shengming=10;
    this.fenshu=0;
    this.guanqianm=1;
    this.gqm.innerText=this.guanqianm;
    this.fs.innerText=this.fenshu;
    this.sm.innerText=this.shengming;
    this.start();
    },
  //继续
    next:function(){
        clearInterval(this.t)
        for(let i=0;i<this.currentele.length;i++){
            document.body.removeChild(this.currentele[i])
        }
        this.currentele=[];
        this.currentelekong=[];
        this.charLength++;
        this.guanqia+=10
        this.start()
    }
	}