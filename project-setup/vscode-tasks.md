# VS Code Tasks

## Compile SASS - VS Code Task

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
