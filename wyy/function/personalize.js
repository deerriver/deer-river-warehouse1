$.ajax({
    type:"post",
    url:"http://localhost:3000/personalized?limit=10",
    error:function(){
        alert("cannot get commend song arrary");
    },
    success:function(data){
        console.log(data);
        var id=[],i,name=[],picUrl=[],playCount=[];
            var j=document.getElementsByClassName("person_name"),k=document.getElementsByClassName("person_picurl"),l=document.getElementsByClassName("person_playCount");
            for(i=0;i<data.result.length;i++){
                id[i]=data.result[i].id;
                name[i]=data.result[i].name;
                picUrl[i]=data.result[i].picUrl;
                playCount[i]="▷ "+data.result[i].playCount;
                j[i].innerHTML=name[i];
                k[i].src=picUrl[i];
                l[i].innerHTML=playCount[i];
                
                
            }

    }
})