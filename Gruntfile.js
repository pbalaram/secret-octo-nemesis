module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        "6to5": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/server.js": "src/server.js"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-6to5");
    grunt.registerTask('default', ['6to5']);
}
