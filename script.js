let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main= document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let mastery = document.querySelector('.mastery');
let mastery1 = document.querySelector('.mastery');
let arena = document.querySelector('.arena');
let arena1 = document.querySelector('.arena1');

let location2 = document.querySelector(".location2"); //локация 2
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let swordBox = document.querySelector('.sword');
let shieldBox = document.querySelector('.shield');
let checker = 0;

school.onclick = function(){
	let prav = document.querySelector('.loc2_pravilno')
	let talk = document.querySelector('.loc2_talk');
	let miss = document.querySelectorAll('.loc2_variants');
	main_player.style.top = "25%";
	main_player.style.left = "70%";

	let loc2_variants_block = document.querySelector(".loc2_variants_block");

	function changeLocation2(){
		main.style.display = 'none';
		body.style.backgroundImage = 'url(bar.jpg)';
		location2.style.display = 'block';
		setTimeout(showBuble, 1000);
		setTimeout(showVariants, 2000);
	}
	function showVariants(){
		loc2_variants_block.style.display = 'block';
	}
	let showBuble = function(){
		talk.style.display = 'block';
	}
	prav.onclick = function() {
		alert('Можешь идти дальше, Синьора');
		main.style.display = 'block';
		arena.style.display = 'block'
		location2.style.display = 'none';
		body.style.backgroundImage = 'url(gay.jpg)';
		body.style.backgroundSize = 'cover';
		checker = checker + 1;
		if(checker>=1){
			swordBox.style.display = 'block';
		}else if (checker >=2) {
			nojniBox.style.display = 'block';
		}else if (checker >=3) {
			shieldBox.style.display = 'block';
		}
	}
	setTimeout(changeLocation2, 1000);
	arena.onclick = function() {
	let location3 = document.querySelector('.location3');
	main_player.style.top = '10%';
	main_player.style.left = '15%';
	function changeLocation3() {
		main.style.display = 'none';
		body.style.background = '#541a0b';
		location3.style.display = 'block'
	}
	document.querySelector('.button').onclick = function() {
		document.querySelector('.box').style.background = "black"
		document.querySelector('.box2').style.background = "black"
		document.querySelector('.box3').style.background = "black"
		document.querySelector('.box4').style.background = "black"
		document.querySelector('.box5').style.background = "black"
		document.querySelector('.box6').style.background = "black"
		document.querySelector('.box2').style.transition = "1s"
		document.querySelector('.box').style.transition = "1s"
		document.querySelector('.box3').style.transition = "1s"
		document.querySelector('.box4').style.transition = "1s"
		document.querySelector('.box5').style.transition = "1s"
		document.querySelector('.box6').style.transition = "1s"
		document.querySelector('.box').style.marginTop = "300px"
		document.querySelector('.box').style.marginLeft = "980px"
		document.querySelector('.box6').style.marginTop = "30px"
		document.querySelector('.box6').style.marginLeft = "650px"
		document.querySelector('.box3').style.marginTop = "300px"
		document.querySelector('.box3').style.marginLeft = "300px"
		document.querySelector('.box2').style.marginTop = "30px"
		document.querySelector('.box2').style.marginLeft = "980px"
		document.querySelector('.box2').style.marginTop = "30px"
		document.querySelector('.box5').style.marginTop = "30px"
		document.querySelector('.box5').style.marginLeft = "300px"
		let score = 3;
	document.querySelector('.box2').onclick = function() {
		score = score - 1;
		document.querySelector('.score').innerHTML = score;
		alert('Это не Тарталья')
		document.querySelector('.box2').style.backgroundImage = "url(loc3/zhon.jpg)"
		document.querySelector('.box2').style.backgroundSize = "100%100%"
		if(score == 0) {
			location3.style.display = 'none'
		alert('You lose. Restarting the game')
		location.reload()
	}
	}
	document.querySelector('.box3').onclick = function() {
		score = score - 1;
		document.querySelector('.score').innerHTML = score;
		alert('Это не Тарталья')
		document.querySelector('.box3').style.backgroundImage = "url(loc3/scar.jpg)"
		document.querySelector('.box3').style.backgroundSize = "100%100%"
		if(score == 0) {
		location3.style.display = 'none'
		alert('You lose. Restarting the game')
		location.reload()
	}
	}
	document.querySelector('.box4').onclick = function() {
		score = score - 1;
		document.querySelector('.score').innerHTML = score;
		alert('Это не Тарталья')
		document.querySelector('.box4').style.backgroundImage = "url(loc3/dot.png)"
		document.querySelector('.box4').style.backgroundSize = "100%100%"
		if(score == 0) {
			location3.style.display = 'none'
		alert('You lose. Restarting the game')
		location.reload()
	}
	}
	document.querySelector('.box5').onclick = function() {
		score = score - 1;
		document.querySelector('.score').innerHTML = score;
		alert('Это не Тарталья')
		document.querySelector('.box5').style.backgroundImage = "url(loc3/zhon.jpg)"
		document.querySelector('.box5').style.backgroundSize = "100%100%"
		if(score == 0) {
			location3.style.display = 'none'
			alert('You lose. Restarting the game')
			location.reload()
		}
	}
	document.querySelector('.box6').onclick = function() {
		score = score - 1;
		document.querySelector('.score').innerHTML = score;
		alert('Это не Тарталья')
		document.querySelector('.box6').style.backgroundImage = "url(loc3/scar.jpg)"
		document.querySelector('.box6').style.backgroundSize = "100%100%"
		if(score == 0) {
			location3.style.display = 'none'
			alert('You lose. Restarting the game')
			location.reload()
		}

	}
	document.querySelector('.box').onclick = function() {
		alert('Молодец, ты нашел виновника торжества. Можешь идти дальше')
		main.style.display = 'block';
		location3.style.display = 'none';
		mastery.style.display = 'block'
		body.style.backgroundImage = 'url(gay.jpg)';
		body.style.backgroundSize = 'cover';
		checker = checker + 1;
			nojniBox.style.display = 'block';	
	}
	}
	setTimeout(changeLocation3, 1000)
}
	mastery.onclick = function() {
		let location4 = document.querySelector('.location4');
		main_player.style.top = '70%';
		main_player.style.left =  '30%';
		function changeLocation4() {
			main.style.display = 'none';
			location4.style.display = 'block';
		}
		let ammo = 0;
	document.querySelector('.img1').onclick = function() {
		document.querySelector('.img1').style.display = "none"
		ammo = ammo + 1;
		document.querySelector('.bullet').innerHTML = ammo;
		document.querySelector('.text1').style.textDecoration = "line-through"
		alert('Ты нашел книгу!')
		if(ammo==3) {
		alert('Молодец, ты прошел до конца!')
		main.style.display = 'block';
		arena.style.display = 'block'
		location4.style.display = 'none';
		body.style.backgroundImage = 'url(gay.jpg)';
		body.style.backgroundSize = 'cover';
		checker = checker + 1;
		shieldBox.style.display = 'block';	
		}
	}
	document.querySelector('.img2').onclick = function() {
		document.querySelector('.img2').style.display = "none"
		ammo = ammo + 1;
		document.querySelector('.bullet').innerHTML = ammo;
		document.querySelector('.text2').style.textDecoration = "line-through"
		alert('Ты нашел фею!')
		if(ammo==3) {
		alert('Молодец, ты прошел до конца!')
		main.style.display = 'block';
		arena.style.display = 'block'
		location4.style.display = 'none';
		body.style.backgroundImage = 'url(gay.jpg)';
		body.style.backgroundSize = 'cover';
		checker = checker + 1;
		shieldBox.style.display = 'block';	
		}
	}
	document.querySelector('.img3').onclick = function() {
		document.querySelector('.img3').style.display = "none"
		ammo = ammo + 1;
		document.querySelector('.bullet').innerHTML = ammo;
		document.querySelector('.text3').style.textDecoration = "line-through"
		alert('Ты нашел водопад!')
		if(ammo==3) {
		alert('Молодец, ты прошел до конца!')
		main.style.display = 'block';
		arena.style.display = 'block'
		location4.style.display = 'none';
		body.style.backgroundImage = 'url(gay.jpg)';
		body.style.backgroundSize = 'cover';
		checker = checker + 1;
		shieldBox.style.display = 'block';	
		}

	}
		setTimeout(changeLocation4, 1000)
	}
}
