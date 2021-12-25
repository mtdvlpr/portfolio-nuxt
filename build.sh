#!/bin/bash
time=$(ls dist/_nuxt/static)
script_template='window.__NUXT__={staticAssetsBase:"/_nuxt/static/sha",layout:"default",error:null,serverRendered:!0,routePath:"/",config:{_app:{basePath:"/",assetsPath:"/_nuxt/",cdnURL:null}}}'
echo $script_template > temp.txt
sed -i "s/sha/$time/" temp.txt
script=$(cat temp.txt)
sha=$(echo -n "$script" | openssl sha256 -binary | openssl base64)
sed -i "s|scriptshaplaceholder|sha256-$sha|" dist/_headers
rm temp.txt
eval_script='try{g=g||new Function("return this")()}catch(t){"object"==typeof window&&(g=window)}'
eval_map='try {\\n\\t\/\/ This works if eval is allowed (see CSP)\\n\\tg = g || new Function(\\"return this\\")();\\n} catch (e) {\\n\\t\/\/ This works if the window reference is available\\n\\tif (typeof window === \\"object\\") g = window;\\n}'
eval_test='new Function(\\"return this\\")'
eval_replacement='"object"==typeof window\&\&(g=window)'
eval_map_replace='// This works if the window reference is available\nif (typeof window === \"object\") g = window;\n}'
sed -i "s/$eval_script/$eval_replacement/g" dist/_nuxt/*.js
sed -i "s^$eval_map^$eval_map_replacement^g" dist/_nuxt/*.map
