import BrowserWinHandler from './BrowserWinHandler'
const { ipcMain, app } = require('electron')

const winHandler = new BrowserWinHandler({
  height: 600,
  width: 1000,
  autoHideMenuBar: true,
  frame: false,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
  }
})



winHandler.onCreated(_browserWindow => {
  winHandler.loadPage('/');

  ipcMain.on("minimize", (event, data) => {
    _browserWindow.minimize();
  })

  ipcMain.on("maximize", (event, data) => {
    _browserWindow.maximize();
  })

  ipcMain.on("unmaximize", (event, data) => {
    _browserWindow.unmaximize();
  })

  ipcMain.on("close", (event, data) => {
    // _browserWindow.close();
    app.exit()
  })

  // Or load custom url
  // _browserWindow.loadURL('https://google.com')
})

export default winHandler
