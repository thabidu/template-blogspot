"use strict";var playerOpen=!0;function ieVersion(){var e=navigator.userAgent,a=-1<e.indexOf("compatible")&&-1<e.indexOf("MSIE"),i=-1<e.indexOf("Edge")&&!a,n=-1<e.indexOf("Trident")&&-1<e.indexOf("rv:11.0");if(a){new RegExp("MSIE (\\d+\\.\\d+);").test(e);var l=parseFloat(RegExp.$1);return 7==l?7:8==l?8:9==l?9:10==l?10:6}return i?"edge":n?11:-1}function player(){if(playerOpen){for(var e=$(".video-des li").length,a=[],i=0;i<e;i++){var n=$(".video-des li").eq(i).attr("data-video-url");a.push(n)}var l=0,t=videojs(document.querySelector(".video-js"),{autoplay:"autoplay",sources:[{src:a[l]}]},function(){this.on("ended",function(){l=4<=l?0:++l,$(".video-des .right li").removeClass("on").eq(l).addClass("on"),t.src(a[l]),t.play()})});$(".video-des li").on("click",function(){l=$(this).index(),$(".video-des .right li").removeClass("on"),$(this).addClass("on"),t.src(a[l]),t.play()}),playerOpen=!1}}$(document).ready(function(){player();var e=new Swiper("#swiper-top",{direction:"horizontal",autoplay:!0,delay:1500,loop:!0,effect:"fade",autoplayDisableOnInteraction:!1,pagination:{el:".btn .banner-page",bulletClass:"banner-on",bulletActiveClass:"banner-active",renderBullet:function(e,a){return'<div class="'+a+'"><div class="bdf"></div><div class="line"></div></div>'}},navigation:{nextEl:".btngroup .next",prevEl:".btngroup .prev"}});e.params.pagination.clickable=!0,e.pagination.destroy(),e.pagination.init(),e.pagination.bullets.eq(0).addClass("banner-active"),new Swiper(".mobile-games-swiper",{initialSlide:0,direction:"horizontal",autoplay:{delay:5e3},loop:!0,slidesPerView:5,slidesPerGroup:5,spaceBetween:"3.1%",breakpoints:{1080:{slidesPerView:4,slidesPerGroup:4}},pagination:{el:".mobile-games-pagination",clickable:!0,bulletClass:"not-active",bulletActiveClass:"active",renderBullet:function(e,a){return'<span class="'+a+'"></span>'}}}),new Swiper(".blog-swiper",{autoplay:{delay:5e3},loop:!0,spaceBetween:"5.5%",pagination:{el:".blog-paginations",clickable:!0,bulletClass:"not-active",bulletActiveClass:"active",renderBullet:function(e,a){return'<span class="'+a+'"></span>'}}}),new Swiper(".appraise-banner-swiper",{autoplay:{delay:5e3},spaceBetween:"5.5%",slidesPerView:2,slidesPerGroup:2,navigation:{nextEl:".appraise-banner .next",prevEl:".appraise-banner .prev"}})});