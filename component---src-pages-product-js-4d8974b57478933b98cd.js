(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{163:function(n,e,t){"use strict";t.r(e);var r=t(5),a=t.n(r),i=t(0),o=t.n(i),l=t(3),c=t.n(l),s=t(178),u=(t(56),t(197)),d=t(175),m=t.n(d),p=t(180),f=t(172),g=t(187),b=t(168),h=t(44),v=t.n(h),_=t(188),x=t(164),E=t.n(x),y=t(165),w=t.n(y),k=t(166);function T(){var n=E()(["\n  & > ul {\n    display: none;\n  }\n  .mobile-menu {\n    display: block;\n  }\n"]);return T=function(){return n},n}function N(){var n=E()(["\n  ul li {\n    font-size: 1.2rem;\n    & + li {\n      margin-left: 1.5rem;\n    }\n  }\n"]);return N=function(){return n},n}function z(){var n=E()(["\n  flex: 1 1 0px;\n  justify-content: flex-end;\n  display: flex;\n  position: relative;\n  .mobile-menu {\n    display: none;\n  }\n  ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n\n    li {\n      font-size: 16px;\n      a {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n      }\n    }\n  }\n  /* Position and sizing of burger button */\n  .bm-burger-button {\n    position: relative;\n    width: 36px;\n    height: 30px;\n    right: 0;\n    top: 0;\n  }\n\n/* Color/shape of burger icon bars */\n.bm-burger-bars {\n  background: #fff;\n}\n\n/* Position and sizing of clickable cross button */\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n\n/* Color/shape of close button cross */\n.bm-cross {\n  background: #bdc3c7;\n}\n\n/* General sidebar styles */\n.bm-menu-wrap {\n  top: 0;\n  bottom: 0;\n}\n.bm-overlay {\n  top: 0;\n  left: 0;\n}\n.bm-menu {\n  background: rgba(0, 0, 0, .8);\n  padding: 2.5em 1.5em 0;\n  font-size: 1.15em;\n  box-sizing: border-box;\n}\n\n/* Wrapper for item list */\n.bm-item-list {\n  color: #b8b7ad;\n  padding: 0.8em;\n  box-sizing: border-box;\n}\n\n\n",";\n\n",";\n"]);return z=function(){return n},n}var A=w.a.nav(z(),k.a.DESKTOP(N()),k.a.TABLET(T())),R=t(198),S=function(){return o.a.createElement(A,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(b.Link,{to:"/"},o.a.createElement(_.FaUserCircle,null),"   Log in"))),o.a.createElement("div",{className:"mobile-menu"},o.a.createElement(R.slide,{right:!0,noOverlay:!0},o.a.createElement(b.Link,{to:"/product"},"Product")),o.a.createElement(R.slide,{right:!0,noOverlay:!0},o.a.createElement(b.Link,{to:"/"},"Log in"))))},q=t(199),C=t.n(q);function I(){var n=E()(["\n    padding: 4rem 2rem;\n  "]);return I=function(){return n},n}function j(){var n=E()(["\n    padding: 4rem;\n  "]);return j=function(){return n},n}function L(){var n=E()(["\n  display: flex;\n  align-items: center;\n  padding: 4rem 10%;  \n  a {\n    color: #fff;\n    font-weight: bold;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n  ",";\n  ",";\n"]);return L=function(){return n},n}var O=w.a.header(L(),k.a.DESKTOP(j()),k.a.TABLET(I())),P=v.a.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),B=function(n){var e=n.altImage;return o.a.createElement(P,null,o.a.createElement(O,null,o.a.createElement(b.Link,{to:"/"},o.a.createElement("img",{height:"44",src:C.a,alt:e})),o.a.createElement(S,null)))};B.propTypes={altImage:c.a.string.isRequired};var H=B,D=t(185),J=t(358),M=t.n(J),F=t(200),K=t.n(F),W=t(201),G=t.n(W),U=t(202),$=t.n(U),Q=t(203),V=t.n(Q);function X(){var n=E()(["\n    width: 100%;\n    .slider-nav-btn-wrapper {\n      float: none;\n      transform: none;\n      margin: 0 0 2rem;\n      text-align: center;\n    }\n  "]);return X=function(){return n},n}function Y(){var n=E()(["\n    .carousel-flex-wrapper {\n      margin-bottom: 2rem;\n    }\n    .carousel-flex-wrapper {\n      flex-direction: column;\n    }\n    .slider-nav-btn-wrapper {\n      order: 3;\n    }\n    .flex-slider-wrapper {\n      order: 1;  \n      margin-bottom: 3rem;\n    }\n  "]);return Y=function(){return n},n}function Z(){var n=E()(["\n  .carousel-flex-wrapper {\n    display: flex;\n    margin-bottom: 5rem;\n   \n  }\n  .slider-nav-btn-wrapper {\n    align-self: center;\n    margin: 0 3rem;\n  }\n  .flex-space-holder, .flex-slider-wrapper {\n    flex: 1 1 0px; \n  }\n  .carousel__back-button,\n  .carousel__next-button {\n    cursor: pointer;\n    border: 0;\n    border-radius: 100%;\n    height: 62px;\n    width: 62px;\n    text-align: center;\n    outline: 0;\n    padding: 0;\n  }\n  .carousel__slide-focus-ring {\n    display: none;\n  }\n  .carousel__inner-slide {\n    overflow: hidden;\n    border-radius: 5px;\n    box-shadow: 0 3px 3px 0 rgba(17,17,23,0.7);\n    transform: scale(.93);\n  }\n  .carousel__next-button {\n    background: url(",") 55% center no-repeat, #fff;\n    background-size: 23%;\n  }\n  .carousel__back-button {\n    margin-right: 3rem;\n    background: url(",") 45% center no-repeat, #fff;\n    background-size: 23%;\n  }\n  .carousel__next-button[disabled] {\n    background: url(",") 55% center no-repeat, rgba(255, 255, 255, .50);\n    background-size: 23%;\n  }\n  .carousel__back-button[disabled] {\n    background: url(",") 45% center no-repeat, rgba(255, 255, 255, .50);\n    background-size: 23%;\n  }\n  \n  ._buttonBack_113ph_1 {\n    color: orange;\n  }\n  ._buttonFirst_y31jn_1 {\n  }\n  ._buttonNext_p1bs6_1 {\n    cursor: pointer;\n  }\n  ._buttonLast_x8dvv_1 {\n    cursor: pointer;\n  }\n  ._buttonNext_p1bs6_1 {\n    cursor: pointer;\n    color: green;\n  }\n  ._dot_27k82_1 {\n    cursor: pointer;\n  }\n\n  ._image_u458c_1 {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  ._container_1xog2_1 {\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n  }\n  ._overlay_1xog2_8 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: 0;\n    cursor: zoom-in;\n    transition: opacity 0.3s, transform 0.3s;\n  }\n  ._hover_1xog2_19,\n  ._loading_1xog2_27,\n  ._zoom_1xog2_23 {\n    opacity: 1;\n  }\n  ._imageLoadingSpinnerContainer_1xog2_31 {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #f7f2e8;\n  }\n  ._slideInner_fhwgk_1 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n  ._slideHorizontal_fhwgk_1 {\n    float: left;\n  }\n  ._slide_fhwgk_1 {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    height: 0;\n    margin: 0;\n    list-style-type: none;\n  }\n  ._slide_fhwgk_1:focus {\n    outline: none !important;\n  }\n  ._focusRing_fhwgk_26 {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    bottom: 5px;\n    left: 5px;\n    pointer-events: none;\n    outline-width: 5px;\n    outline-style: solid;\n    outline-color: Highlight;\n  }\n  @media (-webkit-min-device-pixel-ratio: 0) {\n    ._focusRing_fhwgk_26 {\n      outline-style: auto;\n      outline-color: -webkit-focus-ring-color;\n    }\n  }\n  ._horizontalSlider_1rjy8_1 {\n    position: relative;\n    overflow: hidden;\n  }\n  ._horizontalSliderTray_1rjy8_1 {\n    overflow: hidden;\n    width: 100%;\n  }\n  ._verticalSlider_1rjy8_11 {\n    position: relative;\n    overflow: hidden;\n  }\n  ._verticalSliderTray_1rjy8_1 {\n    overflow: hidden;\n  }\n  ._verticalTray_1rjy8_20 {\n    float: left;\n  }\n  ._verticalSlideTrayWrap_1rjy8_24 {\n    overflow: hidden;\n  }\n  ._sliderTray_1rjy8_28 {\n    display: block;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  ._sliderAnimation_1rjy8_35 {\n    transition: transform 0.5s;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n    will-change: transform;\n  }\n  ._masterSpinnerContainer_1rjy8_41 {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #f7f2e8;\n  }\n  ._spinner_1dguc_1 {\n    position: absolute;\n    top: calc(50% - 15px);\n    left: calc(50% - 15px);\n    width: 30px;\n    height: 30px;\n    animation-name: a;\n    animation-duration: 1s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    border-width: 4px;\n    border-style: solid;\n    border-top-color: #000;\n    border-right-color: #a9a9a9;\n    border-bottom-color: #a9a9a9;\n    border-left-color: #a9a9a9;\n    border-radius: 30px;\n  }\n  @keyframes a {\n    0% {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(1turn);\n    }\n  }\n  \n  ",";\n  ",";\n"]);return Z=function(){return n},n}function nn(){var n=E()(["\n  display: block;\n  overflow: hidden;\n  background: linear-gradient(rgba(7,6,20,0.6),rgba(7,6,20,0.6)),\n    ","\n"]);return nn=function(){return n},n}var en=w.a.div(nn(),function(n){var e=n.img;return function(){return e?"url("+e+" )no-repeat center center / cover":"#555"}}),tn=w.a.div(Z(),K.a,G.a,$.a,V.a,k.a.DESKTOP(Y()),k.a.TABLET(X())),rn=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))||this).state={slidesAmount:2.5},e}a()(e,n);var t=e.prototype;return t.componentDidMount=function(){var n=window&&window.innerWidth<=767?1:2.5;this.setState({slidesAmount:n})},t.render=function(){var n=this.props.data,e=this.state.slidesAmount;return o.a.createElement(en,{img:M.a},o.a.createElement(H,{altImage:n.headerImageAlt}),o.a.createElement(D.a,null,o.a.createElement(p.a,{className:"padding-15"},o.a.createElement("div",{className:"box-tags"},o.a.createElement("div",{className:"box-tag"},o.a.createElement("span",{className:"box-tag-icon"},"icon"),o.a.createElement("span",{className:"medium"},n.days)),o.a.createElement("div",{className:"box-tag"},o.a.createElement("span",{className:"box-tag-icon"},"icon"),o.a.createElement("span",{className:"medium"},n.country))),o.a.createElement(f.a,{as:"h2",size:"large"},n.title),o.a.createElement("div",{className:"box-price"},o.a.createElement("span",{className:"large"},"$ ",n.cost),o.a.createElement("br",null),o.a.createElement("span",{className:"small italic"},n.perPerson)),o.a.createElement(g.a,{type:"primary"},n.more))),o.a.createElement(tn,null,o.a.createElement(u.CarouselProvider,{naturalSlideWidth:253,naturalSlideHeight:139,visibleSlides:e,dragEnabled:!1,totalSlides:n.headCarousel.length},o.a.createElement("div",{className:"carousel-flex-wrapper"},o.a.createElement("div",{className:"flex-space-holder"}),o.a.createElement("div",{className:"slider-nav-btn-wrapper"},o.a.createElement(u.ButtonBack,null),o.a.createElement(u.ButtonNext,null)),o.a.createElement("div",{className:"flex-slider-wrapper"},o.a.createElement(u.Slider,null,n.headCarousel.map(function(n,e){return o.a.createElement(u.Slide,{index:e,key:JSON.stringify(n.childImageSharp.fluid.src),className:"single-slide"},o.a.createElement(m.a,{fluid:n?n.childImageSharp.fluid:{},alt:"single-img"}))})))))))},e}(i.Component);rn.propTypes={data:c.a.shape({headCarousel:c.a.array.isRequired,headerImageAlt:c.a.string.isRequired,days:c.a.string.isRequired,country:c.a.string.isRequired,title:c.a.string.isRequired,cost:c.a.number.isRequired,perPerson:c.a.string.isRequired,more:c.a.string.isRequired}).isRequired};var an=rn;function on(){var n=E()(["\n    .desc-content {\n      display: block;\n      div {\n        width:100%; \n      }\n    } \n  "]);return on=function(){return n},n}function ln(){var n=E()(["\n    h4 {\n      font-size: 3rem;\n    }\n  "]);return ln=function(){return n},n}function cn(){var n=E()(["\n  display: block;\n  h4 {\n    font-size: 4.5rem;\n    color: #707070;\n    line-height: 1.2;\n    margin-bottom: 2rem;\n    text-transform: capitalize;\n  }\n  .desc-content {\n    display: flex;\n    justify-content: space-between;\n    color: #A2A2A2;\n    line-height: 2.4rem;\n    div {\n      width: 47%; \n    }\n  }\n  ",";\n  ","; \n"]);return cn=function(){return n},n}var sn=w.a.section(cn(),k.a.TABLET(ln()),k.a.PHONE(on())),un=function(n){var e=n.title,t=n.children;return o.a.createElement(sn,null,o.a.createElement(f.a,{as:"h4",className:"desc-title"},e),o.a.createElement("div",{className:"desc-content"},t))};un.propTypes={title:c.a.string.isRequired,children:c.a.node.isRequired};var dn=un,mn=t(256);t(39);function pn(){var n=E()(["\n    margin-bottom: 4rem;\n  "]);return pn=function(){return n},n}function fn(){var n=E()(["\n  color: #757575;\n  margin: 0 2rem 2rem;\n\n  ",";\n"]);return fn=function(){return n},n}function gn(){var n=E()(["\n  display: block;\n  font-size: 2.5rem;\n  color: #707070;\n  font-weight: 400;\n  margin-bottom: 1rem;\n"]);return gn=function(){return n},n}function bn(){var n=E()(["\n\n  width: 6rem;\n  height: 6rem;\n  line-height: 5.6rem;\n  border: 2px solid #FF4C00;\n  border-radius: 100%;\n  font-size: 32px;\n  font-weight: bold;\n  color: #707070;\n  text-align: center;\n  background-color: #fff;\n  margin: 0 auto;\n \n"]);return bn=function(){return n},n}function hn(){var n=E()(["\n  font-size: 3rem;\n    display: inline-block;\n  "]);return hn=function(){return n},n}function vn(){var n=E()(["\n    display: none;\n  "]);return vn=function(){return n},n}function _n(){var n=E()(["\n  font-size: 4.3rem;\n  font-weight: bold;\n  color: #d3d3d3;\n  line-height: 1.2;\n  \n  ",";\n  ",";\n"]);return _n=function(){return n},n}function xn(){var n=E()(["\n    width: 16rem;\n    display: block;\n    margin: 0 auto 2rem;\n  "]);return xn=function(){return n},n}function En(){var n=E()(["\n    width: 6.4rem;\n  "]);return En=function(){return n},n}function yn(){var n=E()(["\n  width: 16rem;\n  position: relative;\n  overflow: hidden; \n  \n  ",";\n  \n  ",";\n"]);return yn=function(){return n},n}function wn(){var n=E()(["\n    display: block;\n    margin: 0 auto;\n    font-size: 1.4rem;\n    padding: 0 0 4.6rem;\n    .gatsby-image-wrapper {\n      width: 100%;\n      height: auto; \n    }\n    .item-text {\n      margin: 0;\n    }\n  "]);return wn=function(){return n},n}function kn(){var n=E()(["\n    padding: 0 0 4.6rem;\n    .item-flex-wrapper {\n        margin-left: 2rem;\n        flex-direction: column;\n        .gatsby-image-wrapper {\n          order: 1;\n          width: 100%;\n        }\n        .item-text {\n          order: 2;\n          width: 100%;\n        }\n     }\n  "]);return kn=function(){return n},n}function Tn(){var n=E()(["\n  flex: 1 1 0px;\n  padding: 0 0 4.6rem 1rem;\n  display: flex;\n  color: #A2A2A2;\n  .item-text {\n    flex: 1 1 0px;\n    margin-right: 3rem;\n  }\n  .gatsby-image-wrapper {\n    width: 35%;\n    height: 320px;\n    border-radius: 5px;\n    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .16);\n  }\n  \n  ",";\n  \n  ",";\n"]);return Tn=function(){return n},n}function Nn(){var n=E()(["\n  display: block;\n    &:not(:last-child) .v-line::before {\n      display: none;\n    }\n    .number-wrapper{\n      display: inline-block;\n      margin-bottom: 2rem;\n    }\n  "]);return Nn=function(){return n},n}function zn(){var n=E()(['\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  .number-wrapper {\n    position: relative;\n    margin: 0 2rem;\n  }\n  &:not(:last-child) .v-line::before {\n    content: "";\n    display: block;\n    border-left: 2px solid #ff4c00;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 3rem;\n    -moz-transform: translate(-50%,0);\n    -ms-transform: translate(-50%,0);\n    -webkit-transform: translate(-50%,0);\n    -o-transform: translate(-50%,0);\n    transform: translate(-50%,0);\n    z-index: -1;\n  }\n  \n  ',";\n"]);return zn=function(){return n},n}var An=w.a.div(zn(),k.a.PHONE(Nn())),Rn=w.a.section(Tn(),k.a.TABLET(kn()),k.a.PHONE(wn())),Sn=(w.a.div(yn(),k.a.DESKTOP(En()),k.a.PHONE(xn())),w.a.div(_n(),k.a.TABLET(vn()),k.a.PHONE(hn()))),qn=w.a.div(bn()),Cn=w.a.span(gn()),In=(w.a.p(fn(),k.a.TABLET(pn())),function(n){var e=n.duration,t=n.number,r=n.title,a=n.image,i=n.content;return o.a.createElement(An,null,o.a.createElement(Sn,null,e),o.a.createElement("div",{className:"number-wrapper v-line"},o.a.createElement(qn,null,t)),o.a.createElement(Rn,null,o.a.createElement("div",{className:"item-text"},o.a.createElement(Cn,{as:"h4"},r),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.childMarkdownRemark.html}})),o.a.createElement(m.a,{fluid:a?a.childImageSharp.fluid:{},alt:r})))});In.propTypes={duration:c.a.string.isRequired,number:c.a.number.isRequired,title:c.a.string.isRequired,image:c.a.shape({childImageSharp:c.a.object.isRequired}).isRequired,content:c.a.shape({childMarkdownRemark:c.a.object.isRequired}).isRequired};var jn=In;function Ln(){var n=E()(["\n  margin: 2rem 0;\n"]);return Ln=function(){return n},n}var On=w.a.div(Ln()),Pn=function(n){var e=n.items;return o.a.createElement(On,null,e.map(function(n){return o.a.createElement(jn,Object.assign({},n,{key:n.number}))}))};Pn.propTypes={items:c.a.arrayOf(c.a.object).isRequired};var Bn=Pn;function Hn(){var n=E()(["\n  display: block;\n  background-color: #535372;\n"]);return Hn=function(){return n},n}var Dn=w.a.div(Hn()),Jn=function(n){var e=n.children;return o.a.createElement(Dn,null,e)};Jn.propTypes={children:c.a.node.isRequired};var Mn=Jn,Fn=t(254),Kn=t(184),Wn=t(255),Gn=t(217),Un=t(257),$n=t(253),Qn=t.n($n);t.d(e,"default",function(){return Vn}),t.d(e,"query",function(){return Xn});var Vn=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))||this).state={},e}return a()(e,n),e.prototype.render=function(){var n=this.props.data.productJson;return o.a.createElement(s.a,null,o.a.createElement(an,{data:n}),o.a.createElement(D.a,null,o.a.createElement(mn.a,{image:n.descriptionImage,imageAlt:n.descriptionAltTitle,title:n.descriptionTitle},o.a.createElement(Kn.a,{markdown:n.descriptionSubtitle})),o.a.createElement(Gn.a,{uppercase:"true"},o.a.createElement("img",{width:"17",src:Qn.a,alt:"f"}),o.a.createElement("span",null,n.descriptionMark)),o.a.createElement(dn,{title:n.descriptionContentTitle},o.a.createElement(Kn.a,{markdown:n.descriptionContent}),o.a.createElement(Kn.a,{markdown:n.descriptionContent}))),o.a.createElement(D.a,null,o.a.createElement(Un.a,{images:n.mainCarousel}),o.a.createElement(mn.a,{title:n.itineraryTitle,image:n.itineraryImage,imageAlt:n.itineraryAltTitle},o.a.createElement(Kn.a,{markdown:n.itineraryContent})),o.a.createElement(Bn,{items:n.schedule})),o.a.createElement(Mn,null,o.a.createElement(D.a,null,o.a.createElement(p.a,null,o.a.createElement(Fn.a,{productId:n.productId,title:n.bookingTitle,persons:n.bookingDays,days:n.bookingPersons,subTitle:n.selectSeats},o.a.createElement(Kn.a,{markdown:n.bookingContent}))))),o.a.createElement(D.a,null,o.a.createElement(mn.a,{image:n.readingsImage,imageAlt:n.readingsAltTitle,title:n.readingsTitle},o.a.createElement(Kn.a,{markdown:n.readingsContent})),o.a.createElement(Wn.a,{articles:n.articles})))},e}(i.Component),Xn="1268359950";Vn.propTypes={data:c.a.shape({productJson:c.a.object.isRequired}).isRequired}},358:function(n,e,t){n.exports=t.p+"static/product_banner_bg-02b533fa86bfa6d473c1a9d60e2a58f7.png"}}]);
//# sourceMappingURL=component---src-pages-product-js-4d8974b57478933b98cd.js.map