## A demo project for using huskey & commit lint

#### Goals

1. lint staged files & fix fixable problems before commit
2. enforce commit message format

#### Tools

1. `husky`: specify scripts(`pre-commit` & `commit-msg`) to run as git hooks
2. `lint-staged`: Run linters against staged git files
3. `eslint`: a linter for linting js files
4. `commitlint`: specifically `@commitlint/cli` & `@commitlint/config-conventional`, for lint commit message
