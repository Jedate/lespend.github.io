		var popup_write = document.querySelector(".popup-write-us");
		var write_link = document.querySelector(".contacts-button");	
		var write_close = popup_write.querySelector(".button-close");

		var popup_map = document.querySelector(".popup-map");
		var map_link = document.querySelector(".img-map");	
		var map_close = popup_map.querySelector(".button-close");

		var btn_slide_1 = document.querySelector("#btn_slide_1");
		var btn_slide_2 = document.querySelector("#btn_slide_2");
		var btn_slide_3 = document.querySelector("#btn_slide_3");


		var slide_1 = document.querySelector("#slide-1");
		var slide_2 = document.querySelector("#slide-2");
		var slide_3 = document.querySelector("#slide-3");

		var services_btn_1 = document.querySelector("#services-btn-1");
		var services_btn_2 = document.querySelector("#services-btn-2");
		var services_btn_3 = document.querySelector("#services-btn-3");

		var services_slide_1 = document.querySelector("#services-slide-1");
		var services_slide_2 = document.querySelector("#services-slide-2");
		var services_slide_3 = document.querySelector("#services-slide-3");

		var button_catalog = document.querySelector(".button-catalog")
		var catalog_menu = document.querySelector(".catalog-menu");


		write_link.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup_write.classList.add("popup-show");
		})

		write_close.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup_write.classList.remove("popup-show");
		})

		map_link.addEventListener("click", function() {
			popup_map.classList.add("popup-map-show");
		})

		map_close.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup_map.classList.remove("popup-map-show");
		})

		btn_slide_1.addEventListener("click", function(evt){
			evt.preventDefault();
			btn_slide_1.classList.add("slide-btn-active");
			btn_slide_2.classList.remove("slide-btn-active");
			btn_slide_3.classList.remove("slide-btn-active");

			slide_1.classList.add("show-item");
			slide_2.classList.remove("show-item");
			slide_3.classList.remove("show-item");
		})

		btn_slide_2.addEventListener("click", function(evt){
			evt.preventDefault();
			btn_slide_1.classList.remove("slide-btn-active");
			btn_slide_2.classList.add("slide-btn-active");
			btn_slide_3.classList.remove("slide-btn-active");

			slide_1.classList.remove("show-item");
			slide_2.classList.add("show-item");
			slide_3.classList.remove("show-item");
		})

		btn_slide_3.addEventListener("click", function(evt){
			evt.preventDefault();
			btn_slide_1.classList.remove("slide-btn-active");
			btn_slide_2.classList.remove("slide-btn-active");
			btn_slide_3.classList.add("slide-btn-active");

			slide_1.classList.remove("show-item");
			slide_2.classList.remove("show-item");
			slide_3.classList.add("show-item");
		})

		services_btn_1.addEventListener("click", function(evt){
			evt.preventDefault();
			services_btn_1.classList.add("services-button-active");
			services_btn_2.classList.remove("services-button-active");
			services_btn_3.classList.remove("services-button-active");

			services_slide_1.classList.add("services-slide-show");
			services_slide_2.classList.remove("services-slide-show");
			services_slide_3.classList.remove("services-slide-show");

		})

		services_btn_2.addEventListener("click", function(evt){
			evt.preventDefault();
			services_btn_1.classList.remove("services-button-active");
			services_btn_2.classList.add("services-button-active");
			services_btn_3.classList.remove("services-button-active");

			services_slide_1.classList.remove("services-slide-show");
			services_slide_2.classList.add("services-slide-show");
			services_slide_3.classList.remove("services-slide-show");

		})

		services_btn_3.addEventListener("click", function(evt){
			evt.preventDefault();
			services_btn_1.classList.remove("services-button-active");
			services_btn_2.classList.remove("services-button-active");
			services_btn_3.classList.add("services-button-active");

			services_slide_1.classList.remove("services-slide-show");
			services_slide_2.classList.remove("services-slide-show");
			services_slide_3.classList.add("services-slide-show");

		})

		button_catalog.addEventListener("click", function(evt){
			evt.preventDefault();
			catalog_menu.classList.toggle("catalog-menu-active");
		})