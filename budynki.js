function start2(){
	$('#budka .tekstbutona').html('Koszt: '+konwersja(cenabudka)+'&nbsp</br>Daje: '+konwersja(budkanaklik)+' PC/ '+konwersja(budkanasekunde)+' PS&nbsp</br>Ilość budek: '+budka+'&nbsp');
	$('#sklep .tekstbutona').html('Koszt: '+konwersja(cenasklep)+'&nbsp</br>Daje: '+konwersja(sklepnaklik)+' PC/ '+konwersja(sklepnasekunde)+' PS&nbsp</br>Ilość sklepów: '+sklep+'&nbsp');
	$('#magazyn .tekstbutona').html('Koszt: '+konwersja(cenamagazyn)+'&nbsp</br>Daje: '+konwersja(magazynnaklik)+' PC/ '+konwersja(magazynnasekunde)+' PS&nbsp</br>Ilość magazynów: '+ magazyn+'&nbsp');
	$('#biuro .tekstbutona').html('Koszt: '+konwersja(cenabiuro)+'&nbsp</br>Daje: '+konwersja(biuronaklik)+' PC/ '+konwersja(biuronasekunde)+' PS&nbsp</br>Ilość biur: '+ biuro+'&nbsp');
	$('#knajpa .tekstbutona').html('Koszt: '+konwersja(cenaknajpa)+'</br>Daje: '+konwersja(knajpanaklik)+' PC/ '+konwersja(knajpanasekunde)+' PS</br>Ilość knajp: '+knajpa+'&nbsp');
	$('#market .tekstbutona').html('Koszt: '+konwersja(cenamarket)+'</br>Daje: '+konwersja(marketnaklik)+' PC/ '+konwersja(marketnasekunde)+' PS</br>Ilość marketów: '+market+'&nbsp');
	$('#parking .tekstbutona').html('Koszt: '+konwersja(cenaparking)+'</br>Daje: '+konwersja(parkingnaklik)+' PC/ '+konwersja(parkingnasekunde)+' PS</br>Ilość parkingów: '+parking+'&nbsp');
	$('#firma .tekstbutona').html('Koszt: '+konwersja(cenafirma)+'</br>Daje: '+konwersja(firmanaklik)+' PC/ '+konwersja(firmanasekunde)+' PS</br>Ilość firm: '+firma+'&nbsp');
	$('#hotel .tekstbutona').html('Koszt: '+konwersja(cenahotel)+'</br>Daje: '+konwersja(hotelnaklik)+' PC/ '+konwersja(hotelnasekunde)+' PS</br>Ilość hoteli: '+hotel+'&nbsp');
	$('#uniwersytet .tekstbutona').html('Koszt: '+konwersja(cenauniwersytet)+'</br>Daje: '+konwersja(uniwersytetnaklik)+' PC/ '+konwersja(uniwersytetnasekunde)+' PS</br>Ilość uniwersytetów: '+uniwersytet+'&nbsp');
	$('#intel .tekstbutona').html('Koszt: '+konwersja(cenaintel)+'</br>Daje: '+konwersja(intelnaklik)+' PC/ '+konwersja(intelnasekunde)+' PS</br>Ilość intelów: '+intel+'&nbsp');
	
var wczytaneacziki = Cookies.get('zapisaneacziki').split(",");
		flag1 = parseInt(wczytaneacziki[1]);
		flag100 = parseInt(wczytaneacziki[2]);
		flag10000 = parseInt(wczytaneacziki[3]);
		flag1000000 = parseInt(wczytaneacziki[4]);
		flags1 = parseInt(wczytaneacziki[5]);
		flags100 = parseInt(wczytaneacziki[6]);
		flags10000 = parseInt(wczytaneacziki[7]);
		flags1000000 = parseInt(wczytaneacziki[8]);
	
	if(flag1 == 1){
		$('#1').html('<img src="./acziki/1.png" alt="">');
	};
	if(flag100 == 1){
		$('#2').html('<img src="./acziki/100.png" alt="">');
	};
	if(flag10000 == 1){
		$('#3').html('<img src="./acziki/10k.png" alt="">');
	};
	if(flag1000000 == 1){
		$('#4').html('<img src="./acziki/1m.png" alt="">');
	};
	if(flags1 == 1){
		$('#5').html('<img src="./acziki/1s.png" alt="">');
	};
	if(flags100 == 1){
		$('#6').html('<img src="./acziki/100s.png" alt="">');
	};
	if(flags10000 == 1){
		$('#7').html('<img src="./acziki/10ks.png" alt="">');
	};
	if(flags1000000 == 1){
		$('#8').html('<img src="./acziki/1ms.png" alt="">');
	};
	
	var wczytanepinionszki = Cookies.get('zapisanepinionszki').split(",");
	pieniadze = parseInt(wczytanepinionszki[5]);

	iloscklikniec = parseInt(wczytanepinionszki[3]);
	iloscwyprodukowanych = parseInt(wczytanepinionszki[4]);
		
	var wczytanebudynki = Cookies.get('budynki').split(",");
		for (var i = 0; i < wczytanebudynki[1]; i++) {
			pieniadze += cenabudka;
			$('#budka').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[2]; i++) {
			pieniadze += cenasklep;
			$('#sklep').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[3]; i++) {
			pieniadze += cenamagazyn;
			$('#magazyn').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[4]; i++) {
			pieniadze += cenabiuro;
			$('#biuro').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[5]; i++) {
			pieniadze += cenaknajpa;
			$('#knajpa').trigger("click");
		};			
		for (var i = 0; i < wczytanebudynki[6]; i++) {
			pieniadze += cenamarket;
			$('#market').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[7]; i++) {
			pieniadze += cenafirma;
			$('#firma').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[8]; i++) {
			pieniadze += cenaparking;
			$('#parking').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[9]; i++) {
			pieniadze += cenahotel;
			$('#hotel').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[10]; i++) {
			pieniadze += cenauniwersytet;
			$('#uniwersytet').trigger("click");
		};
		for (var i = 0; i < wczytanebudynki[11]; i++) {
			pieniadze += cenaintel;
			$('#intel').trigger("click");
		};
};

