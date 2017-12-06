build:
	docker build -t registry.armstead.io/project-web:latest .

push:
	docker push registry.armstead.io/project-web:latest
