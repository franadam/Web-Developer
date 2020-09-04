(this["webpackJsonpfac-application"]=this["webpackJsonpfac-application"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){e.exports={primary_color:"#ebc747",secondary_color_base:"#5c0a0a",secondary_color_dark:"#2e0505"}},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=(t(15),t(1)),s=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"header__title"}," Bonjour, "),l.a.createElement("h2",{className:"header__subtitle"}," Founders And Coders ! "),l.a.createElement("div",{className:"header__link"},l.a.createElement("a",{id:"freecodecamp-link",href:"https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.d,null)),l.a.createElement("a",{id:"codepen-link",href:"https://codepen.io/franadam",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.b,null)),l.a.createElement("a",{id:"github-link",href:"https://github.com/franadam/Web-Developer",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.e,null))))},i=t(3),m=t(4),d=t(2),u=t(6),p=t(5),h=t(7),b=t.n(h),f=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).Scrolling=n.Scrolling.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"Scrolling",value:function(){window.onscroll=function(){!function(){var e=document.getElementById("navbar"),a=window.innerHeight-50,t=b.a.secondary_color_base,n=b.a.secondary_color_dark;console.log(t),document.body.scrollTop>=a||document.documentElement.scrollTop>=a?(e.style.boxShadow="1px 1px 10px 0 "+n,e.style.backgroundColor=t):(e.style.boxShadow="none",window.innerWidth>500?e.style.backgroundColor="transparent":e.style.backgroundColor=t)}()}}},{key:"componentDidMount",value:function(){this.Scrolling()}},{key:"render",value:function(){return l.a.createElement("div",{className:"navbar",id:"navbar"},l.a.createElement("a",{className:"navbar__link",href:"#contact"},"Contact"),l.a.createElement("a",{className:"navbar__link",href:"#works"},"Work"),l.a.createElement("a",{className:"navbar__link",href:"#about"},"About"),l.a.createElement("a",{className:"navbar__link",href:"#header"},"Home"))}}]),t}(l.a.Component),E=function(){return l.a.createElement("div",{id:"footer",className:"footer"},l.a.createElement("div",{className:"footer__header"},"Au revoir !"),l.a.createElement("ul",{className:"footer__profile"},l.a.createElement("li",null,l.a.createElement("a",{className:"col-33",id:"freecodecamp-link",href:"https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.d,null)," FreeCodeCamp")),l.a.createElement("li",null,l.a.createElement("a",{className:"col-33",id:"codepen-link",href:"https://codepen.io/franadam",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.b,null)," CodePen")),l.a.createElement("li",null,l.a.createElement("a",{className:"col-33",id:"github-link",href:"https://github.com/franadam/Web-Developer",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.e,null)," GitHub")),l.a.createElement("li",null,l.a.createElement("a",{className:"col-33",id:"gitlab-link",href:"https://gitlab.com/franadam",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.a,null)," Angellist"))),l.a.createElement("div",{className:"footer__contact"},l.a.createElement("div",null,l.a.createElement(o.g,null),l.a.createElement("p",null,"Address"),l.a.createElement("p",null,"Rue de la Loi 170 ",l.a.createElement("br",null),"1040 Brussels Belgium")),l.a.createElement("div",null,l.a.createElement(o.h,null),l.a.createElement("p",null,"Phone"),l.a.createElement("p",null,"00 800 67 89 10 11"))),l.a.createElement("div",{className:"footer__legal"},"\xa9 2020 BeMyself - BeMe. All Rights Reserved. Unicorn group"))},g=function(){return l.a.createElement("div",{className:"skills about__skills",id:"skills"},l.a.createElement("h3",{className:"skills__header"},"Scripting and Programming Language ",l.a.createElement("br",null)," Skills"),l.a.createElement("div",{className:"skills__bar bar"},l.a.createElement("div",{className:"bar__title bar__title--html"},l.a.createElement("span",null,"HTML5")),l.a.createElement("div",{className:"bar__percent bar__percent--html"},"90%")),l.a.createElement("div",{className:"skills__bar bar"},l.a.createElement("div",{className:"bar__title bar__title--css"},l.a.createElement("span",null,"CSS")),l.a.createElement("div",{className:"bar__percent bar__percent--css"},"80%")),l.a.createElement("div",{className:"skills__bar bar"},l.a.createElement("div",{className:"bar__title bar__title--js"},l.a.createElement("span",null,"JavaScript")),l.a.createElement("div",{className:"bar__percent bar__percent--js"},"75%")),l.a.createElement("div",{className:"skills__bar bar"},l.a.createElement("div",{className:"bar__title bar__title--react"},l.a.createElement("span",null,"React")),l.a.createElement("div",{className:"bar__percent bar__percent--react"},"70%")),l.a.createElement("div",{className:"skills__bar bar"},l.a.createElement("div",{className:"bar__title bar__title--d3"},l.a.createElement("span",null,"D3")),l.a.createElement("div",{className:"bar__percent bar__percent--d3"},"60%")),l.a.createElement("div",{className:"skills__bar bar"},l.a.createElement("div",{className:"bar__title bar__title--python"},l.a.createElement("span",null,"Python")),l.a.createElement("div",{className:"bar__percent bar__percent--python"},"85%")))},_=function(){return l.a.createElement("div",{className:"intro about__description"},l.a.createElement("h3",{className:"intro__header"},"A few words"),l.a.createElement("div",{className:"intro__description"},l.a.createElement("p",{className:"intro__tagline"},"I am Fran\xe7ois,",l.a.createElement("br",null)," a biomedical worker and hopefully a soon to be web developer."),l.a.createElement("p",null,"I have been learning web development for a few months on"," ",l.a.createElement("a",{href:"https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae"}," ","FreeCodeCamp"),". I possess a robust training in mathematics and programming (in other languages, like Python and Java). In addition to healthcare, ecology and renewable energy have been a preoccupation of mine for a sometime now and that is the reason why as a student I worked in wastewater treatment plants and waste sorting plants for several years."),l.a.createElement("p",null,"I see myself in a position as a front-end developer or full-stack developer before the end of the year. Ideally, I would like to move to a big European city like London \u2013 I know technically it is not the case anymore. Anyway, eing accepted to Founders And Coders would help me to advance this goal."),l.a.createElement("p",null,"I like the concept of being given an opportunity like yours, by a community, and be able to make a positive impact in that same community by mentoring the next cohort. I have been giving individual Sciences and Maths class to high school students for months and throughout my studies, I was part of an international student association, the main activity was to organize national engineering competition and European course, so I am used to team working and I developed a good team work ethics with people from different backgrounds."),l.a.createElement("p",null,"All this scientific and technical luggages make that I could suit in your program. You can find my work on my profiles :"),l.a.createElement("div",{className:"intro__profile"},l.a.createElement("a",{id:"freecodecamp-link",href:"https://www.freecodecamp.org/fcc8ab3e79f-4203-4b47-9439-59b4396f3dae",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.d,null)),l.a.createElement("a",{id:"codepen-link",href:"https://codepen.io/franadam",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.b,null)),l.a.createElement("a",{id:"github-link",href:"https://github.com/franadam/Web-Developer",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(o.e,null)))))},v=function(){return l.a.createElement("div",{className:"about",id:"about"},l.a.createElement("h2",{className:"about__header"},"About me"),l.a.createElement(_,null),l.a.createElement(g,null))},y=[{title:"Chart",description:"This bar chart uses is entirelly D3 to plot US GDP through the years.",href:"https://codepen.io/franadam/full/GRJqLEz",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png"},{title:"Random Quote Machine",description:"The goals of this project is to be able to generate random quotes from a local data and display them on our page. The project uses react to render the page.",href:"https://codepen.io/franadam/full/eYmMeJd",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png"},{title:"Dashboard",description:["The goal of this project is to create a dashboard with which the user can manage his account. In this scenario, the form used to modify the user profile information has to be created. The app is made with React, ","you can find the GitLab repo that contains the code, ",l.a.createElement("a",{href:"https://gitlab.com/franadam/innoloft_frontend_application",target:"_blank",rel:"noopener noreferrer"},"Here")],href:"https://eloquent-aryabhata-f6b832.netlify.app",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FUser%20Dashboard.png"}],N=function(e){return l.a.createElement("div",{className:"slide-item carousel__item",id:"slide-item",tabIndex:"0"},l.a.createElement("div",{className:"slide-item__img-container"},l.a.createElement("div",{className:"slide-item__caption-number"},e.currentSlide+1,"/",y.length),l.a.createElement("a",{href:e.slide.href,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{id:"img-c"+e.currentSlide,alt:"slide-"+e.currentSlide,className:"img img--carousel",src:e.slide.src})),l.a.createElement("p",{className:"slide-item__caption-text"},e.slide.title),l.a.createElement("div",{className:"slide-item__navigation-container"},l.a.createElement("button",{type:"button",id:"backward",className:"navbutt navbutt--backward",onClick:e.backward}),l.a.createElement("button",{type:"button",id:"play",className:"navbutt navbutt--play navbutt--in-action",onClick:e.rolling}),l.a.createElement("button",{type:"button",id:"forward",className:"navbutt navbutt--forward",onClick:e.forward}))),l.a.createElement("div",{id:"bullet",className:"caption text-center"},y.map((function(a,t){return l.a.createElement("span",{key:t,id:"bull"+t,className:e.currentSlide===t?"dot dot--active":"dot",onClick:function(){return e.changeSlide(t)}})}))))},k=function(e){return l.a.createElement("div",{className:"slide-description carousel__description",id:"description"},l.a.createElement("h3",{className:"slide-description__header"},e.slide.title),l.a.createElement("p",{className:"slide-description__text"},e.slide.description))},w=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={slideshow:y[0],slideIndex:0},n.currentIndex=0,n.pause=!1,n.rolling=n.rolling.bind(Object(d.a)(n)),n.auto=n.auto.bind(Object(d.a)(n)),n.changeSlide=n.changeSlide.bind(Object(d.a)(n)),n.backward=n.backward.bind(Object(d.a)(n)),n.forward=n.forward.bind(Object(d.a)(n)),n.handleKeys=n.handleKeys.bind(Object(d.a)(n)),n.plays=n.play.bind(Object(d.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("slide-item").onFocus=e.handleKeys(),!0===this.pause?clearInterval(this.timeout):this.timeout=setTimeout((function(){e.auto()}),4e3)}},{key:"componentDidUpdate",value:function(){var e=this;!0===this.pause?clearInterval(this.timeout):this.timeout=setTimeout((function(){e.auto()}),4e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeout)}},{key:"play",value:function(){var e=document.getElementById("play"),a="navbutt navbutt--play";!1===this.pause?e.className=a+" navbutt--in-action":e.className=a+" navbutt--on-breack"}},{key:"rolling",value:function(){this.pause=!this.pause,this.play(),this.auto()}},{key:"auto",value:function(){var e=this.currentIndex;console.log("slideIndex: ",e),this.currentIndex=e>=y.length-1?0:e+1,console.log("pause:",this.pause),this.setState({slideIndex:this.currentIndex,slideshow:y[this.currentIndex]})}},{key:"changeSlide",value:function(e){this.currentIndex=e,console.log("pause:",this.pause),this.setState({slideIndex:this.currentIndex,slideshow:y[this.currentIndex]})}},{key:"backward",value:function(){var e=this.currentIndex-1;this.currentIndex=e<0?y.length-1:e,this.pause=!0,this.play(),console.log("pause:",this.pause),this.setState({slideIndex:this.currentIndex,slideshow:y[this.currentIndex]})}},{key:"forward",value:function(){var e=this.currentIndex+1;this.currentIndex=e>=y.length?0:e,this.pause=!0,this.play(),console.log("pause:",this.pause),this.setState({slideIndex:this.currentIndex,slideshow:y[this.currentIndex]})}},{key:"handleKeys",value:function(){var e=this;document.addEventListener("keydown",(function(a){switch(a.which){case 32:e.rolling();break;case 37:case 40:e.backward();break;case 38:case 39:e.forward();break;default:return}a.preventDefault()}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"carousel works__carousel"},l.a.createElement("h3",{className:"carousel__header"},"These are some of my projects "),l.a.createElement(k,{slide:this.state.slideshow,currentSlide:this.state.slideIndex,changeSlide:this.changeSlide,handleKeys:this.handleKeys}),l.a.createElement(N,{slide:this.state.slideshow,currentSlide:this.state.slideIndex,auto:this.auto,rolling:this.rolling,backward:this.backward,forward:this.forward,changeSlide:this.changeSlide,handleKeys:this.handleKeys}))}}]),t}(l.a.Component),j=function(e){var a,t;for(a=document.getElementsByClassName("projects__title"),function(e){var a,t=document.getElementsByClassName("btn"),n=document.getElementById(e);for(a=0;a<t.length;a++)t[a].className=t[a].className.replace(" btn--active","");n.className+=" btn--active"}(e),t=0;t<a.length;t++)a[t].style.display="none","all"===e?a[t].style.display="block":S(a[t],e)},S=function(e,a){var t,n,l;for(n=e.className.split(" "),l=a.split(" "),t=0;t<l.length;t++)n.indexOf(l[t])>-1&&(e.style.display="block")},x=function(){return l.a.createElement("div",{className:"projects works__projects"},l.a.createElement("h3",null,"All of my Projects"),l.a.createElement("div",{className:"projects__filter"},l.a.createElement("button",{type:"button",className:"btn btn--active",id:"all",onClick:function(){return j("all")}},"All"),l.a.createElement("button",{type:"button",className:"btn",id:"css",onClick:function(){return j("css")}},l.a.createElement(o.f,null)," HTML / ",l.a.createElement(o.c,null)," CSS"),l.a.createElement("button",{type:"button",className:"btn",id:"react",onClick:function(){return j("react")}},l.a.createElement(o.i,null)," React"),l.a.createElement("button",{type:"button",className:"btn",id:"d3",onClick:function(){return j("d3")}}," ","D3")),l.a.createElement("div",{className:"projects__gallery"},l.a.createElement("div",{className:"projects__title react"},l.a.createElement("p",null,"User Dashboard"),l.a.createElement("img",{id:"img-p9",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FUser%20Dashboard.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"User Dashboard"),l.a.createElement("p",null,"React"),l.a.createElement("a",{className:"btn",href:"https://eloquent-aryabhata-f6b832.netlify.app",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title css"},l.a.createElement("p",null,"Tribute Page"),l.a.createElement("img",{id:"img-p1",className:"img img--project",alt:"project",src:"https://www.spettacolo.eu/wp-content/uploads/2019/09/Mika-cover-nuovo-album.jpg"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Tribute Page"),l.a.createElement("p",null,"HTML / CSS"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/PooLjwK",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title css"},l.a.createElement("p",null,"Survey Form"),l.a.createElement("img",{id:"img-p2",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FForm.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Survey Form"),l.a.createElement("p",null,"HTML / CSS"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/BaabPJx",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title css"},l.a.createElement("p",null,"Product Landing Page"),l.a.createElement("img",{id:"img-p3",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FProduct.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Product Landing Page"),l.a.createElement("p",null,"HTML / CSS"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/BaabPJx",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title css"},l.a.createElement("p",null,"Technical Documentation Page"),l.a.createElement("img",{id:"img-p4",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FDocumentation.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Technical Documentation Page"),l.a.createElement("p",null,"HTML / CSS"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/qBBwRKZ",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title react"},l.a.createElement("p",null,"Random Quote Machine"),l.a.createElement("img",{id:"img-p5",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FRandom%20Quote%20Machine.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Random Quote Machine"),l.a.createElement("p",null,"React"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/eYmMeJd",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title react"},l.a.createElement("p",null,"Markdown Previewer"),l.a.createElement("img",{id:"img-p6",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FMarkdown%20Preview.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Markdown Previewer"),l.a.createElement("p",null,"React"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/WNbJvQz",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title d3"},l.a.createElement("p",null,"Bar Chart"),l.a.createElement("img",{id:"img-p7",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Bar%20Chart.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Bar Chart"),l.a.createElement("p",null,"D3"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/GRJqLEz",target:"_blank",rel:"noopener noreferrer"},"See Page")))),l.a.createElement("div",{className:"projects__title d3"},l.a.createElement("p",null,"Scatterplot Graph"),l.a.createElement("img",{id:"img-p8",className:"img img--project",alt:"project",src:"https://cdn.glitch.com/6daee3c9-0db4-4cde-afd8-d99d15aef073%2FD3%20Dot%20Graph.png"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"overlay__text"},l.a.createElement("h3",null,"Scatterplot Graph"),l.a.createElement("p",null,"D3"),l.a.createElement("a",{className:"btn",href:"https://codepen.io/franadam/full/Exjgoag",target:"_blank",rel:"noopener noreferrer"},"See Page"))))))},I=function(){return l.a.createElement("div",{className:"works",id:"works"},l.a.createElement("h2",null,"Works"),l.a.createElement(w,null),l.a.createElement(x,null))},C=function(){return l.a.createElement("div",{className:"contact",id:"contact"},l.a.createElement("h2",{className:"contact__header"},"Contact"),l.a.createElement("div",{className:"contact__info info"},l.a.createElement("div",null,l.a.createElement("h3",null,"Have a question or want to work together?"),l.a.createElement("p",{className:"info__header"},"Let's be real, these contact information are not mine. Maybe you recognize the address. Do not worry I will provide the real ones if we meet !")),l.a.createElement("div",{className:"info__icon"},l.a.createElement("div",null,l.a.createElement(o.g,null),l.a.createElement("h3",{className:"icon__header"},"Address"),l.a.createElement("p",null,"Charlemagne building ",l.a.createElement("br",null),"Rue de la Loi 170 ",l.a.createElement("br",null),"1040 Brussels ",l.a.createElement("br",null),"Belgium")),l.a.createElement("div",null,l.a.createElement(o.h,null),l.a.createElement("h3",{className:"icon__header"},"Phone"),l.a.createElement("p",null,"00 800 67 89 10 11")))),l.a.createElement("div",{className:"contact__form form"},l.a.createElement("h3",{className:"form__header"},"Send me a message"),l.a.createElement("form",{id:"contact-form",className:"form__container contact-form"},l.a.createElement("div",{className:"contact-form__name"},l.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Name"}),l.a.createElement("input",{type:"email",id:"mail",name:"mail",placeholder:"Mail"})),l.a.createElement("input",{type:"text",id:"subject",name:"subject",placeholder:"Subject"}),l.a.createElement("textarea",{id:"message",name:"massage",placeholder:"Message"}),l.a.createElement("button",{className:"btn btn--form",type:"submit"},"Submit"))))},P=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={idx:0},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",id:"container"},l.a.createElement(v,null),l.a.createElement(I,null),l.a.createElement(C,null))}}]),t}(n.Component),D=function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"app"},l.a.createElement(s,null),l.a.createElement(f,null),l.a.createElement(P,null),l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports={primary_color:"#ebc747",secondary_color_base:"#5c0a0a",secondary_color_dark:"#2e0505"}}},[[10,1,2]]]);
//# sourceMappingURL=main.01334d0f.chunk.js.map