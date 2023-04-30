
//取消 回车和退格的原意
/*
function disableKeys(eve) 
{ 
   var ev = (document.all) ? window.event : eve; 
   var evCode = (document.all) ? ev.keyCode : ev.which; 
   var srcElement = (document.all) ? ev.srcElement : ev.target; 
   // Enter键 
   if(srcElement.type != "textarea") 
   { 
      if (evCode == 13) 
      { 
         return false; 
      } 
   } 
   // Backspace 
   if(srcElement.type != "textarea" && srcElement.type != "text") 
   { 
      if (evCode == 8) 
      { 
         return false; 
      } 
   } 
} 
(document.all) ? (document.onkeydown = disableKeys) : (document.onkeypress = disableKeys); 

*/
$(window).keydown(function(event){
	//alert(event.target.type + event.keyCode);
	if((event.target.type != 'textarea') && (event.keyCode == 13))event.preventDefault();
	if((event.target.type != 'textarea') && (event.target.type != 'text') && (event.keyCode == 8))event.preventDefault();
});