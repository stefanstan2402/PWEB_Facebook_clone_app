import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.setTranslation({
            "startsWith":"Începe cu",
            "contains":"Conține",
            "notContains":"Nu conține",
            "endsWith":"Se termină cu",
            "equals":"Este egal",
            "notEquals":"Nu este egal",
            "noFilter":"Fără filtru",
            "lt":"Mai mic decât",
            "lte":"Mai mic sau egal cu",
            "gt":"Mai mare decât",
            "gte":"Mai mare sau egal cu",
            "dateIs":"Data este",
            "dateIsNot":"Data nu este",
            "dateBefore":"Data este înainte",
            "dateAfter":"Data este după",
            //"custom":"Personalizat",
            "clear":"Curăță",
            "apply":"Aplică",
            "matchAll":"Potrivește cu toate",
            "matchAny":"Potrivește cu orice",
            "addRule":"Adăugă o regulă",
            "removeRule":"Elimină regula",
            "accept":"Da",
            "reject":"Nu",
            "choose":"Alege",
            "upload":"Încarcă",
            "cancel":"Anulează",
            "dayNames":["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            "dayNamesShort":["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
            "dayNamesMin":["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            "monthNames":["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            "monthNamesShort":["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
            "today":"Astăzi",
            "weekHeader":"Săpt",
            "firstDayOfWeek":1,
            "dateFormat":"dd.mm.yy",
            "weak":"Slabă",
            "medium":"Medie",
            "strong":"Puternică",
            "passwordPrompt":"Introduceți parola",
            "emptyFilterMessage":"Nu s-au găsite rezultate",
            "emptyMessage":"Nu există opțiuni disponibile"
        });
    }
}