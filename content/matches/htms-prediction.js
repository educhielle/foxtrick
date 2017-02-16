'use strict';
/**
 * htms-statistics.js
 * adds some statistics on matches based on HTMS web site info
 * @author taised
 */
////////////////////////////////////////////////////////////////////////////////

// Gauge from http://bernii.github.io/gauge.js/ (15/02/2017)
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=[].slice,q={}.hasOwnProperty,r=function(a,b){function d(){this.constructor=a}for(var c in b)q.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};!function(){var a,b,c,d,e,f,g;for(g=["ms","moz","webkit","o"],c=0,e=g.length;c<e&&(f=g[c],!window.requestAnimationFrame);c++)window.requestAnimationFrame=window[f+"RequestAnimationFrame"],window.cancelAnimationFrame=window[f+"CancelAnimationFrame"]||window[f+"CancelRequestAnimationFrame"];return a=null,d=0,b={},requestAnimationFrame?window.cancelAnimationFrame?void 0:(a=window.requestAnimationFrame,window.requestAnimationFrame=function(c,e){var f;return f=++d,a(function(){if(!b[f])return c()},e),f},window.cancelAnimationFrame=function(a){return b[a]=!0}):(window.requestAnimationFrame=function(a,b){var c,d,e,f;return c=(new Date).getTime(),f=Math.max(0,16-(c-e)),d=window.setTimeout(function(){return a(c+f)},f),e=c+f,d},window.cancelAnimationFrame=function(a){return clearTimeout(a)})}(),String.prototype.hashCode=function(){var a,b,c,d,e;if(b=0,0===this.length)return b;for(c=d=0,e=this.length;0<=e?d<e:d>e;c=0<=e?++d:--d)a=this.charCodeAt(c),b=(b<<5)-b+a,b&=b;return b},o=function(a){var b,c;for(b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),a-=3600*b+60*c,a+="",c+="";c.length<2;)c="0"+c;for(;a.length<2;)a="0"+a;return b=b?b+":":"",b+c+":"+a},m=function(){var a,b,c;return b=1<=arguments.length?p.call(arguments,0):[],c=b[0],a=b[1],k(c.toFixed(a))},n=function(a,b){var c,d,e;d={};for(c in a)q.call(a,c)&&(e=a[c],d[c]=e);for(c in b)q.call(b,c)&&(e=b[c],d[c]=e);return d},k=function(a){var b,c,d,e;for(a+="",c=a.split("."),d=c[0],e="",c.length>1&&(e="."+c[1]),b=/(\d+)(\d{3})/;b.test(d);)d=d.replace(b,"$1,$2");return d+e},l=function(a){return"#"===a.charAt(0)?a.substring(1,7):a},j=function(){function a(a,b){null==a&&(a=!0),this.clear=null==b||b,a&&AnimationUpdater.add(this)}return a.prototype.animationSpeed=32,a.prototype.update=function(a){var b;return null==a&&(a=!1),!(!a&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),b=this.value-this.displayedValue,Math.abs(b/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+b/this.animationSpeed,this.render(),!0)},a}(),e=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return r(b,a),b.prototype.displayScale=1,b.prototype.setTextField=function(a,b){return this.textField=a instanceof i?a:new i(a,b)},b.prototype.setMinValue=function(a,b){var c,d,e,f,g;if(this.minValue=a,null==b&&(b=!0),b){for(this.displayedValue=this.minValue,f=this.gp||[],g=[],d=0,e=f.length;d<e;d++)c=f[d],g.push(c.displayedValue=this.minValue);return g}},b.prototype.setOptions=function(a){return null==a&&(a=null),this.options=n(this.options,a),this.textField&&(this.textField.el.style.fontSize=a.fontSize+"px"),this.options.angle>.5&&(this.options.angle=.5),this.configDisplayScale(),this},b.prototype.configDisplayScale=function(){var a,b,c,d,e;return d=this.displayScale,this.options.highDpiSupport===!1?delete this.displayScale:(b=window.devicePixelRatio||1,a=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=b/a),this.displayScale!==d&&(e=this.canvas.G__width||this.canvas.width,c=this.canvas.G__height||this.canvas.height,this.canvas.width=e*this.displayScale,this.canvas.height=c*this.displayScale,this.canvas.style.width=e+"px",this.canvas.style.height=c+"px",this.canvas.G__width=e,this.canvas.G__height=c),this},b}(j),i=function(){function a(a,b){this.el=a,this.fractionDigits=b}return a.prototype.render=function(a){return this.el.innerHTML=m(a.displayedValue,this.fractionDigits)},a}(),a=function(a){function b(a,b){this.elem=a,this.text=null!=b&&b,this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return r(b,a),b.prototype.displayedValue=0,b.prototype.value=0,b.prototype.setVal=function(a){return this.value=1*a},b.prototype.render=function(){var a;return a=this.text?o(this.displayedValue.toFixed(0)):k(m(this.displayedValue)),this.elem.innerHTML=a},b}(j),b={create:function(b){var c,d,e,f;for(f=[],d=0,e=b.length;d<e;d++)c=b[d],f.push(new a(c));return f}},h=function(a){function b(a){this.gauge=a,this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,b.__super__.constructor.call(this,!1,!1),this.setOptions()}return r(b,a),b.prototype.displayedValue=0,b.prototype.value=0,b.prototype.options={strokeWidth:.035,length:.1,color:"#000000"},b.prototype.setOptions=function(a){return null==a&&(a=null),this.options=n(this.options,a),this.length=2*this.gauge.radius*this.gauge.options.radiusScale*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle},b.prototype.render=function(){var a,b,c,d,e,f,g;return a=this.gauge.getAngle.call(this,this.displayedValue),f=Math.round(this.length*Math.cos(a)),g=Math.round(this.length*Math.sin(a)),d=Math.round(this.strokeWidth*Math.cos(a-Math.PI/2)),e=Math.round(this.strokeWidth*Math.sin(a-Math.PI/2)),b=Math.round(this.strokeWidth*Math.cos(a+Math.PI/2)),c=Math.round(this.strokeWidth*Math.sin(a+Math.PI/2)),this.ctx.fillStyle=this.options.color,this.ctx.beginPath(),this.ctx.arc(0,0,this.strokeWidth,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(d,e),this.ctx.lineTo(f,g),this.ctx.lineTo(b,c),this.ctx.fill()},b}(j),c=function(){function a(a){this.elem=a}return a.prototype.updateValues=function(a){return this.value=a[0],this.maxValue=a[1],this.avgValue=a[2],this.render()},a.prototype.render=function(){var a,b;return this.textField&&this.textField.text(m(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),b=this.value/this.maxValue*100,a=this.avgValue/this.maxValue*100,$(".bar-value",this.elem).css({width:b+"%"}),$(".typical-value",this.elem).css({width:a+"%"})},a}(),g=function(a){function b(a){var c,d;this.canvas=a,b.__super__.constructor.call(this),this.percentColors=null,this.forceUpdate=!0,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),c=this.canvas.clientHeight,d=this.canvas.clientWidth,this.canvas.height=c,this.canvas.width=d,this.gp=[new h(this)],this.setOptions(),this.render()}return r(b,a),b.prototype.elem=null,b.prototype.value=[20],b.prototype.maxValue=80,b.prototype.minValue=0,b.prototype.displayedAngle=0,b.prototype.displayedValue=0,b.prototype.lineWidth=40,b.prototype.paddingTop=.1,b.prototype.paddingBottom=.1,b.prototype.percentColors=null,b.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035},angle:.15,lineWidth:.44,radiusScale:1,fontSize:40,limitMax:!1,limitMin:!1},b.prototype.setOptions=function(a){var c,d,e,f,g;for(null==a&&(a=null),b.__super__.setOptions.call(this,a),this.configPercentColors(),this.extraPadding=0,this.options.angle<0&&(f=Math.PI*(1+this.options.angle),this.extraPadding=Math.sin(f)),this.availableHeight=this.canvas.height*(1-this.paddingTop-this.paddingBottom),this.lineWidth=this.availableHeight*this.options.lineWidth,this.radius=(this.availableHeight-this.lineWidth/2)/(1+this.extraPadding),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),g=this.gp,d=0,e=g.length;d<e;d++)c=g[d],c.setOptions(this.options.pointer),c.render();return this},b.prototype.configPercentColors=function(){var a,b,c,d,e,f,g;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,f=[],c=d=0,e=this.options.percentColors.length-1;0<=e?d<=e:d>=e;c=0<=e?++d:--d)g=parseInt(l(this.options.percentColors[c][1]).substring(0,2),16),b=parseInt(l(this.options.percentColors[c][1]).substring(2,4),16),a=parseInt(l(this.options.percentColors[c][1]).substring(4,6),16),f.push(this.percentColors[c]={pct:this.options.percentColors[c][0],color:{r:g,g:b,b:a}});return f}},b.prototype.set=function(a){var b,c,d,e,f,g,i;if(a instanceof Array||(a=[a]),a.length>this.gp.length)for(c=d=0,g=a.length-this.gp.length;0<=g?d<g:d>g;c=0<=g?++d:--d)b=new h(this),b.setOptions(this.options.pointer),this.gp.push(b);else a.length<this.gp.length&&(this.gp=this.gp.slice(this.gp.length-a.length));for(c=0,e=0,f=a.length;e<f;e++)i=a[e],i>this.maxValue?this.options.limitMax?i=this.maxValue:this.maxValue=i+1:i<this.minValue&&(this.options.limitMin?i=this.minValue:this.minValue=i-1),this.gp[c].value=i,this.gp[c++].setOptions({minValue:this.minValue,maxValue:this.maxValue,angle:this.options.angle});return this.value=Math.max(Math.min(a[a.length-1],this.maxValue),this.minValue),AnimationUpdater.run(this.forceUpdate),this.forceUpdate=!1},b.prototype.getAngle=function(a){return(1+this.options.angle)*Math.PI+(a-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},b.prototype.getColorForPercentage=function(a,b){var c,d,e,f,g,h,i;if(0===a)c=this.percentColors[0].color;else for(c=this.percentColors[this.percentColors.length-1].color,e=f=0,h=this.percentColors.length-1;0<=h?f<=h:f>=h;e=0<=h?++f:--f)if(a<=this.percentColors[e].pct){b===!0?(i=this.percentColors[e-1]||this.percentColors[0],d=this.percentColors[e],g=(a-i.pct)/(d.pct-i.pct),c={r:Math.floor(i.color.r*(1-g)+d.color.r*g),g:Math.floor(i.color.g*(1-g)+d.color.g*g),b:Math.floor(i.color.b*(1-g)+d.color.b*g)}):c=this.percentColors[e].color;break}return"rgb("+[c.r,c.g,c.b].join(",")+")"},b.prototype.getColorForValue=function(a,b){var c;return c=(a-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(c,b)},b.prototype.renderStaticLabels=function(a,b,c,d){var e,f,g,h,i,j,k,l,n,o;for(this.ctx.save(),this.ctx.translate(b,c),e=a.font||"10px Times",j=/\d+\.?\d?/,i=e.match(j)[0],l=e.slice(i.length),f=parseFloat(i)*this.displayScale,this.ctx.font=f+l,this.ctx.fillStyle=a.color||"#000000",this.ctx.textBaseline="bottom",this.ctx.textAlign="center",k=a.labels,g=0,h=k.length;g<h;g++)o=k[g],(!this.options.limitMin||o>=this.minValue)&&(!this.options.limitMax||o<=this.maxValue)&&(n=this.getAngle(o)-3*Math.PI/2,this.ctx.rotate(n),this.ctx.fillText(m(o,a.fractionDigits),0,-d-this.lineWidth/2),this.ctx.rotate(-n));return this.ctx.restore()},b.prototype.render=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;if(n=this.canvas.width/2,d=this.canvas.height*this.paddingTop+this.availableHeight-(this.radius+this.lineWidth/2)*this.extraPadding,a=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",k=this.radius*this.options.radiusScale,this.options.staticLabels&&this.renderStaticLabels(this.options.staticLabels,n,d,k),this.options.staticZones){for(this.ctx.save(),this.ctx.translate(n,d),this.ctx.lineWidth=this.lineWidth,l=this.options.staticZones,e=0,g=l.length;e<g;e++)o=l[e],j=o.min,this.options.limitMin&&j<this.minValue&&(j=this.minValue),i=o.max,this.options.limitMax&&i>this.maxValue&&(i=this.maxValue),this.ctx.strokeStyle=o.strokeStyle,this.ctx.beginPath(),this.ctx.arc(0,0,k,this.getAngle(j),this.getAngle(i),!1),this.ctx.stroke();this.ctx.restore()}else void 0!==this.options.customFillStyle?b=this.options.customFillStyle(this):null!==this.percentColors?b=this.getColorForValue(this.displayedValue,!0):void 0!==this.options.colorStop?(b=0===this.options.gradientType?this.ctx.createRadialGradient(n,d,9,n,d,70):this.ctx.createLinearGradient(0,0,n,0),b.addColorStop(0,this.options.colorStart),b.addColorStop(1,this.options.colorStop)):b=this.options.colorStart,this.ctx.strokeStyle=b,this.ctx.beginPath(),this.ctx.arc(n,d,k,(1+this.options.angle)*Math.PI,a,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(n,d,k,a,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke();for(this.ctx.translate(n,d),m=this.gp,f=0,h=m.length;f<h;f++)c=m[f],c.update(!0);return this.ctx.translate(-n,-d)},b}(e),d=function(a){function b(a){this.canvas=a,b.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return r(b,a),b.prototype.lineWidth=15,b.prototype.displayedValue=0,b.prototype.value=33,b.prototype.maxValue=80,b.prototype.minValue=0,b.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35,radiusScale:1},b.prototype.getAngle=function(a){return(1-this.options.angle)*Math.PI+(a-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},b.prototype.setOptions=function(a){return null==a&&(a=null),b.__super__.setOptions.call(this,a),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.options.radiusScale*(this.canvas.height/2-this.lineWidth/2),this},b.prototype.set=function(a){return this.value=a,this.value>this.maxValue&&(this.maxValue=1.1*this.value),AnimationUpdater.run()},b.prototype.render=function(){var a,b,c,d,e,f;return a=this.getAngle(this.displayedValue),f=this.canvas.width/2,c=this.canvas.height/2,this.textField&&this.textField.render(this),b=this.ctx.createRadialGradient(f,c,39,f,c,70),b.addColorStop(0,this.options.colorStart),b.addColorStop(1,this.options.colorStop),d=this.radius-this.lineWidth/2,e=this.radius+this.lineWidth/2,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(f,c,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=b,this.ctx.beginPath(),this.ctx.arc(f,c,this.radius,(1-this.options.angle)*Math.PI,a,!1),this.ctx.stroke()},b}(e),f=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return r(b,a),b.prototype.strokeGradient=function(a,b,c,d){var e;return e=this.ctx.createRadialGradient(a,b,c,a,b,d),e.addColorStop(0,this.options.shadowColor),e.addColorStop(.12,this.options._orgStrokeColor),e.addColorStop(.88,this.options._orgStrokeColor),e.addColorStop(1,this.options.shadowColor),e},b.prototype.setOptions=function(a){var c,d,e,f;return null==a&&(a=null),b.__super__.setOptions.call(this,a),f=this.canvas.width/2,c=this.canvas.height/2,d=this.radius-this.lineWidth/2,e=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(f,c,d,e),this},b}(d),window.AnimationUpdater={elements:[],animId:null,addAll:function(a){var b,c,d,e;for(e=[],c=0,d=a.length;c<d;c++)b=a[c],e.push(AnimationUpdater.elements.push(b));return e},add:function(a){return AnimationUpdater.elements.push(a)},run:function(a){var b,c,d,e,f;for(null==a&&(a=!1),b=!0,f=AnimationUpdater.elements,d=0,e=f.length;d<e;d++)c=f[d],c.update(a===!0)&&(b=!1);return b?cancelAnimationFrame(AnimationUpdater.animId):AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run)}},"function"==typeof window.define&&null!=window.define.amd?define(function(){return{Gauge:g,Donut:f,BaseDonut:d,TextRenderer:i}}):"undefined"!=typeof module&&null!=module.exports?module.exports={Gauge:g,Donut:f,BaseDonut:d,TextRenderer:i}:(window.Gauge=g,window.Donut=f,window.BaseDonut=d,window.TextRenderer=i)}).call(this);

Foxtrick.modules['HTMSPrediction'] = {
	MODULE_CATEGORY: Foxtrick.moduleCategories.MATCHES,
	PAGES: ['match'],
	CSS: Foxtrick.InternalPath + 'resources/css/htms-statistics.css',
	NICE: -1,  // before ratings

	copy: function(div) {
		var HTMSClone = div.cloneNode(true);
		var htmstable = HTMSClone.getElementsByTagName('table')[0];
		if (htmstable) {
			// remove empty row and fix some newlines
			htmstable.deleteRow(htmstable.rows.length - 2);
			return '\n' + Foxtrick.util.htMl.getMarkupFromNode(HTMSClone)
				.replace(/\[link=/g, '\n[link=');
		}
		return '';
	},

	insertPrediction: function(doc, targetNode, midfieldLevel, rdefence, cdefence, ldefence,
	                           rattack, cattack, lattack, tactics, tacticsLevel, teams) {

		var module = this;
		var loading = Foxtrick.util.note.createLoading(doc);
		targetNode.appendChild(loading);

		midfieldLevel[0] = midfieldLevel[0] * 4 + 1;
		midfieldLevel[1] = midfieldLevel[1] * 4 + 1;
		rdefence[0] = rdefence[0] * 4 + 1;
		rdefence[1] = rdefence[1] * 4 + 1;
		cdefence[0] = cdefence[0] * 4 + 1;
		cdefence[1] = cdefence[1] * 4 + 1;
		ldefence[0] = ldefence[0] * 4 + 1;
		ldefence[1] = ldefence[1] * 4 + 1;
		rattack[0] = rattack[0] * 4 + 1;
		rattack[1] = rattack[1] * 4 + 1;
		cattack[0] = cattack[0] * 4 + 1;
		cattack[1] = cattack[1] * 4 + 1;
		lattack[0] = lattack[0] * 4 + 1;
		lattack[1] = lattack[1] * 4 + 1;


		//Creating params for link
		var params = '&TAM=' + midfieldLevel[0] + '&TBM=' + midfieldLevel[1];
		params += '&TARD=' + rdefence[0] + '&TBRD=' + rdefence[1];
		params += '&TACD=' + cdefence[0] + '&TBCD=' + cdefence[1];
		params += '&TALD=' + ldefence[0] + '&TBLD=' + ldefence[1];
		params += '&TARA=' + rattack[0] + '&TBRA=' + rattack[1];
		params += '&TACA=' + cattack[0] + '&TBCA=' + cattack[1];
		params += '&TALA=' + lattack[0] + '&TBLA=' + lattack[1];
		if (tactics[0] == 'aow') {
			params += '&TATAC=AOW&TATACLEV=' + tacticsLevel[0];
		}
		if (tactics[0] == 'aim') {
			params += '&TATAC=AIM&TATACLEV=' + tacticsLevel[0];
		}
		if (tactics[0] == 'pressing') {
			params += '&TATAC=PRES&TATACLEV=' + tacticsLevel[0];
		}
		if (tactics[0] == 'ca') {
			params += '&TATAC=CA&TATACLEV=' + tacticsLevel[0];
		}
		if (tactics[0] == 'longshots') {
			params += '&TATAC=LS&TATACLEV=' + tacticsLevel[0];
		}
		if (tactics[1] == 'aow') {
			params += '&TBTAC=AOW&TBTACLEV=' + tacticsLevel[1];
		}
		if (tactics[1] == 'aim') {
			params += '&TBTAC=AIM&TBTACLEV=' + tacticsLevel[1];
		}
		if (tactics[1] == 'pressing') {
			params += '&TBTAC=PRES&TBTACLEV=' + tacticsLevel[1];
		}
		if (tactics[1] == 'ca') {
			params += '&TBTAC=CA&TBTACLEV=' + tacticsLevel[1];
		}
		if (tactics[1] == 'longshots') {
			params += '&TBTAC=LS&TBTACLEV=' + tacticsLevel[1];
		}

		//Inserting the table
		var htmstable = targetNode.appendChild(doc.createElement('table'));
		htmstable.id = 'ft-htmstable';

		//Inserting header
		var lang = Foxtrick.Prefs.getString('htLanguage');
		var h2 = doc.createElement('h2');
		var a = doc.createElement('a');
		a.href = 'http://www.fantamondi.it/HTMS/index.php?lang=' + lang;
		a.textContent = Foxtrick.L10n.getString('HTMSPrediction.title');
		a.target = '_blank';
		h2.appendChild(a);
		htmstable.parentNode.insertBefore(h2, htmstable);

		if (teams) {
			var row = htmstable.insertRow(htmstable.rows.length);
			row.className = 'htms_teams';
			var cell = row.insertCell(0);
			cell.className = 'ch ft-htms-leftcell';
			cell.style.width = '160px';
			cell.textContent = Foxtrick.L10n.getString('HTMSPrediction.team');

			var b = doc.createElement('b');
			b.appendChild(doc.createTextNode(teams[0]));
			cell = row.insertCell(1); cell.appendChild(b); cell.className = 'left';
			cell = row.insertCell(2); cell.className = 'center';
			var b = doc.createElement('b');
			b.appendChild(doc.createTextNode(teams[1]));
			cell = row.insertCell(3); cell.appendChild(b); cell.className = 'right';
		}
		var row = htmstable.insertRow(htmstable.rows.length);
		var cell = row.insertCell(0);
		
		/**************************
		 * Mimimi add-on (part 1) *
		 **************************/
		var mimimiIsChecked = true; // replace by return from check box
		if (mimimiIsChecked)
		{
			cell = row.insertCell(1); cell = row.insertCell(2);
			cell.className = 'center';
			var mimimicanvas = cell.appendChild(doc.createElement('canvas'));
			mimimicanvas.id = 'ft-mimimicanvas';
			mimimicanvas.style.width = '80px';
			cell = row.insertCell(3);
			row = htmstable.insertRow(htmstable.rows.length);
			cell = row.insertCell(0);
		}
		/* End of Mimimi add-on (part 1) */
			
		cell.className = 'ch ft-htms-leftcell';
		cell.style.width = '160px';
		cell.textContent = Foxtrick.L10n.getString('HTMSPrediction.prediction');

		var url = 'http://www.fantamondi.it/HTMS/dorequest.php?action=predict&' + params;
		Foxtrick.load(url).then(function(text) {
			var xml = Foxtrick.parseXML(text);
			if (xml == null)
				return;

			if (loading)
				loading.parentNode.removeChild(loading);

			var htmstable = doc.getElementById('ft-htmstable');
			var row = htmstable.rows[htmstable.rows.length - 1];
			var cell;
			
			var pred1 = xml.getElementsByTagName('T1').item(0).firstChild.nodeValue;
			var pred2 = xml.getElementsByTagName('T2').item(0).firstChild.nodeValue;
			var winprob = xml.getElementsByTagName('S1P').item(0).firstChild.nodeValue;
			var drawprob = xml.getElementsByTagName('SXP').item(0).firstChild.nodeValue;
			var lossprob = xml.getElementsByTagName('S2P').item(0).firstChild.nodeValue;
			if (pred1 == 'NAN') {
				pred1 = 5;
				pred2 = 0;
				winprob = 100;
				drawprob = 0;
				lossprob = 0;
			}
			
			var b = doc.createElement('b');
			b.appendChild(doc.createTextNode(pred1));
			cell = row.insertCell(1); cell.appendChild(b); cell.className = 'left';
			cell = row.insertCell(2); cell.className = 'center';
			
			/**************************
			 * Mimimi add-on (part 2) *
			 **************************/
			if (mimimiIsChecked)
			{
				var b = doc.createElement('b');
				var luckText = 'luck'; // replace by something like Foxtrick.L10n.getString('HTMSPrediction.luck');
				b.appendChild(doc.createTextNode(luckText));
				cell.appendChild(b);
			}
			/* End of Mimimi add-on (part 2) */
			
			var b = doc.createElement('b');
			b.appendChild(doc.createTextNode(pred2));
			cell = row.insertCell(3); cell.appendChild(b); cell.className = 'right';

			var row = htmstable.insertRow(htmstable.rows.length);
			cell = row.insertCell(0);			
			cell = row.insertCell(1);
			cell.setAttribute('colspan', 3);
			var graph = cell.appendChild(doc.createElement('div'));
			graph.className = 'ft-htms-graph';
			var windiv = graph.appendChild(doc.createElement('div'));
			windiv.className = 'htms-bar htms-stats-win';
			windiv.style.width = winprob + '%';
			var drawdiv = graph.appendChild(doc.createElement('div'));
			drawdiv.className = 'htms-bar htms-stats-draw';
			drawdiv.style.width = drawprob + '%';
			var lossdiv = graph.appendChild(doc.createElement('div'));
			lossdiv.className = 'htms-bar htms-stats-loss';
			// use minus to prevent from overall sum exceeding 100%
			// when there is rounding up
			lossdiv.style.width = (100 - parseFloat(winprob) - parseFloat(drawprob)) + '%';
			
			var row = htmstable.insertRow(htmstable.rows.length);
			cell = row.insertCell(0); cell.className = 'ch';
			cell.textContent = Foxtrick.L10n.getString('HTMSPrediction.winDrawLoss');
			cell = row.insertCell(1); cell.textContent = winprob; cell.className = 'left';
			cell = row.insertCell(2); cell.textContent = drawprob; cell.className = 'center';
			cell = row.insertCell(3); cell.textContent = lossprob; cell.className = 'right';
			
			/************************
			 * Mimimi add-on (main) *
			 * @author: educhielle  *
			 * HT: MetalTeck        *
			 ************************/
			
			/* 
			   The Mimimi add-on aims to show if a match result was fair or if luck played a huge role
			   It takes into account the HTMS predictions and the match result, and determine how luck a team was
			   There are three fields:
			   - expected: shows how many points the home team was expected to get from the match
			   - acquired: shows how many points the home team actually got from the match
			   - luck: shows how luck the home team was (the luck parameter varies from -100% to +100%)
			     - -100% means that the home team was very unlucky (and, consequently, the away team very luck)
				 - near 0% means that it was a fair result
				 - +100% means that the home team was very luck (and the away team very unlucky)
				
				The luck parameter is quadratic to emphasize results heavily influenced by randomness
			*/
			if (mimimiIsChecked)
			{
				var goals = Foxtrick.Pages.Match.getResult(doc);
				var homeResult = goals[0];
				var awayResult = goals[1];
				var result = homeResult - awayResult;
				var expected = (3 * parseFloat(winprob) + parseFloat(drawprob)) / 100;
				var acquired = ( result > 0 ? 3 : ( result < 0 ? 0 : 1 ));
				var diff = acquired - expected;
				var luck = Math.round(100 * Math.abs(diff) * diff / 9);
				var luckContent = ( luck > 0 ? "+"+luck+"%" : luck+"%" );
				
				var opts = {
					angle: 0.0, // The span of the gauge arc
					lineWidth: 0.3, // The line thickness
					radiusScale: 1, // Relative radius
					pointer: {
						length: 0.6, // // Relative to gauge radius
						strokeWidth: 0.051, // The thickness
						color: '#000000' // Fill color
					},
					limitMax: true,     // If false, the max value of the gauge will be updated if value surpass max
					limitMin: true,     // If true, the min value of the gauge will be fixed unless you set it manually
					colorStart: '#6FADCF',   // Colors
					colorStop: '#8FC0DA',    // just experiment with them
					strokeColor: '#E0E0E0',  // to see which ones work best for you
					generateGradient: true,
					highDpiSupport: true,     // High resolution support
					percentColors: [[0.0, "#00FF00"], [0.50, "#FFFF00"], [1.00, "#FF0000"]],
					staticZones: [
						{strokeStyle: "#660000", min: -100, max: -95},
						{strokeStyle: "#770000", min: -95, max: -90},
						{strokeStyle: "#880000", min: -90, max: -85},
						{strokeStyle: "#992200", min: -85, max: -80},
						{strokeStyle: "#AA4400", min: -80, max: -75},
						{strokeStyle: "#BB6600", min: -75, max: -70},
						{strokeStyle: "#CC8800", min: -70, max: -65},
						{strokeStyle: "#DDAA00", min: -65, max: -60},
						{strokeStyle: "#EECC00", min: -60, max: -55},
						{strokeStyle: "#FFEE00", min: -55, max: -50},
						{strokeStyle: "#EEFF00", min: -50, max: -45},
						{strokeStyle: "#CCEE00", min: -45, max: -40},
						{strokeStyle: "#AADD00", min: -40, max: -35},
						{strokeStyle: "#88CC00", min: -35, max: -30},
						{strokeStyle: "#66BB00", min: -30, max: -25},
						{strokeStyle: "#44AA00", min: -25, max: -20},
						{strokeStyle: "#229900", min: -20, max: -15},
						{strokeStyle: "#008800", min: -15, max: -10},
						{strokeStyle: "#007700", min: -10, max: -5},
						{strokeStyle: "#006600", min: -5, max: 0},
						{strokeStyle: "#006600", min: 0, max: 5},
						{strokeStyle: "#007700", min: 5, max: 10},
						{strokeStyle: "#008800", min: 10, max: 15},
						{strokeStyle: "#229900", min: 15, max: 20},
						{strokeStyle: "#44AA00", min: 20, max: 25},
						{strokeStyle: "#66BB00", min: 25, max: 30},
						{strokeStyle: "#88CC00", min: 30, max: 35},
						{strokeStyle: "#AADD00", min: 35, max: 40},
						{strokeStyle: "#CCEE00", min: 40, max: 45},
						{strokeStyle: "#EEFF00", min: 45, max: 50},
						{strokeStyle: "#FFEE00", min: 50, max: 55},
						{strokeStyle: "#EECC00", min: 55, max: 60},
						{strokeStyle: "#DDAA00", min: 60, max: 65},
						{strokeStyle: "#CC8800", min: 65, max: 70},
						{strokeStyle: "#BB6600", min: 70, max: 75},
						{strokeStyle: "#AA4400", min: 75, max: 80},
						{strokeStyle: "#992200", min: 80, max: 85},
						{strokeStyle: "#880000", min: 85, max: 90},
						{strokeStyle: "#770000", min: 90, max: 95},
						{strokeStyle: "#660000", min: 95, max: 100}
					]
				};
				var target = document.getElementById('ft-mimimicanvas'); // your canvas element
				var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
				gauge.maxValue = 100; // set max gauge value
				gauge.setMinValue(-100);  // Prefer setter over gauge.minValue = 0
				gauge.animationSpeed = 32; // set animation speed (32 is default value)
				gauge.set(-luck); // set actual value	
			}
			/* End of Mimimi add-on (part 2) */
			
		}).catch(Foxtrick.catch(module));

		var p = doc.createElement('p');
		var a = doc.createElement('a');
		a.appendChild(doc.createTextNode(Foxtrick.L10n.getString('HTMSPrediction.changePrediction')));
		a.href = 'http://www.fantamondi.it/HTMS/index.php?page=predictor&action=showpredict&lang=' +
			lang + params;
		a.target = '_blank';
		p.appendChild(a);

		htmstable.parentNode.insertBefore(p, htmstable.nextSibling);
	},

	run: function(doc) {
		if (Foxtrick.Pages.Match.isPrematch(doc) || Foxtrick.Pages.Match.inProgress(doc))
			return;
		var ratingstable = Foxtrick.Pages.Match.getRatingsTable(doc);
		if (Foxtrick.Pages.Match.isWalkOver(ratingstable))
			return;

		var ratings = Foxtrick.Pages.Match.getRatingsByTeam(ratingstable);
		var midfieldLevel = ratings.mf;
		var rdefence = ratings.rd;
		var cdefence = ratings.cd;
		var ldefence = ratings.ld;
		var rattack = ratings.ra;
		var cattack = ratings.ca;
		var lattack = ratings.la;

		var tacticsData = Foxtrick.Pages.Match.getTacticsByTeam(ratingstable);
		var tactics = tacticsData.tactics;
		var tacticsLevel = tacticsData.level;

		var htmsDiv = Foxtrick.createFeaturedElement(doc, this, 'div');
		htmsDiv.id = 'htmsMatchDivId';
		ratingstable.parentNode.insertBefore(htmsDiv, ratingstable.nextSibling);
		Foxtrick.log(tactics, tacticsLevel);
		this.insertPrediction(doc, htmsDiv, midfieldLevel, rdefence, cdefence, ldefence, rattack,
		                      cattack, lattack, tactics, tacticsLevel);
	}
};
