/************************
 * USE A SERVICE WORKER *
 ************************/ 
if ("serviceWorker" in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            .register("js/serviceworker.js")
            .then(serviceWorker => {
                console.log("Service Worker Lab 04 PWA registered: ", serviceWorker);
            })
            .catch(error => {
                console.error("Error registering the Service Worker  Lab 04 PWA: ", error);
            });
    });
}
