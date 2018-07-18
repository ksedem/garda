
$(document).ready(function(){

	var quotes=[["«Ничто так не развивает ум, как путешествие»", "Эмиль Золя"], ["«Путешествовать необходимо тем, кто учится»", "Марк Твен"], ["«Посмотри на мир. Он куда удивительнее cнов»", "Рэй Брэдберри"], ["«Жизнь — это либо отчаянное приключение, либо ничего»", "Хеллен Келлер"], ["«Как только подхватываешь лихорадку путешественника, ты уже не можешь от нее излечиться и будешь заражен ей до конца жизни»", "Майкл Пейлин"], ["«Раз в году, посещай место, где ты никогда не был»", "Далай Лама"]];
	
	var i=0;

	if (document.body.clientHeight >= document.body.scrollHeight) {
		document.getElementById('footer').style.position="absolute";
	};



	function Change_quotes () {
		document.getElementById('quote').innerHTML = quotes[i][0];
		document.getElementById('author').innerHTML = quotes[i][1];

		var h=document.getElementById('bl_quote').offsetHeight;
		if (h>317) {
			document.getElementById('quote').style.fontSize='1.2em';
			document.getElementById('author').style.fontSize='1em';
		} else {
			document.getElementById('quote').style.fontSize='1.5em';
			document.getElementById('author').style.fontSize='1.3em';
		}

		if (i>=quotes.length-1) {
			i=0;
		} else {
			i++;
		}
		
	};

	Change_quotes();
	setInterval(Change_quotes, 4000);

});

