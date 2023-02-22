(function($) {

	$.fn.timeline = function() {
		let selectors = {
			id: $(this),
			item: $(this).find(".timeline-item"),
			activeClass: "timeline-item--active",
			img: ".timeline-img"
		};
		selectors.item.eq(0).addClass(selectors.activeClass);
		selectors.id.css(
			"background-image",
			"url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
		);

		let itemLength = selectors.item.length; //En este caso 6
		let count = 0;

		$(".modal-view").scroll(function() { //Antes window
			count++;
			let max,min;
			let pred = 50; // Posicion predeterminada 
			let pos = $(this).scrollTop();
			// console.log("Posicion inicial de Scroll ", pos);

			selectors.item.each(function(i) {
				min = $(this).offset().top;
				// console.log("Posicion minima ", min);

				max = $(this).height() + min;
				// max = $(this).height() + $(this).offset().top;
				// console.log("Posicion máxima ", max);
				var that = $(this);
				 if(pos >= pred) { // Este caso aplica para scroll de arriba a abajo y viceversa
				 	pred += 250; // Cada que se cambia de imagen se incrementan 250
					selectors.id.css(
						"background-image",
						"url(" + $(this).find(selectors.img).attr("src") + ")"
					);
					selectors.item.removeClass(selectors.activeClass);
					$(this).addClass(selectors.activeClass);
				}
			});
		});
	};
})(jQuery)

$("#timeline-1").timeline(); //Timeline btn conocer más 
$("#timeline-2").timeline(); //Timeline btn nosotros 