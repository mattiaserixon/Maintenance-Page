$ACR_NAME = "skolverketaci"
$IMAGE_NAME = "maintenance-page"
$TAG = "latest"

az acr login --name $ACR_NAME
docker build -t "$ACR_NAME.azurecr.io/$IMAGE_NAME`:$TAG" .
docker push "$ACR_NAME.azurecr.io/$IMAGE_NAME`:$TAG"