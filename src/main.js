const {
	app,
	BrowserWindow,
	globalShortcut,
	Menu
} = require('electron');

let win;

function createWindow() {

	win = new BrowserWindow({
		useContentSize: true,
		resizable: false,
		webPreferences: {
			// devTools: true
		}
	});

	const template = [
		{
			label: 'File',
			submenu: [
				{
					label: 'Exit',
					accelerator: 'CmdOrCtrl+C',
					click(item, focusedWindow) {
						if(focusedWindow) {
							focusedWindow.close();
						}
					}
				}
			]
		},
		{
			label: 'View',
			submenu: [
				{
					label: "Reload",
					accelerator: 'CmdOrCtrl+R',
					click(item, focusedWindow) {
						if(focusedWindow) {
							focusedWindow.reload();
						}
					}
				},
				{
			        label: 'Toggle Developer Tools',
			        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
			        click (item, focusedWindow) {
			          	if (focusedWindow) focusedWindow.webContents.toggleDevTools()
			        }
			     },
			]
		}
	];

	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

	win.loadURL(`file://${__dirname}/index.html`);

	win.on('closed', () => {
		win = null;
	});

	const ret = globalShortcut.register('CommandOrControl+C', () => {
		win.close();
	});

	if(!ret) {
		console.error('Registration failed');
	}
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if(win === null) {
		createWindow();
	}
});

app.on('will-quit', () => {
	globalShortcut.unregisterAll();
});
