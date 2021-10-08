/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
	
	qselectorallOcultar();
	
	const referenciaItems = [].slice.call(
        document.querySelectorAll('.referencia1')
    );
    referenciaItems.map(function (referenciaItems) {
        referenciaItems.addEventListener('click', () => {
			qselectorallOcultar();
            document.body.querySelector('#permisos').style.display="inline";
        });
    });
	
	const referenciaItems2 = [].slice.call(
        document.querySelectorAll('.referencia2')
    );
    referenciaItems2.map(function (referenciaItems2) {
        referenciaItems2.addEventListener('click', () => {
			qselectorallOcultar();
            document.body.querySelector('#desarrolloMiddle').style.display="inline";
        });
    });
	
	const referenciaItems3 = [].slice.call(
        document.querySelectorAll('.referencia3')
    );
    referenciaItems3.map(function (referenciaItems3) {
        referenciaItems3.addEventListener('click', () => {
			qselectorallOcultar();
            document.body.querySelector('#desarrolloFront').style.display="inline";
        });
    });
	
	const referenciaItems4 = [].slice.call(
        document.querySelectorAll('.referencia4')
    );
    referenciaItems4.map(function (referenciaItems4) {
        referenciaItems4.addEventListener('click', () => {
			qselectorallOcultar();
            document.body.querySelector('#capacidades').style.display="inline";
        });
    });

});

function qselectorallOcultar() {
		var x = document
                .querySelectorAll(".ocultar");
  
            for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
}   

