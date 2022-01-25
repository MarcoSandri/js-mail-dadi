const emailList = ["bockelboy@att.net" , "pfitza@sbcglobal.net" , "crypt@aol.com" , "jshearer@aol.com" , "parents@msn.com" , "satishr@yahoo.ca" , "hampton@outlook.com" , "hutton@mac.com" , "lamiaemail@gmail.com" , "drezet@me.com" , "ducasse@msn.com" , "jfinke@yahoo.com" , "geekgrl@mac.com" , "doche@verizon.net" , "mrdvt@comcast.net"];
let myEmail = prompt("Inserisci la tua email");

for(let i=0; i < emailList.length; i++) {

    let login;
    if (myEmail == emailList[i]) {
        login = 1;
    } else {
        login = 0;
    }
}

if(login==1) {
    alert("Login avvenuto con successo");
} else {
    alert("Non sei registrato");
}