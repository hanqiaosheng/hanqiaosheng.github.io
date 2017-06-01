function Palette(obj,ctx,mask){
    //obj=canvas   ctx=环境
    this.obj=obj;
    this.ctx=ctx;
    this.mask=mask;
    //画板宽高
    this.width=obj.width;
    this.height=obj.height;
    this.lineWidth=2;
    this.fillStyle="#000";
    this.strokeStyle="#000";
    this.type="stroke"  //设置填充或者描边
    //历史记录
    this.history=[];
}
Palette.prototype={
    //初始化样式
    init:function(){
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.strokeStyle=this.strokeStyle;
        this.ctx.fillStyle=this.fillStyle;
    },
    //直线
    line:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function(e){
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(mx,my);
                self.ctx.closePath()
                // self.ctx.stroke();
                self.ctx[self.type]();

            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }
        }
    },

//新建
    xj:function(canvas){
        let self=this;
        let flag=confirm("是否保存");
        if(flag){
            let data=canvas.toDataURL('img/png').replace('data:image/png','data:stream/octet');
            location.href=data;

        }
        self.history=[];
        self.ctx.clearRect(0,0,self.width,self.height);
    },

    //铅笔
    pencil:function(){
        let self=this
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY
            self.init();
            self.ctx.clearRect(0,0,self.width,self.height);
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0)
            }
            self.ctx.beginPath();
            self.ctx.moveTo(ox,oy);

        self.mask.onmousemove=function (e) {
            let mx=e.offsetX,my=e.offsetY;
            self.ctx.lineTo(mx,my);
            // self.ctx.stroke()
            self.ctx[self.type]();
        }
        self.mask.onmouseup=function () {
            self.ctx.closePath()
            self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
            self.mask.onmouseup=null;
            self.mask.onmousemove=null;
        }
    }
    },
//园
    yuan:function () {
        let self=this
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                let r=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.arc(ox,oy,r,0,Math.PI*2);
                self.ctx.closePath();
                // self.ctx.stroke()
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }
        }

    },

    //多边形
    duobianxing:function(){
        let self=this;
        let n=self.n;
        let angle=(360/n)/180*Math.PI;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                let r=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox+r,oy);
                for (let i=0;i<n;i++){
                    let x=(ox+r*Math.cos(angle*i)),
                        y=(oy+r*Math.sin(angle*i));
                    self.ctx.lineTo(x,y);
                }
                self.ctx.closePath();
                // self.ctx.stroke()
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }
        }
},
//矩形
    juxing:function () {
        let self=this;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                let w=mx-ox,h=my-oy;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.rect(ox,oy,w,h);
                self.ctx.closePath();
                // self.ctx.stroke()
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }
        }
    },

    //圆角矩形
    yjx:function(){
        let self=this
        let r=15;
         self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox+r,oy);
                self.ctx.lineTo(mx-r,oy);
                self.ctx.quadraticCurveTo(mx,oy,mx,r+oy);
                self.ctx.lineTo(mx,my-r);
                self.ctx.quadraticCurveTo(mx,my,mx-r,my);
                self.ctx.lineTo(ox+r,my);
                self.ctx.quadraticCurveTo(ox,my,ox,my-r);
                self.ctx.lineTo(ox,oy+r);
                self.ctx.quadraticCurveTo(ox,oy,ox+r,oy);
                self.ctx.closePath();
                // self.ctx.stroke()
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }
        }
    },

