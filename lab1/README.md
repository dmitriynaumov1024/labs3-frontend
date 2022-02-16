# Lab1

To build and run this app:
```bash
docker build -t my-first-site .
docker run -d --name my-first-site -p 8080:80 my-first-site 
```

Then, navigate to `localhost:8080` in your browser.

To remove the container :
```bash
docker container stop my-first-site
docker container rm my-first-site
```