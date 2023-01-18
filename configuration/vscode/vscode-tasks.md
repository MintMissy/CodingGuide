# VS Code Tasks

## Compile SASS `launch.json`

```json
{
	"version": "2.0.0",
	"tasks": [
		{
			"label": "Compile SASS",
			"type": "shell",
			"command": "sass style/style.scss style/style.css --watch"
		}
	]
}
```

## Debug brave browser - `launch.json`

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Brave Debug",
			"type": "chrome",
			"request": "launch",
			"url": "http://localhost:4200/",
			"runtimeExecutable": "C:/Program Files/BraveSoftware/Brave-Browser-Beta/Application/brave.exe",
			"userDataDir": false,
			"runtimeArgs": ["--profile-directory=Default"]
		}
	]
}
```
