// Javascript "Objekto konstruktorius" 

// 1. Susikurkite objektą "Klase", konstruktoriaus kurti šiam objektui nereikia.
// 2. Sukurkite 20 objektų masyvą, kuriame yra objektai "Studentai". Objektą sukurkite pasinaudodami konstruktoriumi.
// "Studentas" konstruktorius turi sukurti tokį objektą:
// *id - skaičius
// *vardas - tekstas
// *pavarde - tekstas
// *pazymys - skaičius
// *lankomumamas - masyvas, 20 elementų, užpildytas "x" ir "n" reikšmėmis.
// *data - šios dienos data.
// 3. Studentų objektų masyvą patalpikinti į objektą "Klase".
// 4. Objekte "Klase", sukurkite metodą, kuris išvestų bendrą studentų pažymių vidurkį. 

// Papildoma:
// Išveskite lankomumo duomenis į HTML lentelę. Lentelė gali būti <table> žymė arba sudėti lentelę iš div elementų, pasinaudojant display: table galimybėmis. Pirmas stulpelis: studento vardas ir pavardė, likę stulpeliai "x" ir "n" reikšmės.
 
// Pastaba: Papildoma užduotis gali priversti pasukti galvą, ji nėra privaloma.

"use strict"



//konstruktorius Studentas 

function Studentas(id, vardas, pavarde, pazymys, lankomumas, data) {
    this.id = id;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.pazymys = pazymys;
    this.lankomumas = lankomumas
    this.data = data;

};

//lankomumo masyvo funkcija, N ir X reikšmes generuoja atsitiktinai

function lankomumas() {
const lankomumoMasyvas = [20];
for (let i=0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 == 0) {
        lankomumoMasyvas[i] = "N";        
    } else {
        lankomumoMasyvas[i] = "X";        
    }
}
return lankomumoMasyvas;
};

// console.log(lankomumas());

//funkcija studentųGeneratorius, generuoja 20 studentų pagal konstruktorių Studentas

function studentuGeneratorius() {
    const studentuMasyvas = [20];
    const date = new Date();
    for (let i = 0; i < 20; i++) {
        let pazymys = (Math.floor(Math.random()*10)+1);
        studentuMasyvas[i] = new Studentas(i+1, "Studentas" + (i+1), "Studentukas" + (i+1), pazymys, lankomumas(), date);
    }
    return studentuMasyvas;
};

// console.log(studentuGeneratorius());

//objektas klase su studentų masyvu

const klase = {
    studentai: [],

    pazymiuVidurkis: function() {
        let suma = 0;
        for (let i in this.studentai[0]) {
            suma = suma + this.studentai[0][i].pazymys;
        }
        let vidurkis = suma / this.studentai[0].length;
        return vidurkis;
    }
};
klase.studentai.push(studentuGeneratorius());

console.log(klase);
// console.log(klase.studentai[0][2]);
console.log("Studentų pažymių vidurkis: " + klase.pazymiuVidurkis());