//五角星
    jiaoxing:function () {
        let self=this;
        let jiao=self.jiao;
        let angle=Math.PI/jiao;
        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.mask.onmousemove=function (e) {
                let mx=e.offsetX,my=e.offsetY;
                let r=Math.sqrt((mx-ox)*(mx-ox)+(my-oy)*(my-oy));
                let r1=r/3;
                self.init();
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox+r,oy);
                for(let i=0;i<jiao*2;i++){
                    if(i%2==0){
                        self.ctx.lineTo(ox+r*Math.cos(angle*i),oy+r*Math.sin(angle*i))
                    }else {
                        self.ctx.lineTo(ox+r1*Math.cos(angle*i),oy+r1*Math.sin(angle*i))
                    }
                }
                self.ctx.closePath();
                // self.ctx.stroke()
                self.ctx[self.type]();
            }
            self.mask.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }
        }

    },

    //橡皮擦
    rubberw:function (w,h,rubber) {
        let self=this;
        self.mask.onmousedown=function () {
            rubber.style.display='block';
            rubber.style.width=`${w}px`;
            rubber.style.height=`${h}px`;
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0)
            }
            self.mask.onmousemove=function (e) {

                let mx=e.offsetX,my=e.offsetY;
                 console.log(mx,my)
                if(mx>=self.width-w){
                    mx=self.width-w;
                }if(mx<=0){
                    mx=0
                }if(my>=self.width-w){
                    my=self.width-w;
                }if(my<=0){
                    my=0
                }
                rubber.style.left=mx+'px';
                rubber.style.top=my+'px';
                self.ctx.clearRect(mx,my,w,h);

            }
            self.mask.onmouseup=function () {
                rubber.style.display='none';
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height))
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }
        }
    },

    //文字

    word:function(){
        let self=this;

        self.mask.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement('div');
            div.style.cssText=`min-width:100px;height:auto;padding:3px;position:absolute;left:${ox}px;top:${oy}px;background:white;`

            div.contentEditable='true';
            self.mask.appendChild(div);
            self.mask.onmousedown=null;
            self.divs=div;

            self.divs.onmousedown=function (e) {
                let ox=e.clientX-this.offsetLeft;
                let oy=e.clientY-this.offsetTop;
                self.mask.onmousemove=function (e) {
                    let cx=e.clientX,cy=e.clientY;
                    let lefts=cx-ox;tops=cy-oy;
                    self.divs.style.left=lefts+'px';
                    self.divs.style.top=tops+'px';

                }
                self.divs.onmouseup=function () {
                    self.divs.onmouseup=null;
                    self.mask.onmousemove=null;
                }
            }
            self.divs.onblur=function(){
                self.ctx.font=self.text;
                self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                this.parentNode.removeChild(this);
                self.divs=null;
            }
        }
    },

//剪切
    jianqie: function (jqBox) {
        var that = this;
        that.init();
        that.jqBox=jqBox;
        that.mask.onmousedown = function (e) {
            var startx = e.offsetX;
            var starty = e.offsetY;
            var minx, miny, w, h;
            that.init();
            that.mask.onmousemove = function (e) {
                that.init();
                var endx = e.offsetX;
                var endy = e.offsetY;
                minx = startx > endx ? endx : startx;
                miny = starty > endy ? endy : starty;
                w = Math.abs(endx - startx);
                h = Math.abs(endy - starty);
                jqBox.style.display="block";
                jqBox.style.left= minx+'px';
                jqBox.style.top= miny+'px';
                jqBox.style.width= w+'px';
                jqBox.style.height= h+'px';
            }
            that.mask.onmouseup = function (e) {
                that.mask.onmouseup = null;
                that.mask.onmousemove = null;
                that.temp = that.ctx.getImageData(minx, miny, w, h);
                that.ctx.clearRect(minx, miny, w, h)
                that.history.push(that.ctx.getImageData(0, 0, that.width, that.height))
                that.ctx.putImageData(that.temp, minx, miny);
                that.drag(minx, miny, w, h, jqBox);
            }
        }
    },
    drag: function (x, y, w, h, jqBox) {
        var that = this;
        that.mask.onmousemove = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                that.mask.style.cursor = "move";
            } else {
                that.mask.style.cursor = "default";
            }
        }
        that.mask.onmousedown = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            //鼠标相对于div左上角的位置
            var cx = ox - x;
            var cy = oy - y;
            if (ox>x&&ox<w+x&&oy>y&&oy<h+y) {
                that.mask.style.cursor = "move";
            } else {
                that.mask.style.cursor = "default";
                return;
            }
            that.mask.onmousemove = function (e) {
                that.ctx.clearRect(0, 0, that.width, that.height);
                if (that.history.length != 0) {
                    that.ctx.putImageData(that.history[that.history.length - 1], 0, 0)
                }
                var endx = e.offsetX;
                var endy = e.offsetY;
                var left = endx - cx;
                var top = endy - cy;
                if(left<0){
                    left=0;
                }
                if(left>that.width-w){
                    left=that.width-w
                }

                if(top<0){
                    top=0;
                }
                if(top>that.height-h){
                    top=that.height-h
                }
                jqBox.style.left= left+'px';
                jqBox.style.top=top+'px';
                x=left;
                y=top;
                that.ctx.putImageData(that.temp, left, top);
            }
            that.mask.onmouseup = function () {
                jqBox.style.display='none';
                that.mask.onmouseup = null;
                that.mask.onmousemove = null;
                that.drag(x, y, w, h, jqBox)
            }
        }

    },

//撤销ctrl+z
    chexiao:function () {
        let self=this;
        document.body.onkeydown=function (e) {
            if(e.ctrlKey&&e.keyCode==90){
                if(self.history.length==0){
                    self.ctx.clearRect(0,0,self.width,self.height);
                    return
                }
                let last=self.history.pop()
                self.ctx.putImageData(last,0,0)
            }
        }

    },
    //点击返回
    fanhui:function () {
        let self=this
        if(self.history.length==0){
            self.ctx.clearRect(0,0,self.width,self.height);
            return
        }
        let last=self.history.pop()
        self.ctx.putImageData(last,0,0)
    }

}