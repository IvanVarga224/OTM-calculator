
function izracun () {

    const a = document.getElementById('duljina').value;
    const b = document.getElementById('visina').value;
    const c = document.getElementById('dnmv').value;
    const d = document.getElementById('vnmv').value;

    const brstr = document.getElementById('str').value;
    const masa = document.getElementById('masa').value;
    
    const e = a / c;
    const f = b / d;


    const g = Math.floor(e);
    const h = Math.floor(f);

    const i = g*h;
    
     document.getElementsByTagName('input')[6].value = + g + "*" + h + "=" + i;

    // Masa papira provjera //

    if (masa <= 60) {
        document.getElementsByTagName('input')[8].value = brstr / 32;
    }

    else if (masa > 60 && masa <= 135 ) {
        document.getElementsByTagName('input')[8].value = brstr / 16;
    }

    else {
        document.getElementsByTagName('input')[8].value = brstr / 8;
    }

    // ostatak 

    const j = a - (g  * c); 
    const k = b - (h  * d);

    const l = j + k;

    document.getElementsByTagName('input')[7].value = "("+j+") ("+k+")" ;

}





