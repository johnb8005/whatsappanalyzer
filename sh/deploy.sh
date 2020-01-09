yarn build
SERVER_ADDRESS=83.166.144.235
SERVER_USER=ubuntu

scp -r build/* $SERVER_USER@$SERVER_ADDRESS:whatsappanalyzer