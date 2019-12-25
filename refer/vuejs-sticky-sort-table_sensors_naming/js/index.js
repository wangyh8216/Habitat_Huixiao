 //  -----------------------------------------------------------------------------------------
//  
//  vue: 
//  https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.min.js
//
//  smoothscroll polyfill: (disabled)
//  https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js
//  -----------------------------------------------------------------------------------------

var VueTable = Vue.extend({
    props: ['model'],
    model: { prop: 'model' },
    template: '\n    <table :class="$options._componentTag">\n        <thead>\n            <tr>\n                <th v-for="col in model.head" @click="sort(col.prop)" :class="{ \n                    ascending : prop === col.prop && !reverse,\n                    descending: prop === col.prop && reverse\n                }">{{ col.label }}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr v-for="row in model.body">\n                <td v-for="col in model.head">{{\xA0row[col.prop]}}</td>\n            </tr>\n        </tbody>\n    </table>\n    ',
















    data: function data() {
        return {
            prop: null, // last property used by sort 
            reverse: false // reversed sort order
        };
    },
    mounted: function mounted() {
        //  default sort by first table header (ascending)
        this.sort(this.model.head[0].prop);
    },
    methods: {
        sort: function sort(prop) {
            this.model.body.sort(function (a, b) {
                if (typeof a[prop] === 'number') {
                    return a[prop] - b[prop];
                }
                a = a[prop].toLowerCase();
                b = b[prop].toLowerCase();
                return a < b ? -1 : a > b ? 1 : 0;
            });

            //  flip decscending order if same sort prop or set to false
            //  if descending reverse the data array 
            //  store sort prop
            this.reverse = this.prop === prop ? !this.reverse : false;
            if (this.reverse) this.model.body.reverse();
            this.prop = prop;

            //  Doeas not work in safari
            //  scrollTo(0,0); 
            //  html { scroll-behavior: smooth; }
            //  scroll({ top: 0, left: 0, behavior: 'smooth' });
        } } });




var data = getData();
var VueApp = new Vue({
    data: data,
    template: '<div id="app">\n        <article>\n            <h1>\uD83D\uDCCC 传感器命名管理</h1>\n           <vue-table v-model="data"></vue-table>\n        </article>\n    </div>' });







Vue.component('vue-table', VueTable);
VueApp.$mount('#app');




