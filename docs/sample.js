document.write(dd.toLocaleString());
dd = new Date();
document.write(dd.toLocaleString());
window.onload(function(){
  setInterval(function(){
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  },1000);
})
