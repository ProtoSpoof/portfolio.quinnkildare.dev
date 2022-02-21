/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache")

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        runtimeCaching,
<<<<<<< HEAD
=======
        buildExcludes: [/middleware-manifest.json$/],
        sw: '/sw.js'
>>>>>>> 549499cb4a59580598ba2f8e2af2cba7b15e578d
    }
});
