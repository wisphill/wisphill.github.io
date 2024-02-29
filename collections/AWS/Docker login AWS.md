
### Login

colima + docker
```bash

docker login -u AWS -p $(aws ecr get-login-password --region=ap-southeast-2) 411328653161.dkr.ecr.ap-southeast-2.amazonaws.com

## old
aws ecr get-login-password | docker login -u AWS --password-stdin "411328653161.dkr.ecr.ap-southeast-2.amazonaws.com"

echo "hahaha" | docker login -u AWS --password-stdin "411328653161.dkr.ecr.ap-southeast-2.amazonaws.com"



docker logout "411328653161.dkr.ecr.ap-southeast-2.amazonaws.com"

### execute inside
docker exec -it {containerName} /bin/bash
```


Docker
```bash
docker pull 411328653161.dkr.ecr.ap-southeast-2.amazonaws.com/payments:d5607bbca9465442b54bb46387c13d32bea0b481

### tag and push
docker tag 9ed4aefc74f6 411328653161.dkr.ecr.ap-southeast-2.amazonaws.com/alpine:latest
docker push 411328653161.dkr.ecr.ap-southeast-2.amazonaws.com/alpine:latest
```

ecr

```bash
aws ecr list-images --repository-name=payments

aws ecr start-image-scan --image-id=imageDigest=sha256:50feaa80fcf2938f6c918f5b78d4d9d099d599138f83a2bb68ab9cc047521c55,imageTag=release-433 --repository-name=payments
```