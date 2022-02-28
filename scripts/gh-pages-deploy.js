/* eslint-disable no-console */
const execa = require('@actions/exec');

const fs = require("fs");
(async () => {
  try {
    await execa.exec("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa.exec("npm", ["run", "build"]);
    // await execa("yarn", ["build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa.exec("git", ["--work-tree", folderName, "add", "--all"]);
    await execa.exec("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa.exec("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa.exec("rm", ["-r", folderName]);
    await execa.exec("git", ["checkout", "-f", "main"]);
    await execa.exec("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
