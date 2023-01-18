# Npm Configuration

## Npm scripts

```json
{
	"scripts": {
		// Angular start script with proxy
		"start": "ng serve --proxy-config proxy.conf.json",
		// Requires eslint
		// npm install eslint --global.
		// npm init @eslint/config
		"lint": "ng lint",
		// Format project (requires prettier)
		// npm install --save-dev --save-exact prettier
		"format": "prettier --write \"./src/**/*.{ts,css,html,json}\"",
		// Lint and format project (requires eslint and prettier)
		"format": "ng lint --fix && npx prettier --write ./src/**/*.{ts,html,scss}",
		// Github pages deploy script (requires angular-cli-ghpages)
		// ng add angular-cli-ghpages
		"deploy": "ng deploy --base-href=\"https://mintmissy.github.io/McConfig/\"",
		// Google Cloud deploy script
		"deploy": "ng build && gcloud app deploy --quiet"
	}
}
```
