window.onload=function (){
	navChange("nav1", "li", "current");
	navChange("nav2", "a", "current");
	navChange("nav3", "li", "current");
	navChange("nav4", "li", "current");
	navChange("nav5", "a", "current");
	
	
	function navChange(sId, sTagName, sClassName){
		var oNav=document.getElementById(sId);
		var aEle=oNav.getElementsByTagName(sTagName);
		var i;
		var cur=0;
		aEle[cur].className?aEle[cur].className+=" "+sClassName:aEle[cur].className=sClassName;
		for(i=0;i<aEle.length;i++){
			aEle[i].index=i;
			aEle[i].onmouseover=function (){
				for(i=0;i<aEle.length;i++){
					if(aEle[i].className == sClassName){
						aEle[i].className =null; 
					}else if(aEle[i].className.match(new RegExp("(^|\\s)" + sClassName + "(\\s|$)"))){
						aEle[i].className=aEle[i].className.replace((new RegExp("(^|\\s)" + sClassName + "(\\s|$)")),""); 
					}
				}
				this.className?this.className+=" "+sClassName:this.className=sClassName;
			}
			aEle[i].onclick=function (){
				for(i=0;i<aEle.length;i++){
					if(aEle[i].className == sClassName){
						aEle[i].className =null; 
					}else if(aEle[i].className.match(new RegExp("(^|\\s)" + sClassName + "(\\s|$)"))){
						aEle[i].className=aEle[i].className.replace((new RegExp("(^|\\s)" + sClassName + "(\\s|$)")),"");
					}
				}
				this.className?this.className+=" "+sClassName:this.className=sClassName;
				cur=this.index;
			}
			aEle[i].onmouseout=function (){
				for(i=0;i<aEle.length;i++){
					if(this.className == sClassName){
						this.className =null;
					}else if (this.className.match(new RegExp("(^|\\s)" + sClassName + "(\\s|$)"))){
						this.className=this.className.replace((new RegExp("(^|\\s)" + sClassName + "(\\s|$)")),"");
					}
				}
				aEle[cur].className?aEle[cur].className+=" "+sClassName:aEle[cur].className=sClassName;
			}
		}
	}
}