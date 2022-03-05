
.PHONY: run
run: node_modules
	npm run start

.PHONY: build
build: node_modules
	npm run build

.PHONY: node_modules
node_modules:
	npm ci
