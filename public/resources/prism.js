/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+coffeescript+jade+stylus&plugins=line-numbers+show-language */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],a||l),"Object"!==n.util.type(e[l])||r[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||r[n.util.objId(e[l])]||(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,r)):(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,l=a.elements||document.querySelectorAll(a.selector),i=0;r=l[i++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1],i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var s=t.textContent,u={element:t,language:l,grammar:i,code:s};if(!s||!i)return n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var c=new Worker(n.filename);c.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var l=n.tokenize(e,t);return a.stringify(n.util.encode(l),r)},tokenize:function(e,t){var a=n.Token,r=[e],l=t.rest;if(l){for(var i in l)t[i]=l[i];delete t.rest}e:for(var i in t)if(t.hasOwnProperty(i)&&t[i]){var o=t[i];o="Array"===n.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],c=u.inside,g=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){g&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,b=y+v,k=d.slice(0,y+1),w=d.slice(b+1),_=[p,1];k&&_.push(k);var P=new a(i,c?n.tokenize(m,c):m,h);_.push(P),w&&_.push(w),Array.prototype.splice.apply(r,_)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(t)}}},a=n.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var l={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==l.type&&(l.attributes.spellcheck="true"),e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=(o?" ":"")+s+'="'+(l.attributes[s]||"")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'" '+o+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,l=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",n.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
!function(e){var n=/#(?!\{).+/,t={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:n,string:[/'(?:\\?[^\\])*?'/,{pattern:/"(?:\\?[^\\])*?"/,inside:{interpolation:t}}],keyword:/\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:n,interpolation:t}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\?[\s\S])*?`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},rest:e.languages.javascript}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,alias:"string"},{pattern:/"""[\s\S]*?"""/,alias:"string",inside:{interpolation:t}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/})}(Prism);
!function(e){e.languages.jade={comment:{pattern:/(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,lookbehind:!0},"multiline-script":{pattern:/(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{rest:e.languages.javascript}},filter:{pattern:/(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},"multiline-plain-text":{pattern:/(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0},markup:{pattern:/(^[\t ]*)<.+/m,lookbehind:!0,inside:{rest:e.languages.markup}},doctype:{pattern:/((?:^|\n)[\t ]*)doctype(?: .+)?/,lookbehind:!0},"flow-control":{pattern:/(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,lookbehind:!0,inside:{each:{pattern:/^each .+? in\b/,inside:{keyword:/\b(?:each|in)\b/,punctuation:/,/}},branch:{pattern:/^(?:if|unless|else|case|when|default|while)\b/,alias:"keyword"},rest:e.languages.javascript}},keyword:{pattern:/(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,lookbehind:!0},mixin:[{pattern:/(^[\t ]*)mixin .+/m,lookbehind:!0,inside:{keyword:/^mixin/,"function":/\w+(?=\s*\(|\s*$)/,punctuation:/[(),.]/}},{pattern:/(^[\t ]*)\+.+/m,lookbehind:!0,inside:{name:{pattern:/^\+\w+/,alias:"function"},rest:e.languages.javascript}}],script:{pattern:/(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,lookbehind:!0,inside:{rest:e.languages.javascript}},"plain-text":{pattern:/(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,lookbehind:!0},tag:{pattern:/(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,lookbehind:!0,inside:{attributes:[{pattern:/&[^(]+\([^)]+\)/,inside:{rest:e.languages.javascript}},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,lookbehind:!0,inside:{rest:e.languages.javascript}},"attr-name":/[\w-]+(?=\s*!?=|\s*[,)])/,punctuation:/[!=(),]+/}}],punctuation:/:/}},code:[{pattern:/(^[\t ]*(?:-|!?=)).+/m,lookbehind:!0,inside:{rest:e.languages.javascript}}],punctuation:/[.\-!=|]+/};for(var t="(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+",n=[{filter:"atpl",language:"twig"},{filter:"coffee",language:"coffeescript"},"ejs","handlebars","hogan","less","livescript","markdown","mustache","plates",{filter:"sass",language:"scss"},"stylus","swig"],a={},i=0,r=n.length;r>i;i++){var s=n[i];s="string"==typeof s?{filter:s,language:s}:s,e.languages[s.language]&&(a["filter-"+s.filter]={pattern:RegExp(t.replace("{{filter_name}}",s.filter),"m"),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:e.languages[s.language]}})}e.languages.insertBefore("jade","filter",a)}(Prism);
!function(n){var t={url:/url\((["']?).*?\1\)/i,string:/("|')(?:[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,number:/\b\d+(?:\.\d+)?%?/,"boolean":/\b(?:true|false)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],punctuation:/[{}()\[\];:,]/};t.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:n.util.clone(t)},t.func={pattern:/[\w-]+\([^)]*\).*/,inside:{"function":/^[^(]+/,rest:n.util.clone(t)}},n.languages.stylus={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0},"atrule-declaration":{pattern:/(^\s*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:t}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:t}},statement:{pattern:/(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:t}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:t.interpolation}},rest:t}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,lookbehind:!0,inside:{interpolation:t.interpolation,punctuation:/[{},]/}},func:t.func,string:t.string,interpolation:t.interpolation,punctuation:/[{}()\[\];:.]/}}(Prism);
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(s.test(t.className)||s.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s,"")),s.test(t.className)||(t.className+=" line-numbers");var n,a=e.code.match(/\n(?!$)/g),l=a?a.length+1:1,m=new Array(l+1);m=m.join("<span></span>"),n=document.createElement("span"),n.className="line-numbers-rows",n.innerHTML=m,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}})}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e={css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",yaml:"YAML"};Prism.hooks.add("before-highlight",function(s){var a=s.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var t,i,r=a.getAttribute("data-language")||e[s.language]||s.language.substring(0,1).toUpperCase()+s.language.substring(1),l=a.previousSibling;l&&/\s*\bprism-show-language\b\s*/.test(l.className)&&l.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(l.firstChild.className)?i=l.firstChild:(t=document.createElement("div"),i=document.createElement("div"),i.className="prism-show-language-label",t.className="prism-show-language",t.appendChild(i),a.parentNode.insertBefore(t,a)),i.innerHTML=r}})}}();