/**
 * Created by Administrator on 2017/10/19 0019.
 */
(function(doc,win){
    doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 375 * 50 + 'px';
}(document,window));
window.addEventListener("DOMContentLoaded",init,false);
function init () {
    var mySwiper = new Swiper('.swiper-container',{
        autoplay:2000,
        loop:true,
        effect:'coverflow',
        pagination:".swiper-pagination",
        paginationType:"bullets",
        paginationClickable:true,
        autoplayDisableOnInteraction:false
    });
};