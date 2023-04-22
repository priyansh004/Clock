let d;
let time;
let da
setInterval(() => {
  

d=new Date();
 date =d.toLocaleDateString()
 time =d.getHours() + ':'+ d.getMinutes() + ':' + d.getSeconds();
document.getElementById('time').innerHTML = time+ ' on day of ' +date;
}, 1000);