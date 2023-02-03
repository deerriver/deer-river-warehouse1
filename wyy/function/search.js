            // 历史搜索
            const history=[0];
            if(history===undefined){
                history=[0];
            }
            function History(name){
                history.splice(1,0,name);
                if(history.length!=0){
                    window.parent.document.getElementById("historysearch").style.display="block";
                }
                var j=window.parent.document.getElementsByClassName("his_button"),i;
                if(history.length<=20){
                    for(i=1;i<history.length;i++){
                        j[i-1].innerHTML=history[i];
                        j[i-1].style.display='block';
                    }
                }
                else{
                    for(i=1;i<20;i++){
                        j[i-1].innerHTML=history[i];
                        j[i-1].style.display='block';
                    }
                }
            }
            // 删除历史搜索
            function del(){
                var j=window.parent.document.getElementsByClassName("his_button"),i;
                if(history.length<=20){
                    for(i=1;i<history.length;i++){
                    j[i-1].style.display='none';
                }
                }
                else{
                    for(i=1;i<20;i++){
                        j[i-1].style.display='none';
                    }
                }
                history.length=1;
                window.parent.document.getElementById("historysearch").style.display="none";
            }
            // 搜索历史输入搜索内容
            function his_search(button_id){
                
                var name=window.parent.document.getElementById(button_id).innerText;
                if(name!=0){
                    research(name);
                    return name;
                }
                else{
                    console.log("未输入");
                    return 0;
                }
                
            }
          

  
            // 搜索框输入搜索内容
            function search(){
                var name=document.getElementById("research").value;
                if(name!=0){
                    History(name);
                    window.parent.send_songname(name);
                    return name;
                }
                else{
                    console.log("未输入");
                    return 0;
                }
            }
            

            
// 待完善
// 把获得的id后的信息，搞成一个html页面
// 点击页面歌曲的链接播放音乐