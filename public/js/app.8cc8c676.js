(function(e){function t(t){for(var r,o,c=t[0],l=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],s[o]&&f.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);a&&a(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==s[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var a=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"090a":function(e,t,n){"use strict";var r=n("755b"),s=n.n(r);s.a},"09ab":function(e,t,n){},1:function(e,t){},"1ae4":function(e,t,n){},"1fde":function(e,t,n){var r={"./uws_darwin_57.node":"d13f","./uws_darwin_59.node":"b384","./uws_darwin_64.node":"91f6","./uws_linux_57.node":"c3ef","./uws_linux_59.node":"bc7c","./uws_linux_64.node":"3980","./uws_win32_57.node":"02bf","./uws_win32_59.node":"7dfe","./uws_win32_64.node":"0870"};function s(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="1fde"},2:function(e,t){},"223a":function(e,t,n){"use strict";var r=n("f606"),s=n.n(r);s.a},"2f40":function(e,t,n){"use strict";var r=n("dd06"),s=n.n(r);s.a},3:function(e,t){},4:function(e,t){},"429d":function(e,t,n){"use strict";var r=n("1ae4"),s=n.n(r);s.a},"49c7":function(e,t,n){},"4a68":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="4a68"},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("button",{staticClass:"animated shake",on:{click:e.toggleModal}},[n("i",{staticClass:"fas fa-info-circle"})]),n("div",{staticClass:"modal animated",class:{hidden:!e.isOpenModal,bounce:e.isOpenModal}},[n("button",{on:{click:e.toggleModal}},[e._v("\n      X\n    ")]),e._v("\n    Hi, refresh and open the app in two windows to witness the full power.\n  ")]),n("nav-bar"),n("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-board"},[n("div",{staticClass:"flex flex-row"},[e.cells?n("game-board",{attrs:{cells:e.cells}}):e._e(),n("info-section")],1)])},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"game-board",class:{"flipped-board":"black"===e.userColor,hidden:e.choosingColors},on:{click:e.unselect}},[n("div",{staticClass:"flex flex-column"},[n("div",{staticClass:"board-row top-row flex space-between"},[n("game-cell",{attrs:{exit:!0,cell:e.cells[0]}}),n("div",{staticClass:"board-cells flex space-between"},[e._l(6,function(t){return e.cells?n("game-cell",{key:t,attrs:{cell:e.cells[t]}}):e._e()}),n("game-cell",{attrs:{middle:!0,cell:e.cells[26]}}),e._l(6,function(t){return e.cells?n("game-cell",{key:t+6,attrs:{cell:e.cells[t+6]}}):e._e()})],2)],1),n("div",{staticClass:"board-wrapper left-side-wrapper flex space-around align-center"},[e.winner&&!e.mars?n("span",{staticClass:"animated flash win capitalize"},[e._v(e._s(e.isWinner?"you won!":"you lost!"))]):e._e(),e.winner&&e.mars&&!e.turkishMars?n("span",{staticClass:"animated flash win capitalize"},[e._v(e._s(e.isWinner?"you won! mars!!":"you lost! mars!!"))]):e._e(),e.winner&&e.mars&&e.turkishMars?n("span",{staticClass:"animated flash win capitalize"},[e._v(e._s(e.isWinner?"you won! turkish mars!!":"you lost! turkish mars!!"))]):e._e(),n("dices-section")],1),n("div",{staticClass:" board-wrapper right-side-wrapper flex space-around align-center"},[n("action-btns")],1),n("div",{staticClass:"board-row bot-row flex space-between"},[n("div",{staticClass:"board-cells flex space-between"},[e._l(6,function(t){return e.cells?n("game-cell",{key:t+12,attrs:{cell:e.cells[t+12]}}):e._e()}),n("game-cell",{attrs:{middle:!0,cell:e.cells[27]}}),e._l(6,function(t){return e.cells?n("game-cell",{key:t+18,attrs:{cell:e.cells[t+18]}}):e._e()})],2),n("game-cell",{attrs:{exit:!0,cell:e.cells[25]}})],1)])])},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-cell flex flex-column align-center wrap",class:{middle:e.middle,exit:e.exit,possibleMove:e.cell.isPossibleMove},on:{click:function(t){return t.stopPropagation(),e.onCellClick(t)}}},[e.middle?e._e():n("div",{class:{"triangle-up":e.cell.id>12&&e.cell.id<25,triangle:e.cell.id>0&&e.cell.id<25,"triangle-down":e.cell.id<13&&e.cell.id>0,"triangle-red":e.cell.id%2===0,"triangle-black":e.cell.id%2!==0,"exit-cell":0===e.cell.id||25===e.cell.id,"triangle-green":e.cell.isPossibleMove}}),e._l(e.cell.soldiers,function(t,r){return e.cell.soldiers?n("soldier",{key:t.id,attrs:{soldier:t,idx:r},nativeOn:{dblclick:function(t){e.onSoldierDblClick()},mouseout:function(t){e.onSoldierOut()},mouseover:function(n){e.onSoldierHover(t)},click:function(n){n.stopPropagation(),e.onSoldierClick(t)}}}):e._e()})],2)},d=[],f=(n("96cf"),n("1da1")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"soldier-section"},[e.soldier?n("div",{staticClass:"soldier",class:{white:"white"===e.soldier.color,black:"black"===e.soldier.color,selected:e.soldier.selected,"animated fadeIn":e.soldier.hasMoved,"animated fadeOut":e.soldier.isMoving}}):e._e(),e.color?n("div",{staticClass:"soldier-const",class:{white:"white"===e.color,black:"black"===e.color}}):e._e()])},m=[],p={props:{soldier:Object,color:String}},g=p,v=(n("8eb0"),n("2877")),w=Object(v["a"])(g,h,m,!1,null,"00689bda",null);w.options.__file="soldier.vue";var b=w.exports,C=(n("8055"),{props:{cell:Object,middle:Boolean,exit:Boolean},components:{soldier:b},methods:{onCellClick:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.selectedSoldier){e.next=7;break}return this.$store.commit("showNoPossibleMoves"),e.next=4,this.$store.dispatch({type:"moveSoldier",targetCell:this.cell});case 4:t=e.sent,console.log("soldierDidMove1",t),t&&(console.log("soldierDidMove2",t),n=1,r=this.$store.getters.cells,this.$socket.emit("soldierMoved",r,n),this.$store.commit("unselectSoldiers"));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onSoldierClick:function(e){e.selected?this.$store.commit("unselectSoldiers"):e.isOut?this.onCellClick():(this.$store.commit("unselectSoldiers"),this.$store.commit("showNoPossibleMoves"),this.$store.commit({type:"showPossibleMoves",possibleMoves:e.possibleMoves,soldier:e}),this.$store.commit({type:"selectSoldier",soldierId:e.id}))},onSoldierDblClick:function(){},onSoldierHover:function(e){e.possibleMoves.length&&this.$store.commit({type:"showPossibleMoves",possibleMoves:e.possibleMoves,soldier:e})},onSoldierOut:function(){this.selectedSoldier||this.$store.commit("showNoPossibleMoves")}},computed:{selectedSoldier:function(){return this.$store.getters.selectedSoldier}}}),_=C,k=(n("090a"),Object(v["a"])(_,a,d,!1,null,"1a31e904",null));k.options.__file="game-cell.vue";var M=k.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"action-btns",class:{hidden:e.loading}},[e.showDiceBtn?n("button",{staticClass:"animated bold capitalize",class:{lightSpeedIn:e.showDiceBtn,fadeOutUp:!e.showDiceBtn},on:{click:function(t){return t.stopPropagation(),e.throwDice(t)}}},[e._v("\n        roll\n    ")]):e._e(),e.showDicesBtn?n("button",{staticClass:"animated bold capitalize",class:{lightSpeedIn:e.showDicesBtn,fadeOutUp:!e.showDicesBtn},on:{click:function(t){return t.stopPropagation(),e.throwDices(t)}}},[e._v("\n            roll\n    ")]):e._e()])},D=[],y={getRandomInt:S,makeId:x,makeLorem:T,getCurrency:O};function S(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function x(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function O(e){switch(e){case"ILS":return"₪";case"EUR":return"€";case"USD":return"$";default:return""}}function T(e){var t="";while(t.length<e){var n=S(3,6),r=I(n);Math.random()>.9&&(r+=","),t+=r+" "}return t=t.substring(0,e),t=t[0].toUpperCase()+t.substr(1),t}function I(e){var t="";while(t.length<e){var n=U();t+=n}return t}function U(){var e="abcdefghijklmnopqrstuvwxyz",t=parseInt(Math.random()*e.length);return e.charAt(t)}var E={throwStartDice:P};function P(e){return e=y.getRandomInt(1,7),e}var j={data:function(){return{loading:!0}},created:function(){var e=this;setTimeout(function(){e.loading=!1},1e3)},computed:{showDicesBtn:function(){return this.isGameOn&&!this.duringTurn&&!this.rolling&&this.currTurn===this.userColor},showDiceBtn:function(){return!this.isGameOn&&(!this.startDice.white&&"white"===this.userColor||this.startDice.white&&!this.startDice.black&&"black"===this.userColor)},dices:function(){return this.$store.getters.dices},duringTurn:function(){return this.$store.getters.duringTurn},currTurn:function(){return this.$store.getters.currTurn},userColor:function(){return this.$store.getters.loggedInUserColor},rolling:function(){return this.$store.getters.dicesRolling},isGameOn:function(){return this.$store.getters.isGameOn},startDice:function(){return this.$store.getters.startDice}},methods:{throwDices:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$store.commit("rollDices"),t=1,this.$socket.emit("rollDices",t),this.$store.dispatch("throwDices"),this.$socket.emit("dicesRes",t,this.dices);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),throwDice:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.commit("rollDices"),t=1,this.$socket.emit("rollDices",t),n=this.userColor,n="white"===n?"black":"white",e.next=7,this.$store.dispatch({type:"diceRes",userColor:n});case 7:setTimeout(function(){r.$store.commit("unrollDices")},1e3),this.$socket.emit("startDiceRes",t,this.startDice.dice);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},L=j,B=(n("5d65"),Object(v["a"])(L,$,D,!1,null,"9639c8a6",null));B.options.__file="action-btns.vue";var R=B.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"dices-section flex justify-center"},[e.isGameOn&&!e.winner?n("div",{staticClass:"two-dices-wrapper flex space-between"},[n("dice",{attrs:{rolling:e.rolling,used:!e.dices.num1&&!!e.dices.num2,num:e.dices.num1ToShow}}),n("dice",{attrs:{rolling:e.rolling,used:!e.dices.num2&&!!e.dices.num1&&e.dices.doubleCount<=1,num:e.dices.num2ToShow}})],1):e._e(),e.isGameOn?e._e():n("dice",{attrs:{rolling:e.rolling,num:e.startDice.dice}})],1)},G=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dice flex flex-row justify-evenly",class:{rolling:e.rolling,used:e.used}},[n("div",{staticClass:"flex flex-column justify-evenly"},e._l(3,function(t){return n("div",{key:t,staticClass:"dot",class:{show:e.displayDots.includes(2*t-1)}})})),n("div",{staticClass:"flex flex-column justify-evenly"},[n("div",{staticClass:"dot",class:{show:e.displayDots.includes(7)}})]),n("div",{staticClass:"flex flex-column justify-evenly"},e._l(3,function(t){return n("div",{key:t,staticClass:"dot",class:{show:e.displayDots.includes(0+2*t)}})}))])},A=[],H=(n("c5f6"),{props:{num:Number,rolling:Boolean,used:Boolean},computed:{displayDots:function(){switch(this.num){case 1:return[7];case 2:return[1,6];case 3:return[1,6,7];case 4:return[1,5,2,6];case 5:return[1,5,2,6,7];case 6:return[1,2,3,4,5,6]}}}}),z=H,J=(n("f42a"),Object(v["a"])(z,W,A,!1,null,"75a519c6",null));J.options.__file="dice.vue";var q=J.exports,F={components:{dice:q,soldier:b},sockets:{dicesRolling:function(){this.$store.commit("rollDices")},dicesUnrolling:function(e){var t=this;setTimeout(function(){t.$store.commit("unrollDices"),t.$store.commit({type:"dicesRes",dices:e})},1e3)},diceUnrolling:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(function(){r.$store.commit("unrollDices")},1e3);case 2:return n=this.userColor,e.next=5,this.$store.dispatch({type:"diceRes",dice:t,userColor:n});case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),turnEnded:function(){this.$store.commit("endTurn")}},computed:{dices:function(){return this.$store.getters.dices},duringTurn:function(){return this.$store.getters.duringTurn},userColor:function(){return this.$store.getters.loggedInUserColor},rolling:function(){return this.$store.getters.dicesRolling},isGameOn:function(){return this.$store.getters.isGameOn},startDice:function(){return this.$store.getters.startDice},winner:function(){return this.$store.getters.winner}},watch:{duringTurn:function(e,t){if(!1===e){var n=1;this.$socket.emit("endTurn",n)}},"startDice.white":function(e,t){var n=this;if(this.startDice.black&&this.startDice.white){if(this.startDice.white===this.startDice.black)return this.$store.commit("nullDice"),!1;var r=this.startDice.white>this.startDice.black?"white":"black";this.$store.commit({type:"setCurrTurn",startingColor:r}),setTimeout(function(){n.$store.commit("gameOn")},2e3)}},"startDice.black":function(e,t){var n=this;if(this.startDice.black&&this.startDice.white){if(this.startDice.white===this.startDice.black)return this.$store.commit("nullDice"),!1;var r=this.startDice.white>this.startDice.black?"white":"black";this.$store.commit({type:"setCurrTurn",startingColor:r}),setTimeout(function(){n.$store.commit("gameOn")},2e3)}}}},K=F,V=(n("76f1"),Object(v["a"])(K,N,G,!1,null,"3c97b635",null));V.options.__file="dices-section.vue";var X=V.exports,Q={props:{cells:Array},components:{gameCell:M,dicesSection:X,actionBtns:R},created:function(){},methods:{unselect:function(){this.$store.commit("showNoPossibleMoves"),this.$store.commit("unselectSoldiers")}},computed:{winner:function(){return this.$store.getters.winner},userColor:function(){return this.$store.getters.loggedInUserColor},isWinner:function(){return this.winner===this.userColor},mars:function(){return this.$store.getters.isMars},turkishMars:function(){return this.$store.getters.isTurkishMars},choosingColors:function(){return this.$store.getters.choosingColors}}},Y=Q,Z=(n("223a"),Object(v["a"])(Y,l,u,!1,null,"1fabf880",null));Z.options.__file="game-board.vue";var ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"info-section flex flex-column align-center"},[e.currTurn?n("div",{staticClass:"soldier-section capitalize"},[e._v("current turn:")]):e._e(),n("soldier",{attrs:{color:e.currTurn}})],1)},ne=[],re={components:{soldier:b},computed:{currTurn:function(){return this.$store.getters.currTurn}}},se=re,ie=(n("8390f"),Object(v["a"])(se,te,ne,!1,null,"da50cfc6",null));ie.options.__file="info-section.vue";var oe=ie.exports,ce={name:"appBoard",components:{gameBoard:ee,soldier:b,infoSection:oe},methods:{},computed:{cells:function(){return this.$store.getters.cells},currTurn:function(){return this.$store.getters.currTurn},winner:function(){return this.$store.getters.winner},mars:function(){return this.$store.getters.isMars},turkishMars:function(){return this.$store.getters.isTurkishMars}},created:function(){this.$store.dispatch({type:"setBoard"});var e=1;this.$socket.emit("gameJoined",e),this.$store.commit("setChoosingColors")},sockets:{userJoined:function(){var e=1;this.$socket.emit("alreadyHere",e)},someoneAlreadyHere:function(){this.$store.commit("changeMyColor")},movedSoldier:function(e){this.$store.dispatch({type:"setBoard",cells:e})},gameEnded:function(e){this.$store.commit({type:"endGame",winner:e})},isMars:function(){this.$store.commit("setMars")},isTurkishMars:function(){this.$store.commit("setTurkishMars")}},watch:{winner:function(e,t){if(e){var n=1,r=e;this.$socket.emit("endGame",n,r)}},mars:function(e){if(e){var t=1;this.$socket.emit("mars",t)}},turkishMars:function(e){if(e){var t=1;this.$socket.emit("turkishMars",t)}}}},le=ce,ue=(n("429d"),Object(v["a"])(le,o,c,!1,null,"9c178112",null));ue.options.__file="app-board.vue";var ae=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isLoggedInUser?e._e():n("div",{staticClass:"nav-bar flex space-between"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("backGammon")]),n("div",{staticClass:"links"},[e.isLoggedInUser?n("el-button",{attrs:{round:"",to:"/event/edit"},on:{click:e.goEdit}},[e._v("\n        Create "),n("i",{staticClass:"fas fa-plus"})]):e._e(),e.loggedInUser?n("img",{staticClass:"circle-icon-sm",attrs:{src:e.loggedInUser.pic},on:{click:e.goProfile}}):e._e(),e.isLoggedInUser?n("a",{attrs:{href:"#"}},[e._v("\n        "+e._s(e.userColor)+"\n      ")]):e._e(),e.isLoggedInUser?n("a",{on:{click:e.logout}},[e._v("Logout")]):n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),n("a",{staticClass:"icon",class:{open:e.isOpen,guest:!e.isLoggedInUser},on:{click:e.setIsOpen}},[n("i",{staticClass:"fa fa-bars"})]),n("aside",{staticClass:"flex flex-column",class:{open:e.isOpen,guest:!e.isLoggedInUser}},[e.isLoggedInUser?n("a",{on:{click:e.logout}},[e._v("Logout")]):e._e(),e.isLoggedInUser?n("div",{staticClass:"flex align-center profile-wrapper"},[n("img",{staticClass:"circle-icon-sm",attrs:{src:e.loggedInUser.pic},on:{click:e.goProfile}}),n("a",{on:{click:e.goProfile}},[e._v("\n          Profile\n        ")])]):n("a",{on:{click:e.goLogin}},[e._v("Login")]),e.isLoggedInUser?n("el-button",{attrs:{round:"",to:"/event/edit"},on:{click:e.goEdit}},[e._v("\n        Create "),n("i",{staticClass:"fas fa-plus"})]):e._e()],1)],1)},fe=[],he={data:function(){return{isOpen:!1}},methods:{goProfile:function(){this.isOpen=!1,this.$router.push("/user/".concat(this.loggedInUser._id))},setIsOpen:function(){return this.isOpen=!this.isOpen},logout:function(){var e=this;this.isOpen=!1,this.$store.dispatch({type:"logout"}).then(function(){e.$router.push("/")})},goEdit:function(){this.isOpen=!1,this.$router.push("/event/edit")},goLogin:function(){this.isOpen=!1,this.$router.push("/login")}},computed:{isLoggedInUser:function(){return this.$store.getters.isLoggedInUser},loggedInUser:function(){return this.$store.getters.loggedInUser},userColor:function(){return this.$store.getters.loggedInUserColor}}},me=he,pe=(n("c597"),Object(v["a"])(me,de,fe,!1,null,null,null));pe.options.__file="nav-bar.vue";var ge=pe.exports,ve={components:{navBar:ge},data:function(){return{isOpenModal:!1}},methods:{toggleModal:function(){this.isOpenModal=!this.isOpenModal}},created:function(){this.$store.dispatch("getLoggedInUser")}},we=ve,be=(n("2f40"),Object(v["a"])(we,s,i,!1,null,"3560f026",null));be.options.__file="App.vue";var Ce=be.exports,_e=n("8c4f"),ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"signup-card-wrapper"},[n("form",{staticClass:"signup-form-container flex flex-column align-center",on:{submit:function(t){return t.preventDefault(),e.submitNewUser(t)}}},[n("h1",[e._v("sign up")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],attrs:{required:"",type:"text",placeholder:"Full Name..."},domProps:{value:e.newUser.name},on:{input:function(t){t.target.composing||e.$set(e.newUser,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{required:"",type:"password",placeholder:"Password..."},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),n("div",{staticClass:"signup-button-wrapper"},[n("button",{staticClass:"brand-button",attrs:{type:"submit"}},[e._v("Save")]),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"brand-button"},[e._v("Back")])])],1)])])},Me=[],$e={data:function(){return{newUser:{name:"",password:""}}},methods:{submitNewUser:function(){var e=this;this.$store.dispatch({type:"signUpUser",newUser:this.newUser}).then(function(){e.fromEventId?e.$router.push("/event/".concat(e.fromEventId)):e.$router.push("/")})}},created:function(){document.body.scrollIntoView({block:"start"}),this.fromEventId=this.$route.params.eventId}},De=$e,ye=(n("7dd9"),Object(v["a"])(De,ke,Me,!1,null,"26695c42",null));ye.options.__file="sign-up.vue";var Se=ye.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"login-page flex justify-center"},[n("form",{staticClass:"flex flex-column align-center",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("h2",[e._v("Login to play")]),n("el-input",{attrs:{required:"",placeholder:"username"},model:{value:e.loginData.userName,callback:function(t){e.$set(e.loginData,"userName",t)},expression:"loginData.userName"}}),n("el-input",{attrs:{required:"",type:"password",placeholder:"password"},model:{value:e.loginData.password,callback:function(t){e.$set(e.loginData,"password",t)},expression:"loginData.password"}}),e.isWrong?n("span",[e._v("Wrong password / username")]):e._e(),n("div",{staticClass:"flex"},[n("el-button",{staticClass:"brand-button",attrs:{round:"","native-type":"submit"}},[n("i",{staticClass:"fas fa-sign-in-alt"}),e._v(" Login")]),n("el-button",{staticClass:"brand-button",attrs:{round:""},on:{click:e.signup}},[n("i",{staticClass:"fas fa-user-plus"}),e._v(" Sign Up")])],1),n("a",[e._v("forgot your password?")])],1)])},Oe=[],Te={data:function(){return{loginData:{userName:"",password:""},isWrong:!1,fromEventId:""}},methods:{onSubmit:function(){var e=this;this.$store.dispatch({type:"login",loginData:this.loginData}).then(function(t){t?(e.isWrong=!1,e.fromEventId?e.$router.push("/event/".concat(e.fromEventId)):e.$router.push("/")):e.isWrong=!0})},signup:function(){this.fromEventId?this.$router.push("/signup/".concat(this.fromEventId)):this.$router.push("/signup")}},created:function(){document.body.scrollIntoView({block:"start"}),this.fromEventId=this.$route.params.eventId}},Ie=Te,Ue=(n("8ff2"),Object(v["a"])(Ie,xe,Oe,!1,null,null,null));Ue.options.__file="login-page.vue";var Ee=Ue.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-board")},je=[],Le={components:{appBoard:ae}},Be=Le,Re=(n("cae5"),Object(v["a"])(Be,Pe,je,!1,null,null,null));Re.options.__file="home-page.vue";var Ne=Re.exports;r["default"].use(_e["a"]);var Ge=new _e["a"]({mode:"history",base:"/",routes:[{path:"/",name:"homepage",component:Ne},{path:"/signup",name:"signup",component:Se},{path:"/login",name:"login",component:Ee}]}),We=n("2f62"),Ae=(n("6762"),n("2fdb"),n("2909")),He=(n("ac6a"),n("7f7f"),n("20d6"),n("7514"),{createSoldiers:Ke,getAllSoldiers:Qe,getSoldierById:Ye,getCellBySoldierId:et,updateCells:nt,updateCell:rt,isPossibleMove:st,passTurn:it,checkIsEating:ot,hasEatenSoldiers:ct,isMiddleCell:lt,calcPossibleMoves:ft,throwDices:ut,updateDices:at,getMiddleCell:tt,isEndGame:kt,isMars:Mt,isTurkishMars:$t,nullDices:dt,clearCells:Dt}),ze=0,Je=25,qe=26,Fe=27;function Ke(e,t){for(var n=[],r=0;r<e;r++)n.push(Xe(t));return n}var Ve=0;function Xe(e){var t={color:e,id:Ve++,possibleMoves:[],isEaten:!1,isOut:!1,selected:!1,isLastInCell:!1,hasMoved:!1,isMoving:!1};return t}function Qe(e){var t=[];return e.map(function(e){return e.soldiers}).forEach(function(e){e.forEach(function(e){t.push(e)})}),t}function Ye(e,t){var n;return e.find(function(e){if(n=e.soldiers.find(function(e){return e.id===t}),n)return n}),n}function Ze(e,t){return e.find(function(e){return e.id===t})}function et(e,t){return e.find(function(e){return e.soldiers.find(function(e){return e.id===t})})}function tt(e,t){var n="white"===e?qe:Fe;return Ze(t,n)}function nt(e){e.forEach(function(e){rt(e)})}function rt(e){var t=0,n=0;e.soldiers.forEach(function(r,s){r.possibleMoves=[],r.isLastInCell=s===e.soldiers.length-1,r.selected=!1,"white"===r.color?t++:"black"===r.color&&n++}),e.isHouseOf=t>1?"white":n>1&&"black",e.id!==Je&&e.id!==ze||e.soldiers.forEach(function(e){e.isOut=!0})}function st(e,t){return void 0!==t.possibleMoves.find(function(t){return t===e})}function it(e){return"white"===e?"black":"white"}function ot(e,t){return!(!e.soldiers.length||e.soldiers[0].color===t)}function ct(e,t){return t=t.filter(function(t){return t.color===e}),!!t.find(function(e){return e.isEaten})}function lt(e){return e.id===qe||e.id===Fe}function ut(e){if(e.num1=y.getRandomInt(1,7),e.num2=y.getRandomInt(1,7),e.num1>e.num2){var t=e.num1;e.num1=e.num2,e.num2=t}return e.num1ToShow=e.num1,e.num2ToShow=e.num2,e.num1===e.num2?(e.doubleCount=4,e.num2=null):e.doubleCount=0,e}function at(e,t,n){var r=t.id;r===qe?r=ze:r===Fe&&(r=Je);var s=Math.abs(r-n.id);if(e.doubleCount){var i=Math.floor(s/e.num1);s%e.num1!==0&&i++,e.doubleCount-=i,e.doubleCount||(e.num1=null)}else s<=e.num1?e.num1=null:s<=e.num2?e.num2=null:(e.num1=null,e.num2=null);return e}function dt(e){return e.num1=null,e.num2=null,e.doubleCount=null,e}function ft(e,t,n,r){r=ht(n,r,t);var s="white"===t?1:-1,i=[];return r.forEach(function(r){var o=et(n,r.id),c=mt(e,o,s);c=pt(o,c),c=gt(n,c,t),c=vt(e,c),c=wt(c),_t(n,t)||(c=bt(c,t)),r.possibleMoves=c,i.push({soldierId:r.id,moves:c})}),Ct(i)||(i=[]),i}function ht(e,t,n){return ct(n,t)?"white"===n?[Ze(e,26).soldiers[Ze(e,qe).soldiers.length-1]]:[Ze(e,Fe).soldiers[Ze(e,Fe).soldiers.length-1]]:t.filter(function(e){return e.color===n&&e.isLastInCell})}function mt(e,t,n){var r=[],s=t.id,i=!0;if(s===qe?s=ze:s===Fe?s=Je:i=!1,e.doubleCount)for(var o=1;o<=e.doubleCount;o++)r.push(s+n*e.num1*o);else r=e.num1||e.num2?i?[s+n*e.num1,s+n*e.num2,null]:[s+n*e.num1,s+n*e.num2,s+n*(e.num1+e.num2)]:[];return r}function pt(e,t){var n=e.id;return e.id===Fe?n=Je:e.id===qe&&(n=ze),t.map(function(e){return e===n?null:e})}function gt(e,t,n){return e=t.map(function(t){return Ze(e,t)}),e.forEach(function(e,r){(e&&"white"===n&&"black"===e.isHouseOf||e&&"black"===n&&"white"===e.isHouseOf)&&(t[r]=null)}),t}function vt(e,t){if(e.doubleCount){var n=t.findIndex(function(e){return null===e});return-1!==n&&(t=t.map(function(e,t){return t>n?null:e})),t}return null===t[0]&&null===t[1]&&(t[2]=null),t}function wt(e){e=e.map(function(e){return e>Je?Je:e<ze?ze:e});var t=e.findIndex(function(e){return e===Je||e===ze});return-1!==t&&(e=e.map(function(e,n){return n>t?null:e})),e}function bt(e,t){return"white"===t?e.map(function(e){return e>=Je||e===ze?null:e}):e.map(function(e){return e===ze||e>=Je?null:e})}function Ct(e){return e.find(function(e){return!!e.moves.length&&void 0!==e.moves.find(function(e){return null!==e})})}function _t(e,t){e="white"===t?e.slice(19,26):e.slice(0,7);var n=0;return e.forEach(function(e){e.soldiers.forEach(function(e){e.color===t&&n++})}),15===n}function kt(e,t){var n="white"===t?e[Je].soldiers.length:e[ze].soldiers.length;return 15===n}function Mt(e,t){return"white"===t?!e[ze].soldiers.length:!e[Je].soldiers.length}function $t(e,t){var n=0;return e="white"===t?e.slice(0,7):e.slice(19,26),e.forEach(function(e){return n+=e.soldiers.length}),n<15}function Dt(e){return e.forEach(function(e){e.soldiers=[]}),e}var yt=n("bc3a"),St="",xt={login:Ot,logout:Tt,getLoggedInUser:It,getById:Ut,signupUser:Et};function Ot(e){var t=e.userName,n=e.password;return yt.put("".concat(St,"/login"),{userName:t,password:n}).then(function(e){return sessionStorage.loggedInUser=JSON.stringify(e.data),e.data})}function Tt(){return yt.post("".concat(St,"/logout")).then(function(){sessionStorage.removeItem("loggedInUser")})}function It(){return sessionStorage.loggedInUser?Promise.resolve(JSON.parse(sessionStorage.loggedInUser)):Promise.resolve("")}function Ut(e){if(e)return yt.get("".concat(St,"/player/").concat(e)),yt.get("".concat(St,"/player/").concat(e)).then(function(e){return e.data})}function Et(e){return yt.post("".concat(St,"/signup"),e)}var Pt={state:{cells:[],soldiers:[],selectedSoldier:null,currTurn:null,dices:{num1:6,num2:6,num1ToShow:6,num2ToShow:6,doubleCount:0,rolling:!1},possibleMoves:[],winner:!1,duringTurn:!1,loggedInUser:{},isMars:!1,isTurkishMars:!1},mutations:{setLoggedInUser:function(e,t){var n=t.user;e.loggedInUser={name:n.name,_id:n._id,pic:n.pic,color:"white"}},logOutUser:function(e){e.loggedInUser=""},changeMyColor:function(e){e.loggedInUser.color="black"},unselectSoldiers:function(e){var t=He.getAllSoldiers(e.cells);t.forEach(function(e){return e.selected=!1}),e.selectedSoldier=null},selectSoldier:function(e,t){var n=t.soldierId,r=He.getSoldierById(e.cells,n),s=He.getAllSoldiers(e.cells);r.color!==e.currTurn||!r.isLastInCell||He.hasEatenSoldiers(e.currTurn,s)&&!r.isEaten||(r.selected=!0,e.selectedSoldier=r)},setCells:function(e){for(var t=0;t<=27;t++)e.cells.push({id:t,soldiers:[],isHouseOf:!1,isPossibleMove:!1})},setSoldiers:function(e){var t={1:{amount:2,color:"white"},6:{amount:5,color:"black"},8:{amount:3,color:"black"},12:{amount:5,color:"white"},13:{amount:5,color:"black"},17:{amount:3,color:"white"},19:{amount:5,color:"white"},24:{amount:2,color:"black"}};for(var n in t){var r;(r=e.cells[n].soldiers).push.apply(r,Object(Ae["a"])(He.createSoldiers(t[n].amount,t[n].color)))}He.updateCells(e.cells)},showPossibleMoves:function(e,t){var n=t.possibleMoves,r=t.soldier;e.selectedSoldier||r.color!==e.currTurn||e.cells.filter(function(e){return n.includes(e.id)}).forEach(function(e){return e.isPossibleMove=!0})},showNoPossibleMoves:function(e){e.cells.forEach(function(e){return e.isPossibleMove=!1})},selectedSoldierNotEaten:function(e){e.selectedSoldier.isEaten=!1},updateDices:function(e,t){var n=t.srcCell,r=t.targetCell;e.dices=He.updateDices(e.dices,n,r)},calcPossibleMoves:function(e){var t=He.getAllSoldiers(e.cells);e.possibleMoves=He.calcPossibleMoves(e.dices,e.currTurn,e.cells,t)},checkWinner:function(e){e.winner=!!He.isEndGame(e.cells,e.currTurn)&&e.currTurn},checkMars:function(e){e.isMars=He.isMars(e.cells,e.currTurn)},setMars:function(e){e.isMars=!0},checkTurkishMars:function(e){e.isTurkishMars=He.isTurkishMars(e.cells,e.currTurn)},setTurkishMars:function(e){e.isTurkishMars=!0},startTurn:function(e){e.duringTurn=!0},endTurn:function(e){e.duringTurn=!1,e.dices=He.nullDices(e.dices),e.currTurn=He.passTurn(e.currTurn)},endGame:function(e,t){var n=t.winner;e.winner=n},clearBoard:function(e){e.cells=He.clearCells(e.cells)},setNewSoldiers:function(e,t){var n=t.cells;e.cells=n},updateCells:function(e){He.updateCells(e.cells)},rollDices:function(e){e.dices.rolling=!0},unrollDices:function(e){e.dices.rolling=!1},throwDices:function(e){e.dices=He.throwDices(e.dices)},dicesRes:function(e,t){var n=t.dices;e.dices.num1ToShow=n.num1ToShow,e.dices.num2ToShow=n.num2ToShow},setCurrTurn:function(e,t){var n=t.startingColor;e.currTurn=n}},actions:{throwDices:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,n("startTurn"),n("throwDices"),n("calcPossibleMoves"),e.next=6,setTimeout(function(){n("unrollDices")},1e3);case 6:if(r.possibleMoves.length){e.next=9;break}return e.next=9,setTimeout(function(){n("endTurn")},2e3);case 9:return e.abrupt("return",r.dices);case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getLoggedInUser:function(e){var t=e.commit;xt.getLoggedInUser().then(function(e){t({type:"setLoggedInUser",user:e})})},login:function(e,t){var n=e.commit,r=t.loginData;return xt.login(r).then(function(e){return e&&n({type:"setLoggedInUser",user:e}),e})},logout:function(e){var t=e.commit;return xt.logout(),t("logOutUser"),Promise.resolve()},setBoard:function(e,t){var n=e.commit,r=t.cells;r?(n("clearBoard"),n({type:"setNewSoldiers",cells:r}),n("updateCells"),n("calcPossibleMoves")):(n("setCells"),n({type:"setSoldiers"}))},moveSoldier:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,i,o,c,l,u,a,d,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.state,s=t.commit,i=n.targetCell,o=He.isPossibleMove(i.id,r.selectedSoldier),o){e.next=5;break}return e.abrupt("return",!1);case 5:return c=He.getCellBySoldierId(r.cells,r.selectedSoldier.id),l=He.isMiddleCell(c),l&&s("selectedSoldierNotEaten"),u=He.checkIsEating(i,r.currTurn),u&&(a=i.soldiers.pop(),a.isEaten=!0,d=He.getMiddleCell(a.color,r.cells),d.soldiers.push(a),He.updateCell(d)),r.selectedSoldier.isMoving=!0,f=new Promise(function(e){setTimeout(function(){if(c.soldiers.pop(),r.selectedSoldier.isMoving=!1,i.soldiers.push(r.selectedSoldier),r.selectedSoldier.hasMoved=!0,s({type:"updateDices",srcCell:c,targetCell:i}),s("calcPossibleMoves"),s("checkWinner"),r.winner)return s("checkMars"),r.isMars&&s("checkTurkishMars"),Promise.resolve(!0);r.possibleMoves.length||s("endTurn"),e(!0)},300)}),e.next=14,f;case 14:return e.abrupt("return",Promise.resolve(f));case 15:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},getters:{cells:function(e){return e.cells},dices:function(e){return e.dices},isMars:function(e){return e.isMars},winner:function(e){return e.winner},currTurn:function(e){return e.currTurn},duringTurn:function(e){return e.duringTurn},loggedInUser:function(e){return e.loggedInUser},dicesRolling:function(e){return e.dices.rolling},isTurkishMars:function(e){return e.isTurkishMars},isLoggedInUser:function(e){return!!e.loggedInUser},selectedSoldier:function(e){return e.selectedSoldier},loggedInUserColor:function(e){return e.loggedInUser.color}}},jt={state:{isGameOn:!1,startDice:{dice:6,white:null,black:null},choosingColors:!0},mutations:{gameOn:function(e){e.isGameOn=!0},setStartDice:function(e,t){var n=t.color;e.startDice.dice=e.startDice[n]=E.throwStartDice(e.startDice.dice)},setStartDiceTo:function(e,t){var n=t.dice,r=t.color;e.startDice.dice=e.startDice[r]=n},nullDice:function(e){e.startDice.white=e.startDice.black=null},setChoosingColors:function(e){e.choosingColors=!1}},actions:{diceRes:function(e,t){var n=e.commit,r=t.dice,s=t.userColor,i="white"===s?"black":"white";n(r?{type:"setStartDiceTo",color:i,dice:r}:{type:"setStartDice",color:i})}},getters:{isGameOn:function(e){return e.isGameOn},startDice:function(e){return e.startDice},choosingColors:function(e){return e.choosingColors}}};r["default"].use(We["a"]);var Lt=new We["a"].Store({modules:{gameModule:Pt,startModule:jt},state:{},mutations:{},actions:{},getters:{}}),Bt=n("5c96"),Rt=n.n(Bt),Nt=(n("0fae"),n("e2e4"),n("5132")),Gt=n.n(Nt),Wt=(n("c1c3"),"http://localhost:3000");Wt="/",r["default"].use(We["a"]),r["default"].use(Rt.a),r["default"].use(new Gt.a({debug:!0,connection:Wt,vuex:{store:Lt,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),r["default"].config.productionTip=!1,r["default"].crossOrigin="true",new r["default"]({router:Ge,store:Lt,render:function(e){return e(Ce)}}).$mount("#app")},"5d65":function(e,t,n){"use strict";var r=n("d9af"),s=n.n(r);s.a},"755b":function(e,t,n){},"76f1":function(e,t,n){"use strict";var r=n("ae10"),s=n.n(r);s.a},"7dd9":function(e,t,n){"use strict";var r=n("ccc9"),s=n.n(r);s.a},"8390f":function(e,t,n){"use strict";var r=n("dbdb"),s=n.n(r);s.a},"85a7":function(e,t,n){},"8eb0":function(e,t,n){"use strict";var r=n("85a7"),s=n.n(r);s.a},"8ff2":function(e,t,n){"use strict";var r=n("49c7"),s=n.n(r);s.a},ae10:function(e,t,n){},c1c3:function(e,t,n){},c597:function(e,t,n){"use strict";var r=n("09ab"),s=n.n(r);s.a},cae5:function(e,t,n){"use strict";var r=n("eda4"),s=n.n(r);s.a},ccc9:function(e,t,n){},d9af:function(e,t,n){},dbdb:function(e,t,n){},dd06:function(e,t,n){},ebef:function(e,t,n){},eda4:function(e,t,n){},f42a:function(e,t,n){"use strict";var r=n("ebef"),s=n.n(r);s.a},f606:function(e,t,n){}});
//# sourceMappingURL=app.8cc8c676.js.map