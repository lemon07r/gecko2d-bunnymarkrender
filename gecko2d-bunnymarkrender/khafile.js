let p = new Project("bunnyrender");
p.addSources("Sources");
p.addLibrary("C:\\Users\\Lamim\\AppData\\Roaming\\npm\\node_modules\\gecko2d\\Sources");
p.addAssets('Assets/**', {nameBaseDir: 'Assets', destination: 'assets/{dir}/{name}', name: '{dir}/{name}'});

p.targetOptions.html5.canvasId = "kanvas";
p.targetOptions.html5.scriptName = "game.debug";
p.targetOptions.html5.webgl = true;
p.addDefine("game_name=bunnyrender");
resolve(p);