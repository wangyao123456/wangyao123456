// JavaScript Document
//获取非行间样式
function getStyle(obj,sStyle){
     if(obj.currentStyle){
	      var a=obj.currentStyle[sStyle];//IE系列
	 }else{
          var a=getComputedStyle(obj,false)[sStyle];//高级浏览器
	 }

    return a;
};
//随机数
function rnd(n,m){
   return parseInt(Math.random()*(m-n)+n);
};
//数组查重
function findInArr(n,arr){
   for(var i=0;arr.length;i++){
         if(arr[i]==n){
		     return true;//返回结果
		 }
   }
   return false;//循环结束后返回false
};
//把单数变成双数
function toDou(n){
   if(n<10){
       return '0'+n;
   }else{
       return ''+n;
   }
};

//设置样式
function setStyle(name,value){
      return oDiv.style[name]=value;
}


arr.sort(function(n1,n2){
   return n1-n2;//从小到大排序（n2-n1 从大到小排序）
})
//数组求和
function add(a,s,d,f){
return a+s+d+f;//受参数限制
}


function add(){
  var res=0;
  for(var i=0;i<arguments.length;i++){
      res+=argumens[i];
  }

 return res;
}























