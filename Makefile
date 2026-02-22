all: pretty run

.PHONY: pretty
pretty:
	@echo "Formatting code with Prettier..."
	npx prettier --write .

.PHONY: run
run:
	@echo "Starting development server..."
	python3 -m http.server 6060
