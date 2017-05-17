// Generated on 2013-10-22 using generator-angular 0.4.0
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var gaeWebappPath = '../../gaeMagnetPages/src/main/webapp';

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'template-dist'// gaeWebappPath+'/_templates/lp/bright-theme/lp-clean-1-theme-product-offer-v1/'//'dist'   //'~/dev/src/bower-local/angular-edit-inline/angular-edit-inline-demo/app/magnet-template/dist'//
    };
    try {
        yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
    } catch (e) {}

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            /*styles: {
                files: ['<%= yeoman.app %>/styles/{,*//*}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },*/
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}','<%= yeoman.app %>/styles/{,*/}_*.{scss,sass}'],
                tasks: ['compass']
            },
            /*includes:{
             files: ['<%= yeoman.app %>/index.includes','<%= yeoman.app %>/includes/{,*//*}*.includes'],
             tasks: ['includes']
             },*/
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        autoprefixer: {
            options: ['last 1 version'],
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            noWatch: {
                options: {
                    middleware: function (connect) {
                        return [

                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            options:{force:true},
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js'
            ]
        },
        coffee: {
            options: {
                sourceMap: true,
                sourceRoot: ''
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
         dist: {}
         },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*//*}*.html'],
            css: ['<%= yeoman.dist %>/files/{,*//*}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>'],
                dest:'<%= yeoman.dist %>/files'
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/files'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/files'
                }]
            }
        },
        cssmin: {
            // By default, your `index.html` <!-- Usemin Block --> will take care of
            // minification. This option is pre-configured if you do not wish to use
            // Usemin blocks.
            // dist: {
            //   files: {
            //     '<%= yeoman.dist %>/styles/main.css': [
            //       '.tmp/styles/{,*/}*.css',
            //       '<%= yeoman.app %>/styles/{,*/}*.css'
            //     ]
            //   }
            // }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/yeoman/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                     collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['*.html', 'views/*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>/files',
                    src: [
                        '*.{ico,png,txt}',
                        //'.htaccess',
                        //'bower_components/**/*',
                        'images/{,*/}*.{gif,webp}'

                        //'fonts/*',

                    ]
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'files/*',
                        'template.json'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/files',
                    src: [
                        'generated/*'
                    ]
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>/fonts',
                    dest: '<%= yeoman.dist %>/files',
                    src: [
                        '*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            forInlineHtmlProcess:{
                expand: true,
                cwd: '<%= yeoman.dist %>/files',
                dest: '<%= yeoman.dist %>/forInlineHtmlProcess',
                src: '{,*/}*.css'
            },
            toNewProject:{
                files: [{
                    flatten: false,
                    expand: true,
                    dest:'<%= grunt.option("newTemplateDest") %>',
                    src: ['**/**','! {node_modules/**,.idea/**,.sass-cache/**,.tmp/**,*.iml}'],
                    rename: function(dest, src) {
                        //grunt.log.ok('RENNNAAA='+grunt.option('newTemplateFileRename').toReplace)
                        var ntFNregex = grunt.option('newTemplateFileNameRegExpROne');
                        if(ntFNregex==null){
                            ntFNregex=new RegExp(grunt.option('newTemplateFileRename').toReplace)
                            grunt.option('newTemplateFileNameRegExpROne', ntFNregex);
                        }
                        return dest + src.replace(ntFNregex,grunt.option('newTemplateFileRename').replaceWith);
                    }
                }],
                options: {
                    process: function (content, srcpath) {
                        //INFO !!!!!   if process is not run update with: npm install grunt-contrib-copy  -  callback was renamed not working with old version
                        grunt.log.ok("replacing content in="+srcpath)
                        var ntFNregex = grunt.option('newTemplateFileNameRegExp');
                        if(ntFNregex==null){
                            ntFNregex=new RegExp(grunt.option('newTemplateFileRename').toReplace, 'g')
                            grunt.option('newTemplateFileNameRegExp', ntFNregex);
                        }
                        var ntTNregex = grunt.option('newTemplateNameRegExp');
                        if(ntTNregex==null){
                            ntTNregex=new RegExp(grunt.option('newTemplateNameRename').toReplace, 'g')
                            grunt.option('newTemplateNameRegExp', ntTNregex);
                        }
                        var ntTPregex = grunt.option('newTemplatePathRegExp');
                        if(ntTPregex==null){
                            //grunt.log.ok("RRRRRR="+grunt.option('newTemplatePathRename').replaceWith+'/////////##'+grunt.option('newTemplatePathRename').toReplace)
                            ntTPregex=new RegExp(grunt.option('newTemplatePathRename').toReplace, 'g')
                            grunt.option('newTemplatePathRegExp', ntTPregex);
                        }
                        return content.replace(ntFNregex,grunt.option('newTemplateFileRename').replaceWith).replace(ntTPregex,grunt.option('newTemplatePathRename').replaceWith).replace(ntTNregex,grunt.option('newTemplateNameRename').replaceWith)
                    }
                    ,noProcess: ['**/*.{png,gif,jpg,ico,psd,iml,gzip,otf,eot,svg,ttf,woff}',"**/bower_components/**"]
                }
            },
            copySharedSiteWideCss:{
                expand: true,
                cwd: '<%= yeoman.dist %>/files',
                dest: '<%= yeoman.dist %>/',
                src: '{,*/}*shared.css'
            }
        },
        concurrent: {
            server: [
                'coffee:dist',
                'copy:styles'
            ],
            test: [
                'coffee',
                'copy:styles'
            ],
            dist: [
                'coffee',
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/scripts',
                    src: '*.js',
                    dest: '<%= yeoman.dist %>/scripts'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/files/scripts.js': [
                        '<%= yeoman.dist %>/files/scripts.js'
                    ]
                }
            }
        },
        compass: {
            dist:{
                options: {
                    sassDir: '<%= yeoman.app %>/styles',
                    cssDir: '<%= yeoman.app %>/styles',
                    //imagesDir: '<%= yeoman.app %>/images',
                    //javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/fonts',
                    //importPath: ,
                    relativeAssets: true
                }
            }
        },
        /*includes: {
         files: {
         src: 'index.includes', // Source files
         dest: '<%= yeoman.app %>/index.html', // Destination directory
         flatten: true,
         cwd: '<%= yeoman.app %>',
         options: {
         silent: true,
         banner: ''
         }
         }
         },*/
        replace: {
            css: {
                src: '<%= yeoman.dist %>/files/*.css',             // source files array (supports minimatch)
                //src: '<%= yeoman.dist %>/files/cloud-office-landing-style.css',             // source files array (supports minimatch)
                //dest: '<%= yeoman.dist %>/files/cloud-office-landing-style.css',             // destination directory or file

                overwrite:true,
                replacements: [
                    {
                        from: '../images/',                   // string replacement
                        to: ''
                    },{
                        from: '../files/',                   // string replacement
                        to: ''
                    },{
                        from: '../fonts/',                   // string replacement
                        to: ''
                    }]
            }
            ,html: {
                src: ['<%= yeoman.dist %>/index.html'],             // source files array (supports minimatch)
                dest: '<%= yeoman.dist %>/index-not-optimized.html',             // destination directory or file
                replacements: [
                    {
                        from: 'images/',                   // string replacement
                        to: 'files/'
                    },{
                        from: 'styles/',                   // string replacement
                        to: 'files/'
                    },{
                        from: 'scripts/',                   // string replacement
                        to: 'files/'
                    }]
            },
            replaceForInlineHtmlProcess: {

                overwrite:true,


                src :['<%= yeoman.dist %>/forInlineHtmlProcess/*.css'],
                //dest:'<%= yeoman.dist %>/forInlineHtmlProces1s',

                replacements: [
                    {
                        from: '../images/',                   // string replacement
                        to: 'files/'
                    },{
                        from: '../files/',                   // string replacement
                        to: 'files/'
                    },{
                        from: '../fonts/',                   // string replacement
                        to: 'files/'
                    }]

            }
        },
        processhtml: {
            options: {
                // Task-specific options go here.
            },
            dist: {
                files: {
                    '<%= yeoman.dist %>/index.html': ['<%= yeoman.dist %>/index-not-optimized.html']
                }
            }
        }
    });
    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            //'connect:noWatch:keepalive',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        //"includes",
        'useminPrepare',
        'compass:dist',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'copy:dist',
        'cdnify',
        'ngmin',
        'cssmin',
        'uglify',
        'rev',
        'usemin',
        'copy:forInlineHtmlProcess',
        'replace'
        ,'processhtml'
        ,'copy:copySharedSiteWideCss'
    ]);

    grunt.registerTask('default', [
        //'jshint',
        //'test',
        'build'
    ]);

    var currTemplPath="/lp/bright-theme/lp-clean-1-theme-product-offer-v1"



    grunt.registerTask('publishGae', function() {
        grunt.task.run(['build','publishGaeTemplatesArr'])
    })


    grunt.registerTask('publishGaeTemplatesArr', function(templatePath) {



        if(!templatePath)templatePath=currTemplPath
        if(templatePath==undefined || templatePath==null|| templatePath.length<1){
            grunt.fail.warn('no template path to add',6)
            return
        }

        if(templatePath.indexOf('/')==0)templatePath=templatePath.substr(1)

            var path=gaeWebappPath+'/_templates/templates.json'
            var tempsArr=grunt.file.readJSON(path)
            if(tempsArr.indexOf(templatePath)<0){
                tempsArr.push(templatePath)
                var tempsArrJSON=JSON.stringify(tempsArr)
                grunt.file.write(path,tempsArrJSON)
                grunt.log.ok(templatePath+" added to GAE templates")
            }else{
                grunt.log.ok(templatePath+" already in GAE templates")
            }
    })


    grunt.registerTask('unpublishGae', function(deleteFiles,templatePath) {
        if(!templatePath)templatePath=currTemplPath
        if(templatePath==undefined || templatePath==null|| templatePath.length<1){
            grunt.fail.warn('no template path to add',6)
            return
        }

        if(templatePath.indexOf('/')==0)templatePath=templatePath.substr(1)

            var path=gaeWebappPath+'/_templates/templates.json'
            var tempsArr=grunt.file.readJSON(path)
        var ind = tempsArr.indexOf(templatePath);
        if(ind>0){
                tempsArr.splice(ind,1)
                var tempsArrJSON=JSON.stringify(tempsArr)
                grunt.file.write(path,tempsArrJSON)
                grunt.log.ok(templatePath+" removed from GAE templates")
            }else{
                grunt.log.ok(templatePath+" not found in GAE templates")
            }

        var publishedTemplatePath=gaeWebappPath+'/_templates/'+templatePath
        if(grunt.file.exists(publishedTemplatePath)){
            if(deleteFiles=='true') {
                grunt.file.delete(publishedTemplatePath ,{force:true})
                grunt.log.ok(templatePath+" deleted files")

            }else{
                grunt.log.ok("Files NOT deleted - use 'grunt unpublishGae:true' to delete files on GAE")
            }
        }else{
            grunt.log.ok("DIR not found="+publishedTemplatePath)
        }


    })


    grunt.registerTask('newTemplateInitConfig', function(tempType,tempGroup,tempName) {
        //set new values after copying to old values
        var newTempType=tempType
            if(newTempType=='undefined')newTempType='s'
        var newTempGroup=tempGroup!='undefined'?tempGroup:'noo-rocks'
        if(tempName=='undefined')tempName='big-image-header-post'

        var newTempName=newTempType+'-'+newTempGroup+'-'+tempName
        var newFileNames = newTempType+'_'+newTempGroup+'_'+newTempName;
        var newTemplatesPath = '/'+newTempType+'/'+newTempGroup+'/'+newTempName;
        //grunt.fail.warn('PPP='+(newTemplatesPath),6)

        //grunt.fail.warn('PPP='+(newTempName),6)
        // set old values from prev. new values above or to /tempType/tempGroup/tempName : /lp/bright-theme/lp-clean-1-theme-product-offer-v1

        if(currTemplPath.indexOf('/')==0)currTemplPath=currTemplPath.substr(1)
        var oldPathSpl=currTemplPath.split("/")
        var oldTempType=oldPathSpl[0]//'s'
        var oldTempGroup=oldPathSpl[1]//'blue-rocks'
        var oldTempNamePart = oldPathSpl[2].replace(oldTempType+'-','').replace(oldTempGroup+'-','');
        var oldTempName=oldTempType+'-'+oldTempGroup+'-'+ oldTempNamePart
        var oldFileNames = oldTempType+'_'+oldTempGroup+'_'+oldTempName;
        var oldTemplatesPath = '/'+oldTempType+'/'+oldTempGroup+'/'+oldTempName;


        grunt.option('newTemplateFileRename',{toReplace:oldFileNames,replaceWith: newFileNames});
        grunt.option('newTemplateNameRename',{toReplace:oldTempName,replaceWith:newTempName});
        grunt.option('newTemplatePathRename',{toReplace:oldTemplatesPath,replaceWith:newTemplatesPath});
        var destPath = '../' + newTempName + '/';
        if(grunt.file.exists(destPath)){
            grunt.fail.warn('Directory exists='+destPath,6)
        }
        grunt.option('newTemplateDest', destPath);
    });

    grunt.registerTask('createNew', function(tempType,tempGroup,tempName){
        grunt.task.run('newTemplateInitConfig:'+tempType+':'+tempGroup+':'+tempName,'copy:toNewProject')
    });

    grunt.loadNpmTasks('grunt-processhtml');
};
