const fs = require('fs');
const path = require('path');

// Update the path to the correct routes directory
const routesDir = path.join(__dirname, '../client/app/routes');

// A function to convert dynamic routes like [id].tsx into a list of example URLs
function generateDynamicUrls(file) {
  // If the file has dynamic parameters like [id], replace with some example values
  const dynamicRouteRegex = /\[([^\]]+)\]/g;
  let dynamicUrl = file.replace(dynamicRouteRegex, ':$1'); // Convert [id] to :id
  return [`/${dynamicUrl}`];
}

fs.readdir(routesDir, (err, files) => {
  if (err) {
    console.error('Error reading routes directory:', err);
    return;
  }

  const routePaths = files
    .filter((file) => file.endsWith('.tsx')) // Filter only .tsx files
    .flatMap((file) => {
      const routePath = file.replace(/\.(tsx)$/, ''); // Remove the .tsx extension
      if (routePath.includes('[')) {
        // If the route contains dynamic parameters like [id]
        return generateDynamicUrls(routePath);
      }
      return [`/${routePath}`]; // Static routes
    });

  // Write the collected paths to a JSON file
  const outputFilePath = path.join(__dirname, '../client/urls.json');
  fs.writeFileSync(outputFilePath, JSON.stringify(routePaths, null, 2)); // Save as a well-formatted JSON
  console.log('Paths written to urls.json:', routePaths);
});
