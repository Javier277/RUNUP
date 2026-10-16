// Envuelve index.html (la misma página que se publica como artifact) en un documento
// completo con lo necesario para instalarla en el iPhone como app.
import { readFileSync, writeFileSync, mkdirSync, cpSync } from "node:fs";

const page = readFileSync("index.html", "utf8");
const head = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Sub-20">
<meta name="theme-color" content="#c8381f">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font-family:system-ui,sans-serif}</style>
</head>
<body>
`;
mkdirSync("dist", { recursive: true });
cpSync("public", "dist", { recursive: true });
writeFileSync("dist/index.html", head + page + "\n</body>\n</html>\n");
console.log("dist/index.html listo");
