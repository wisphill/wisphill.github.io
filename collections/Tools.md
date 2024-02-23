#tools

| tool |  test |
|---| --- |
| openss l| |
| keytool ||
| xxd ||
| xargs ||

```
seq 1 200 | xargs -n 1 -P 10  curl -vs "https://google.com" > out.txt 2>&1
```

```
seq 1 1000 | xargs -n 1 -P 10  curl --verbose --silent --location --request POST 'https://dev-authenticator.verrency-integrations.com/authenticate' --header 'Content-Type: application/json' --data-raw '{"org-id": "VER","account-id": "admin","password":"rQxE6MNwjabvXxrGHBJryaYMdk4Uvn3ifUb+wAZj7cdDY"}' > out.txt 2>&1
```