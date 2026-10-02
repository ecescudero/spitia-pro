// firebase-messaging-sw.js — VERSIÓN DE PRUEBAS
// Necesario para que las notificaciones lleguen aunque la app esté cerrada.
// Tiene que vivir en la RAÍZ del dominio (junto a index.html), nunca en una subcarpeta.
// Esto apunta a un proyecto de Firebase SEPARADO del real — solo para pruebas.

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// Mismos datos que en test-index.html — si cambias uno, cambia el otro también.
firebase.initializeApp({
  apiKey: "TU_API_KEY_DE_PRUEBAS",
  projectId: "TU_PROJECT_ID_DE_PRUEBAS",
  messagingSenderId: "TU_SENDER_ID_DE_PRUEBAS",
  appId: "TU_APP_ID_DE_PRUEBAS"
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
