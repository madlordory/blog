#!/usr/bin/sh
pm2 stop ghost
NODE_ENV=production p,2 start /data/webapp/blog/index.js --name "ghost"
