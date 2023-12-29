const { app, BrowserWindow } = require('electron')  
const path = require('path')  
const fs = require('fs')  
const { loadPyodide } = require('pyodide')  
  
function createWindow () {  
  let win = new BrowserWindow({  
    width: 800,  
    height: 600,  
    webPreferences: {  
      nodeIntegration: true,  
      contextIsolation: false,  
    }  
  })  
  win.loadURL(path.join(__dirname, 'index.html'))  
}  
  
app.whenReady().then(() => {  
  createWindow()  
  app.on('activate', function () {  
    if (BrowserWindow.getAllWindows().length === 0) createWindow()  
  })  
})