# Graphql Elasticsearch Server :rocket: 

Simple `express-graphql` server which can respond to graphql query for [Books Search](https://opensource.appbase.io/reactivesearch/demos/goodbooks/) elasticsearch app hosted on appbase.io.

## How to start?

* `git clone https://github.com/lakhansamani/graphql-elasticsearch-server.git`
* `cd graphql-elasticsearch-serve`
* `yarn && yarn start`

## Graphiql query
```
{
  elastic50(host: "https://nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d@scalr.api.appbase.io") {
    search(
      index: "good-books-ds"
      body: "{\"query\": {\"terms\": {\"authors.raw\": [\"Nora Roberts\"]}}}"
    )
  }
}

```

