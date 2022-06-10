# k6

Example:
```
# $ docker-compose  run --rm k6 run /src/test_health_check.js
$ docker-compose run --rm k6 run /src/test_health_check.js
```

To perform a 10-second load test with 20 users simultaneously, do the following
```bash
# $ docker-compose  run --rm k6 run /src/test_health_check.js --vus 20 --duration 10s
$ docker-compose up run /src/test_health_check.js --vus 20 --duration 10s  
```