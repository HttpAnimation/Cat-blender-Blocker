if (window.location.href.indexOf("cat") !== -1 && window.location.href.indexOf("blender") !== -1 && window.location.href.indexOf("github.com/HttpAnimation/Cat-blender-Blocker/tree/main") === -1) {
    window.location.replace(browser.extension.getURL("index.html"));
  }
  