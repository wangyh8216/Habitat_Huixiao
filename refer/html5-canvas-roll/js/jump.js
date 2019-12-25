
function jump_execution(){
	//alert("jump_execution");
	window.location.href = "../../index.html" ;
}
function jump_delay(){
	//alert("jump");
	//setTimeout(alert("1"), 3000); //1秒就是1000
	setTimeout(jump_execution, 2000); //1秒就是1000
}