/*COOKIES*/

setInterval(function(){
	var zapisanepinionszki = [0,naklik,nasekunde,iloscklikniec,iloscwyprodukowanych,pieniadze,0];
	var zapisanebudynki = [0,budka,sklep,magazyn,biuro,knajpa,market,firma,parking,hotel,uniwersytet,intel,0];
	var zapisaneacziki = [0,flag1,flag100,flag10000,flag1000000,flags1,flags100,flags10000,flags1000000,0];
	Cookies.set('budynki',zapisanebudynki, { expires: 365, path: '' });
	Cookies.set('zapisanepinionszki',zapisanepinionszki, { expires: 365, path: '' });
	Cookies.set('zapisaneacziki',zapisaneacziki, { expires: 365, path: '' });
},1000);


/* ZMIENNE */
var naklik = 1;
var nasekunde = 0;
var iloscklikniec = 0;
var iloscwyprodukowanych = 0;
var pieniadze = 0;
/* ZMIENNE */

$(function(){
	$('.portfel').click(function(){
 		pieniadze += naklik;
 		iloscwyprodukowanych += naklik;
 		iloscklikniec++;
		dolicznika();
	});
});

/*$(function(){
	$('#kasuj').click(function(){
		Cookies.remove('budynki',{path: '' });
		Cookies.remove('zapisanepinionszki',{path: '' });
		Cookies.remove('zapisaneacziki',{path: '' });
		location.reload();
	});
});*/

setInterval(function(){
	pieniadze += nasekunde;
	iloscwyprodukowanych += nasekunde;
	dolicznika();
},1000);


var popflag = 0;
function popup(tekst){
	if (popflag == 0){
		popflag = 1;
		$('#popup').html(tekst).animate({opacity: "1"}, 300).delay(2000).animate({opacity: "0"}, 300,function(){popflag = 0;});		
	};
};


function staty(){
	$('#staty').html('Dostajesz '+konwersja(naklik)+' na klik i '+ konwersja(nasekunde)+' na sekundę!');
};


function dolicznika(){
	$('title').html('Rich &nbsp&nbsp|&nbsp&nbsp'+konwersja(pieniadze));
	$('.tekstlicznika').html(konwersja(pieniadze));
};


var budka = 0;
var cenabudka = 15;
var budkanasekunde = 0;
var budkanaklik = 1;

$(function() {
	$('#budka').click(function(){
		if(pieniadze >= cenabudka){
			pieniadze -= cenabudka;
			budka += 1;
			cenabudka += cenabudka/10;
			nasekunde += budkanasekunde;
			naklik += budkanaklik;
			staty();
			dolicznika();
			$('#budka .tekstbutona').html('Koszt: '+konwersja(cenabudka)+'&nbsp</br>Daje: '+konwersja(budkanaklik)+' PC/ '+konwersja(budkanasekunde)+' PS&nbsp</br>Ilość budek: '+budka+'&nbsp');
		}
		else{
			popup("Nie stać Cię!");
		}
	})
});

