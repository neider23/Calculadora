var operandoa;
var operandob;
var operacion;

$(document).ready(function(){
	$("#uno").on("click",function(){
		$("#Operacion").append("1");
	});
	$("#dos").on("click",function(){
		$("#Operacion").append("2");
	});
	$("#tres").on("click",function(){
		$("#Operacion").append("3");
	});
	$("#cuatro").on("click",function(){
		$("#Operacion").append("4");
	});
	$("#cinco").on("click",function(){
		$("#Operacion").append("5");
	});
	$("#seis").on("click",function(){
		$("#Operacion").append("6");
	});
	$("#siete").on("click",function(){
		$("#Operacion").append("7");
	});
	$("#ocho").on("click",function(){
		$("#Operacion").append("8");
	});
	$("#nueve").on("click",function(){
		$("#Operacion").append("9");
	});
	$("#cero").on("click",function(){
		$("#Operacion").append("0");
	});

	$("#reset").on("click",function(){
		resetear();
	});
	$("#suma").on("click",function(){
		operandoa = $("#Operacion").html();
		operacion = "+";
		limpiar();
	});
	$("#resta").on("click",function(){
		operandoa = $("#Operacion").html();
  		operacion = "-";
		limpiar();
	});
	$("#multiplicacion").on("click",function(){
		operandoa = $("#Operacion").html();
  		operacion = "*";
		limpiar();
	});
	$("#division").on("click",function(){
		operandoa = $("#Operacion").html();
  		operacion = "/";
  		limpiar();
	});
	$("#igual").on("click",function(){
		operandob = $("#Operacion").html();
		resolver();
		
	});
});

//Operaciones
function limpiar(){
	 $("#Operacion").html("");
	
}

function resetear(){
	$("#resultado").html("");
	$("#Operacion").html("");

	operandoa = 0;
	operandob = 0;
	operacion = "";
}

function resolver(){
	var res =0;
	switch(operacion){
		
		case "+":
			res = parseFloat(operandoa) + parseFloat(operandob);
			break;

		case "-":
		    res = parseFloat(operandoa) - parseFloat(operandob);
		    break;

		case "*":
			res = parseFloat(operandoa) * parseFloat(operandob);
			break;

		case "/":
			res = parseFloat(operandoa) / parseFloat(operandob);
			break;
	}
	if(operandoa != 0){
		$("#Operacion").html(operandoa +" " + operacion +" " + operandob);
		$("#resultado").html(res);
		operandoa =0;		
	}
}

