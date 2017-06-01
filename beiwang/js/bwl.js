window.onload=function () {
    let wcsx = document.querySelector('.wcsx');
    let ycsx = document.querySelector('.ycsx');
    let wcNum=document.querySelector('#wcCon');
    let ycNum=document.querySelector('#ycCon');
    let input=document.querySelector('input');

    lond();

    input.onkeydown=function (e) {
        if(e.keyCode==13){
            add({title:this.value.trim(),done:false});
            this.value='';
        }
    }
    
    wcsx.onclick=function (e) {
        let obj=e.target;

        if(obj.nodeName=='A'){
            obj.onblur=function () {
                let zhi=obj.innerText.trim();
                if(zhi!=undefined){
                    let bb=getData();

                    let id=obj.parentNode.id;

                    bb[id].title=`${zhi}`;

                    console.log(bb[id].title)

                    localStorage.aa=JSON.stringify(bb)
                    lond();
                }
            }
        }else if(obj.nodeName=='INPUT'){
            let id= obj.parentNode.id;
            jieshu(id)
        }else if(obj.nodeName=='BUTTON'){
            let id= obj.parentNode.id;
            shanchu(id)
        }
    }


    ycsx.onclick=function (e) {
        let obj=e.target;

        if(obj.nodeName=='A'){
            obj.onblur=function () {
                let zhi=obj.innerText.trim();
                if(zhi!=undefined){
                    let bb=getData();

                    let id=obj.parentNode.id;

                    bb[id].title=`${zhi}`;

                    console.log(bb[id].title)

                    localStorage.aa=JSON.stringify(bb)
                    lond();
                }
            }
        }else if(obj.nodeName=='INPUT'){
            let id= obj.parentNode.id;
            nojieshu(id)
        }else if(obj.nodeName=='BUTTON'){
            let id= obj.parentNode.id;
            shanchu(id)
        }
    }



    function lond() {
        let data = localStorage.aa;
        let wcsxString = '', ycsxString = '', wcsxNum = 0, ycsxNum = 0;
        if (!data) {
            chushihua()
        }
        data = JSON.parse(localStorage.aa);

        data.forEach(function (value, index) {
            if (value.done) {
                ycsxString += `
            <li id="${index}">
                <input type="checkbox" placeholder="">
                <a contenteditable="true">${value.title}</a>
                <button>×</button>
            </li>
            `;
                ycsxNum++;
            } else {
                wcsxString += `
            <li id="${index}">
                <input type="checkbox" placeholder="">
                <a contenteditable="true">${value.title}</a>
                <button>×</button>
            </li>
            `;
                wcsxNum++;
            }
        })
        wcsx.innerHTML=wcsxString;
        ycsx.innerHTML=ycsxString;
        wcNum.innerHTML=wcsxNum;
        ycNum.innerHTML=ycsxNum;
    }

    function chushihua() {
        let neirong = [
            {title: '买辆劳斯莱斯', done: false},
            {title: '买辆玛莎拉蒂', done: false},
            {title: '自行车有', done: true},
            {title: '自行车棚有', done: true},
        ]
        localStorage.aa = JSON.stringify(neirong)
    }

    function getData() {
        let data=localStorage.aa;
        return JSON.parse(data)
    }
    function baocun(data) {
        localStorage.aa=JSON.stringify(data)
    }

    function add(obj) {
       let data=getData();
       data.push(obj);
       baocun(data);
       lond();
    }
    
    function jieshu(id) {
        let data=getData();
        data[id].done=true;
        baocun(data);
        lond();
    }
    function nojieshu(id) {
        let data=getData();
        data[id].done=false;
        baocun(data);
        lond();
    }
    function shanchu(id) {
        let data=getData();
        data.splice(id,1);
        baocun(data);
        lond();
    }

}
