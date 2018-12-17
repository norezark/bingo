const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

const templateMenu = [
	{
		label: 'File',
		submenu: [
			{
				label: 'dev',
				accelerator: 'F12',
				click: (item, focusedWindow) => {
					mainWindow.webContents.openDevTools();
				},
			},
			{
				role: 'quit',
				accelerator: "CmdOrCtrl+Q"
			},
		]
	},
	{
		label: 'View',
		submenu: [
			{
				label: 'Reload',
				accelerator: 'CmdOrCtrl+R',
				click: (item, focusedWindow) => {
					if(focusedWindow) focusedWindow.reload(true);
				}
			},
			{
				type: 'separator',
			},
			{
				role: 'togglefullscreen'
			}
		]
	}
];

const menu = electron.Menu.buildFromTemplate(templateMenu);
electron.Menu.setApplicationMenu(menu);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', function () {
	mainWindow = new BrowserWindow({
		width: 800, height: 600,
		webPreferences: {
			nodeIntegration: false
		},
		frame: false
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
});