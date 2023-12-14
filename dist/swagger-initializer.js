window.onload = function () {
  // Variable to store the Swagger document URL
  // var swaggerUrl = "pet_store.yaml"; // Default Swagger document

  // Function to load Swagger document dynamically
  function loadSwagger() {
    // Destroy the existing Swagger UI instance if it exists
    if (window.ui) {
      window.ui.destroy();
    }

    // Load the Swagger document based on the dynamic URL
    window.ui = SwaggerUIBundle({
      url: swaggerUrl,
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    });
  }

  // Initial load of Swagger UI
  loadSwagger();

  //<editor-fold desc="Changeable Configuration Block">

  // Example: Set a different Swagger document URL based on user interaction
  // This could be done in response to a button click or any other user action
  document.getElementById("changeSwaggerButton").addEventListener("click", function () {
    swaggerUrl = "another_swagger.yaml";
    loadSwagger();
  });

  //</editor-fold>
};