var sklep = 0;
var cenasklep = 100;
var sklepnasekunde = 2;
var sklepnaklik = 5;

$(function() {
	$('#sklep').click(function(){
		if(pieniadze >= cenasklep){
			pieniadze -= cenasklep;
			sklep += 1;
			cenasklep += cenasklep/10;
			nasekunde += sklepnasekunde;
			naklik += sklepnaklik;
			staty();
			dolicznika();
			$('#sklep .tekstbutona').html('Koszt: '+konwersja(cenasklep)+'&nbsp</br>Daje: '+konwersja(sklepnaklik)+' PC/ '+konwersja(sklepnasekunde)+' PS&nbsp</br>Ilość sklepów: '+sklep+'&nbsp');
		}
		else{
			popup("Nie stać Cię!");
		}
	})
});


var magazyn = 0;
var cenamagazyn = 5000;
var magazynnasekunde = 15;
var magazynnaklik = 25;

$(function() {
	$('#magazyn').click(function(){
		if(pieniadze >= cenamagazyn){
			pieniadze -= cenamagazyn;
			magazyn += 1;
			cenamagazyn += cenamagazyn/10;
			nasekunde += magazynnasekunde;
			naklik += magazynnaklik;
			staty();
			dolicznika();
			$('#magazyn .tekstbutona').html('Koszt: '+konwersja(cenamagazyn)+'&nbsp</br>Daje: '+konwersja(magazynnaklik)+' PC/ '+konwersja(magazynnasekunde)+' PS&nbsp</br>Ilość magazynów: '+ magazyn+'&nbsp');
		}
		else{
			popup("Nie stać Cię!");
		}
	});
});

var biuro = 0;
var cenabiuro = 50000;
var biuronasekunde = 50;
var biuronaklik = 100;

