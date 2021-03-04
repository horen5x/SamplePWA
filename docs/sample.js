dd = new Date();
document.write(dd.toLocaleString());
window.addEventListener('load',function(){
  setInterval(function(){
    dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  },1000);
})
