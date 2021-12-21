#!/bin/bash
time=$(ls dist/_nuxt/static)
script_template='<script>window.__NUXT__={staticAssetsBase:"/_nuxt/static/sha",layout:"default",error:null,serverRendered:!0,routePath:"/",config:{_app:{basePath:"/",assetsPath:"/_nuxt/",cdnURL:null}}}</script>'
echo $script_template > temp.txt
sed -i "s/sha/$time/" temp.txt
script=$(cat temp.txt)
sha=$(echo -n "$script" | openssl sha256 -binary | openssl base64)
sed -i "s|scriptshaplaceholder|sha256-$sha|" dist/_headers
rm temp.txt
