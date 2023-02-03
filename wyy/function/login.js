//key不一样 但是生成的base64一样 故而二维码一样 为什么呢？
function login(){
    window.parent.document.getElementById("loginbox").style.display="block";
    newcode();
}
function newcode(){
    var timestamp=new Date().getTime();
    key=qrkey(timestamp);
    // var check=setInterval(async()=>{
    //     let timestamp2=new Date().getTime();
    //     var res =  qrcheck(key,timestamp2);
    //     console.log(res);
        // if(res.data.code==800){
        //     window.parent.document.getElementById("newcode").style.display="block";
        //     console.log("111")
		// 	clearInterval(check);
        // }
        // if(res.data.code==803){
        //     alert("登录成功")
        //     clearInterval(check);
        // }
    // },3000)
}
function qrkey(timestamp){
    $.ajax({
        type:"post",
        url:"http://localhost:3000/login/qr/key?timestamp"+timestamp,
        error:function(){
            alert("cannot get login key")
        },
        success:function(data){
            console.log("get login key");
            console.log(data);
            qrcode(data,timestamp);
            return data;
        }
    })
}

function qrcode(data,timestamp){
    $.ajax({
                type:"post",
                url:"http://localhost:3000/login/qr/create?qrimg=true&key="+data+"&timestamp="+timestamp,
                error:function(){
                    alert("cannot get 2code img");
                    window.parent.document.getElementById("code").src="http://127.0.0.1:5500/project2/wyy/pic/no2code.jpg";
                },
                success:function(data1){
                    console.log(timestamp);
                    console.log(data1);
                    window.parent.document.getElementById("code").src=data1.data.qrimg;
                }
            })
}
function qrcheck(key,timestamp){
    $.ajax({
        type:"post",
        url:"http://localhost:3000/login/qr/check?key="+key+"&timestamp="+timestamp,
        error:function(){
            console.log("qrcheck error");
        },
        success:function(data2){
            var re=data2.code
            console.log("checkdata")
            return re
    }
    })
}

    
