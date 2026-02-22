all: serve pretty

.PHONY: serve
serve:
	@echo "Starting development server..."
	python3 -m http.server 6060

.PHONY: pretty
pretty:
	@echo "Formatting code with Prettier..."
	npx prettier --write .