# Github Graphql Elasticsearch Server :rocket: 

Simple `express-graphql` server which can respond to graphql query for github elasticsearch app hosted on appbase.io.

## How to start?

* `git clone https://github.com/lakhansamani/github-graphql-elasticsearch-server.git`
* `cd github-graphql-elasticsearch-serve`
* `yarn && yarn start`

## Graphiql query
```
{
  elastic50(host: "https://LsxvulCKp:a500b460-73ff-4882-8d34-9df8064b3b38@scalr.api.appbase.io") {
    search(
      index: "gitxplore-latest-app"
      body: "{\"query\": {\"terms\": {\"language.raw\": [\"JavaScript\"]}}}"
    )
  }
}

```

