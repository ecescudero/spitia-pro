// firebase-messaging-sw.js — VERSIÓN DE PRUEBAS
// Necesario para que las notificaciones lleguen aunque la app esté cerrada.
// Tiene que vivir en la RAÍZ del dominio (junto a index.html), nunca en una subcarpeta.
// Esto apunta a un proyecto de Firebase SEPARADO del real — solo para pruebas.

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// Mismos datos que en test-index.html — si cambias uno, cambia el otro también.
firebase.initializeApp({
  apiKey: "AIzaSyBMcOkCD9KPp0lhNtw-875dpfrSEw8HnWk",
  projectId: "spitia-ee",
  messagingSenderId: "181665299641",
  appId: "1:181665299641:web:9b12a75b4fee1d6e112f68"
});

const messaging = firebase.messaging();

// Se dispara cuando llega una notificación y la app NO está abierta en primer plano.
messaging.onBackgroundMessage((payload) => {
  const titulo = (payload.notification && payload.notification.title) || "Spitia+ [PRUEBAS]";
  const cuerpo = (payload.notification && payload.notification.body) || "";
  self.registration.showNotification(titulo, {
    body: cuerpo,
    icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/key-round.svg",
    badge: "https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/icons/key-round.svg",
    tag: "spitia-aviso-test",
  });
});
