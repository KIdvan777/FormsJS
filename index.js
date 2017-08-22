var start = (function(){

document.getElementById('create').onclick = createLi;
  function createLi(){
    var textValue = document.form.text;
    var li = document.createElement('li');
    var text = document.createTextNode('');
    li.appendChild(text);
    li.innerHTML = textValue.value;
    document.getElementById('ul').appendChild(li);

    // Create Border
    li.onclick = function () {
      remBorder();
      li.id = "border";
      li.style.width = "200px";
      li.style.border = "1px solid black";
    };
    
	//Remove Border
    function remBorder(){
      var freeLi = document.getElementsByTagName('li');
        for(var i = 0;i< freeLi.length;i++){
          freeLi[i].id = "";
          freeLi[i].style.width = "";
          freeLi[i].style.border = "";
        };
    };

	// Remove li
  	document.getElementById('delete').onclick = deleteLi;
      function deleteLi(){
        var border = document.getElementById('border');
        var ul = document.getElementById('ul');
        ul.removeChild(border);
  	};
};
	// Change Color
    document.getElementById('change').onclick = change;
      function change() {
        var li = document.getElementById('border');
        var color = document.form.color.value;
          switch (color) {
            case 'red':
              li.style.color = "red";
              li.style.border = "1px solid red";
              break;
              case 'blue':
                li.style.color = "blue";
                li.style.border = "1px solid blue";
                break;
              case 'green':
                li.style.color = "green";
                li.style.border = "1px solid green";
                break;
            default:
          };
		// Change Marker
        var select = document.form.marker;
          for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
             if(option.selected) {
               switch (option.value) {
                 case 'square':
                   li.style.listStyleType = "square";
                   break;
                 case 'disc':
                   li.style.listStyleType = "disc";
                   break;
                 case 'circle':
                   li.style.listStyleType = "circle";
                   break;
                 case 'armenian':
                   li.style.listStyleType = "armenian";
                   break;
                 case 'decimal':
                   li.style.listStyleType = "decimal";
                   break;
                 default:
               	};
            };
        };  
	};
})();

