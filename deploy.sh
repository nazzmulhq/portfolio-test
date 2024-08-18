
    git pull
    docker-compose down
    docker-compose up -d
    docker exec portfolio yarn install
    docker exec portfolio yarn build
    docker exec portfolio pm2 start --only "portfolio-prod"
    