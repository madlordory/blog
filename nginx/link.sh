#!/bin/sh
service nginx stop
cd /data/webapp/blog/nginx/
rm /etc/nginx/sites-enabled/blog.conf
ln -s /data/webapp/blog/nginx/sites-enabled/madlord.cc.conf /etc/nginx/sites-enabled/blog.conf
service nginx start