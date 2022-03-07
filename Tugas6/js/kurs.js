function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function tambah(){
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;

    if(isNaN(a) || a == ''){
        alert ("Harap isi data berupa angka");
    }
    else if(isNaN(b) || b == '' ){
        alert ("Harap isi data berupa angka");
    } 
    else {
        let hasil = + a + + b;
        frm.hasil.value = hasil;
    }
   }
   function kurang(){
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;

    if(isNaN(a) || a == ''){
        alert ("Harap isi data berupa angka");
    }
    else if(isNaN(b) || b == '' ){
        alert ("Harap isi data berupa angka");
    } 
    else {
        let hasil =  a - b;
        frm.hasil.value = hasil;
    }
   }
   function kali(){
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;

    if(isNaN(a) || a == ''){
        alert ("Harap isi data berupa angka");
    }
    else if(isNaN(b) || b == '' ){
        alert ("Harap isi data berupa angka");
    } 
    else {
        let hasil = a * b;
        frm.hasil.value = hasil;
    }
   }
   function bagi(){
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;

    if(isNaN(a) || a == ''){
        alert ("Harap isi data berupa angka");
    }
    else if(isNaN(b) || b == '' ){
        alert ("Harap isi data berupa angka");
    } 
    else {
        let hasil = a / b;
        frm.hasil.value = hasil;
    }
   }
   function pangkat(){
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;

    if(isNaN(a) || a == ''){
        alert ("Harap isi data berupa angka");
    }
    else if(isNaN(b) || b == '' ){
        alert ("Harap isi data berupa angka");
    } 
    else {
        let hasil = a ** b;
        frm.hasil.value = hasil;
    }
   }