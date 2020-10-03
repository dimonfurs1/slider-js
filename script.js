const scroll_box=document.getElementById("slider-box");
const item=document.getElementsByClassName("slider-item").length;
const width_of_element=600;
var count_slide=0;
/*button_next.*/
console.log(item);

function slide_next(){
count_slide++;
if(count_slide==item) count_slide=0;
scroll_box.style.cssText=`transform: translateX(-${count_slide*width_of_element}px);`;
}
function slide_prev(){
if(count_slide==0)count_slide=item;
count_slide--;
scroll_box.style.cssText=`transform: translateX(-${count_slide*width_of_element}px);`;

}
