/* =====================================================================
   CONFIGURACIÓN DE FIREBASE  (la usan index.html y cocina.html)
   ---------------------------------------------------------------------
   Mientras esta línea diga "null", la app funciona en MODO LOCAL:
   el pedido y la cocina solo se ven entre sí en el MISMO navegador.

   Para que funcione entre celular del cliente y pantalla de cocina,
   reemplaza "null" por tu configuración de Firebase, así:

   window.YP_CONFIG.firebase = {
     apiKey: "AIza...",
     authDomain: "tu-proyecto.firebaseapp.com",
     databaseURL: "https://tu-proyecto-default-rtdb.firebaseio.com",
     projectId: "tu-proyecto",
     appId: "1:123456789:web:abcdef"
   };
   ===================================================================== */
window.YP_CONFIG = window.YP_CONFIG || {};
window.YP_CONFIG.firebase = null;
