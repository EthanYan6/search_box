window.onload = function(){
    var btn = document.getElementsByClassName('button')[0];
    var btn2 = document.getElementsByClassName('button')[1];
    var value = document.getElementsByClassName('text')[0];
    btn.onclick = function(){
        location = 'https://weixin.sogou.com/weixin?type=2&s_from=input&query='+ value.value +'&ie=utf8'
        
    };
    btn2.onclick = function(){
        location = 'https://weixin.sogou.com/weixin?type=1&s_from=input&query='+ value.value +'&ie=utf8'
    }
}