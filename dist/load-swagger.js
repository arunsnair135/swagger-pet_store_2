function loadSwagger(swaggerFile) {

    document.getElementById('home-link').style.display = 'block';

    let swaggerLinks = document.getElementsByClassName("swagger-link");
    [...swaggerLinks].forEach(link => {
        link.style.display = 'none';
    });


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