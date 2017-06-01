window.onload=function () {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let mask = document.querySelector('.mask');
    let palette = new Palette(canvas, ctx, mask);
    let xiangpi = document.querySelector('.icon-xiangpi');
    let rubber = document.querySelector('.rubber');
    let zhixian = document.querySelector('.icon-xian');
    let xuxian = document.querySelector('.icon-xuxian');
    let quanping = document.querySelector('.icon-quanping1');
    let qianbi = document.querySelector('.icon-qianbi');
    let yuan = document.querySelector('.icon-yuan');
    let duobianxing = document.querySelector('.icon-duobianxing');
    let juxing = document.querySelector('.icon-juxing');
    let yuanjuxing = document.querySelector('.icon-yuanjiaojuxing');
    let fanhui = document.querySelector('.icon-weibiaoti545');
    let jiaoxing = document.querySelector('.icon-wujiaoxingkongdi');
    let baocun = document.querySelector('.icon-baocun');
    let img = document.querySelector('img');
    let wenzi = document.querySelector('.icon-wenzi');
    let tc = document.querySelector('.icon-tianchong');
    let mb = document.querySelector('.icon-miaobian');
    let input = document.querySelector('input');
    let input1 = document.querySelectorAll('input')[1];
    let xj = document.querySelector('.icon-iconfontxinjian');
    let jq=document.querySelector('.icon-caiqie');
    let jqBox=document.querySelector('.jqBox');
    input.onchange = function () {
        palette.fillStyle = this.value;
    }
    input1.onchange = function () {
        palette.strokeStyle = this.value;
    }
    tc.onclick = function () {
        palette.type = 'fill'
    }
    mb.onclick = function () {
        palette.type = 'stroke'
    }

    xj.onclick = function () {
        palette.xj(canvas)
    }

    quanping .onclick = function () {
        if(document.documentElement.RequestFullscreen){
            document.body.RequestFullscreen();
        }
        else if(document.documentElement.webkitRequestFullscreen){
            document.body.webkitRequestFullscreen();
        }
    }

    jq.onclick=function () {
        palette.jianqie(jqBox)
    }
    
    zhixian.onclick=function () {
        palette.line()
    }

    qianbi.onclick=function () {
        palette.pencil()
    }

    yuan.onclick=function () {
        palette.yuan()
    }

    duobianxing.onclick=function () {
        palette.n=prompt('请输入边数','6')
        palette.duobianxing()
    }

    juxing.onclick=function () {
        palette.juxing()
    }

    yuanjuxing.onclick=function () {
        // let r=prompt('请输入半径','10')
        palette.yjx()
    }

    jiaoxing.onclick=function () {
        palette.jiao=prompt('请输入角数数','5')
        palette.jiaoxing()
    }

    //橡皮
    xiangpi.onclick=function () {
        let w=prompt('请输入宽','10');
        let h=prompt('请输入高','30');
        palette.rubberw(w,h,rubber)
    }

    //文字
    wenzi.onclick=function () {
        palette.word()
    }
//返回
    fanhui.onclick=function () {
        palette.fanhui()
    }
//ctrl+z
    palette.chexiao()


//保存
    baocun.onclick=function () {
        let data=canvas.toDataURL('img/png')
        img.src=data
}



}