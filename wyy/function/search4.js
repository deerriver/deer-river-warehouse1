function geturl(id){
    $.ajax({
    type:"post",
    url:"http://localhost:3000/song/url?id="+id,
    error:function(){
        alert("error2");
    },
    success :function(data){
        console.log(data)
        var url=data.data[0].url
        
        console.log(url)
        if(url==null){
            console.log("cannot get url,now is default")
            document.getElementById("audio1").src="http://m7.music.126.net/20230204151253/57712aef9b84a6293748e40ee6bbabf7/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
            }
        else{
            document.getElementById("audio1").src=url
        }
    }
    })
}
// 获取url

function search_songdata1(songdata){
    document.getElementById("bottom").style.display="flex";
    document.getElementById("songdemo").src=songdata.album.artist.img1v1Url
    document.getElementById("songname").innerHTML=songdata.name
    document.getElementById("artist").innerHTML=songdata.artists[0].name
    geturl(songdata.id)
}