$(function() {
	$('#biuro').click(function(){
		if(pieniadze >= cenabiuro){
			pieniadze -= cenabiuro;
			biuro += 1;
			cenabiuro += cenabiuro/10;
			nasekunde += biuronasekunde;
			naklik += biuronaklik;
			staty();
			dolicznika();
			$('#biuro .tekstbutona').html('Koszt: '+konwersja(cenabiuro)+'&nbsp</br>Daje: '+konwersja(biuronaklik)+' PC/ '+konwersja(biuronasekunde)+' PS&nbsp</br>Ilość biur: '+ biuro+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	})
});

var knajpa = 0;
var cenaknajpa = 500000;
var knajpanasekunde = 200;
var knajpanaklik = 100;

$(function() {
	$('#knajpa').click(function(){
		if(pieniadze >= cenaknajpa){
			pieniadze -= cenaknajpa;
			knajpa += 1;
			cenaknajpa += cenaknajpa/10;
			nasekunde += knajpanasekunde;
			naklik += knajpanaklik;
			staty();
			dolicznika();
			$('#knajpa .tekstbutona').html('Koszt: '+konwersja(cenaknajpa)+'</br>Daje: '+konwersja(knajpanaklik)+' PC/ '+konwersja(knajpanasekunde)+' PS</br>Ilość knajp: '+knajpa+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	})
});


var market = 0;
var cenamarket = 1250000;
var marketnasekunde = 500;
var marketnaklik = 200;

$(function() {
	$('#market').click(function(){
		if(pieniadze >= cenamarket){
			pieniadze -= cenamarket;
			market += 1;
			cenamarket += cenamarket/10;
			nasekunde += marketnasekunde;
			naklik += marketnaklik;
			staty();
			dolicznika();
			$('#market .tekstbutona').html('Koszt: '+konwersja(cenamarket)+'</br>Daje: '+konwersja(marketnaklik)+' PC/ '+konwersja(marketnasekunde)+' PS</br>Ilość marketów: '+market+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	});
});

var firma = 0;
var cenafirma = 100000000;
var firmanasekunde = 2000;
var firmanaklik = 500;

$(function() {
	$('#firma').click(function(){
		if(pieniadze >= cenafirma){
			pieniadze -= cenafirma;
			firma += 1;
			cenafirma += cenafirma/10;
			nasekunde += firmanasekunde;
			naklik += firmanaklik;
			staty();
			dolicznika();
			$('#firma .tekstbutona').html('Koszt: '+konwersja(cenafirma)+'</br>Daje: '+konwersja(firmanaklik)+' PC/ '+konwersja(firmanasekunde)+' PS</br>Ilość firm: '+firma+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	});
});


var parking = 0;
var cenaparking = 500000000;
var parkingnasekunde = 6500;
var parkingnaklik = 10000;

$(function() {
	$('#parking').click(function(){
		if(pieniadze >= cenaparking){
			pieniadze -= cenaparking;
			parking += 1;
			cenaparking += cenaparking/10;
			nasekunde += parkingnasekunde;
			naklik += parkingnaklik;
			staty();
			dolicznika();
			$('#parking .tekstbutona').html('Koszt: '+konwersja(cenaparking)+'</br>Daje: '+konwersja(parkingnaklik)+' PC/ '+konwersja(parkingnasekunde)+' PS</br>Ilość parkingów: '+parking+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	});
});

var hotel = 0;
var cenahotel = 10000000000;
var hotelnasekunde = 50000;
var hotelnaklik = 25000;

$(function() {
	$('#hotel').click(function(){
		if(pieniadze >= cenahotel){
			pieniadze -= cenahotel;
			hotel += 1;
			cenahotel += cenahotel/10;
			nasekunde += hotelnasekunde;
			naklik += hotelnaklik;
			staty();
			dolicznika();
			$('#hotel .tekstbutona').html('Koszt: '+konwersja(cenahotel)+'</br>Daje: '+konwersja(hotelnaklik)+' PC/ '+konwersja(hotelnasekunde)+' PS</br>Ilość hoteli: '+hotel+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	});
});

var uniwersytet = 0;
var cenauniwersytet = 1000000000000;
var uniwersytetnasekunde = 150000;
var uniwersytetnaklik = 125000;

$(function() {
	$('#uniwersytet').click(function(){
		if(pieniadze >= cenauniwersytet){
			pieniadze -= cenauniwersytet;
			uniwersytet += 1;
			cenauniwersytet += cenauniwersytet/10;
			nasekunde += uniwersytetnasekunde;
			naklik += uniwersytetnaklik;
			staty();
			dolicznika();
			$('#uniwersytet .tekstbutona').html('Koszt: '+konwersja(cenauniwersytet)+'</br>Daje: '+konwersja(uniwersytetnaklik)+' PC/ '+konwersja(uniwersytetnasekunde)+' PS</br>Ilość uniwersytetów: '+uniwersytet+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	});
});

var intel = 0;
var cenaintel = 1000000000000000;
var intelnasekunde = 225000;
var intelnaklik = 200000;

$(function() {
	$('#intel').click(function(){
		if(pieniadze >= cenaintel){
			pieniadze -= cenaintel;
			intel += 1;
			cenaintel += cenaintel/10;
			nasekunde += intelnasekunde;
			naklik += intelnaklik;
			staty();
			dolicznika();
			$('#intel .tekstbutona').html('Koszt: '+konwersja(cenaintel)+'</br>Daje: '+konwersja(intelnaklik)+' PC/ '+konwersja(intelnasekunde)+' PS</br>Ilość intelów: '+intel+'&nbsp');
		}
		else{
			popup('Nie stać Cię!');
		}
	});
});

/* ACZIKI */
var flag1 = 0;
var flag100 = 0;
var flag10000 = 0;
var flag1000000 = 0;
var flags1 = 0;
var flags100 = 0;
var flags10000 = 0;
var flags1000000 = 0;


setInterval(function(){
	if(pieniadze>=1 && flag1 == 0 && popflag == 0){
		flag1 = 1;
		staty();
		popup("Pierwszy dolar!");
		$('#1').html('<img src="./acziki/1.png" alt="">');
	}
	if(pieniadze>=100 && flag100 == 0 && popflag == 0){
		flag100 = 1;
		staty();
		popup("Zarobiłeś 100!");
		$('#2').html('<img src="./acziki/100.png" alt="">');
	}
	if(pieniadze>=10000 && flag10000 == 0 && popflag == 0){
		flag10000 = 1;
		staty();
		popup("Zarobiłeś 10000!");
		$('#3').html('<img src="./acziki/10k.png" alt="">');
	}
	if(pieniadze>=1000000 && flag1000000 == 0 && popflag == 0){
		flag1000000 = 1;
		staty();
		popup("Zarobiłeś 1000000!");
		$('#4').html('<img src="./acziki/1m.png" alt="">');
	}
	if(nasekunde>=1 && flags1 == 0 && popflag == 0){
		flags1 = 1;
		staty();
		popup("1 na sekundę!");
		$('#5').html('<img src="./acziki/1s.png" alt="">');
	}
	if(nasekunde>=100 && flags100 == 0 && popflag == 0){
		flags100 = 1;
		staty();
		popup("100 na sekundę!");
		$('#6').html('<img src="./acziki/100s.png" alt="">');
	}
	if(nasekunde>=10000 && flags10000 == 0 && popflag == 0){
		flags10000 = 1;
		staty();
		popup("10k na sekundę!");
		$('#7').html('<img src="./acziki/10ks.png" alt="">');
	}
	if(nasekunde>=1000000 && flags1000000 == 0 && popflag == 0){
		flags1000000 = 1;
		staty();
		popup("1m na sekundę!");
		$('#8').html('<img src="./acziki/1ms.png" alt="">');
	}		
},10);


function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


/* RULETKA */
$(function(){
	$('#graj').click(function(){
		var postawione = $('#postawione').val();
		if(postawione <= pieniadze){
			var losowane = [randomInt(1,6),randomInt(1,6),randomInt(1,6),randomInt(1,6),randomInt(1,6)];
			$('#graj').slideUp(200);
			$('#pierwszy').html("<img src='./kostka/"+losowane[0]+".png' alt=''>");
			$('#drugi').html("<img src='./kostka/"+losowane[1]+".png'  alt=''>");
			$('#trzeci').html("<img src='./kostka/"+losowane[2]+".png'  alt=''>");
			$('#czwarty').html("<img src='./kostka/"+losowane[3]+".png'  alt=''>");
			$('#piaty').html("<img src='./kostka/"+losowane[4]+".png'  alt=''>");
			$('#graj').slideDown(200);

			var wylosowane = [0,0,0,0,0,0];
			var najwieksza = 0;

			for(var i = 0; i < 5; i++){
				if(losowane[i] == 1){
					wylosowane[0] += 1;
				}
				if(losowane[i] == 2){
					wylosowane[1] += 1;
				}
				if(losowane[i] == 3){
					wylosowane[2] += 1;
				}
				if(losowane[i] == 4){
					wylosowane[3] += 1;
				}
				if(losowane[i] == 5){
					wylosowane[4] += 1;
				}
				if(losowane[i] == 6){
					wylosowane[5] += 1;
				}
			}
			for(var i = 0; i <= 6; i++){
				if(wylosowane[i] > najwieksza){
					najwieksza = wylosowane[i];
				}
			}
			if(najwieksza == 2 || najwieksza == 1){
				$('.wygrana').html("Nic nie wygrałeś!");
				dolicznika();
			}
			else if(najwieksza == 3){
				$('.wygrana').html("Bonusik!");
				pieniadze += postawione/2;
				dolicznika();
			}
			else if(najwieksza == 4){
				pieniadze += postawione*2;
				$('.wygrana').html("Bonus!");
				dolicznika();
			}
			else if(najwieksza == 5){
				pieniadze += postawione*10;
				$('.wygrana').html("JACKPOT!");
				dolicznika();
			}
		}else{
			popup("Nie stać Cię!");
		}
	});
});



function konwersja (liczba) {
	var l = liczba;
	var n = 0;
	if(l > 1000 && l < 1000000){
		n = (l/1000).toFixed(1)+'k';
		return n;
	}
	else if(l >= 1000000 && l < 1000000000 ){
		n = (l/1000000).toFixed(1)+'m';
		return n;
	}
	else if(l >= 1000000000 && l < 1000000000000){
		n = (l/1000000000).toFixed(1)+'b';
		return n;		
	}
	else if(l >= 1000000000000 && l < 1000000000000000){
		n = (l/1000000000000).toFixed(1)+'t';
		return n;		
	}
	else if(l >= 1000000000000000 && l < 1000000000000000000){
		n = (l/1000000000000000).toFixed(1)+'quad';
		return n;	
	}
	else if(l >= 1000000000000000000 && l < 1000000000000000000000){
		n = (l/1000000000000000000).toFixed(1)+'quin';
		return n;		
	}
	else if(l >= 1000000000000000000000 && l < 1000000000000000000000000){
		n = (l/1000000000000000000000).toFixed(1)+'sex';
		return n;
	}
	else if(l >= 1000000000000000000000000 ){
		n = (l/1000000000000000000000).toFixed(1)+'sept';
		return n;
	}
	else{
		n = l.toFixed(1);
		return n;
	}
}