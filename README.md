# NestJS REST API

## Description

NestJS REST API boilerplate for typical project

## Quick run

```bash
git clone --depth 1 https://github.com/brocoders/nestjs-boilerplate.git my-app
cd my-app/
cp env-example .env
docker-compose up -d
```

For check status run

```bash
docker-compose logs
```

## Comfortable development

```bash
git clone --depth 1 {gitlab-template-url} {app-name}
cd {app-name}/
cp env-example .env
```

Run additional container:

```bash
docker-compose up -d
```

```bash
yarn install

yarn run start:dev
```

## Links

- Swagger: <http://localhost:3000/docs>

## Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e
```

## Tests in Docker

```bash
docker-compose -f docker-compose.ci.yaml --env-file env-example -p ci up --build --exit-code-from api && docker-compose -p ci rm -svf
```

## Test benchmarking

```bash
docker run --rm jordi/ab -n 100 -c 100 -T application/json -H "Authorization: Bearer USER_TOKEN" -v 2 http://<server_ip>:3000/api/v1/users
```
