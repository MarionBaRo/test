!function(){
  function t(t,e){
    var r=Object.keys(t);
    if(Object.getOwnPropertySymbols){
      var o=Object.getOwnPropertySymbols(t);
      e&&(o=o.filter((function(e){
        return Object.getOwnPropertyDescriptor(t,e).enumerable
      }))),r.push.apply(r,o)
    }
    return r
  }
  function e(t,e,r){
    return e in t?Object.defineProperty(t,e,{
      value:r,enumerable:!0,configurable:!0,writable:!0
    }):t[e]=r,t
  }var r=document.createElement("style");
  r.innerHTML='#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*,:before,:after{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#a3a3a3}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#a3a3a3}input::placeholder,textarea::placeholder{opacity:1;color:#a3a3a3}button,[role=button]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-opacity: 1;border-color:rgba(229,229,229,var(--tw-border-opacity))}[type=text],[type=email],[type=url],[type=time],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#737373;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=time]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#737373;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#737373;opacity:1}input::placeholder,textarea::placeholder{color:#737373;opacity:1}select{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%23737373\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#737373;border-width:1px}[type=checkbox]{border-radius:0}[type=checkbox]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}[type=checkbox]:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox=\'0 0 16 16\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3e%3c/svg%3e")}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus{border-color:transparent;background-color:currentColor}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 16 16\'%3e%3cpath stroke=\'white\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4 8h8\'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px auto -webkit-focus-ring-color}.container{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px;padding-right:2rem;padding-left:2rem}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.prose{color:#404040;max-width:65ch}.prose [class~=lead]{color:#525252;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#171717;text-decoration:underline;font-weight:500}.prose strong{color:#171717;font-weight:600}.prose ol[type=a]{--list-counter-style: lower-alpha}.prose ol[type=a s]{--list-counter-style: lower-alpha}.prose ol[type=i]{--list-counter-style: lower-roman}.prose ol[type=i s]{--list-counter-style: lower-roman}.prose ol[type="1"]{--list-counter-style: decimal}.prose ol>li{position:relative;padding-left:1.75em}.prose ol>li:before{content:counter(list-item,var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#737373;left:0}.prose ul>li{position:relative;padding-left:1.75em}.prose ul>li:before{content:"";position:absolute;background-color:#d4d4d4;border-radius:50%;width:.375em;height:.375em;top:calc(.875em - .1875em);left:.25em}.prose hr{border-color:#e5e5e5;border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose blockquote{font-weight:500;font-style:italic;color:#171717;border-left-width:.25rem;border-left-color:#e5e5e5;quotes:"\\201c""\\201d""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.prose blockquote p:first-of-type:before{content:open-quote}.prose blockquote p:last-of-type:after{content:close-quote}.prose h1{color:#171717;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose h2{color:#171717;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h3{color:#171717;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose h4{color:#171717;font-weight:600;margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose figure figcaption{color:#737373;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose code{color:#171717;font-weight:600;font-size:.875em}.prose code:before{content:"`"}.prose code:after{content:"`"}.prose a code{color:#171717}.prose pre{color:#e5e5e5;background-color:#262626;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose pre code:before{content:none}.prose pre code:after{content:none}.prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.prose thead{color:#171717;font-weight:600;border-bottom-width:1px;border-bottom-color:#d4d4d4}.prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e5e5}.prose tbody tr:last-child{border-bottom-width:0}.prose tbody td{vertical-align:top;padding:.5714286em}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25emmargin-bottom:1.25em}.prose img{margin-top:2em;margin-bottom:2em}.prose video{margin-top:2em;margin-bottom:2em}.prose figure{margin-top:2em;margin-bottom:2em}.prose figure>*{margin-top:0;margin-bottom:0}.prose h2 code{font-size:.875em}.prose h3 code{font-size:.9em}.prose ol{margin-top:1.25em;margin-bottom:1.25em}.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:.5em;margin-bottom:.5em}.prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.prose>ul>li>*:first-child{margin-top:1.25em}.prose>ul>li>*:last-child{margin-bottom:1.25em}.prose>ol>li>*:first-child{margin-top:1.25em}.prose>ol>li>*:last-child{margin-bottom:1.25em}.prose ul ul,.prose ul ol,.prose ol ul,.prose ol ol{margin-top:.75em;margin-bottom:.75em}.prose hr+*{margin-top:0}.prose h2+*{margin-top:0}.prose h3+*{margin-top:0}.prose h4+*{margin-top:0}.prose thead th:first-child{padding-left:0}.prose thead th:last-child{padding-right:0}.prose tbody td:first-child{padding-left:0}.prose tbody td:last-child{padding-right:0}.prose>:first-child{margin-top:0}.prose>:last-child{margin-bottom:0}.prose-sm{font-size:.875rem;line-height:1.7142857}.prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.prose-sm img{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm figure{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm figure>*{margin-top:0;margin-bottom:0}.prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.prose-sm code{font-size:.8571429em}.prose-sm h2 code{font-size:.9em}.prose-sm h3 code{font-size:.8888889em}.prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.prose-sm ol{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.prose-sm ol>li{padding-left:1.5714286em}.prose-sm ol>li:before{left:0}.prose-sm ul>li{padding-left:1.5714286em}.prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:calc(.8571429em - .1785714em);left:.2142857em}.prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm>ul>li>*:first-child{margin-top:1.1428571em}.prose-sm>ul>li>*:last-child{margin-bottom:1.1428571em}.prose-sm>ol>li>*:first-child{margin-top:1.1428571em}.prose-sm>ol>li>*:last-child{margin-bottom:1.1428571em}.prose-sm ul ul,.prose-sm ul ol,.prose-sm ol ul,.prose-sm ol ol{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.prose-sm hr+*{margin-top:0}.prose-sm h2+*{margin-top:0}.prose-sm h3+*{margin-top:0}.prose-sm h4+*{margin-top:0}.prose-sm table{font-size:.8571429em;line-height:1.5}.prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.prose-sm thead th:first-child{padding-left:0}.prose-sm thead th:last-child{padding-right:0}.prose-sm tbody td{padding:.6666667em 1em}.prose-sm tbody td:first-child{padding-left:0}.prose-sm tbody td:last-child{padding-right:0}.prose-sm>:first-child{margin-top:0}.prose-sm>:last-child{margin-bottom:0}.btn{padding:.75rem 1rem;font-size:1rem;line-height:1.5rem;font-weight:500}.btn-primary{border-width:1px;--tw-border-opacity: 1;border-color:rgba(38,38,38,var(--tw-border-opacity))}.btn-primary:hover{--tw-border-opacity: 1;border-color:rgba(23,23,23,var(--tw-border-opacity))}.btn-primary{--tw-bg-opacity: 1;background-color:rgba(38,38,38,var(--tw-bg-opacity))}.btn-primary:hover{--tw-bg-opacity: 1;background-color:rgba(23,23,23,var(--tw-bg-opacity))}.btn-primary{--tw-text-opacity: 1;color:rgba(250,250,250,var(--tw-text-opacity))}.btn-white{border-width:1px;--tw-border-opacity: 1;border-color:rgba(229,229,229,var(--tw-border-opacity))}.btn-white:hover{--tw-border-opacity: 1;border-color:rgba(212,212,212,var(--tw-border-opacity))}.btn-white{--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(38,38,38,var(--tw-text-opacity))}.btn-white:hover{--tw-text-opacity: 1;color:rgba(23,23,23,var(--tw-text-opacity))}.btn-transparent{--tw-border-opacity: 1;border-color:rgba(229,229,229,var(--tw-border-opacity))}.btn-transparent:hover{--tw-border-opacity: 1;border-color:rgba(212,212,212,var(--tw-border-opacity))}.btn-transparent{--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(38,38,38,var(--tw-text-opacity))}.btn-transparent:hover{--tw-text-opacity: 1;color:rgba(23,23,23,var(--tw-text-opacity))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.inset-x-0{left:0px;right:0px}.inset-y-0{top:0px;bottom:0px}.top-0{top:0px}.top-3{top:.75rem}.top-16{top:4rem}.top-52{top:13rem}.-top-3{top:-.75rem}.-top-5{top:-1.25rem}.right-0{right:0px}.-right-3{right:-.75rem}.-right-5{right:-1.25rem}.bottom-0{bottom:0px}.-bottom-3{bottom:-.75rem}.left-0{left:0px}.-left-3{left:-.75rem}.-left-4{left:-1rem}.left-1\\/2{left:50%}.z-0{z-index:0}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.order-first{order:-9999}.col-span-1{grid-column:span 1 / span 1}.col-span-2{grid-column:span 2 / span 2}.mx-auto{margin-left:auto;margin-right:auto}.-mx-3{margin-left:-.75rem;margin-right:-.75rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-16{margin-top:4rem;margin-bottom:4rem}.my-36{margin-top:9rem;margin-bottom:9rem}.-my-2{margin-top:-.5rem;margin-bottom:-.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-9{margin-top:2.25rem}.mt-12{margin-top:3rem}.mt-16{margin-top:4rem}.mt-48{margin-top:12rem}.mt-64{margin-top:16rem}.-mt-3{margin-top:-.75rem}.-mt-20{margin-top:-5rem}.-mt-40{margin-top:-10rem}.mr-2{margin-right:.5rem}.mr-8{margin-right:2rem}.-mr-1{margin-right:-.25rem}.-mr-2{margin-right:-.5rem}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.mb-12{margin-bottom:3rem}.mb-16{margin-bottom:4rem}.mb-20{margin-bottom:5rem}.mb-36{margin-bottom:9rem}.ml-1{margin-left:.25rem}.ml-3{margin-left:.75rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.-ml-4{margin-left:-1rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-16{height:4rem}.h-20{height:5rem}.h-24{height:6rem}.h-40{height:10rem}.h-96{height:24rem}.h-full{height:100%}.max-h-16{max-height:4rem}.max-h-60{max-height:15rem}.min-h-screen{min-height:100vh}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-16{width:4rem}.w-20{width:5rem}.w-24{width:6rem}.w-36{width:9rem}.w-40{width:10rem}.w-48{width:12rem}.w-56{width:14rem}.w-64{width:16rem}.w-96{width:24rem}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-9{min-width:2.25rem}.min-w-20{min-width:5rem}.max-w-20{max-width:5rem}.max-w-lg{max-width:32rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-5xl{max-width:64rem}.max-w-7xl{max-width:80rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.flex-shrink{flex-shrink:1}.flex-grow{flex-grow:1}.origin-top-right{transform-origin:top right}.origin-top-left{transform-origin:top left}.transform{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;transform:translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x: 50%}.-translate-x-1\\/2{--tw-translate-x: -50%}.translate-y-0{--tw-translate-y: 0px}.translate-y-4{--tw-translate-y: 1rem}.translate-y-1\\/2{--tw-translate-y: 50%}.-translate-y-1\\/2{--tw-translate-y: -50%}.-translate-y-2\\/4{--tw-translate-y: -50%}.-translate-y-3\\/4{--tw-translate-y: -75%}.scale-95{--tw-scale-x: .95;--tw-scale-y: .95}.scale-100{--tw-scale-x: 1;--tw-scale-y: 1}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-2-gallery{grid-template-columns:repeat(2,10rem)}.grid-cols-3-gallery{grid-template-columns:repeat(3,10rem)}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-10{gap:2.5rem}.gap-12{gap:3rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-1{row-gap:.25rem}.gap-y-2{row-gap:.5rem}.gap-y-4{row-gap:1rem}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.self-end{align-self:flex-end}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.overflow-y-visible{overflow-y:visible}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-none{border-radius:0}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.rounded-r-md{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.border-0{border-width:0px}.border{border-width:1px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.border-gray-100{--tw-border-opacity: 1;border-color:rgba(245,245,245,var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity: 1;border-color:rgba(229,229,229,var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity: 1;border-color:rgba(212,212,212,var(--tw-border-opacity))}.border-gray-700{--tw-border-opacity: 1;border-color:rgba(64,64,64,var(--tw-border-opacity))}.focus\\:border-gray-600:focus{--tw-border-opacity: 1;border-color:rgba(82,82,82,var(--tw-border-opacity))}.focus\\:border-indigo-500:focus{--tw-border-opacity: 1;border-color:rgba(99,102,241,var(--tw-border-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgba(245,245,245,var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity: 1;background-color:rgba(115,115,115,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity: 1;background-color:rgba(38,38,38,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgba(23,23,23,var(--tw-bg-opacity))}.bg-indigo-50{--tw-bg-opacity: 1;background-color:rgba(238,242,255,var(--tw-bg-opacity))}.bg-indigo-100{--tw-bg-opacity: 1;background-color:rgba(224,231,255,var(--tw-bg-opacity))}.bg-indigo-300{--tw-bg-opacity: 1;background-color:rgba(165,180,252,var(--tw-bg-opacity))}.bg-sky-50{--tw-bg-opacity: 1;background-color:rgba(240,249,255,var(--tw-bg-opacity))}.bg-cyan-500{--tw-bg-opacity: 1;background-color:rgba(6,182,212,var(--tw-bg-opacity))}.bg-green-50{--tw-bg-opacity: 1;background-color:rgba(240,253,244,var(--tw-bg-opacity))}.bg-green-200{--tw-bg-opacity: 1;background-color:rgba(187,247,208,var(--tw-bg-opacity))}.bg-green-300{--tw-bg-opacity: 1;background-color:rgba(134,239,172,var(--tw-bg-opacity))}.bg-amber-50{--tw-bg-opacity: 1;background-color:rgba(255,251,235,var(--tw-bg-opacity))}.bg-amber-200{--tw-bg-opacity: 1;background-color:rgba(253,230,138,var(--tw-bg-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgba(250,250,250,var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgba(245,245,245,var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity: 1;background-color:rgba(229,229,229,var(--tw-bg-opacity))}.bg-opacity-75{--tw-bg-opacity: .75}.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-white{--tw-gradient-from: #fff;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0))}.from-gray-50{--tw-gradient-from: #fafafa;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(250, 250, 250, 0))}.from-gray-100{--tw-gradient-from: #f5f5f5;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(245, 245, 245, 0))}.from-gray-800{--tw-gradient-from: #262626;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(38, 38, 38, 0))}.from-gray-900{--tw-gradient-from: #171717;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(23, 23, 23, 0))}.from-indigo-300{--tw-gradient-from: #a5b4fc;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(165, 180, 252, 0))}.from-indigo-500{--tw-gradient-from: #6366f1;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(99, 102, 241, 0))}.from-green-300{--tw-gradient-from: #86efac;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(134, 239, 172, 0))}.from-amber-300{--tw-gradient-from: #fcd34d;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(252, 211, 77, 0))}.via-gray-900{--tw-gradient-stops: var(--tw-gradient-from), #171717, var(--tw-gradient-to, rgba(23, 23, 23, 0))}.to-gray-50{--tw-gradient-to: #fafafa}.to-gray-100{--tw-gradient-to: #f5f5f5}.to-gray-800{--tw-gradient-to: #262626}.to-indigo-200{--tw-gradient-to: #c7d2fe}.to-indigo-400{--tw-gradient-to: #818cf8}.to-green-200{--tw-gradient-to: #bbf7d0}.to-amber-200{--tw-gradient-to: #fde68a}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.object-cover{-o-object-fit:cover;object-fit:cover}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-9{padding:2.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-20{padding-top:5rem;padding-bottom:5rem}.py-24{padding-top:6rem;padding-bottom:6rem}.pt-4{padding-top:1rem}.pt-5{padding-top:1.25rem}.pt-8{padding-top:2rem}.pt-12{padding-top:3rem}.pt-16{padding-top:4rem}.pt-40{padding-top:10rem}.pr-2{padding-right:.5rem}.pr-4{padding-right:1rem}.pr-6{padding-right:1.5rem}.pr-9{padding-right:2.25rem}.pr-10{padding-right:2.5rem}.pb-3{padding-bottom:.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pb-20{padding-bottom:5rem}.pl-3{padding-left:.75rem}.pl-6{padding-left:1.5rem}.text-left{text-align:left}.text-center{text-align:center}.align-bottom{vertical-align:bottom}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-6xl{font-size:3.75rem;line-height:1}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.uppercase{text-transform:uppercase}.italic{font-style:italic}.leading-4{line-height:1rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.tracking-tight{letter-spacing:-.025em}.text-transparent{color:transparent}.text-white{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-gray-50{--tw-text-opacity: 1;color:rgba(250,250,250,var(--tw-text-opacity))}.text-gray-100{--tw-text-opacity: 1;color:rgba(245,245,245,var(--tw-text-opacity))}.text-gray-200{--tw-text-opacity: 1;color:rgba(229,229,229,var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity: 1;color:rgba(212,212,212,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgba(163,163,163,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgba(115,115,115,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgba(82,82,82,var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity: 1;color:rgba(64,64,64,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgba(38,38,38,var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity: 1;color:rgba(23,23,23,var(--tw-text-opacity))}.text-indigo-300{--tw-text-opacity: 1;color:rgba(165,180,252,var(--tw-text-opacity))}.text-indigo-400{--tw-text-opacity: 1;color:rgba(129,140,248,var(--tw-text-opacity))}.text-indigo-500{--tw-text-opacity: 1;color:rgba(99,102,241,var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity: 1;color:rgba(79,70,229,var(--tw-text-opacity))}.text-green-400{--tw-text-opacity: 1;color:rgba(74,222,128,var(--tw-text-opacity))}.text-amber-200{--tw-text-opacity: 1;color:rgba(253,230,138,var(--tw-text-opacity))}.text-amber-400{--tw-text-opacity: 1;color:rgba(251,191,36,var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity: 1;color:rgba(115,115,115,var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgba(23,23,23,var(--tw-text-opacity))}.hover\\:text-indigo-500:hover{--tw-text-opacity: 1;color:rgba(99,102,241,var(--tw-text-opacity))}.focus\\:text-gray-800:focus{--tw-text-opacity: 1;color:rgba(38,38,38,var(--tw-text-opacity))}.underline{text-decoration:underline}.opacity-0{opacity:0}.opacity-40{opacity:.4}.opacity-60{opacity:.6}.opacity-80{opacity:.8}.opacity-100{opacity:1}*,:before,:after{--tw-shadow: 0 0 #0000}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow{--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.focus-within\\:outline-none:focus-within{outline:2px solid transparent;outline-offset:2px}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}*,:before,:after{--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgba(59, 130, 246, .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000}.ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-2:focus-within{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-0:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-black{--tw-ring-opacity: 1;--tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity))}.focus-within\\:ring-indigo-500:focus-within{--tw-ring-opacity: 1;--tw-ring-color: rgba(99, 102, 241, var(--tw-ring-opacity))}.focus\\:ring-indigo-500:focus{--tw-ring-opacity: 1;--tw-ring-color: rgba(99, 102, 241, var(--tw-ring-opacity))}.ring-opacity-5{--tw-ring-opacity: .05}.focus-within\\:ring-offset-2:focus-within{--tw-ring-offset-width: 2px}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-75{transition-duration:75ms}.duration-100{transition-duration:.1s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.-z-1{z-index:-1}.origin-0{transform-origin:0%}input.floating:not(:-moz-placeholder-shown)~label,textarea.floating:not(:-moz-placeholder-shown)~label{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;transform:translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-scale-x: .75;--tw-scale-y: .75;--tw-translate-y: -1.5rem}input.floating:not(:-ms-input-placeholder)~label,textarea.floating:not(:-ms-input-placeholder)~label{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;transform:translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-scale-x: .75;--tw-scale-y: .75;--tw-translate-y: -1.5rem}input.floating:focus~label,input.floating:not(:placeholder-shown)~label,textarea.floating:focus~label,textarea.floating:not(:placeholder-shown)~label,select.floating:focus~label,select.floating:not([value=""]):valid~label{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;transform:translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-scale-x: .75;--tw-scale-y: .75;--tw-translate-y: -1.5rem}input.floating,textarea.floating,select.floating{margin-top:0;display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:0px;border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgba(82,82,82,var(--tw-border-opacity))}input.floating:focus,textarea.floating:focus,select.floating:focus{--tw-border-opacity: 1;border-color:rgba(212,212,212,var(--tw-border-opacity))}input.floating,textarea.floating,select.floating{background-color:transparent;padding:.75rem 0 .5rem;--tw-text-opacity: 1;color:rgba(250,250,250,var(--tw-text-opacity))}input.floating:focus,textarea.floating:focus,select.floating:focus{--tw-text-opacity: 1;color:rgba(212,212,212,var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}input.floating:focus~label,select.floating:focus~label{opacity:.5;left:0px}.light-form input.floating,.light-form textarea.floating,.light-form select.floating{margin-top:0;display:block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:0px;border-bottom-width:1px;--tw-border-opacity: 1;border-color:rgba(212,212,212,var(--tw-border-opacity))}.light-form input.floating:focus,.light-form textarea.floating:focus,.light-form select.floating:focus{--tw-border-opacity: 1;border-color:rgba(82,82,82,var(--tw-border-opacity))}.light-form input.floating,.light-form textarea.floating,.light-form select.floating{background-color:transparent;padding:.75rem 0 .5rem;--tw-text-opacity: 1;color:rgba(23,23,23,var(--tw-text-opacity))}.light-form input.floating:focus,.light-form textarea.floating:focus,.light-form select.floating:focus{--tw-text-opacity: 1;color:rgba(38,38,38,var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.fill-none{fill:none}.gallery{-webkit-animation:slide 90S linear infinite;animation:slide 90S linear infinite}.gallery-wrapper:hover .gallery{-webkit-animation-play-state:paused;animation-play-state:paused}.gallery-grid[data-category=security] div[class*=bg-gradient],[class*=bg-gradient][data-category=security]{--tw-gradient-from: #86efac;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(134, 239, 172, 0));--tw-gradient-to: #bbf7d0}.gallery-grid[data-category=network] div[class*=bg-gradient],[class*=bg-gradient][data-category=network]{--tw-gradient-from: #a5b4fc;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(165, 180, 252, 0));--tw-gradient-to: #c7d2fe}.gallery-grid[data-category=data-management] div[class*=bg-gradient],[class*=bg-gradient][data-category=data-management]{--tw-gradient-from: #38bdf8;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(56, 189, 248, 0));--tw-gradient-to: #bae6fd}.gallery-grid[data-category=infrastructure-cloud] div[class*=bg-gradient],[class*=bg-gradient][data-category=infrastructure-cloud]{--tw-gradient-from: #fbbf24;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 191, 36, 0));--tw-gradient-to: #fde68a}.gallery-grid[data-category=supervision-production] div[class*=bg-gradient],[class*=bg-gradient][data-category=supervision-production]{--tw-gradient-from: #a855f7;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(168, 85, 247, 0));--tw-gradient-to: #d8b4fe}@-webkit-keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes slide{0%{transform:translate(0)}to{transform:translate(-100%)}}.grid-cols-2-gallery .gallery-grid-column:nth-child(-n + 2){margin-left:-5.83333rem}.grid-cols-3-gallery .gallery-grid-column:nth-child(-n + 3){margin-left:-6.25rem}.anim-part-2{position:relative;display:flex;flex-grow:1;justify-content:space-between;height:500px}.feature-caption{width:500px;transform-origin:0 0;transform:rotate(-90deg);--tw-text-opacity: 1;color:rgba(245,245,245,var(--tw-text-opacity))}.transform-anim{height:100%;width:50px}.transform-timeline{position:relative;height:100%;width:50px}.transform-timeline:before{position:absolute;top:0;content:"";height:100%;width:100%;background-image:linear-gradient(to top,var(--tw-gradient-stops));--tw-gradient-from: #6366f1;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(99, 102, 241, 0));--tw-gradient-to: #818cf8;opacity:.1}.transform-progress{height:100%;width:50px;background-color:#fff;transform-origin:bottom;background-image:linear-gradient(to top,var(--tw-gradient-stops));--tw-gradient-from: #4f46e5;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(79, 70, 229, 0));--tw-gradient-to: #6366f1;opacity:1}.handle-wrapper{position:absolute;opacity:.8;height:60px;width:60px;display:flex;align-items:center;justify-content:center}.layer-circle>.shape{height:100%;width:100%;border-radius:100%;background-image:linear-gradient(to top,var(--tw-gradient-stops));--tw-gradient-from: #6366f1;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(99, 102, 241, 0));--tw-gradient-to: #a5b4fc;opacity:.1}.layer-circle .handle-wrapper:nth-child(1){top:0;left:50%;transform:translate(-50%,-50%)}.layer-circle .handle-wrapper:nth-child(2){bottom:0;left:50%;transform:translate(-50%,50%)}.layer-triangle>.shape{display:inline-block;height:0;width:0;border-right:12em solid transparent;border-bottom:24em solid rgba(99,102,241,.1);border-left:12em solid transparent}.layer-triangle .handle-wrapper:nth-child(1){top:0;left:50%;transform:translate(-50%,-50%)}.layer-triangle .handle-wrapper:nth-child(2){bottom:0;right:0;transform:translate(50%,50%)}.layer-triangle .handle-wrapper:nth-child(3){bottom:0;left:0;transform:translate(-50%,50%)}.layer-square>.shape{height:100%;width:100%;background-image:linear-gradient(to top,var(--tw-gradient-stops));--tw-gradient-from: #6366f1;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(99, 102, 241, 0));--tw-gradient-to: #a5b4fc;opacity:.1}.layer-square .handle-wrapper:nth-child(1){top:0;left:0;transform:translate(-50%,-50%)}.layer-square .handle-wrapper:nth-child(2){top:0;right:0;transform:translate(50%,-50%)}.layer-square .handle-wrapper:nth-child(3){bottom:0;right:0;transform:translate(50%,50%)}.layer-square .handle-wrapper:nth-child(4){bottom:0;left:0;transform:translate(-50%,50%)}.handle{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.handle:after{position:absolute;content:"";width:20px;height:20px;z-index:1}@media (min-width: 640px){.sm\\:-top-5{top:-1.25rem}.sm\\:-right-5{right:-1.25rem}.sm\\:col-span-4{grid-column:span 4 / span 4}.sm\\:col-span-6{grid-column:span 6 / span 6}.sm\\:col-span-8{grid-column:span 8 / span 8}.sm\\:col-span-12{grid-column:span 12 / span 12}.sm\\:my-8{margin-top:2rem;margin-bottom:2rem}.sm\\:mt-5{margin-top:1.25rem}.sm\\:mt-16{margin-top:4rem}.sm\\:mt-24{margin-top:6rem}.sm\\:mt-72{margin-top:18rem}.sm\\:ml-6{margin-left:1.5rem}.sm\\:block{display:block}.sm\\:inline-block{display:inline-block}.sm\\:hidden{display:none}.sm\\:h-10{height:2.5rem}.sm\\:h-40{height:10rem}.sm\\:h-auto{height:auto}.sm\\:h-screen{height:100vh}.sm\\:w-10{width:2.5rem}.sm\\:w-40{width:10rem}.sm\\:w-full{width:100%}.sm\\:min-w-40{min-width:10rem}.sm\\:max-w-40{max-width:10rem}.sm\\:max-w-xl{max-width:36rem}.sm\\:max-w-2xl{max-width:42rem}.sm\\:max-w-7xl{max-width:80rem}.sm\\:translate-y-0{--tw-translate-y: 0px}.sm\\:scale-95{--tw-scale-x: .95;--tw-scale-y: .95}.sm\\:scale-100{--tw-scale-x: 1;--tw-scale-y: 1}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.sm\\:gap-12{gap:3rem}.sm\\:p-0{padding:0}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:align-middle{vertical-align:middle}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-5xl{font-size:3rem;line-height:1}.sm\\:text-7xl{font-size:4.5rem;line-height:1}}@media (min-width: 768px){.md\\:col-span-2{grid-column:span 2 / span 2}.md\\:col-span-3{grid-column:span 3 / span 3}.md\\:mt-0{margin-top:0}.md\\:ml-4{margin-left:1rem}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:flex-shrink-0{flex-shrink:0}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-center{justify-content:center}.md\\:gap-28{gap:7rem}.md\\:gap-y-0{row-gap:0px}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-5xl{font-size:3rem;line-height:1}}@media (min-width: 1024px){.lg\\:col-span-1{grid-column:span 1 / span 1}.lg\\:my-0{margin-top:0;margin-bottom:0}.lg\\:grid{display:grid}.lg\\:h-full{height:100%}.lg\\:w-2\\/3{width:66.666667%}.lg\\:max-w-3xl{max-width:48rem}.lg\\:max-w-5xl{max-width:64rem}.lg\\:max-w-7xl{max-width:80rem}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:gap-8{gap:2rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:py-16{padding-top:4rem;padding-bottom:4rem}.lg\\:text-7xl{font-size:4.5rem;line-height:1}.lg\\:text-8xl{font-size:6rem;line-height:1}}@media (min-width: 1280px){.xl\\:mt-0{margin-top:0}.xl\\:inline{display:inline}.xl\\:grid{display:grid}.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.xl\\:gap-8{gap:2rem}}\n',
  document.head.appendChild(r),System.register(["./vendor-legacy.dd94a3bd.js"],(function(){
    "use strict";
    var r,o,i;
    return{
      setters:[function(t){
        r=t.m,o=t.c,i=t.a
      }],execute:function(){
        window.Components={},window.Components.listbox=function(r){
          var o,i,a;return function(r){
            for(var o=1;o<arguments.length;o++){
              var i=null!=arguments[o]?arguments[o]:{};o%2?t(Object(i),!0).forEach((function(t){
                e(r,t,i[t])
              })):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){
                Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(i,t))
              }))
            }return r
          }((i={
            init:function(){
              var t=this;
              this.optionCount=this.$refs.listbox.children.length,console.log("optionCount"+this.optionCount),this.$watch("activeIndex",(function(e){
                t.open&&(null!==t.activeIndex?t.activeDescendant=t.$refs.listbox.children[t.activeIndex].id:t.activeDescendant="")
              }))
            },activeDescendant:null,optionCount:5,open:!1,activeIndex:null,selectedIndex:0,get active(){
              return this.items[this.activeIndex]
            }
          },(a={})[o=r.modelName||"selected"]=a[o]||{},a[o].get=function(){
            return this.items[this.selectedIndex]
          },e(i,"choose",(function(t){
            this.selectedIndex=t,this.open=!1,console.log("selectedIndex (choose):"+this.selectedIndex)
          })),e(i,"onButtonClick",(function(){
            var t=this;
            this.open||(this.activeIndex=this.selectedIndex,this.open=!0,this.$nextTick((function(){
              t.$refs.listbox.focus(),t.$refs.listbox.children[t.activeIndex].scrollIntoView({block:"nearest"})
            })))
          })),e(i,"onOptionSelect",(function(){
            null!==this.activeIndex&&(this.selectedIndex=this.activeIndex),this.open=!1,this.$refs.button.focus()
          })),e(i,"onEscape",(function(){
            this.open=!1,this.$refs.button.focus()
          })),e(i,"onArrowUp",(function(){
            this.activeIndex=this.activeIndex-1<0?this.optionCount-1:this.activeIndex-1,this.$refs.listbox.children[this.activeIndex].scrollIntoView({block:"nearest"}),console.log("activeIndex (onarrowup):"+this.activeIndex)
          })),e(i,"onArrowDown",(function(){
            this.activeIndex=this.activeIndex+1>this.optionCount-1?0:this.activeIndex+1,this.$refs.listbox.children[this.activeIndex].scrollIntoView({block:"nearest"}),console.log("activeIndex (onarrowdown):"+this.activeIndex)
          })),function(t,e){
            for(var r in e)(a=e[r]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,r,a);
            if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),i=0;i<o.length;i++){
              var a,n=o[i];
              (a=e[n]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,n,a)
            }
          }(i,a),i),r)
        },window.Components.dropdown=function(){
          var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1};
          return{
            init:function(){
              var t=this;
              this.items=Array.from(this.$el.querySelectorAll('[role="menuitem"]')),this.$watch("open",(function(){
                t.open&&(t.activeIndex=-1)
              }))
            },activeDescendant:null,activeIndex:null,items:null,open:t.open,focusButton:function(){
              this.$refs.button.focus()
            },onButtonClick:function(){
              var t=this;
              this.open=!this.open,this.open&&this.$nextTick((function(){
                t.$refs["dropdown-items"].focus()
              }))
            },onButtonEnter:function(){
              var t=this;
              this.open=!this.open,this.open&&(this.activeIndex=0,this.activeDescendant=this.items[this.activeIndex].id,this.$nextTick((function(){
                t.$refs["dropdown-items"].focus()
              })))
            },onArrowUp:function(){
              if(!this.open)return this.open=!0,this.activeIndex=this.items.length-1,void(this.activeDescendant=this.items[this.activeIndex].id);
              0!==this.activeIndex&&(this.activeIndex=-1===this.activeIndex?this.items.length-1:this.activeIndex-1,this.activeDescendant=this.items[this.activeIndex].id)
            },onArrowDown:function(){
              if(!this.open)return this.open=!0,this.activeIndex=0,void(this.activeDescendant=this.items[this.activeIndex].id);
              this.activeIndex!==this.items.length-1&&(this.activeIndex=this.activeIndex+1,this.activeDescendant=this.items[this.activeIndex].id)
            },onClickAway:function(t){
              if(this.open){
                var e=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(t){
                  return"".concat(t,":not([tabindex='-1'])")
                })).join(",");
                this.open=!1,t.target.closest(e)||this.focusButton()
              }
            }
          }
        },window.Components.popover=function(){
          var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.open,r=void 0!==e&&e,o=t.focus,i=void 0!==o&&o,a=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(t){
            return"".concat(t,":not([tabindex='-1'])")
          })).join(",");
          return{__type:"popover",open:r,init:function(){
            var t=this;
            i&&this.$watch("open",(function(e){
              e&&t.$nextTick((function(){
                !function(t){
                  var e=Array.from(t.querySelectorAll(a));
                  !function t(r){
                    void 0!==r&&(r.focus({preventScroll:!0}),document.activeElement!==r&&t(e[e.indexOf(r)+1]))
                  }(e[0])
                }(t.$refs.panel)
              }))
            }));
            window.addEventListener("focus",(function e(r){
              if(document.body.contains(t.$el)){
                var o=i?t.$refs.panel:t.$el;
                if(t.open&&r.target instanceof Element&&!o.contains(r.target)){
                  for(var a=t.$el;a.parentNode;)if((a=a.parentNode).__x instanceof t.constructor){
                    if("popoverGroup"===a.__x.$data.__type)
                      return;
                    if("popover"===a.__x.$data.__type)
                      break
                  }t.open=!1
                }
              }else window.removeEventListener("focus",e,!0)
            }),!0)
          },onEscape:function(){
            this.open=!1,this.restoreEl&&this.restoreEl.focus()
          },onClosePopoverGroup:function(t){
            t.detail.contains(this.$el)&&(this.open=!1)
          },toggle:function(t){
            this.open=!this.open,this.open?this.restoreEl=t.currentTarget:this.restoreEl&&this.restoreEl.focus()
          }
        }
      },window.Components.radioGroup=function(){
        var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.initialCheckedIndex,r=void 0===e?0:e;
        return{
          value:void 0,active:void 0,init:function(){
            var t,e=this,o=Array.from(this.$el.querySelectorAll("input"));
            this.value=null===(t=o[r])||void 0===t?void 0:t.value;for(var i=function(){
              var t=n[a];
              t.addEventListener("change",(function(){e.active=t.value})),t.addEventListener("focus",(function(){e.active=t.value}))
            },a=0,n=o;
            a<n.length;a++)i();
            window.addEventListener("focus",(function(){
              console.log("Focus change"),o.includes(document.activeElement)||(console.log("HIT"),e.active=void 0)}),!0)
          }
        }
      },window.Components.menu=function(){
        var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1};
        return{
          init:function(){
            var t=this;this.items=Array.from(this.$el.querySelectorAll('[role="menuitem"]')),this.$watch("open",(function(){
              t.open&&(t.activeIndex=-1)
            }))
          },activeDescendant:null,activeIndex:null,items:null,open:t.open,focusButton:function(){
            this.$refs.button.focus()
          },onButtonClick:function(){
            var t=this;
            this.open=!this.open,this.open&&this.$nextTick((function(){
              t.$refs["menu-items"].focus()
            }))
          },onButtonEnter:function(){
            var t=this;
            this.open=!this.open,this.open&&(this.activeIndex=0,this.activeDescendant=this.items[this.activeIndex].id,this.$nextTick((function(){
              t.$refs["menu-items"].focus()
            })))
          },onArrowUp:function(){
            if(!this.open)return this.open=!0,this.activeIndex=this.items.length-1,void(this.activeDescendant=this.items[this.activeIndex].id);
            0!==this.activeIndex&&(this.activeIndex=-1===this.activeIndex?this.items.length-1:this.activeIndex-1,this.activeDescendant=this.items[this.activeIndex].id)
          },onArrowDown:function(){
            if(!this.open)return this.open=!0,this.activeIndex=0,void(this.activeDescendant=this.items[this.activeIndex].id);
            this.activeIndex!==this.items.length-1&&(this.activeIndex=this.activeIndex+1,this.activeDescendant=this.items[this.activeIndex].id)
          },onClickAway:function(t){
            if(this.open){
              var e=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(t){
                return"".concat(t,":not([tabindex='-1'])")
              })).join(",");
              this.open=!1,t.target.closest(e)||this.focusButton()
            }
          }
        }
      },window.Components.popoverGroup=function(){
        return{
          __type:"popoverGroup",init:function(){
            var t=this;
            window.addEventListener("focus",(function e(r){
              document.body.contains(t.$el)?r.target instanceof Element&&!t.$el.contains(r.target)&&window.dispatchEvent(new CustomEvent("close-popover-group",{
                detail:t.$el
              })):window.removeEventListener("focus",e,!0)
            }),!0)
          }
        }
      },window.Components.popover=function(){
          var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.open,r=void 0!==e&&e,o=t.focus,i=void 0!==o&&o,a=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(t){
            return"".concat(t,":not([tabindex='-1'])")
          })).join(",");
          return{
            __type:"popover",open:r,init:function(){
              var t=this;
              i&&this.$watch("open",(function(e){
                e&&t.$nextTick((function(){
                  !function(t){
                    var e=Array.from(t.querySelectorAll(a));
                    !function t(r){
                      void 0!==r&&(r.focus({preventScroll:!0}),document.activeElement!==r&&t(e[e.indexOf(r)+1]))
                    }(e[0])
                  }(t.$refs.panel)
                }))
              }));
              window.addEventListener("focus",(function e(r){
                if(document.body.contains(t.$el)){
                  var o=i?t.$refs.panel:t.$el;
                  if(t.open&&r.target instanceof Element&&!o.contains(r.target)){
                    for(var a=t.$el;a.parentNode;)if((a=a.parentNode).__x instanceof t.constructor){
                      if("popoverGroup"===a.__x.$data.__type)return;
                      if("popover"===a.__x.$data.__type)break
                    }t.open=!1
                  }
                }else window.removeEventListener("focus",e,!0)
              }),!0)
            },onEscape:function(){
              this.open=!1,this.restoreEl&&this.restoreEl.focus()
            },onClosePopoverGroup:function(t){
              t.detail.contains(this.$el)&&(this.open=!1)
            },toggle:function(t){
              this.open=!this.open,this.open?this.restoreEl=t.currentTarget:this.restoreEl&&this.restoreEl.focus()
            }
          }
        },window.Alpine=r,r.store("listboxData",{
          modelName:"selected",open:!1,selectedIndex:0,activeIndex:0,items:[{
            id:0,name:"-- Quel est votre enjeu ? --",url:"#"
          },{
            id:1,name:"Améliorer la cybersécurité",url:"./zero-trust.html"
          },{
            id:2,name:"Bénéficier d'un réseau performant et sécurisé",url:"./entreprise-networking.html"
          },{
            id:3,name:"Intégrer des services collaboratifs",url:"./digital-workspace.html"
          }]
        },!0),r.start();
        var a=document.querySelector("[data-confetti]");
        void 0!==a&&null!=a&&a.addEventListener("click",(function(t){
          o(a,{
            colors:["#6366F1","#22D3EE","#FDE68A","#C084FC","#86EFAC"],angle:90,spread:100,startVelocity:50,elementCount:30,width:"20px",height:"20px",perspective:"",duration:3e3,stagger:0,dragFriction:.1
          })
        }));
        var n=document.querySelector(".use-animate");
        if(void 0!==n&&null!=n){
          function t(t,e,r,o){
            new IntersectionObserver((function(o,i){
              var a=o[0];
              a.isIntersecting?e&&"function"==typeof e&&e(t,a):r&&"function"==typeof r&&r(t,a)
            }),{rootMargin:o||"-1%"}).observe(t)
          }!function(){
            var e=document.querySelectorAll(".layer"),r=["easeInOutQuad"];
            i.set(".layer",{scale:0,rotate:"-45deg"}),i.set(".handle",{scale:0,rotate:"-90deg"}),i.set(".handle > *",{scale:0}),i.set(".layer .shape",{rotate:"-45deg",scale:0});
            for(var o=i.timeline({
              duration:400,loop:!0,easing:function(){
                return r[i.random(0,r.length-2)]
              }
            }),a=0;a<e.length;a++){
              var n=e[a].getAttribute("data-target-keyword"),s=document.querySelectorAll(".keywords-need > ."+n),l=document.querySelectorAll(".keywords-challenge > ."+n);
              o.add({
                targets:e[a],scale:1,rotate:"0deg"
              },"+=0").add({
                delay:0,scale:1,targets:e[a].querySelector(".shape"),rotate:"0deg"
              },"+=0").add({
                targets:e[a].querySelectorAll(".handle"),duration:500,scale:.5,rotate:"-45deg",endDelay:1500
              },"+=0").add({
                targets:s,duration:250,color:function(t,e){
                  return t.getAttribute("data-color")
                }
              },"-=2500").add({
                targets:l,duration:250,color:function(t,e){
                  return t.getAttribute("data-color")
                }
              },"+=0").add({
                targets:e[a].querySelectorAll([".handle"]),duration:250,scale:1,rotate:"0deg"
              },"+=0").add({
                targets:e[a].querySelectorAll([".handle > *"]),duration:150,scale:1,rotate:"0deg",endDelay:2e3
              },"+=0").add({
                targets:e[a].querySelectorAll(".handle"),duration:350,rotate:"45deg",scale:0
              },"+=0").add({
                targets:[s,l],color:"rgbA(255,255,255,0.4)"
              },"+=0").add({
                targets:e[a].querySelector(".shape"),scale:0,rotate:"45deg"
              },"+=0").add({
                targets:e[a],scale:0
              },"+=0")
            }t(e[0],o.play,o.pause)
          }(),function(){
            var e=document.querySelectorAll(".transform-progress"),r=["easeInOutQuad"];
            function o(t){
              for(var e=[],r=0;r<30;r++)e.push({value:t});
              return e
            }function a(e){
              var n=i.timeline({
                targets:e,duration:function(){
                  return i.random(2e3,4e3)
                },easing:function(){
                  return r[i.random(0,r.length-2)]
                },complete:function(t){
                  a(t.animatables[0].target)
                }
              }).add({
                scaleY:o((function(t){
                  return i.random(10,100)/100
                }))
              },0);
              t(e,n.play,n.pause)
            }for(var n=0;n<e.length;n++)a(e[n])
          }()
        }
      }
    }
  }))
}();
