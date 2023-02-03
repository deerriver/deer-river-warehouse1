
            function search2(name){
                // 发起搜索 找到音乐id
               $.ajax({
                type:"post",
                url:"http://localhost:3000/search?keywords="+name,
                data:{
                    "type":1,
                },
                error :function(){
                    alert("error");
                },
                success:function(data){
                    console.log(data);
                    document.getElementById("Count").innerHTML=data.result.songCount
                    var id=document.getElementsByClassName("id"),f,i,j=document.getElementsByClassName("name"),k=document.getElementsByClassName("artist"),m=document.getElementsByClassName("albumname"),n=document.getElementsByClassName("time"),l=document.getElementsByClassName("alias");
                    for(i=0;i<data.result.songs.length;i++){
                        j[i].innerHTML=data.result.songs[i].name+" "+data.result.songs[i].alias;
                        k[i].innerHTML=data.result.songs[i].artists[0].name;
                        m[i].innerHTML=data.result.songs[i].album.name;
                        f=data.result.songs[i].duration;
                        n[i].innerHTML=time(f);
                        id[i].innerHTML=data.result.songs[i].album.id;
                    }
                   } 
            })

            }
            
 
                        function time(my_time) {  
                        
                        var minutes = my_time / 1000 / 60 ;
                        var minutesRound = Math.floor(minutes);
                        var seconds = my_time / 1000 - (60 * minutesRound);
                        seconds=parseInt(seconds)
                        
                        var time = minutesRound + ':' + seconds
                        return time;
                        }
            //之前想着储存数据 后面发现不如直接传参 所以不需要啦
                    // console.log(name);
                    // var i=0;
                    // var song_id=[],song_name=[],song_Count=data.result.songCount;
                    // for(;i<data.result.songs.length;i++){
                    //     song_id[i]=data.result.songs[i].id;
                    //     song_name[i]=data.result.songs[i].name;
                    // }
                    // console.log(song_Count);
                    // console.log(data);

                    // // 都可以 改变src 这个方法没有传数据好 所以舍去
                    // var k=window.parent.iframeContent.document.getElementById("iframeRight")
                    // k.src="/project2/wyy/wyy-content/wyy-content-search.html"
                    // // top.window.frames["iframeContent"].document.getElementById("iframeRight").src="/project2/wyy/wyy-content/wyy-content-search.html"
                    // k.onload=function(){
                    //     window.parent.document.getElementById("iframeContent").contentWindow.document.getElementById("iframeRight").contentWindow.document.getElementById("Count").innerHTML=song_Count

                    // }
                   
                    
                    

                 function music(id){
                    
                    var id=$('#'+id).children("span").eq(4).text()
                    console.log(id);
                   
                    // 获取url
                        $.ajax({
                        type:"post",
                        url:"http://localhost:3000/song/url?id="+id,
                        error:function(){
                            alert("error2");
                        },
                        success :function(data){
                            console.log(data)
                            var url=data.data[0].url
                            console.log(url);
                            
                        }
                        })
                 }