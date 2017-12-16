
	
	var add_boxes = document.querySelector('#wrapper');
	var change_color_back = document.querySelector('#header');
	var change_color_text = document.querySelector('#header .Menu');
	var end_game = document.querySelector('#header .End_game');
	var rules = document.querySelector('#header #rules');
	var rules_block = document.querySelector('#header .Rules');
	var change_level = document.querySelector('#change_level');
	var reload_page = document.querySelector('#reload');
	var audio = document.querySelector('#audio');
	var size = 4;
	var sad_smile_number = 0;
	var smile_number = 0;
	var ver;
	var hor;
	rules_block.style.display = 'none';
	
	Work(size);
		
		
	rules.onclick = function() {
		
		if (rules_block.style.display == 'none') {
			
		add_boxes.style.display = 'none';
		rules_block.style.display = 'block';
		
		}
		
		else {
			
		rules_block.style.display = 'none';
		add_boxes.style.display = 'block';
		Work(size);
		
		}			
	}
		
		change_level.onclick = function(){
			
			add_boxes.innerHTML = '';
			size = Number(prompt ('Введіть число N для гри на квадраті NхN:'));
			
			if (size > 0 && size < 12) {}
			
			else if (size >=12) {
			
				size = 11;
				
			}
			
			else {
				
				size = 4;
				
			}
			
			add_boxes.style.display = 'block';
			end_game.style.display = 'none';
			change_color_back.style.background = 'white';
			rules_block.style.color = 'black';
			change_color_text.style.color = 'black';
			audio.src = 'Background.mp3';
			Work(size);
			
		}
		
		reload_page.onclick = function() {		
		
			
			if (rules_block.style.display == 'block') {
			
			rules_block.style.display = 'none';
			
			}
			
			if (change_color_text.style.color == 'white') {
				
				audio.src = 'Background.mp3';
				
			}
				
			add_boxes.style.display = 'block';
			end_game.style.display = 'none';
			change_color_back.style.background = 'white';
			rules_block.style.color = 'black';
			change_color_text.style.color = 'black';
			Work(size);
		
		}
		
				

	function Work(size) {
		
		for(var i = 0; i < size; i++) {
			
				for(var j = 0; j < size; j++) {
					
					add_boxes.style.height = 150*size + 'px';
					add_boxes.style.width = 150*size + 'px';
					add_boxes.innerHTML += '<div id="box' + i + j + '"></>';
					var box_selector = document.querySelector("#box" + i + j);
					
					box_selector.style.height = '150px';
					box_selector.style.width = '150px';
					box_selector.style.float = 'left';
					box_selector.style.border = 'border: 4px  black';
					
					var box_color = Math.floor(Math.random() * (2) ) + 0;
					
					if (box_color == 0){
						
						if (sad_smile_number < (size*size-1) ) {
							
							box_selector.className = 'Sadsmileclass';
							sad_smile_number++;
							
						}
						
						else {
							
							box_selector.className = 'Smileclass';
							smile_number++;
						}
					}
					
					if (box_color == 1){
						
						if (smile_number < (size*size-1)) {
							
							box_selector.className = 'Smileclass';
							smile_number++;
							
						}
						
						else {
							
							box_selector.className = 'Sadsmileclass';
							sad_smile_number++;
							
						}
					}		
				}
				
				add_boxes.innerHTML += '</br>';
				
		}
				
						
		var boxes = document.querySelectorAll('#header #wrapper div');
		
		for(var j = 0; j < boxes.length; j++) {
			
			boxes[j].addEventListener('click', Shift(j) );
					
		}
					
		function Shift(index_mas) {
			return function (e) {
				var k = 0;
				hor = index_mas;
				ver = index_mas + size;
				do {
					
					(boxes[hor].className == 'Smileclass'? boxes[hor].className = 'Sadsmileclass': boxes[hor].className = 'Smileclass');
					
					if ( ( (hor + 1) % (size) ) == 0 ) {
						
						hor = hor - (size - 1);
					
					}
							
					else {
						
						hor++;
					
					}
					
					if (ver >= (size * size) ) {
						
						ver = ver - (size * size);
						
					}
					
					if ( ver != index_mas ) {
								 
						(boxes[ver].className == 'Smileclass' ? boxes[ver].className = 'Sadsmileclass': boxes[ver].className = 'Smileclass');
						ver = ver + size;

					}
				}
				while (hor != index_mas);
					
				for(var i = 0, counter = 0; i < boxes.length; i++) {
					
					if (boxes[i].className == 'Smileclass') {
						
						counter++;
						
						if (counter == (size * size) ) {
							
							add_boxes.style.display = 'none';
							end_game.style.display = 'block';
							change_color_back.style.background = 'black';
							change_color_text.style.color = 'white';
							audio.src = 'Winning.mp3';
							rules_block.style.color = 'white';
							
						}
					}								
				}
			} 			
		}
	}
			
			