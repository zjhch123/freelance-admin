npm run build
cd dist
zip -r dist.zip ./*
scp dist.zip root@47.104.237.102:/root/
ssh root@47.104.237.102 '
  cd /root && 
  mv dist.zip /var/node_server/freelance-serve/app/otherPublic/admin/ && 
  cd /var/node_server/freelance-serve/app/otherPublic/admin/ && 
  unzip -o dist.zip && 
  rm -rf dist.zip &&
  source /etc/profile && 
  npm run stop && 
  npm run start
'
