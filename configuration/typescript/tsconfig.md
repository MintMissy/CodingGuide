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
