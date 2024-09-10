const exec = require('child_process').exec;

module.exports = {
  onPreDeploy: function () {
    // Pre-deployment actions (if necessary)
    console.log("Pre-deployment script executed...");
  },

  onPostDeploy: function () {
    // Run npm build
    exec('npm run build', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error during npm build: ${error}`);
        return;
      }
      console.log(`npm build output: ${stdout}`);
      console.error(`npm build errors: ${stderr}`);

      // Restart the app using pm2
      exec('pm2 restart all', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error during pm2 restart: ${error}`);
          return;
        }
        console.log(`pm2 restart output: ${stdout}`);
        console.error(`pm2 restart errors: ${stderr}`);
      });
    });
  }
};
