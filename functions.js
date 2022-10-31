$(document).ready(function(){
    $(".menu a").click(function(){

        var link=$(this).attr("href"); //This here will do the trick :)

        if(link=="index.html"){ 
            alert("load content 1"); //$("#content").load("content1.html");
        }
        else if(link=="pag02.html"){
            alert("load content 2"); //$("#content").load("content2.html");
        }
        else if(link=="pag03.html"){
            alert("load content 3"); //$("#content").load("content3.html");
        }
        else if(link=="pag04.html"){
            alert("load content 4"); //$("#content").load("content4.html");
        }
    })
  });