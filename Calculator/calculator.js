window.onload = function(){
	var num=document.getElementById('in');
	var addBtn=document.getElementById('add');
	var subBtn=document.getElementById('sub');
	var mulBtn=document.getElementById('mul');
	var divBtn=document.getElementById('div');
	var modBtn=document.getElementById('mod');
	var sinBtn=document.getElementById('sin');
	var cosBtn=document.getElementById('cos');
	var tanBtn=document.getElementById('tan');
	var logBtn=document.getElementById('log');
	var sqrtBtn=document.getElementById('sqrt');
	var eqBtn=document.getElementById('eq');
	var clrBtn=document.getElementById('clr');
	var num1,num2,sign,ans;
	
	addBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="+";
	}
	subBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="-";
	}
	mulBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="*";
	}
	divBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="/";
	}
	modBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="%";
	}
	sinBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="sin";
		ans = parseFloat(Math.sin(num1));
		document.getElementById('in').value=ans;
	}
	cosBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="cos";
		ans = parseFloat(Math.cos(num1));
		document.getElementById('in').value=ans;
	}
	tanBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="tan";
		ans = parseFloat(Math.tan(num1));
		document.getElementById('in').value=ans;
	}
	logBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="log";
		ans = parseFloat(Math.log(num1));
		document.getElementById('in').value=ans;
	}
	sqrtBtn.onclick = function(){
		num1=parseFloat(num.value);
		sign="sqr";
		ans = parseFloat(Math.sqrt(num1));
		document.getElementById('in').value=ans;
	}
	eqBtn.onclick = function(){
		if(sign=="sin"||sign=="cos"||sign=="tan"||sign=="log"||sign=="sqr"){
		}
		else{
			num=document.getElementById('in');
			num2=parseFloat(num.value);
			if(sign==="+"){
				ans=num1+num2;
				document.getElementById('in').value=ans;
			}
			else if(sign==="-"){
				ans=num1-num2;
				document.getElementById('in').value=ans;
			}
			else if(sign==="*"){
				ans=num1*num2;
				document.getElementById('in').value=ans;
			}
			else if(sign==="/"){
				ans=num1/num2;
				document.getElementById('in').value=ans;
			}
			else if(sign==="%"){
				ans=num1%num2;
				document.getElementById('in').value=ans;
			}
		}
	}
	clrBtn.onclick = function(){
		document.getElementById('in').value="";
		sign="";
	}
}