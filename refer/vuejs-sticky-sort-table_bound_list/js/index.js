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
    template: '<div id="app">\n        <article>\n            <h1>\uD83D\uDCCC 上下限列表管理</h1>\n           <vue-table v-model="data"></vue-table>\n        </article>\n    </div>' });







Vue.component('vue-table', VueTable);
VueApp.$mount('#app');




function getData() {
    return {
        head: [
        { label: '网关名称', prop: 'name', type: 'string' },
        { label: '传感器名称', prop: 'address', type: 'string' },
        { label: '通道代码', prop: 'city', type: 'string' },
        { label: '上限值', prop: 'zip', type: 'string' },
        { label: '下限值', prop: 'age', type: 'string' }],

        body: [
        {
            "name": "物联网关1",
            "address": "降雨量",
            "city": "模拟量1",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "降雨量",
            "city": "模拟量2",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "降雨量",
            "city": "模拟量3",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "降雨量",
            "city": "模拟量4",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度1",
            "city": "土壤温度",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度1",
            "city": "土壤水分",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度1",
            "city": "设备电量",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度2",
            "city": "土壤温度",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度2",
            "city": "土壤水分",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度2",
            "city": "设备电量",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "空气温湿照度",
            "city": "温度",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "空气温湿照度",
            "city": "湿度",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "空气温湿照度",
            "city": "照度",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "空气温湿照度",
            "city": "设备电量",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤pH值1",
            "city": "模拟量1",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤pH值1",
            "city": "模拟量2",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤pH值1",
            "city": "模拟量3",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤pH值1",
            "city": "模拟量4",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度6",
            "city": "土壤温度",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度6",
            "city": "土壤水分",
            "zip": "100",
            "age": "0" },

        {
            "name": "物联网关1",
            "address": "土壤温湿度6",
            "city": "设备电量",
            "zip": "100",
            "age": "0" },

        /* {
            "name": "物联网关1",
            "address": "土壤温湿度5",
            "city": "土壤温度",
            "zip": "100",
            "age": 50 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度5",
            "city": "土壤水分",
            "zip": "100",
            "age": 96 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度5",
            "city": "设备电量",
            "zip": "100",
            "age": 57 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度3",
            "city": "土壤温度",
            "zip": "100",
            "age": 26 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度3",
            "city": "土壤水分",
            "zip": "100",
            "age": 94 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度3",
            "city": "Constitución",
            "zip": "100",
            "age": 29 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度4",
            "city": "Armadale",
            "zip": "100",
            "age": 77 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度4",
            "city": "Kearny",
            "zip": "100",
            "age": 36 },

        {
            "name": "物联网关1",
            "address": "土壤温湿度4",
            "city": "Lions Bay",
            "zip": "100",
            "age": 43 },

        {
            "name": "物联网关1",
            "address": "土壤温湿EC值2",
            "city": "Villers-sur-Semois",
            "zip": "100",
            "age": 62 },

        {
            "name": "物联网关1",
            "address": "土壤温湿EC值2",
            "city": "College",
            "zip": "100",
            "age": 30 },

        {
            "name": "物联网关1",
            "address": "土壤温湿EC值2",
            "city": "Girona",
            "zip": "100",
            "age": 9 },

        {
            "name": "物联网关1",
            "address": "土壤温湿EC值2",
            "city": "My",
            "zip": "100",
            "age": 99 },

        {
            "name": "Gil",
            "address": "Ap #697-1422 Scelerisque Street",
            "city": "Papudo",
            "zip": "100",
            "age": 32 },

        {
            "name": "Jackson",
            "address": "688-1653 Facilisis Avenue",
            "city": "Rachecourt",
            "zip": "100",
            "age": 82 },

        {
            "name": "Dale",
            "address": "Ap #390-635 Cum St.",
            "city": "Poggio San Marcello",
            "zip": "100",
            "age": 56 },

        {
            "name": "Merrill",
            "address": "Ap #435-3256 Risus Street",
            "city": "Gadag Betigeri",
            "zip": "100",
            "age": 84 },

        {
            "name": "Candace",
            "address": "Ap #656-7416 Sapien. Rd.",
            "city": "Constitución",
            "zip": "100",
            "age": 91 },

        {
            "name": "Olga",
            "address": "7953 In St.",
            "city": "Stirling",
            "zip": "100",
            "age": 62 },

        {
            "name": "Raymond",
            "address": "P.O. Box 785, 6213 Quisque Ave",
            "city": "Nizamabad",
            "zip": "100",
            "age": 48 },

        {
            "name": "Karyn",
            "address": "9804 Non Rd.",
            "city": "Bharuch",
            "zip": "100",
            "age": 64 },

        {
            "name": "Elijah",
            "address": "313-572 Sit Rd.",
            "city": "Nevers",
            "zip": "100",
            "age": 1 },

        {
            "name": "Chelsea",
            "address": "Ap #395-5889 Pede. Street",
            "city": "Rochester",
            "zip": "100",
            "age": 33 },

        {
            "name": "Baxter",
            "address": "9459 Turpis. Road",
            "city": "Waarloos",
            "zip": "100",
            "age": 68 },

        {
            "name": "Tiger",
            "address": "125 Aliquam Av.",
            "city": "Evesham",
            "zip": "100",
            "age": 32 },

        {
            "name": "David",
            "address": "P.O. Box 460, 4128 Dolor Ave",
            "city": "Forchies-la-Marche",
            "zip": "100",
            "age": 28 },

        {
            "name": "Quinn",
            "address": "196-8018 Nulla Rd.",
            "city": "Castle Douglas",
            "zip": "100",
            "age": 89 },

        {
            "name": "Larissa",
            "address": "Ap #457-2173 Arcu. Rd.",
            "city": "Westende",
            "zip": "100",
            "age": 9 },

        {
            "name": "Nathan",
            "address": "P.O. Box 869, 7154 Euismod St.",
            "city": "Jasper",
            "zip": "100",
            "age": 70 },

        {
            "name": "Emerson",
            "address": "Ap #790-6021 Mauris Road",
            "city": "Częstochowa",
            "zip": "100",
            "age": 95 },

        {
            "name": "Margaret",
            "address": "Ap #149-2416 Purus. Avenue",
            "city": "Bastogne",
            "zip": "100",
            "age": 50 },

        {
            "name": "Abel",
            "address": "P.O. Box 329, 4526 Sem, Av.",
            "city": "Galbiate",
            "zip": "100",
            "age": 76 },

        {
            "name": "Ashely",
            "address": "214-7576 Quam. Street",
            "city": "Coalhurst",
            "zip": "100",
            "age": 37 },

        {
            "name": "Rylee",
            "address": "395 Dapibus Av.",
            "city": "Reus",
            "zip": "100",
            "age": 87 },

        {
            "name": "Desiree",
            "address": "821-3088 Maecenas St.",
            "city": "Avadi",
            "zip": "100",
            "age": 13 },

        {
            "name": "Audra",
            "address": "902-5605 Fusce Street",
            "city": "Merrickville-Wolford",
            "zip": "100",
            "age": 98 },

        {
            "name": "Eric",
            "address": "1335 Ut Street",
            "city": "Bruderheim",
            "zip": "100",
            "age": 44 },

        {
            "name": "Driscoll",
            "address": "P.O. Box 883, 4385 Sociis Av.",
            "city": "Campitello di Fassa",
            "zip": "100",
            "age": 76 },

        {
            "name": "Amity",
            "address": "P.O. Box 423, 4526 Mollis. St.",
            "city": "Montpellier",
            "zip": "100",
            "age": 19 },

        {
            "name": "Miranda",
            "address": "P.O. Box 754, 3232 Dapibus St.",
            "city": "Soma",
            "zip": "100",
            "age": 64 },

        {
            "name": "Allen",
            "address": "159-2615 Porttitor Avenue",
            "city": "Sherborne",
            "zip": "100",
            "age": 69 },

        {
            "name": "Nathaniel",
            "address": "Ap #323-2198 Libero. Rd.",
            "city": "Poggio Berni",
            "zip": "100",
            "age": 8 },

        {
            "name": "Jessamine",
            "address": "Ap #949-9997 Tellus. Street",
            "city": "Sunderland",
            "zip": "100",
            "age": 94 },

        {
            "name": "Aubrey",
            "address": "9149 Nulla Avenue",
            "city": "Paiguano",
            "zip": "100",
            "age": 53 },

        {
            "name": "Olympia",
            "address": "108-5457 Est. Avenue",
            "city": "Brucargo",
            "zip": "100",
            "age": 72 },

        {
            "name": "Jemima",
            "address": "364-8358 Auctor Av.",
            "city": "Wekweti",
            "zip": "100",
            "age": 18 },

        {
            "name": "Dillon",
            "address": "Ap #672-2462 Taciti Avenue",
            "city": "Issy-les-Moulineaux",
            "zip": "100",
            "age": 93 },

        {
            "name": "Quintessa",
            "address": "674-8671 Laoreet St.",
            "city": "Maranello",
            "zip": "100",
            "age": 86 },

        {
            "name": "Brandon",
            "address": "7435 Enim, Ave",
            "city": "Yellowhead County",
            "zip": "100",
            "age": 82 },

        {
            "name": "Aladdin",
            "address": "Ap #162-3865 Dolor, Ave",
            "city": "Bhilai",
            "zip": "100",
            "age": 31 },

        {
            "name": "Zelenia",
            "address": "P.O. Box 305, 3542 Amet St.",
            "city": "Saint-Urbain",
            "zip": "100",
            "age": 62 },

        {
            "name": "Zenia",
            "address": "7958 Lorem Street",
            "city": "Stourbridge",
            "zip": "100",
            "age": 31 },

        {
            "name": "Carissa",
            "address": "5034 Neque St.",
            "city": "Prato Carnico",
            "zip": "100",
            "age": 15 },

        {
            "name": "Channing",
            "address": "5521 Metus. St.",
            "city": "Kota",
            "zip": "100",
            "age": 37 },

        {
            "name": "Meredith",
            "address": "P.O. Box 927, 449 Hendrerit St.",
            "city": "Notre-Dame-de-la-Salette",
            "zip": "100",
            "age": 51 },

        {
            "name": "Dalton",
            "address": "2621 Tristique Av.",
            "city": "Blind River",
            "zip": "100",
            "age": 58 },

        {
            "name": "Kelsie",
            "address": "787-3530 Metus Ave",
            "city": "Norcia",
            "zip": "100",
            "age": 1 },

        {
            "name": "Jana",
            "address": "P.O. Box 430, 8910 Fusce Street",
            "city": "Fairbanks",
            "zip": "100",
            "age": 33 },

        {
            "name": "Laura",
            "address": "322-5731 Tellus Ave",
            "city": "Poitiers",
            "zip": "100",
            "age": 50 },

        {
            "name": "Jessamine",
            "address": "P.O. Box 992, 6522 At Ave",
            "city": "Tumba",
            "zip": "100",
            "age": 44 },

        {
            "name": "Dolan",
            "address": "P.O. Box 906, 8780 Sagittis St.",
            "city": "Karnal",
            "zip": "100",
            "age": 3 },

        {
            "name": "Acton",
            "address": "Ap #954-4842 Eget, Street",
            "city": "Stekene",
            "zip": "100",
            "age": 13 },

        {
            "name": "Byron",
            "address": "P.O. Box 667, 6982 Eu Ave",
            "city": "Offenbach am Main",
            "zip": "100",
            "age": 4 },

        {
            "name": "Inga",
            "address": "3796 Vel Avenue",
            "city": "Pimpri-Chinchwad",
            "zip": "100",
            "age": 26 },

        {
            "name": "Orlando",
            "address": "710-4853 Euismod Av.",
            "city": "Kapiti",
            "zip": "100",
            "age": 85 },

        {
            "name": "Rogan",
            "address": "679-1098 Lorem Road",
            "city": "Allumiere",
            "zip": "100",
            "age": 64 },

        {
            "name": "Zane",
            "address": "Ap #664-5007 Sem Ave",
            "city": "MabomprŽ",
            "zip": "100",
            "age": 32 },

        {
            "name": "Nasim",
            "address": "5489 At, Road",
            "city": "Portobuffolè",
            "zip": "100",
            "age": 80 },

        {
            "name": "Anne",
            "address": "2980 Tempus St.",
            "city": "Vorselaar",
            "zip": "100",
            "age": 55 },

        {
            "name": "Jayme",
            "address": "958-8261 Vitae Rd.",
            "city": "Grande Prairie",
            "zip": "100",
            "age": 41 },

        {
            "name": "Maia",
            "address": "Ap #882-8068 Aliquam St.",
            "city": "Meldert",
            "zip": "100",
            "age": 77 },

        {
            "name": "Sonia",
            "address": "Ap #820-5580 Pede St.",
            "city": "Cascavel",
            "zip": "100",
            "age": 11 },

        {
            "name": "Caryn",
            "address": "3834 Aenean Avenue",
            "city": "Buckingham",
            "zip": "100",
            "age": 48 },

        {
            "name": "Colorado",
            "address": "1500 Laoreet Street",
            "city": "Flin Flon",
            "zip": "100",
            "age": 92 },

        {
            "name": "Ashton",
            "address": "Ap #534-4315 Semper Rd.",
            "city": "Chimay",
            "zip": "100",
            "age": 67 },

        {
            "name": "Gabriel",
            "address": "6794 Suspendisse St.",
            "city": "Casanova Elvo",
            "zip": "100",
            "age": 73 },

        {
            "name": "Clare",
            "address": "4107 Placerat. Rd.",
            "city": "Llanidloes",
            "zip": "100",
            "age": 83 },

        {
            "name": "Steven",
            "address": "P.O. Box 958, 353 Curabitur Street",
            "city": "Llangefni",
            "zip": "100",
            "age": 99 },

        {
            "name": "Celeste",
            "address": "P.O. Box 538, 3563 In Rd.",
            "city": "Medicine Hat",
            "zip": "100",
            "age": 99 } */] };



}