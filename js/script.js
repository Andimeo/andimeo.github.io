function encodeAttr(t){return(t||"").replace(/&/g,"&amp;").replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}(r=>{r("#main").fitVids(),r("body").on("click",function(){r(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(t){t.stopPropagation();var t=r(this),e=(e=>{if("string"!=typeof e)return e;if(-1===e.indexOf("//"))return e;try{var t=new URL(e);return"http:"===t.protocol&&(t.protocol="https:"),t.toString()}catch(t){return console.warn("Invalid URL:",e),e}})(t.attr("data-url")),e=encodeURIComponent(e),a="article-share-box-"+t.attr("data-id"),n=t.attr("data_title"),o=t.attr("data_summary"),t=t.offset();if(r("#"+a).length){if((i=r("#"+a)).hasClass("on"))return void i.removeClass("on")}else{var a=['<div id="'+encodeAttr(a)+'" class="article-share-box">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+encodeAttr(e)+"&text="+encodeAttr(n)+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer/sharer.php?u='+encodeAttr(e)+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="https://www.linkedin.com/shareArticle?mini=true&url='+encodeAttr(e)+"&title="+encodeAttr(n)+"&summary="+encodeAttr(o)+'" class="article-share-linkedin" target="_blank" title="LinkedIn"></a>',"</div>","</div>"].join(""),i=r(a);r("body").append(i)}r(".article-share-box.on").hide(),i.css({top:t.top+30,left:t.left+50}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){r(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault(),t.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});var t,n=window.location.pathname,o=new RegExp("^/page\\/\\d+\\/"),e=(r(".article-entry").each(function(t){var a=r(this).prev().find(".article-title").attr("href");r(this).find("img").each(function(){var t,e;r(this).parent().hasClass("fancybox")||(t=this.alt,e="/"===n||o.test(n)?a:this.src,r(this).wrap('<a href="'+encodeAttr(e)+'" title="'+encodeAttr(t)+'" class="fancybox"></a>'))}),r(this).find(".fancybox").each(function(){r(this).attr("rel","article"+t)})}),r.fancybox&&r(".fancybox").fancybox(),r("#container")),a=!1,i=(r("#main-nav-toggle").on("click",function(){a||(a=!0,e.toggleClass("mobile-nav-on"),setTimeout(function(){a=!1},200))}),r("#wrap").on("click",function(){!a&&e.hasClass("mobile-nav-on")&&e.removeClass("mobile-nav-on")}),r(window).scroll(function(){200<document.documentElement.scrollTop+document.body.scrollTop?r("#gotop").fadeIn(400):r("#gotop").stop().fadeOut(400)}),r("#gotop").click(function(){r("html,body").animate({scrollTop:"0px"},200)}),r("#main-nav").outerHeight(!0)),c=(r("#wiki-toc-wrap").affix({offset:{top:100,bottom:function(){return this.bottom=r("#footer").outerHeight(!0)+i}}}),r("#wiki-toc-wrap")),s=r("#wiki-sidebar");r(window).resize(function(){var t=s.width()-parseInt(s.css("paddingLeft"))-parseInt(s.css("paddingRight"))-parseInt(s.css("marginLeft"))-parseInt(s.css("marginRight"))-parseInt(c.css("paddingLeft"))-parseInt(c.css("marginLeft"));c.width(t)}),t=s.width()-parseInt(s.css("paddingLeft"))-parseInt(s.css("paddingRight")),c.width(t),r("body").scrollspy({target:"#wiki-toc-wrap",offset:i}),r("[href^='#']").not("[href~='#']").click(function(t){t.preventDefault();var t=r(this),t=decodeURIComponent(t.attr("href").split("#")[1]),e=r("[id='"+t+"']");e.length?(e=e.offset().top-i,r("html, body").animate({scrollTop:e},200)):console.warn("Target element not found:",t)})})(jQuery);