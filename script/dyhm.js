let body = $response.body;
let changed = (body || '').replace(/app_ad\.app_home_ad\(\);/g, '');

changed = changed.replace(/dingbu\(\);/g, '');

$done({body: ''});
