all: pretty run

.PHONY: pretty
pretty:
	npx prettier --write *.html assets/css/*.css

.PHONY: run
run:
	python3 -m http.server 6060
