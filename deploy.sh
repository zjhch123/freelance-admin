source /etc/profile
cnpm install
cnpm run build
cd /var/node_server/freelancer-server/app/public/
rm -rf admin
mv /var/packages/freelancer-admin/dist /var/node_server/freelancer-server/app/public/admin
cd /var/node_server/freelancer-server/
npm run stop
npm run start