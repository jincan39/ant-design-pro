webpackJsonp([36],{785:function(a,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),s=n(r),l=t(129),f=n(l),u=t(319);e.default={namespace:"chart",state:{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[],loading:!1},effects:{fetch:f.default.mark(function a(e,t){var n,r=t.call,s=t.put;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s({type:"changeLoading",payload:!0});case 2:return a.next=4,r(u.fakeChartData);case 4:return n=a.sent,a.next=7,s({type:"save",payload:n});case 7:case"end":return a.stop()}},a,this)}),fetchSalesData:f.default.mark(function a(e,t){var n,r=t.call,s=t.put;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(u.fakeChartData);case 2:return n=a.sent,a.next=5,s({type:"save",payload:{salesData:n.salesData}});case 5:case"end":return a.stop()}},a,this)})},reducers:{save:function(a,e){var t=e.payload;return(0,s.default)({},a,t,{loading:!1})},clear:function(){return{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]}},changeLoading:function(a,e){var t=e.payload;return(0,s.default)({},a,{loading:t})}}},a.exports=e.default}});