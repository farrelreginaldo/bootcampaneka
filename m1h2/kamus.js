function Kamus(kata,katabin,katabing ,katahapus){

var kamus = new Map ([
	["mobil", "car"],
	["motor", "motorcycle"],
    ["pesawat udara", "airplane"],
    ["sepeda", "bicycle"]
	]
)
let sekarang = new Date();
console.log("sekarang "+sekarang);
console.log(kamus);

console.log("");
console.log("");
var katin = kata;
var kating = "motorcycle";
var ating = kamus.get(katin);
var atin = kamus.has(kating);
console.log("Bahasa inggrisnya "+katin+" adalah "+ating);
//console.log("Bahasa Indo dari "+katainggris+" adalah "+artiindo);

kamus.set(katabin,katabing);

console.log("########");
console.log("Setelah ditambah Kata Baru "+katabin);
console.log(kamus);

kamus.delete(katahapus);
console.log("########");
console.log("Setelah kata "+katahapus+" dihapus");

console.log(kamus);

}


Kamus("sepeda", "remot", "remote", "pesawat udara");