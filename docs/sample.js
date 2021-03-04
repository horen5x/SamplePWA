dd = new Date();
document.write(dd.toLocaleString());
window.addEventListener('load',function(){
  setInterval(function(){
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  },1000);
})
