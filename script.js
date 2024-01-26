d0 = new Date(); 
d0.setFullYear((new Date()).getMonth() < 9 ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear(), 8, 1); 
d1 = new Date(); 
dt = Math.floor(((d1.getTime() - d0.getTime() + 1000*60*60*24) / (1000*60*60*24*7)) + 1); 
if (dt % 2 == 0) document.getElementById('name').innerHTML = <h1>Четная</h1>;
else document.getElementById('name').innerHTML = <h1>Нечетная</h1>;