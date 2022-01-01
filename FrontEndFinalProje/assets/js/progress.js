var percent1=document.querySelector('.percent1');
 var counta=4;
 var loadinga=setInterval(animatea,30)
 function animatea(){
	 if (counta==95) {
		 clearInterval(loadinga);
	 }
	 else{
		 counta=counta+1;		
		 percent1.textContent=counta+"%";
	 }
 }
 var percent=document.querySelector('.percent');
 var count=4;
 var loading=setInterval(animate,30)
 function animate(){
	 if (count==95) {
		 clearInterval(loading);
	 }
	 else{
		 count=count+1;		
		 percent.textContent=count+"%";
	 }
 }
 var percent1b=document.querySelector('.percent1b');
 var countb=4;
 var loadingb=setInterval(animateb,30)
 function animateb(){
	 if (countb==95) {
		 clearInterval(loadingb);
	 }
	 else{
		 countb=countb+1;		
		 percent1b.textContent=countb+"%";
	 }
 }
 var percentone=document.querySelector('.percentone');
 var count1=4;
 var loading1=setInterval(animateone,35)

 function animateone(){
	 if (count1==80) {
		 clearInterval(loading1);
	 }
	 else{
		 
		 count1=count1+1;		
		 percentone.textContent=count1+"%";
	 }
 }
var percentonea=document.querySelector('.percentonea');
 var count1a=4;
 var loading1a=setInterval(animateonea,35)

 function animateonea(){
	 if (count1a==80 ) {
		 clearInterval(loading1a);
	 }
	 else{
		 
		 count1a=count1a+1;		
		 percentonea.textContent=count1a+"%";
	 }
 }
 var percentoneb=document.querySelector('.percentoneb');
 var count1b=4;
 var loading1b=setInterval(animateoneb,35)

 function animateoneb(){
	 if (count1b==80) {
		 clearInterval(loading1b);
	 }
	 else{
		 
		 count1b=count1b+1;		
		 percentoneb.textContent=count1b+"%";
	 }
 }
var percenttwo=document.querySelector('.percenttwo');
 var count2=4;
 var loading2=setInterval(animatetwo,50)

 function animatetwo(){
	 if (count2==55) {
		 clearInterval(loading2);
	 }
	 else{
	
		 count2=count2+1;
		 percenttwo.textContent=count2+"%";
	 }
 }

 var percenttwoa=document.querySelector('.percenttwoa');
 var count2a=4;
 var loading2=setInterval(animatetwoa,50)

 function animatetwoa(){
	 if (count2a==55) {
		 clearInterval(loading2);
	 }
	 else{
		 count2a=count2a+1;
		 percenttwoa.textContent=count2a+"%";
	 }
 }

 var percenttwob=document.querySelector('.percenttwob');
 var count2b=4;
 var loading2b=setInterval(animatetwob,50)

 function animatetwob(){
	 if (count2b==55) {
		 clearInterval(loading2b);
	 }
	 else{
		 count2b=count2b+1;
		 percenttwob.textContent=count2b+"%";
	 }
 }