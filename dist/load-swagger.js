function loadSwagger(swaggerFile) {
    // // Destroy the existing Swagger UI instance if it exists
    // if (window.ui) {
    //     window.ui.destroy();
    // }
    console.log(swaggerFile)
    // Load the new Swagger document
    window.ui = SwaggerUIBundle({
        url: swaggerFile,
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