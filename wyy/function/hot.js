function hot(){
    if(window.parent.document.getElementById("hot").style.display=="none"){
        window.parent.document.getElementById("hot").style.display="block";
    }
    else{
        window.parent.document.getElementById("hot").style.display="none";
    }
    $.ajax({
        type:"post",
        url:"http://localhost:3000/search/hot/detail",
        error:function(){
            alert("error3");
        },
        success:function(data){
            var searchword=[],i,score=[],content=[];
            var j=window.parent.document.getElementsByClassName("hot1"),k=window.parent.document.getElementsByClassName("hot2"),l=window.parent.document.getElementsByClassName("hot3");
            for(i=0;i<data.data.length;i++){
                searchword[i]=data.data[i].searchWord;
                score[i]=data.data[i].score;
                content[i]=data.data[i].content;
                j[i].innerHTML=searchword[i];
                k[i].innerHTML=score[i];
                l[i].innerHTML=content[i];
                
                
            }
            console.log(score);

            
        }
    })


}