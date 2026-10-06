var $=function(s){return document.querySelector(s)},dg=$('#dg');
var P=C[document.body.getAttribute('data-page')];
function alt(k){return (/^(Honda|Bajaj|Yamaha|Suzuki)$/.test(k)?'Moto ':'')+k}
function show(m){dg.innerHTML='<div class="dg"><div class="im"><img class="big" alt="'+alt(m[0])+'" src="'+F[m[0]]+'"></div><div class="tx"><h3>'+m[0]+'</h3><span class="tag">'+m[1]+'</span><h4>Sobre el vehículo</h4><p>'+m[2]+'</p><h4>Uso en El Salvador</h4><p>'+m[3]+'</p><button type="button" class="ghost" id="x">Cerrar</button></div></div>';dg.showModal();$('#x').onclick=function(){dg.close()}}
dg.addEventListener('click',function(e){if(e.target===dg)dg.close()});
if(P){document.querySelectorAll('.card.m[data-i]').forEach(function(b){b.onclick=function(){show(P.m[+b.getAttribute('data-i')])}})}
