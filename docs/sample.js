document.write(dd.toLocaleString());
dd = new Date();
document.write(dd.toLocaleString());
window.onload(function(){
  setInterval(function(){
    var ddd = new Date();
    document.getElementById("T1").innerHTML = ddd.toLocaleString();
  },1000);
})
