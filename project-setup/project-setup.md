# Tools, Linters & Formatters

## [CSS/SCSS Linter](https://marketplace.visualstudio.com/items?itemName=adamwalzer.scss-lint)

To configure the linter add `.scss-lint.yml` file to project root

> I suggest enabling following global settings

```json
"scssLint.showHighlights": false,
"scssLint.runOnTextChange": true,
"scssLint.languages": ["css", "scss"],
"scss.lint.duplicateProperties": "error"
```

## [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code Formatter

To configure prettier add `.prettierrc.conf` file to project root

> I suggest enabling following global settings

```
	"prettier.printWidth": 120,
	"prettier.useTabs": true,
```

## TypeScript Config

> If autocomplete is not working for a module, add module path to this array in to `tsconfig.json`

```json
{
	"compilerOptions": {
		"typeRoots": [
			"node_modules/@angular/material/",
			"node_modules/@ngrx/component-store/",
			"node_modules/@ngrx/effects/",
			"node_modules/@ngrx/store-devtools/",
			"node_modules/@ngrx/store/"
		]
	}
}
```
