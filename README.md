## A demo project for using husky & commit lint

### Goals

1. lint staged files & fix fixable problems before commit
2. enforce commit message format

### Setup dev environment

make sure u have `node`(v18 or above), then simply do `npm i`

### test `commitlint`

1. make some unimport changes(such as adding a comment)
2. `git add .`
3. `git commit -m "adding comment"`: this should fail
4. `git commit -m "chore: adding comment"`: this should succeed

### test `husky`, `lint-staged` & `eslint`

1. change `src/index.js` and make it violate linter rules(specified in `eslint.config.mjs`), save without format
2. `git add .`
3. `git commit -m "feat: change src/index.js"`

Now, look in `src/index.js`, if the rule is fixable, `src/inex.js` should automatically have the fix

Note: u don't need to specify `git add` since `lint-staged` will automatically add linted changes to stage

### Tools

1. `husky`: specify scripts(`pre-commit` & `commit-msg`) to run as git hooks
2. `lint-staged`: Run linters against staged git files
3. `eslint`: a linter for linting js files
4. `commitlint`: specifically `@commitlint/cli` & `@commitlint/config-conventional`, for lint commit message
