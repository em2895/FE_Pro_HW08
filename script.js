let userYear = Number(prompt ("Введіть свій рік народження:")); 
let userCity = prompt ("Введіть назву міста, в якому ви живете:"); 
let userSports = prompt("Введіть назву вашого улюбленого виду спорту:");

let result = "";

if (userYear > 1900 && userYear < 2023 ) {
    result += "Ваш вік: " + (2023 - userYear) + "." ;
} else if (userYear === null){
    result += "Шкода, що Ви не захотіли ввести свій рік народження...";
} else {
    result += "Шкода, що Ви не захотіли ввести свій рік народження...";
}

if (userCity.toLowerCase() === "київ"){
result += "Ви живите у столиці України!";
} else if(userCity.toLowerCase() === "вашингтон"){
    result += "Ви живите у столиці Сполучених Штатів Америки!";
} else if(userCity.toLowerCase() === "лондон"){
    result += "Ви живите у столиці Великої Британії!";
} else if(userCity){
    result += "Ви живите у місті " + userCity + "!";
} else if(userCity === null){
    result += "Шкода, що Ви не захотіли ввести своє місто...";
} else {
    result += "Шкода, що Ви не захотіли ввести своє місто...";
}

if (userSports.toLowerCase() === "футбол"){
    result += "Ваш улюблений вид спорту " + userSports + ". Круто! Хочете стати як Ліонель Мессі?";
} else if(userSports.toLowerCase() === "баскетбол"){
    result += "Ваш улюблений вид спорту " + userSports + ". Круто! Хочете стати як Майкл Джордан?";
} else if(userSports.toLowerCase() === "бокс"){
    result += "Ваш улюблений вид спорту " + userSports + ". Круто! Хочете стати як Олександр Усик?";
} else if(userSports){
    result += "Ваш улюблений вид спорту " + userSports + ".";
} else if(userSports === null){
    result += "Шкода, що Ви не захотіли ввести свій улюблений вид спорту...";
} else {
    result += "Шкода, що Ви не захотіли ввести свій улюблений вид спорту...";
}

alert(result);