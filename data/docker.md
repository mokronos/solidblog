---
title: Docker
---

# Docker

I wanted to just have a raw ubuntu install to test my dotfiles.

1. Create Dockerfile
```dockerfile
FROM ubuntu:latest
```

2. Build image
```bash
docker build -t ubuntu .
```
-t creates a tag for this image, to reference it later.  

3. Run image
```bash
docker run --name ubuntu -td ubuntu
```
--name gives the container a name, so you can reference it later.  
-t allocates a pseudo-TTY, so when all processes defined in Dockerfile are finished, the container will not exit.  
-d keeps the container running in the background.  

4. Attach to container
```bash
docker exec -i -t ubuntu /bin/bash
```
-i interactive mode  
-t allocate a pseudo-TTY  
runs bash in the container and attaches to it. Uses name specified in --name.  
