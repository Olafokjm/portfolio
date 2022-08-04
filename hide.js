window.onload = function(){
    document.getElementById('info1').style.display = 'none';
    document.getElementById('info2').style.display = 'none';
  }

function hide1(){
    document.getElementById('info1').style.display = "none";
    document.getElementById('info2').style.display = "";
}

function hide2(){
    document.getElementById('info2').style.display = "none";
    document.getElementById('info1').style.display = "";
}