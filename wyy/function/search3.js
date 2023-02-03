function search3(id){
    var name=$('#'+id+' span:first').text();
    window.frames["iframeTop"].History(name);
    send_songname(name);

}