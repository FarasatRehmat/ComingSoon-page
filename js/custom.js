/* Modular fashion.
*	-> For every plugin you make a function and call it.
*/

$(document).ready(function(){
// Code ? When the page finished loading.
	init();

});

function init(){
	// counter();
	// counter1();
 //    slider();
 //    slider1();
    countDown();


}
function countDown(){
    $('.timer').flipTimer({ direction: 'down', date: 'august 10, 2041 16:00:00', callback: function() { alert('times up!'); } });
}