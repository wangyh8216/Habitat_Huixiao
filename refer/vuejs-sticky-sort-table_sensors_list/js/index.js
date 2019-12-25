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
    template: '<div id="app">\n        <article>\n            <h1>\uD83D\uDCCC 传感器列表</h1>\n           <vue-table v-model="data"></vue-table>\n        </article>\n    </div>' });







Vue.component('vue-table', VueTable);
VueApp.$mount('#app');




function getData() {
    return {
        head: [
        { label: '网关名称', prop: 'name', type: 'string' },
        { label: '设备地址', prop: 'address', type: 'string' },
        { label: '传感器名称', prop: 'city', type: 'string' },
        { label: '传感器序号', prop: 'zip', type: 'string' },
        { label: '操作', prop: 'age', type: 'string' }],

        body: [
        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量1",
            "zip": "1",
            "age": "2019-07-19 22:35:27.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量2",
            "zip": "1",
            "age": "2019-07-19 22:35:27.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量3",
            "zip": "1",
            "age": "2019-07-19 22:35:27.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量4",
            "zip": "1",
            "age": "2019-07-19 22:35:27.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤温度",
            "zip": "1",
            "age": "2019-07-19 22:00:36.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤水分",
            "zip": "1",
            "age": "2019-07-19 22:00:36.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "设备电量",
            "zip": "1",
            "age": "2019-07-19 22:00:36.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤温度",
            "zip": "1",
            "age": "2019-07-19 22:00:36.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤水分",
            "zip": "1",
            "age": "2019-07-19 22:00:36.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "设备电量",
            "zip": "1",
            "age": "2019-07-19 22:00:36.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "温度",
            "zip": "1",
            "age": "2019-07-19 22:00:36.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "湿度",
            "zip": "1",
            "age": "2019-07-19 02:10:59.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "照度",
            "zip": "1",
            "age": "2019-07-19 02:10:59.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "设备电量",
            "zip": "1",
            "age": "2019-07-19 02:10:59.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量1",
            "zip": "1",
            "age": "2019-07-19 02:10:59.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量2",
            "zip": "1",
            "age": "2019-05-29 16:03:42.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量3",
            "zip": "1",
            "age": "2019-05-29 16:03:42.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "模拟量4",
            "zip": "1",
            "age": "2019-05-29 16:03:42.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤温度",
            "zip": "1",
            "age": "2019-05-29 09:33:15.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤水分",
            "zip": "1",
            "age": "2019-05-29 09:33:15.0" },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "设备电量",
            "zip": "1",
            "age": "2019-05-29 09:33:15.0" },

        /* {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤温度",
            "zip": "1",
            "age": 50 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤水分",
            "zip": "1",
            "age": 96 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "设备电量",
            "zip": "1",
            "age": 57 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤温度",
            "zip": "1",
            "age": 26 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "土壤水分",
            "zip": "1",
            "age": 94 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "Constitución",
            "zip": "1",
            "age": 29 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "Armadale",
            "zip": "1",
            "age": 77 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "Kearny",
            "zip": "1",
            "age": 36 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "Lions Bay",
            "zip": "1",
            "age": 43 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "Villers-sur-Semois",
            "zip": "1",
            "age": 62 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "College",
            "zip": "1",
            "age": 30 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "Girona",
            "zip": "1",
            "age": 9 },

        {
            "name": "物联网关1",
            "address": "1100201806131096",
            "city": "My",
            "zip": "1",
            "age": 99 },

        {
            "name": "Gil",
            "address": "1100201806131096",
            "city": "Papudo",
            "zip": "1",
            "age": 32 },

        {
            "name": "Jackson",
            "address": "1100201806131096",
            "city": "Rachecourt",
            "zip": "1",
            "age": 82 },

        {
            "name": "Dale",
            "address": "1100201806131096",
            "city": "Poggio San Marcello",
            "zip": "1",
            "age": 56 },

        {
            "name": "Merrill",
            "address": "1100201806131096",
            "city": "Gadag Betigeri",
            "zip": "1",
            "age": 84 },

        {
            "name": "Candace",
            "address": "1100201806131096",
            "city": "Constitución",
            "zip": "1",
            "age": 91 },

        {
            "name": "Olga",
            "address": "1100201806131096",
            "city": "Stirling",
            "zip": "1",
            "age": 62 },

        {
            "name": "Raymond",
            "address": "1100201806131096",
            "city": "Nizamabad",
            "zip": "1",
            "age": 48 },

        {
            "name": "Karyn",
            "address": "1100201806131096",
            "city": "Bharuch",
            "zip": "1",
            "age": 64 },

        {
            "name": "Elijah",
            "address": "1100201806131096",
            "city": "Nevers",
            "zip": "1",
            "age": 1 },

        {
            "name": "Chelsea",
            "address": "1100201806131096",
            "city": "Rochester",
            "zip": "1",
            "age": 33 },

        {
            "name": "Baxter",
            "address": "1100201806131096",
            "city": "Waarloos",
            "zip": "1",
            "age": 68 },

        {
            "name": "Tiger",
            "address": "1100201806131096",
            "city": "Evesham",
            "zip": "1",
            "age": 32 },

        {
            "name": "David",
            "address": "1100201806131096",
            "city": "Forchies-la-Marche",
            "zip": "1",
            "age": 28 },

        {
            "name": "Quinn",
            "address": "1100201806131096",
            "city": "Castle Douglas",
            "zip": "1",
            "age": 89 },

        {
            "name": "Larissa",
            "address": "1100201806131096",
            "city": "Westende",
            "zip": "1",
            "age": 9 },

        {
            "name": "Nathan",
            "address": "1100201806131096",
            "city": "Jasper",
            "zip": "1",
            "age": 70 },

        {
            "name": "Emerson",
            "address": "1100201806131096",
            "city": "Częstochowa",
            "zip": "1",
            "age": 95 },

        {
            "name": "Margaret",
            "address": "1100201806131096",
            "city": "Bastogne",
            "zip": "1",
            "age": 50 },

        {
            "name": "Abel",
            "address": "1100201806131096",
            "city": "Galbiate",
            "zip": "1",
            "age": 76 },

        {
            "name": "Ashely",
            "address": "1100201806131096",
            "city": "Coalhurst",
            "zip": "1",
            "age": 37 },

        {
            "name": "Rylee",
            "address": "1100201806131096",
            "city": "Reus",
            "zip": "1",
            "age": 87 },

        {
            "name": "Desiree",
            "address": "1100201806131096",
            "city": "Avadi",
            "zip": "1",
            "age": 13 },

        {
            "name": "Audra",
            "address": "1100201806131096",
            "city": "Merrickville-Wolford",
            "zip": "1",
            "age": 98 },

        {
            "name": "Eric",
            "address": "1100201806131096",
            "city": "Bruderheim",
            "zip": "1",
            "age": 44 },

        {
            "name": "Driscoll",
            "address": "1100201806131096",
            "city": "Campitello di Fassa",
            "zip": "1",
            "age": 76 },

        {
            "name": "Amity",
            "address": "1100201806131096",
            "city": "Montpellier",
            "zip": "1",
            "age": 19 },

        {
            "name": "Miranda",
            "address": "1100201806131096",
            "city": "Soma",
            "zip": "1",
            "age": 64 },

        {
            "name": "Allen",
            "address": "1100201806131096",
            "city": "Sherborne",
            "zip": "1",
            "age": 69 },

        {
            "name": "Nathaniel",
            "address": "1100201806131096",
            "city": "Poggio Berni",
            "zip": "1",
            "age": 8 },

        {
            "name": "Jessamine",
            "address": "1100201806131096",
            "city": "Sunderland",
            "zip": "1",
            "age": 94 },

        {
            "name": "Aubrey",
            "address": "1100201806131096",
            "city": "Paiguano",
            "zip": "1",
            "age": 53 },

        {
            "name": "Olympia",
            "address": "1100201806131096",
            "city": "Brucargo",
            "zip": "1",
            "age": 72 },

        {
            "name": "Jemima",
            "address": "1100201806131096",
            "city": "Wekweti",
            "zip": "1",
            "age": 18 },

        {
            "name": "Dillon",
            "address": "1100201806131096",
            "city": "Issy-les-Moulineaux",
            "zip": "1",
            "age": 93 },

        {
            "name": "Quintessa",
            "address": "1100201806131096",
            "city": "Maranello",
            "zip": "1",
            "age": 86 },

        {
            "name": "Brandon",
            "address": "1100201806131096",
            "city": "Yellowhead County",
            "zip": "1",
            "age": 82 },

        {
            "name": "Aladdin",
            "address": "1100201806131096",
            "city": "Bhilai",
            "zip": "1",
            "age": 31 },

        {
            "name": "Zelenia",
            "address": "1100201806131096",
            "city": "Saint-Urbain",
            "zip": "1",
            "age": 62 },

        {
            "name": "Zenia",
            "address": "1100201806131096",
            "city": "Stourbridge",
            "zip": "1",
            "age": 31 },

        {
            "name": "Carissa",
            "address": "1100201806131096",
            "city": "Prato Carnico",
            "zip": "1",
            "age": 15 },

        {
            "name": "Channing",
            "address": "1100201806131096",
            "city": "Kota",
            "zip": "1",
            "age": 37 },

        {
            "name": "Meredith",
            "address": "1100201806131096",
            "city": "Notre-Dame-de-la-Salette",
            "zip": "1",
            "age": 51 },

        {
            "name": "Dalton",
            "address": "1100201806131096",
            "city": "Blind River",
            "zip": "1",
            "age": 58 },

        {
            "name": "Kelsie",
            "address": "1100201806131096",
            "city": "Norcia",
            "zip": "1",
            "age": 1 },

        {
            "name": "Jana",
            "address": "1100201806131096",
            "city": "Fairbanks",
            "zip": "1",
            "age": 33 },

        {
            "name": "Laura",
            "address": "1100201806131096",
            "city": "Poitiers",
            "zip": "1",
            "age": 50 },

        {
            "name": "Jessamine",
            "address": "1100201806131096",
            "city": "Tumba",
            "zip": "1",
            "age": 44 },

        {
            "name": "Dolan",
            "address": "1100201806131096",
            "city": "Karnal",
            "zip": "1",
            "age": 3 },

        {
            "name": "Acton",
            "address": "1100201806131096",
            "city": "Stekene",
            "zip": "1",
            "age": 13 },

        {
            "name": "Byron",
            "address": "1100201806131096",
            "city": "Offenbach am Main",
            "zip": "1",
            "age": 4 },

        {
            "name": "Inga",
            "address": "1100201806131096",
            "city": "Pimpri-Chinchwad",
            "zip": "1",
            "age": 26 },

        {
            "name": "Orlando",
            "address": "1100201806131096",
            "city": "Kapiti",
            "zip": "1",
            "age": 85 },

        {
            "name": "Rogan",
            "address": "1100201806131096",
            "city": "Allumiere",
            "zip": "1",
            "age": 64 },

        {
            "name": "Zane",
            "address": "1100201806131096",
            "city": "MabomprŽ",
            "zip": "1",
            "age": 32 },

        {
            "name": "Nasim",
            "address": "1100201806131096",
            "city": "Portobuffolè",
            "zip": "1",
            "age": 80 },

        {
            "name": "Anne",
            "address": "1100201806131096",
            "city": "Vorselaar",
            "zip": "1",
            "age": 55 },

        {
            "name": "Jayme",
            "address": "1100201806131096",
            "city": "Grande Prairie",
            "zip": "1",
            "age": 41 },

        {
            "name": "Maia",
            "address": "1100201806131096",
            "city": "Meldert",
            "zip": "1",
            "age": 77 },

        {
            "name": "Sonia",
            "address": "1100201806131096",
            "city": "Cascavel",
            "zip": "1",
            "age": 11 },

        {
            "name": "Caryn",
            "address": "1100201806131096",
            "city": "Buckingham",
            "zip": "1",
            "age": 48 },

        {
            "name": "Colorado",
            "address": "1100201806131096",
            "city": "Flin Flon",
            "zip": "1",
            "age": 92 },

        {
            "name": "Ashton",
            "address": "1100201806131096",
            "city": "Chimay",
            "zip": "1",
            "age": 67 },

        {
            "name": "Gabriel",
            "address": "1100201806131096",
            "city": "Casanova Elvo",
            "zip": "1",
            "age": 73 },

        {
            "name": "Clare",
            "address": "1100201806131096",
            "city": "Llanidloes",
            "zip": "1",
            "age": 83 },

        {
            "name": "Steven",
            "address": "1100201806131096",
            "city": "Llangefni",
            "zip": "1",
            "age": 99 },

        {
            "name": "Celeste",
            "address": "1100201806131096",
            "city": "Medicine Hat",
            "zip": "1",
            "age": 99 } */] };



}