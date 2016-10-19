const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    var win = new BrowserWindow({ width: 1000, height: 900 })
    win.loadURL(`file://${__dirname}/index.html`)
});
