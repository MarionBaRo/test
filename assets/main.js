//Fonctions du menu déroulant
//Pour rajouter un élément, rajouter le à la suite dans la listboxData

var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,n,i)=>n in t?e(t,n,{
  enumerable:!0,configurable:!0,writable:!0,value:i
}):t[n]=i;
import{m as s,c as r,a}from"./vendor.js";
!function(){
  const e=document.createElement("link").relList;
  if(!(e&&e.supports&&e.supports("modulepreload"))){
    for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);
    new MutationObserver((e=>{
      for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)
    })).observe(document,{childList:!0,subtree:!0})
  }
  function t(e){
    if(e.ep)
      return;
    e.ep=!0;
    const t=function(e){
      const t={};
      return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t
    }
    (e);
    fetch(e.href,t)
  }
}();
window.Components={},window.Components.listbox=function(e){
  return((e,s)=>{
    for(var r in s||(s={}))n.call(s,r)&&o(e,r,s[r]);
    if(t)for(var r of t(s))i.call(s,r)&&o(e,r,s[r]);
    return e
  })({
    init(){
      this.optionCount=this.$refs.listbox.children.length,console.log("optionCount"+this.optionCount),this.$watch("activeIndex",(e=>{
        this.open&&(null!==this.activeIndex?this.activeDescendant=this.$refs.listbox.children[this.activeIndex].id:this.activeDescendant="")
      }))
    },activeDescendant:null,optionCount:5,open:!1,activeIndex:null,selectedIndex:0,get active(){
      return this.items[this.activeIndex]
    },get[e.modelName||"selected"](){
      return this.items[this.selectedIndex]
    },choose(e){
      this.selectedIndex=e,this.open=!1,console.log("selectedIndex (choose):"+this.selectedIndex)
    },onButtonClick(){
      this.open||(this.activeIndex=this.selectedIndex,this.open=!0,this.$nextTick((()=>{
        this.$refs.listbox.focus(),this.$refs.listbox.children[this.activeIndex].scrollIntoView({block:"nearest"})
      })))
    },onOptionSelect(){
      null!==this.activeIndex&&(this.selectedIndex=this.activeIndex),this.open=!1,this.$refs.button.focus()
    },onEscape(){
      this.open=!1,this.$refs.button.focus()
    },onArrowUp(){
      this.activeIndex=this.activeIndex-1<0?this.optionCount-1:this.activeIndex-1,this.$refs.listbox.children[this.activeIndex].scrollIntoView({block:"nearest"}),console.log("activeIndex (onarrowup):"+this.activeIndex)
    },onArrowDown(){
      this.activeIndex=this.activeIndex+1>this.optionCount-1?0:this.activeIndex+1,this.$refs.listbox.children[this.activeIndex].scrollIntoView({block:"nearest"}),console.log("activeIndex (onarrowdown):"+this.activeIndex)
    }
  },e)
},window.Components.dropdown=function(e={open:!1}){
  return{
    init(){
      this.items=Array.from(this.$el.querySelectorAll('[role="menuitem"]')),this.$watch("open",(()=>{
        this.open&&(this.activeIndex=-1)
      }))
    },activeDescendant:null,activeIndex:null,items:null,open:e.open,focusButton(){
      this.$refs.button.focus()
    },onButtonClick(){
      this.open=!this.open,this.open&&this.$nextTick((()=>{
        this.$refs["dropdown-items"].focus()
      }))
    },onButtonEnter(){
      this.open=!this.open,this.open&&(this.activeIndex=0,this.activeDescendant=this.items[this.activeIndex].id,this.$nextTick((()=>{
        this.$refs["dropdown-items"].focus()
      })))
    },onArrowUp(){
      if(!this.open)
        return this.open=!0,this.activeIndex=this.items.length-1,void(this.activeDescendant=this.items[this.activeIndex].id);
      0!==this.activeIndex&&(this.activeIndex=-1===this.activeIndex?this.items.length-1:this.activeIndex-1,this.activeDescendant=this.items[this.activeIndex].id)
    },onArrowDown(){
      if(!this.open)
        return this.open=!0,this.activeIndex=0,void(this.activeDescendant=this.items[this.activeIndex].id);
      this.activeIndex!==this.items.length-1&&(this.activeIndex=this.activeIndex+1,this.activeDescendant=this.items[this.activeIndex].id)
    },onClickAway(e){
      if(this.open){
        const t=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");
        this.open=!1,e.target.closest(t)||this.focusButton()
      }
    }
  }
},window.Components.popover=function({open:e=!1,focus:t=!1}={}){
  const n=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");
  return{
    __type:"popover",open:e,init(){
      t&&this.$watch("open",(e=>{
        e&&this.$nextTick((()=>{
          !function(e){
            const t=Array.from(e.querySelectorAll(n));
            !function e(n){
              void 0!==n&&(n.focus({preventScroll:!0}),document.activeElement!==n&&e(t[t.indexOf(n)+1]))
            }(t[0])
          }(this.$refs.panel)
        }))
      }));
      let e=n=>{
        if(!document.body.contains(this.$el))
          return void window.removeEventListener("focus",e,!0);
        let i=t?this.$refs.panel:this.$el;
        if(this.open&&n.target instanceof Element&&!i.contains(n.target)){
          let e=this.$el;
          for(;e.parentNode;)if(e=e.parentNode,e.__x instanceof this.constructor){
            if("popoverGroup"===e.__x.$data.__type)
              return;
            if("popover"===e.__x.$data.__type)
              break
          }this.open=!1
        }
      };
      window.addEventListener("focus",e,!0)},onEscape(){
        this.open=!1,this.restoreEl&&this.restoreEl.focus()
      },onClosePopoverGroup(e){
        e.detail.contains(this.$el)&&(this.open=!1)
      },toggle(e){
        this.open=!this.open,this.open?this.restoreEl=e.currentTarget:this.restoreEl&&this.restoreEl.focus()
      }
  }
},window.Components.radioGroup=function({initialCheckedIndex:e=0}={}){
  return{
    value:void 0,active:void 0,init(){
      var t;
      let n=Array.from(this.$el.querySelectorAll("input"));
      this.value=null==(t=n[e])?void 0:t.value;
      for(let e of n)e.addEventListener("change",(()=>{this.active=e.value})),e.addEventListener("focus",(()=>{this.active=e.value}));
      window.addEventListener("focus",(()=>{
        console.log("Focus change"),n.includes(document.activeElement)||(console.log("HIT"),this.active=void 0)
      }),!0)
    }
  }
},window.Components.menu=function(e={open:!1}){
  return{
    init(){
      this.items=Array.from(this.$el.querySelectorAll('[role="menuitem"]')),this.$watch("open",(()=>{this.open&&(this.activeIndex=-1)}))
    },activeDescendant:null,activeIndex:null,items:null,open:e.open,focusButton(){
      this.$refs.button.focus()
    },onButtonClick(){
      this.open=!this.open,this.open&&this.$nextTick((()=>{this.$refs["menu-items"].focus()}))
    },onButtonEnter(){
      this.open=!this.open,this.open&&(this.activeIndex=0,this.activeDescendant=this.items[this.activeIndex].id,this.$nextTick((()=>{
        this.$refs["menu-items"].focus()
      })))
    },onArrowUp(){
      if(!this.open)return this.open=!0,this.activeIndex=this.items.length-1,void(this.activeDescendant=this.items[this.activeIndex].id);
      0!==this.activeIndex&&(this.activeIndex=-1===this.activeIndex?this.items.length-1:this.activeIndex-1,this.activeDescendant=this.items[this.activeIndex].id)
    },onArrowDown(){
      if(!this.open)
        return this.open=!0,this.activeIndex=0,void(this.activeDescendant=this.items[this.activeIndex].id);
      this.activeIndex!==this.items.length-1&&(this.activeIndex=this.activeIndex+1,this.activeDescendant=this.items[this.activeIndex].id)
    },onClickAway(e){
      if(this.open){
        const t=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");this.open=!1,e.target.closest(t)||this.focusButton()
      }
    }
  }
},window.Components.popoverGroup=function(){
  return{
    __type:"popoverGroup",init(){
      let e=t=>{
        document.body.contains(this.$el)?t.target instanceof Element&&!this.$el.contains(t.target)&&window.dispatchEvent(new CustomEvent("close-popover-group",{
          detail:this.$el
        })):window.removeEventListener("focus",e,!0)
      };
      window.addEventListener("focus",e,!0)
    }
  }
},window.Components.popover=function({open:e=!1,focus:t=!1}={}){
  const n=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");
  return{
    __type:"popover",open:e,init(){
      t&&this.$watch("open",(e=>{
        e&&this.$nextTick((()=>{
          !function(e){
            const t=Array.from(e.querySelectorAll(n));
            !function e(n){
              void 0!==n&&(n.focus({
                preventScroll:!0
              }),document.activeElement!==n&&e(t[t.indexOf(n)+1]))
            }(t[0])
          }(this.$refs.panel)
        }))
      }));
      let e=n=>{
        if(!document.body.contains(this.$el))
          return void window.removeEventListener("focus",e,!0);
        let i=t?this.$refs.panel:this.$el;
        if(this.open&&n.target instanceof Element&&!i.contains(n.target)){
          let e=this.$el;
          for(;e.parentNode;)if(e=e.parentNode,e.__x instanceof this.constructor){
            if("popoverGroup"===e.__x.$data.__type)
              return;
            if("popover"===e.__x.$data.__type)
              break}this.open=!1
        }
      };
      window.addEventListener("focus",e,!0)
    },onEscape(){
      this.open=!1,this.restoreEl&&this.restoreEl.focus()
    },onClosePopoverGroup(e){
      e.detail.contains(this.$el)&&(this.open=!1)
    },toggle(e){
      this.open=!this.open,this.open?this.restoreEl=e.currentTarget:this.restoreEl&&this.restoreEl.focus()
    }
  }
},window.Alpine=s,s.store("listboxData",{
  modelName:"selected",open:!1,selectedIndex:0,activeIndex:0,items:[{
    id:0,name:"-- Quel est votre enjeu ? --",url:"#"
  },{
    id:1,name:"Améliorer la cybersécurité",url:"./zero-trust.html"
  },{
    id:2,name:"Bénéficier d'un réseau performant et sécurisé",url:"./entreprise-networking.html"
  },{
    id:3,name:"Intégrer des services collaboratifs",url:"./digital-workspace.html"
  }]
},!0),s.start();
const c=document.querySelector("[data-confetti]");
void 0!==c&&null!=c&&c.addEventListener("click",(function(e){
  r(c,{
    colors:["#6366F1","#22D3EE","#FDE68A","#C084FC","#86EFAC"],angle:90,spread:100,startVelocity:50,elementCount:30,width:"20px",height:"20px",perspective:"",duration:3e3,stagger:0,dragFriction:.1
  })
}));
const d=document.querySelector(".use-animate");
if(void 0!==d&&null!=d){
  let e=function(e,t,n,i){
    new IntersectionObserver((function(i,o){
      let s=i[0];
      s.isIntersecting?t&&"function"==typeof t&&t(e,s):n&&"function"==typeof n&&n(e,s)
    }),{rootMargin:i||"-1%"}).observe(e)
  };
  !function(){
    let t=document.querySelectorAll(".layer"),n=["easeInOutQuad"];
    a.set(".layer",{scale:0,rotate:"-45deg"}),a.set(".handle",{scale:0,rotate:"-90deg"}),a.set(".handle > *",{scale:0}),a.set(".layer .shape",{rotate:"-45deg",scale:0});
    let i=a.timeline({duration:400,loop:!0,easing:function(){return n[a.random(0,n.length-2)]}});
    for(let e=0;e<t.length;e++){
      let n=t[e].getAttribute("data-target-keyword"),o=document.querySelectorAll(".keywords-need > ."+n),s=document.querySelectorAll(".keywords-challenge > ."+n);
      i.add({
        targets:t[e],scale:1,rotate:"0deg"
      },"+=0").add({
        delay:0,scale:1,targets:t[e].querySelector(".shape"),rotate:"0deg"
      },"+=0").add({
        targets:t[e].querySelectorAll(".handle"),duration:500,scale:.5,rotate:"-45deg",endDelay:1500
      },"+=0").add({
        targets:o,duration:250,color:function(e,t){
          return e.getAttribute("data-color")
        }
      },"-=2500").add({
        targets:s,duration:250,color:function(e,t){
          return e.getAttribute("data-color")
        }
      },"+=0").add({
        targets:t[e].querySelectorAll([".handle"]),duration:250,scale:1,rotate:"0deg"
      },"+=0").add({
        targets:t[e].querySelectorAll([".handle > *"]),duration:150,scale:1,rotate:"0deg",endDelay:2e3
      },"+=0").add({
        targets:t[e].querySelectorAll(".handle"),duration:350,rotate:"45deg",scale:0
      },"+=0").add({
        targets:[o,s],color:"rgbA(255,255,255,0.4)"
      },"+=0").add({
        targets:t[e].querySelector(".shape"),scale:0,rotate:"45deg"
      },"+=0").add({
        targets:t[e],scale:0},"+=0")
    }e(t[0],i.play,i.pause)
  }(),function(){
    let t=document.querySelectorAll(".transform-progress"),n=["easeInOutQuad"];
    function i(e){
      let t=[];
      for(let n=0;n<30;n++)t.push({value:e});
      return t
    }function o(t){
      let s=a.timeline({
        targets:t,duration:function(){
          return a.random(2e3,4e3)
        },easing:function(){
          return n[a.random(0,n.length-2)]
        },complete:function(e){
          o(e.animatables[0].target)
        }
      }).add({
        scaleY:i((function(e){
          return a.random(10,100)/100
        }))
      },0);
      e(t,s.play,s.pause)
    }for(let e=0;e<t.length;e++)o(t[e])
  }()
}

