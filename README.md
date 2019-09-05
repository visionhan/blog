# blog
A personal blog
- npm install ### redis

```js
html-test 中 \
npm install http-server -g  --registry=https://registry.npm.taobao.org
http-server -p 8001

```
把 前端8001 与8000 公共代理到 8080  nginx 性能高 做静态服务 **（反向代理）**、、、

测试配置文件格式是否正确nginx -t
启动 nginx  重启 nginx -s reload
停止 nginx -s stop


```js
8080 

  location / {
	proxy_pass http://localhost:8001;
	}

	location /api/ {
	proxy_pass http://localhost:8000;
	proxy_set_header Host $host;  
	} 

    nginx -t 测试

启动 nginx 
```

### redis启动
- cd C:\Users\lenovo\Downloads\Redis-x64-3.0.504
- redis-server.exe redis.windows.conf

<!-- 另起cmd -->
cd C:\Users\lenovo\Downloads\Redis-x64-3.0.504
redis-cli.exe -h 127.0.0.1 -p 6379
