const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    })
    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

const { clipboard } = require('electron')
clipboard.writeText('Example string', 'selection')
console.log(clipboard.readText('selection'))