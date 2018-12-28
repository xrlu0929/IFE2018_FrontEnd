// if ("onhashchange" in window) {
//     alert("该浏览器支持 hashchange 事件!");
// }

window.onhashchange = renderHash

function readHash() {
	console.log('readHash:'+ location.hash)
	return location.hash;
}

function renderHash() {
	console.log('readHash:'+ location.hash)
	let content = location.hash;
	console.log('content: ' + content)
	document.getElementById('cont').innerHTML = content
}

// 
var a = document.getElementById('a')
a.onclick=function(){
	console.log('listen hash')
	location.hash=a.value
	console.log(location.hash)
}
var b = document.getElementById('b')
b.onclick=function(){
	console.log('listen hash')
	window.location.hash='#b'
	console.log(location.hash)
}

var c = document.getElementById('c')
c.onclick=function(){
	console.log('listen hash')
	location.hash=c.value
	console.log(location.hash)
}

renderHash()