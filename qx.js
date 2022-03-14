if ($response.statusCode != 200) {
  $完成（空）；
}

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉 ','🍄','⛳️','🚴','🤑','👽','🤖','🎃','👺','👁','🐶','🐼','🐌', '👥']
var city0 = "高谭市";
var isp0 = "跨 GFW.org";
函数 getRandomInt(max) {
  返回 Math.floor(Math.random() * Math.floor(max));
}

功能 City_ValidCheck(para) {
  如果（段）{
  返回参数
  } 别的
  {
  返回城市0
//emojis[getRandomInt(emojis.length)]
  }
}

函数 ISP_ValidCheck(para) {
  如果（段）{
  返回参数
  } 别的
  {
  返回isp0
//emojis[getRandomInt(emojis.length)]
  }
}

功能 Area_check(para) {
  if(para=="中华民国"){
  返回“台湾”
  } 别的
  {
  返回参数
  }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = City_ValidCheck(obj['city']);//+Area_check(obj['country']);
var subtitle = '“爱意随风起晚风也思你”';
var ip = obj['查询'];
var description = '服务商:'+obj['isp'] + '\n'+'地区:' +City_ValidCheck(obj['regionName'])+ '\n' + 'IP:'+ obj['查询'] + '\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});
