var colors, colors2;
var a1=[2,3,4,6]
var d1=[0,5,10,15]
var it=1
var time=58;
var sqs = document.querySelectorAll(".sq");
var pa=document.querySelector("#pa");
var diff=40;
var sc=document.querySelector("#sc");
var lost,s=0,ww;
var nos=4;
var start=false;
init();
var msg=document.querySelector("#msg");
var tt=document.querySelector("#demo");

function init(){
	lost =false;
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	colors="rgb(" + r + ", " + g + ", " + b + ")"
	if(r>256-diff)
		r-=diff;
	else
		r+=diff;
	if(g>256-diff)
		g-=diff;
	else
		g+=diff;
	if(b>256-diff)
		b-=diff;
	else
		b+=diff;
	colors2="rgb(" + r + ", " + g + ", " + b + ")"

	r=Math.floor(Math.random() * nos);
	ww=r;
	for(var i=0;i<nos;i++){
		if(i!=r)
			sqs[i].style.backgroundColor=colors;
		else
			sqs[i].style.background=colors2;
	}
}
for(var i=0;i<36;i++){
	sqs[i].addEventListener("click", function(){
		if(!lost){
		start=true;	
		if(this.style.background==colors2){
			s++;
			sc.textContent=s;
			diff=((diff-1)>15)?diff-1:15;
			if(s==d1[it]){
				dothis(it);
				it++;
			}
			init();
		}
		else{
			wrong(0);
		}
		}
	})
}

function wrong(num){
	lost=true; start=false;
	sqs[ww].classList.add("hi");
	pa.classList.remove("myhid");
	if(num==0)
		msg.textContent="wrong";
	else
		msg.textContent="time over";
}
var x=setInterval(function(){
	if(start){
	console.log(start);
	if(time>9)
		tt.textContent=time;
	else
		tt.textContent="0"+time;
	if(time==0)
		wrong(1);
	time--;
}
},1000)

pa.addEventListener("click",function(){
	s=0;
	time=59;
	diff=40;
	sc.textContent=s;
	sqs[ww].classList.remove("hi");
	pa.classList.add("myhid");
	msg.textContent="";
	tt.textContent=time;
	nos=4;
	for(var i=0;i<36;i++){
		if(i>3){
		sqs[i].classList.add("myhid");
		}
		if(i<4){
		sqs[i].classList.add("col-xs-6");
		sqs[i].classList.add("mysq0");
		}
		sqs[i].classList.remove("col-xs-4");
		sqs[i].classList.remove("col-xs-3");
		sqs[i].classList.remove("col-xs-2");
		sqs[i].classList.remove("mysq3");
		sqs[i].classList.remove("mysq2");
		sqs[i].classList.remove("mysq1");
	}
	it=1;
	init();
});

function dothis(num){

	var st="col-xs-"+(12/a1[num]);
	var sto="col-xs-"+(12/a1[num-1]);
	var st2="mysq"+(num);
	var sto2="mysq"+(num-1);
	nos=a1[num]*a1[num];
	for(var i=0;i<nos;i++){
		sqs[i].classList.remove("myhid");
		sqs[i].classList.remove(sto);
		sqs[i].classList.add(st);
		sqs[i].classList.remove(sto2);
		sqs[i].classList.add(st2);
	}
}