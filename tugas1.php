<?php
// diketahui
$namaPegawai = 'Ahmad Sopandi';
$agama = 'Islam';
$jabatan = 'Manager';
$status = 'Menikah';
$jmlAnak = 4;

// Gaji Pegawai (switch case)
switch($jabatan){
    case 'Manager' : $gapok = 20000000; break;
    case 'Asisten' : $gapok = 15000000; break;
    case 'Kabag' : $gapok = 10000000; break;
    case 'Staff' : $gapok = 5000000; break;
    default : $gapok = '0';
}
// tunjangan jabatan
$tunjab = 0.2 * $gapok;

// Tunjangan Keluarga
if($jmlAnak < 1) $tunkel = 0;
else if($jmlAnak >= 1 && $jmlAnak <= 2) $tunkel = 0.05 * $gapok;
else if($jmlAnak >= 3 && $jmlAnak <=5) $tunkel = 0.1 * $gapok;
else $tunkel = 0;

// Gaji Kotor
$gator = $gapok + $tunjab + $tunkel;

// Zakat
if($agama == 'Islam' && $gator >= 6000000) $zakat = 0.025 * $gator;
else $zakat = 0;

// Take Home Pay
$gaber = $gator - $zakat;

?>

<h1 align="center">Gaji Pegawai</h1>

Nama Pegawai : <?= $namaPegawai ?> 
<br/> Agama : <?= $agama ?>
<br/> Jabatan : <?= $jabatan ?>
<br/> Status : <?= $status ?>
<br/> Jumlah Anak : <?= $jmlAnak ?>
<br/> Gaji Pokok : <?= $gapok ?>
<br/> Tunjangan Jabatan : <?= $tunjab ?>
<br/> Tunjangan Keluarga : <?= $tunkel ?>
<br/> Gaji Kotor : <?= $gator ?>
<br/> Zakat : <?= $zakat ?>
<br/> Take Home Pay : <?= $gaber ?>