#!/bin/sh
pm2 stop ghost
NODE_ENV=production pm2 start /data/webapp/blog/index.js --name "ghost"
