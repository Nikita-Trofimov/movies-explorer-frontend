(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],Array(30).concat([function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(23),i=s.n(a),r=(s(30),s(14)),o=s(2),l=s(4),u=s(16),j=s(17),b="https://api.nomoreparties.co",h=new(function(){function e(t){Object(u.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(j.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," : ").concat(e.statusText))}},{key:"_fetch",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers,credentials:"include"}).then(this._checkResponse)}},{key:"saveMovie",value:function(e){return fetch("".concat(this._baseUrl,"/movies"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({country:e.country,director:e.director,duration:e.duration,year:e.year,description:e.description,image:b+e.image.url,trailer:e.trailerLink,thumbnail:b+e.image.formats.thumbnail.url,movieId:e.id,nameRU:e.nameRU,nameEN:e.nameEN})}).then(this._checkResponse)}},{key:"unSaveMovie",value:function(e){return fetch("".concat(this._baseUrl,"/movies/").concat(e),{method:"DELETE",headers:this._headers,credentials:"include"}).then(this._checkResponse)}},{key:"getSavedMovies",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/movies";return this._fetch(e)}},{key:"register",value:function(e){var t=e.name,s=e.email,n=e.password;return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({name:t,password:n,email:s})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},{key:"login",value:function(e){var t=e.email,s=e.password;return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({password:s,email:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},{key:"getUser",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/users/me";return this._fetch(e)}},{key:"updateUser",value:function(e){var t=e.name,s=e.email;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({name:t,email:s})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},{key:"logout",value:function(){return fetch("".concat(this._baseUrl,"/logout"),{headers:this._headers,credentials:"include"}).then(this._checkResponse)}}]),e}())({baseUrl:"https://api.nikita-movie-explorer.nomoredomains.club",headers:{"Content-Type":"application/json",Accept:"application/json"}}),m=(s(31),s(3)),d=(s(32),s(0));var _=function(e){var t=e.isLogin,s=void 0!==t&&t,c=Object(n.useState)(!1),a=Object(o.a)(c,2),i=a[0],r=a[1];function u(){r(!1)}return Object(d.jsx)(l.b,{exact:!0,path:["/movies","/saved-movies","/profile","/"],children:s?Object(d.jsx)("header",{className:"header header__color_FA",children:Object(d.jsxs)("nav",{className:"header__movies",children:[Object(d.jsxs)("div",{className:"header__movies-container",children:[Object(d.jsx)(m.b,{to:"/",className:"header__logo header__movies-logo"}),Object(d.jsx)(m.c,{to:"/movies",activeClassName:"header__authentication-link_active",className:"header__authentication-link header__movies-link header__authentication-link_disabled",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(d.jsx)(m.c,{to:"/saved-movies",activeClassName:"header__authentication-link_active",className:"header__authentication-link header__authentication-link_disabled",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})]}),Object(d.jsxs)("div",{className:"header__movies-container header__movies-container_disabled",children:[Object(d.jsx)(m.b,{to:"/profile",className:"header__authentication-link header__movies-link header__authentication-link_disabled",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(d.jsx)(m.b,{to:"/profile",className:"header__movies-account-icon header__authentication-link_disabled"})]}),Object(d.jsx)("button",{onClick:function(){r(!0)},className:"header__burger-menu-button"}),i?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"header__burger-menu-overlay"}),Object(d.jsxs)("div",{className:"header__burger-menu",children:[Object(d.jsxs)("div",{className:"header__burger-menu-container",children:[Object(d.jsx)(m.b,{exact:!0,to:"/",onClick:u,className:"header__burger-menu-link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(d.jsx)(m.b,{to:"/movies",onClick:u,className:"header__burger-menu-link header__burger-menu-link_active",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(d.jsx)(m.b,{to:"/saved-movies",onClick:u,className:"header__burger-menu-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})]}),Object(d.jsxs)("div",{className:"header__burger-menu-account",children:[Object(d.jsx)(m.b,{to:"/profile",onClick:u,className:"header__authentication-link header__movies-link",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(d.jsx)(m.b,{to:"/profile",onClick:u,className:"header__movies-account-icon"})]}),Object(d.jsx)("button",{onClick:u,className:"header__burger-menu-close"})]})]}):""]})}):Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)(m.b,{to:"/",className:"header__logo"}),Object(d.jsxs)("nav",{className:"header__authentication",children:[Object(d.jsx)(m.b,{to:"/signup",className:"header__authentication-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)(m.b,{to:"/signin",className:"header__authentication-link header__authentication-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var f=function(e){var t=e.children;return Object(d.jsx)("main",{className:"main",children:t})};s(39);var O=function(){return Object(d.jsxs)("section",{className:"promo",children:[Object(d.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(d.jsx)("div",{className:"promo__background-img"})]})};s(40);var v=function(){return Object(d.jsxs)("section",{className:"about-project",children:[Object(d.jsx)("h2",{className:"about-project__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(d.jsxs)("ul",{className:"about-project__table",children:[Object(d.jsxs)("li",{className:"about-project__cell",children:[Object(d.jsx)("h3",{className:"about-project__subtitle",children:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432"}),Object(d.jsx)("p",{className:"about-project__text",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})]}),Object(d.jsxs)("li",{className:"about-project__cell",children:[Object(d.jsx)("h3",{className:"about-project__subtitle",children:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e 5 \u043d\u0435\u0434\u0435\u043b\u044c"}),Object(d.jsx)("p",{className:"about-project__text",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]})]}),Object(d.jsxs)("div",{className:"about-project__time-line",children:[Object(d.jsxs)("p",{className:"about-project__time-line-text",children:[Object(d.jsx)("p",{className:"about-project__time-line-first",children:"1 \u043d\u0435\u0434\u0435\u043b\u044f"}),Object(d.jsx)("p",{className:"about-project__time-line-second",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"})]}),Object(d.jsxs)("p",{className:"about-project__time-line-text about-project__time-line-text_500",children:[Object(d.jsx)("span",{className:"about-project__time-line-first about-project__time-line-subtitle",children:"Back-end"}),Object(d.jsx)("span",{className:"about-project__time-line-second about-project__time-line-subtitle",children:"Front-end"})]})]})]})};s(41);var x=function(){return Object(d.jsxs)("section",{className:"techs",children:[Object(d.jsx)("h2",{className:"techs__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(d.jsx)("h3",{className:"techs__subtitle",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(d.jsx)("p",{className:"techs__text",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(d.jsxs)("ul",{className:"techs__list",children:[Object(d.jsx)("li",{className:"techs__tech",children:"HTML"}),Object(d.jsx)("li",{className:"techs__tech",children:"CSS"}),Object(d.jsx)("li",{className:"techs__tech",children:"JS"}),Object(d.jsx)("li",{className:"techs__tech",children:"React"}),Object(d.jsx)("li",{className:"techs__tech",children:"Git"}),Object(d.jsx)("li",{className:"techs__tech",children:"Express.js"}),Object(d.jsx)("li",{className:"techs__tech",children:"mongoDB"})]})]})},p=s.p+"static/media/618592738.b1e84fd1.png";s(42);var g=function(){return Object(d.jsxs)("section",{className:"about-me",children:[Object(d.jsx)("h2",{className:"about-me__title",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(d.jsxs)("article",{className:"about-me__info",children:[Object(d.jsxs)("div",{className:"about-me__container",children:[Object(d.jsx)("h3",{className:"about-me__subtitle",children:"\u041d\u0438\u043a\u0438\u0442\u0430"}),Object(d.jsx)("p",{className:"about-me__prof",children:"Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, 31 \u0433\u043e\u0434"}),Object(d.jsx)("p",{className:"about-me__about",children:"\u041d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u043b \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u043e\u0440\u0442\u0430\u043b\u0430 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438, \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0438 \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043e\u0440\u0442\u0430\u043b \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438. \u0412 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043c\u0435\u043d\u044f \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u043b\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0434\u043b\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0418\u0437-\u0437\u0430 \u0434\u043e\u043b\u0433\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0435 \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u044e \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0438 \u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."}),Object(d.jsxs)("ul",{className:"about-me__link-list",children:[Object(d.jsx)("li",{className:"about-me__link-list-item",children:Object(d.jsx)("a",{className:"about-me__link",target:"_blank",rel:"noreferrer",href:"https://ru-ru.facebook.com/",children:"Facebook"})}),Object(d.jsx)("li",{className:"about-me__link-list-item",children:Object(d.jsx)("a",{className:"about-me__link",target:"_blank",rel:"noreferrer",href:"https://github.com/Nikita-Trofimov",children:"Github"})})]})]}),Object(d.jsx)("img",{className:"about-me__photo",src:p,alt:"\u0424\u043e\u0442\u043e \u0441\u0442\u0443\u0434\u043d\u0435\u0442\u0430"})]})]})};s(43);var N=function(){return Object(d.jsxs)("section",{className:"portfolio",children:[Object(d.jsx)("h2",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(d.jsxs)("ul",{className:"portfolio__list",children:[Object(d.jsx)("li",{className:"portfolio__list-item",children:Object(d.jsx)("a",{className:"portfolio__link",target:"_blank",rel:"noreferrer",href:"https://nikita-trofimov.github.io/how-to-learn/",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(d.jsx)("li",{className:"portfolio__list-item",children:Object(d.jsx)("a",{className:"portfolio__link",target:"_blank",rel:"noreferrer",href:"https://nikita-trofimov.github.io/russian-travel/",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(d.jsx)("li",{className:"portfolio__list-item",children:Object(d.jsx)("a",{className:"portfolio__link",target:"_blank",rel:"noreferrer",href:"https://nikita-trofimov.github.io/react-mesto-auth",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};s(44);var k=function(){return Object(d.jsx)(l.b,{exact:!0,path:["/movies","/saved-movies","/"],children:Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("h4",{className:"footer__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(d.jsxs)("div",{className:"footer__container",children:[Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()]}),Object(d.jsxs)("ul",{className:"footer__list",children:[Object(d.jsx)("li",{className:"footer__list-item",children:Object(d.jsx)("a",{className:"footer__link",target:"_blank",rel:"noreferrer",href:"https://praktikum.yandex.ru/",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(d.jsx)("li",{className:"footer__list-item",children:Object(d.jsx)("a",{className:"footer__link",target:"_blank",rel:"noreferrer",href:"https://github.com/",children:"Github"})}),Object(d.jsx)("li",{className:"footer__list-item",children:Object(d.jsx)("a",{className:"footer__link",target:"_blank",rel:"noreferrer",href:"https://ru-ru.facebook.com/",children:"Facebook"})})]})]})]})})},S=s(13),y=s(10);function M(){var e=c.a.useState({}),t=Object(o.a)(e,2),s=t[0],a=t[1],i=c.a.useState({}),r=Object(o.a)(i,2),l=r[0],u=r[1],j=c.a.useState(!1),b=Object(o.a)(j,2),h=b[0],m=b[1],d=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(e),u(t),m(s)}),[a,u,m]);return{values:s,handleChange:function(e){var t=e.target,n=t.name,c=t.value;a(Object(y.a)(Object(y.a)({},s),{},Object(S.a)({},n,c))),u(Object(y.a)(Object(y.a)({},l),{},Object(S.a)({},n,t.validationMessage))),m(t.closest("form").checkValidity())},errors:l,isValid:h,resetForm:d,setValues:a,setIsValid:m}}s(45);var C=function(){return Object(d.jsx)("div",{className:"preloader",children:Object(d.jsx)("div",{className:"preloader__container",children:Object(d.jsx)("span",{className:"preloader__round"})})})};s(46);var U=function(e){var t=e.onRegister,s=e.errorMessage,n=e.isPending,c=M(),a=c.values,i=c.errors,r=c.isValid,o=c.handleChange;return Object(d.jsxs)("section",{className:"register",children:[Object(d.jsx)(m.b,{to:"/",className:"register__logo"}),n?Object(d.jsx)(C,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),t(a)},noValidate:!0,children:[Object(d.jsx)("h2",{className:"register__title",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(d.jsx)("p",{className:"register__input-name",children:"\u0418\u043c\u044f"}),Object(d.jsx)("input",{onChange:o,value:a.name||"",name:"name",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",className:"register__input",minLength:"2",required:!0}),Object(d.jsx)("p",{className:"register__input-error",children:i.name}),Object(d.jsx)("p",{className:"register__input-name",children:"E-mail"}),Object(d.jsx)("input",{onChange:o,value:a.email||"",name:"email",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email",className:"register__input",required:!0}),Object(d.jsx)("p",{className:"register__input-error",children:i.email}),Object(d.jsx)("p",{className:"register__input-name",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("input",{onChange:o,value:a.password||"",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"register__input",required:!0}),Object(d.jsx)("p",{className:"register__input-error",children:i.password}),Object(d.jsx)("p",{className:"register__submit-error",children:s}),Object(d.jsx)("button",{type:"submit",disabled:!r||"",className:r?"register__submit-button":"register__submit-button register__submit-button_disabled ",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("p",{className:"register__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(m.b,{className:"register__subtitle-link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})};s(47);var w=function(e){var t=e.onLogin,s=e.isPending,n=M(),c=n.values,a=n.errors,i=n.isValid,r=n.handleChange,o=n.errorMessage;return Object(d.jsx)("section",{className:"login",children:s?Object(d.jsx)(C,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.b,{to:"/",className:"login__logo"}),Object(d.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(d.jsx)("h2",{className:"login__title",children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!"}),Object(d.jsx)("p",{className:"login__input-name",children:"E-mail"}),Object(d.jsx)("input",{onChange:r,value:c.email||"",name:"email",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email",className:"login__input",required:!0}),Object(d.jsx)("p",{className:"login__input-error",children:a.email}),Object(d.jsx)("p",{className:"login__input-name",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("input",{onChange:r,value:c.password||"",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"login__input",required:!0}),Object(d.jsx)("p",{className:"login__input-error",children:a.password}),Object(d.jsx)("p",{className:"register__submit-error",children:o}),Object(d.jsx)("button",{type:"submit",disabled:!i||"",className:i?"login__submit-button":"login__submit-button login__submit-button_disabled",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(d.jsxs)("p",{className:"login__subtitle",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(m.b,{className:"login__subtitle-link",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})},E=c.a.createContext();s(48);var L=function(e){var t=e.onSearchMovies,s=(e.isShortMovies,e.onChekBoxClick),c=Object(n.useState)(""),a=Object(o.a)(c,2),i=a[0],r=a[1];return Object(d.jsxs)("section",{children:[Object(d.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),t(i)},children:[Object(d.jsx)("input",{value:i||"",onChange:function(e){r(e.target.value)},name:"search-form__query-input",type:"text",placeholder:"\u0424\u0438\u043b\u044c\u043c",className:"search-form__query",minLength:"1",required:!0}),Object(d.jsx)("button",{type:"submit",className:"search-form__submit-button",children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(d.jsx)("span",{className:"search-form__error",children:"\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(d.jsxs)("div",{className:"search-form__checkbox-container",children:[Object(d.jsx)("input",{className:"search-form__checkbox",id:"short-movies",type:"checkbox",minLength:"2",onChange:s}),Object(d.jsx)("label",{className:"search-form__checkbox-label",htmlFor:"short-movies"}),Object(d.jsx)("span",{className:"search-form__checkbox-text",children:"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"})]})]})},F=s.p+"static/media/imgNotFound.323f7926.png";s(49);function P(e){var t=Math.trunc(e/60),s=e%60;return 0===t?s+"\u043c.":t+"\u0447. "+s+"\u043c."}function R(e,t){return e.filter((function(e){var s=String(e.nameEN).toLowerCase().trim(),n=String(e.nameRU).toLowerCase().trim(),c=t.toLowerCase().trim();return-1!==n.indexOf(c)||-1!==s.indexOf(c)}))}var T=function(e){var t=e.movie,s=e.isSavedMoviePage,n=e.onSaveMovie,c=e.onUnSaveMovie,a=e.isSave,i="card__not-save ".concat(a?"card__save":""),r="card__not-save ".concat(s?"card__unsave":"");return Object(d.jsxs)("li",{className:"card",children:[Object(d.jsx)("a",{href:s?t.trailer:t.trailerLink,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{onError:function(e){e.target.src=F},src:s?t.image:"".concat(b).concat(t.image.url),alt:t.nameRU,className:"card__image"})}),Object(d.jsxs)("div",{className:"card__image-subtitle",children:[Object(d.jsx)("h2",{className:"card__title",children:t.nameRU}),Object(d.jsx)("button",{type:"button",className:s?r:i,onClick:s||a?function(){return function(e){c(t._id||t.id,e)}(s)}:function(){n(t)}})]}),Object(d.jsx)("p",{className:"card__movie-duration",children:P(t.duration)})]})};s(50);var q=function(e){var t=e.movies,s=e.nothingFound,c=e.moviesLoading,a=e.isSavedMoviePage,i=e.onSaveMovie,l=e.onUnSaveMovie,u=e.savedMovies,j=Object(n.useState)({total:12,more:4}),b=Object(o.a)(j,2),h=b[0],m=b[1],_=Object(n.useState)([]),f=Object(o.a)(_,2),O=f[0],v=f[1],x=Object(n.useState)(window.innerWidth),p=Object(o.a)(x,2),g=p[0],N=p[1];function k(e,t){return e.find((function(e){return e.movieId===t.id}))}return Object(n.useEffect)((function(){function e(){N(window.innerWidth)}var t;return window.addEventListener("resize",(function(){t||(t=setTimeout((function(){t=null,e()}),1e3))}),!1),function(){return window.removeEventListener("resize",e)}}),[g]),Object(n.useEffect)((function(){m(g>=1280?{total:12,more:4}:g<=768&&g>420?{total:8,more:2}:{total:5,more:2})}),[g]),Object(n.useEffect)((function(){if(t.length){var e=t.filter((function(e,t){return t<h.total}));v(e)}}),[t,h.total]),Object(d.jsx)(d.Fragment,{children:c?Object(d.jsx)(C,{}):Object(d.jsxs)(d.Fragment,{children:[s?Object(d.jsx)("p",{className:"nothing-found",children:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):Object(d.jsx)("ul",{className:"movies-cards-list",children:O.map((function(e){return Object(d.jsx)(T,{movie:e,isSavedMoviePage:a,onSaveMovie:i,onUnSaveMovie:l,isSave:k(u,e)},e.id||e._id)}))}),a||O.length===t.length?"":Object(d.jsx)("button",{className:"movies__more",onClick:function(){var e=O.length,s=e+h.more;if(t.length-e>0){var n=t.slice(e,s);v([].concat(Object(r.a)(O),Object(r.a)(n)))}},children:"\u0415\u0449\u0451"})]})})},I=(s(51),new(function(){function e(t){Object(u.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(j.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," : ").concat(e.statusText))}},{key:"_fetch",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers}).then(this._checkResponse)}},{key:"getMovies",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return this._fetch(e)}}]),e}())({baseUrl:"https://api.nomoreparties.co/beatfilm-movies",headers:{"Content-Type":"application/json"}}));var J=function(e){var t=e.onSaveMovie,s=e.onUnSaveMovie,c=e.savedMovies,a=Object(n.useState)(!1),i=Object(o.a)(a,2),r=i[0],l=i[1],u=Object(n.useState)([]),j=Object(o.a)(u,2),b=j[0],h=j[1],m=Object(n.useState)(!1),_=Object(o.a)(m,2),f=_[0],O=_[1],v=Object(n.useState)(!1),x=Object(o.a)(v,2),p=x[0],g=x[1],N=Object(n.useState)(!1),k=Object(o.a)(N,2),S=k[0],y=k[1],M=Object(n.useContext)(E);return Object(n.useEffect)((function(){if(localStorage.getItem("movies + ".concat(M.email))){var e=JSON.parse(localStorage.getItem("movies + ".concat(M.email)));0===e.length?l(!0):l(!1),h(e)}}),[M.email]),Object(d.jsxs)("section",{className:"movies",children:[Object(d.jsx)(L,{onSearchMovies:function(e){O(!0),I.getMovies().then((function(t){!function(e,t,s){var n=R(e,t);0===n.length?l(!0):l(!1),console.log(s),s&&(n=n.filter((function(e){return e.duration<=40}))),h(n),localStorage.setItem("movies + ".concat(M.email),JSON.stringify(n))}(t,e,p)})).catch((function(e){y(!0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+e)})).finally((function(){return O(!1)}))},isShortMovies:p,onChekBoxClick:function(){g(!p),h(p?JSON.parse(localStorage.getItem("movies + ".concat(M.email))):b.filter((function(e){return e.duration<=40})))}}),S?Object(d.jsx)("p",{className:"search-error",children:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"}):Object(d.jsx)(q,{nothingFound:r,movies:b,savedMovies:c,moviesLoading:f,onSaveMovie:t,onUnSaveMovie:s})]})};s(52);var V=function(e){var t=e.onUnSaveMovie,s=e.savedMovies,c=Object(n.useState)(!0),a=Object(o.a)(c,2),i=a[0],r=a[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),j=u[0],b=u[1],h=Object(n.useState)([]),m=Object(o.a)(h,2),_=m[0],f=m[1],O=Object(n.useState)(!1),v=Object(o.a)(O,2),x=v[0],p=v[1];return Object(n.useEffect)((function(){0!==s.length?(r(!1),f(s)):r(!0)}),[s]),Object(d.jsxs)("section",{className:"movies",children:[Object(d.jsx)(L,{onSearchMovies:function(e){b(s),function(e,t,s){var n=R(e,t);0===n.length?r(!0):r(!1),s&&(n=n.filter((function(e){return e.duration<=40}))),f(n)}(j,e,x)},onChekBoxClick:function(){p(!x),f(x?s:_.filter((function(e){return e.duration<=40}))),console.log(s)}}),Object(d.jsx)(q,{nothingFound:i,isSavedMoviePage:!0,movies:_,onUnSaveMovie:t,savedMovies:s})]})};s(53);var B=function(e){var t=e.onSubmit,s=e.errorMessage,c=e.isPending,a=e.successMessage,i=e.onLogOut,r=M(),o=r.values,l=r.errors,u=r.isValid,j=r.handleChange,b=r.setValues,h=r.setIsValid,m=r.resetForm,_=Object(n.useContext)(E);return Object(n.useEffect)((function(){m(),b({name:_.name,email:_.email})}),[_,b,m]),Object(n.useEffect)((function(){o.name===_.name&&o.email===_.email&&h(!1)}),[o,_,h]),Object(d.jsx)("section",{className:"profile",children:c?Object(d.jsx)(C,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"profile__form",onSubmit:function(e){e.preventDefault(),t(o)},children:[Object(d.jsx)("h2",{className:"profile__title",children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0412\u0438\u0442\u0430\u043b\u0438\u0439!"}),Object(d.jsxs)("label",{className:"profile__label",children:["\u0418\u043c\u044f",Object(d.jsx)("input",{onChange:j,value:o.name||"",name:"name",type:"text",className:"profile__input",minLength:"2",required:!0})]}),Object(d.jsx)("p",{className:"profile__input-error",children:l.name}),Object(d.jsxs)("label",{className:"profile__label",children:["E-mail",Object(d.jsx)("input",{onChange:j,value:o.email||"",name:"email",type:"email",className:"profile__input",required:!0})]}),Object(d.jsx)("p",{className:"profile__input-error",children:l.email}),Object(d.jsx)("p",{className:a?"profile__submit-succes":"profile__submit-error",children:s||a}),Object(d.jsx)("button",{disabled:!u||"",type:"submit",className:u?"profile__submit-button":"profile__submit-button profile__submit-button_disabled",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(d.jsx)("button",{onClick:function(){i()},type:"submit",className:"profile__submit-button profile__submit-button_red",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})})};s(54);var D=function(){return Object(d.jsxs)("section",{className:"not-found",children:[Object(d.jsx)("h2",{className:"not-found__title",children:"404"}),Object(d.jsx)("p",{className:"not-found__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(d.jsx)(m.b,{className:"not-found__back",to:"/",children:"\u041d\u0430\u0437\u0430\u0434"})]})},A=s(25),G=["component"];var z=function(e){var t=e.component,s=Object(A.a)(e,G);return Object(d.jsx)(l.b,{children:s.isLogin?Object(d.jsx)(t,Object(y.a)({},s)):Object(d.jsx)(l.a,{to:"/"})})};var H=function(){var e=Object(l.g)(),t=Object(n.useState)(!1),s=Object(o.a)(t,2),c=s[0],a=s[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),j=u[0],b=u[1],m=Object(n.useState)(!1),p=Object(o.a)(m,2),S=p[0],y=p[1],M=Object(n.useState)({}),C=Object(o.a)(M,2),L=C[0],F=C[1],P=Object(n.useState)(""),R=Object(o.a)(P,2),T=R[0],q=R[1],I=Object(n.useState)([]),A=Object(o.a)(I,2),G=A[0],H=A[1];function W(e,t){var s;s=t?e:G.find((function(t){return t.movieId===e}))._id,h.unSaveMovie(s).then((function(e){H(G.filter((function(e){return e._id!==s})))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+e)}))}function Y(t){h.login(t).then((function(t){y(!0),b(""),console.log(t),a(!0),e.push("/movies")})).catch((function(e){b(e.message),console.log(e.message)})).finally((function(){return y(!1)}))}return Object(n.useEffect)((function(){c&&e.push("/movies"),h.getUser().then((function(e){F(e),a(!0)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+e)}))}),[c,e]),Object(n.useEffect)((function(){c&&h.getSavedMovies().then((function(e){H(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+e)}))}),[c]),Object(d.jsx)(E.Provider,{value:L,children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(_,{isLogin:c}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsxs)(f,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(v,{}),Object(d.jsx)(x,{}),Object(d.jsx)(g,{}),Object(d.jsx)(N,{})]})}),Object(d.jsx)(l.b,{path:"/signup",children:Object(d.jsx)(U,{onRegister:function(e){h.register(e).then((function(t){y(!0),b(""),console.log(t),Y(e)})).catch((function(e){b(e.message),console.log(e.message)})).finally((function(){return y(!1)}))},errorMessage:j,isPending:S})}),Object(d.jsx)(l.b,{path:"/signin",children:Object(d.jsx)(w,{onLogin:Y})}),Object(d.jsx)(z,{path:"/movies",isLogin:c,component:J,onSaveMovie:function(e){h.saveMovie(e).then((function(e){H([e].concat(Object(r.a)(G)))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+e)}))},onUnSaveMovie:W,isPending:S,savedMovies:G}),Object(d.jsx)(z,{path:"/saved-movies",isLogin:c,component:V,onUnSaveMovie:W,savedMovies:G}),Object(d.jsx)(z,{path:"/profile",isLogin:c,component:B,onSubmit:function(e){h.updateUser(e).then((function(e){y(!0),b(""),q("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b"),console.log(e)})).catch((function(e){b(e.message),console.log(e.message)})).finally((function(){return y(!1)}))},errorMessage:j,isPending:S,successMessage:T,onLogOut:function(){h.logout().then((function(t){y(!0),a(!1),b(""),e.push("/"),console.log(t)})).catch((function(e){b(e.message),console.log(e.message)})).finally((function(){return y(!1)}))}}),Object(d.jsx)(l.b,{path:"/404",children:Object(d.jsx)(D,{})}),Object(d.jsx)(l.b,{path:"*",children:Object(d.jsx)(l.a,{to:"/404"})})]}),Object(d.jsx)(k,{})]})})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(H,{})})}),document.getElementById("root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.2c5bce18.chunk.js.map