function getData() {
    return {
        head: [
        { label: '网关名称', prop: 'name', type: 'string' },
		{ label: '传感器名称', prop: 'city', type: 'string' },
        { label: '设备地址', prop: 'address', type: 'string' },
        { label: '位置坐标x', prop: 'zip', type: 'string' },
		{ label: '位置坐标y', prop: 'age', type: 'string' }],

        body: [
        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量1",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量2",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量3",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量4",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤温度",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤水分",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "设备电量",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤温度",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤水分",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "设备电量",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "温度",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "湿度",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "照度",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "设备电量",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量1",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量2",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量3",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "模拟量4",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤温度",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤水分",
            "zip": "0",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "设备电量",
            "zip": "0",
            "age": "0" },

        /* {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤温度",
            "zip": "0",
            "age": 50 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤水分",
            "zip": "0",
            "age": 96 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "设备电量",
            "zip": "0",
            "age": 57 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤温度",
            "zip": "0",
            "age": 26 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "土壤水分",
            "zip": "0",
            "age": 94 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Constitución",
            "zip": "0",
            "age": 29 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Armadale",
            "zip": "0",
            "age": 77 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Kearny",
            "zip": "0",
            "age": 36 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Lions Bay",
            "zip": "0",
            "age": 43 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Villers-sur-Semois",
            "zip": "0",
            "age": 62 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "College",
            "zip": "0",
            "age": 30 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Girona",
            "zip": "0",
            "age": 9 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "My",
            "zip": "0",
            "age": 99 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Papudo",
            "zip": "0",
            "age": 32 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Rachecourt",
            "zip": "0",
            "age": 82 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Poggio San Marcello",
            "zip": "0",
            "age": 56 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Gadag Betigeri",
            "zip": "0",
            "age": 84 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Constitución",
            "zip": "0",
            "age": 91 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Stirling",
            "zip": "0",
            "age": 62 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Nizamabad",
            "zip": "0",
            "age": 48 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Bharuch",
            "zip": "0",
            "age": 64 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Nevers",
            "zip": "0",
            "age": 1 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Rochester",
            "zip": "0",
            "age": 33 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Waarloos",
            "zip": "0",
            "age": 68 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Evesham",
            "zip": "0",
            "age": 32 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Forchies-la-Marche",
            "zip": "0",
            "age": 28 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Castle Douglas",
            "zip": "0",
            "age": 89 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Westende",
            "zip": "0",
            "age": 9 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Jasper",
            "zip": "0",
            "age": 70 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Częstochowa",
            "zip": "0",
            "age": 95 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Bastogne",
            "zip": "0",
            "age": 50 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Galbiate",
            "zip": "0",
            "age": 76 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Coalhurst",
            "zip": "0",
            "age": 37 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Reus",
            "zip": "0",
            "age": 87 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Avadi",
            "zip": "0",
            "age": 13 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Merrickville-Wolford",
            "zip": "0",
            "age": 98 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Bruderheim",
            "zip": "0",
            "age": 44 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Campitello di Fassa",
            "zip": "0",
            "age": 76 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Montpellier",
            "zip": "0",
            "age": 19 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Soma",
            "zip": "0",
            "age": 64 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Sherborne",
            "zip": "0",
            "age": 69 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Poggio Berni",
            "zip": "0",
            "age": 8 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Sunderland",
            "zip": "0",
            "age": 94 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Paiguano",
            "zip": "0",
            "age": 53 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Brucargo",
            "zip": "0",
            "age": 72 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Wekweti",
            "zip": "0",
            "age": 18 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Issy-les-Moulineaux",
            "zip": "0",
            "age": 93 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Maranello",
            "zip": "0",
            "age": 86 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Yellowhead County",
            "zip": "0",
            "age": 82 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Bhilai",
            "zip": "0",
            "age": 31 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Saint-Urbain",
            "zip": "0",
            "age": 62 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Stourbridge",
            "zip": "0",
            "age": 31 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Prato Carnico",
            "zip": "0",
            "age": 15 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Kota",
            "zip": "0",
            "age": 37 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Notre-Dame-de-la-Salette",
            "zip": "0",
            "age": 51 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Blind River",
            "zip": "0",
            "age": 58 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Norcia",
            "zip": "0",
            "age": 1 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Fairbanks",
            "zip": "0",
            "age": 33 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Poitiers",
            "zip": "0",
            "age": 50 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Tumba",
            "zip": "0",
            "age": 44 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Karnal",
            "zip": "0",
            "age": 3 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Stekene",
            "zip": "0",
            "age": 13 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Offenbach am Main",
            "zip": "0",
            "age": 4 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Pimpri-Chinchwad",
            "zip": "0",
            "age": 26 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Kapiti",
            "zip": "0",
            "age": 85 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Allumiere",
            "zip": "0",
            "age": 64 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "MabomprŽ",
            "zip": "0",
            "age": 32 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Portobuffolè",
            "zip": "0",
            "age": 80 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Vorselaar",
            "zip": "0",
            "age": 55 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Grande Prairie",
            "zip": "0",
            "age": 41 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Meldert",
            "zip": "0",
            "age": 77 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Cascavel",
            "zip": "0",
            "age": 11 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Buckingham",
            "zip": "0",
            "age": 48 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Flin Flon",
            "zip": "0",
            "age": 92 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Chimay",
            "zip": "0",
            "age": 67 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Casanova Elvo",
            "zip": "0",
            "age": 73 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Llanidloes",
            "zip": "0",
            "age": 83 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Llangefni",
            "zip": "0",
            "age": 99 },

        {
            "name": "物联网关1",
            "address": "011f021424cd0061",
            "city": "Medicine Hat",
            "zip": "0",
            "age": 99 } */] };



}