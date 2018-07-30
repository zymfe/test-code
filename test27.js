;(function () {

    function pySegSort (arr) {
      if(!String.prototype.localeCompare) return;

      var letters = "*abcdefghjklmnopqrstwxyz".split('');
      var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');

      var segs = [];
      var curr;

      letters.forEach(function(item, i){
        curr = {
            letter: item.toUpperCase(), 
            data:[]
        };

        arr.forEach(function (item) {
          if((!zh[i-1] || zh[i-1].localeCompare(item,"zh") <= 0) && item.localeCompare(zh[i],"zh") == -1) {
             curr.data.push(item);
          }
        });

        if(curr.data.length) {
          segs.push(curr);
          curr.data.sort(function(a,b){
              return a.localeCompare(b,"zh");
          });
        }
      });
      return segs;
    }

    var data = [{"province":"北京市","cities":["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云县","延庆县"]},{"province":"内蒙古自治区","cities":["阿拉善盟","巴彦淖尔市","包头市","赤峰市","鄂尔多斯市","呼和浩特市","呼伦贝尔市","通辽市","乌海市","乌兰察布市","锡林郭勒盟","兴安盟"]},{"province":"湖北省","cities":["鄂州市","恩施土家族苗族自治州","黄冈市","黄石市","荆门市","荆州市","省直辖行政单位","十堰市","随州市","武汉市","咸宁市","襄樊市","孝感市","宜昌市"]},{"province":"海南省","cities":["海口市","三亚市","三沙市","西沙群岛","南沙群岛","中沙群岛的岛礁及其海域","五指山市","琼海市","儋州市","文昌市","万宁市","东方市","定安县","屯昌县","澄迈县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"]},{"province":"山西省","cities":["长治市","大同市","晋城市","晋中市","临汾市","吕梁市","朔州市","太原市","忻州市","阳泉市","运城市"]},{"province":"黑龙江省","cities":["大庆市","大兴安岭地区","哈尔滨市","鹤岗市","黑河市","鸡西市","佳木斯市","牡丹江市","七台河市","齐齐哈尔市","双鸭山市","绥化市","伊春市"]},{"province":"重庆市","cities":["万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","綦江区","大足区","渝北区","巴南区","黔江区","长寿区","江津区","合川区","永川区","南川区","潼南县","铜梁县","荣昌县","璧山县","梁平县","城口县","丰都县","垫江县","武隆县","忠县","开县","云阳县","奉节县","巫山县","巫溪县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县"]},{"province":"江西省","cities":["抚州市","赣州市","吉安市","景德镇市","九江市","南昌市","萍乡市","上饶市","新余市","宜春市","鹰潭市"]},{"province":"河南省","cities":["安阳市","鹤壁市","焦作市","开封市","洛阳市","南阳市","平顶山市","三门峡市","商丘市","新乡市","信阳市","许昌市","郑州市","周口市","驻马店市","漯河市","濮阳市"]},{"province":"吉林省","cities":["白城市","白山市","长春市","吉林市","辽源市","四平市","松原市","通化市","延边朝鲜族自治州"]},{"province":"安徽省","cities":["安庆市","蚌埠市","巢湖市","池州市","滁州市","阜阳市","合肥市","淮北市","淮南市","黄山市","六安市","马鞍山市","宿州市","铜陵市","芜湖市","宣城市","亳州市"]},{"province":"陕西省","cities":["安康市","宝鸡市","汉中市","商洛市","铜川市","渭南市","西安市","咸阳市","延安市","榆林市"]},{"province":"河北省","cities":["保定市","沧州市","承德市","邯郸市","衡水市","廊坊市","秦皇岛市","石家庄市","唐山市","邢台市","张家口市"]},{"province":"广东省","cities":["潮州市","东莞市","佛山市","广州市","河源市","惠州市","江门市","揭阳市","茂名市","梅州市","清远市","汕头市","汕尾市","韶关市","深圳市","阳江市","云浮市","湛江市","肇庆市","中山市","珠海市"]},{"province":"宁夏回族自治区","cities":["固原市","石嘴山市","吴忠市","银川市","中卫市"]},{"province":"四川省","cities":["阿坝藏族羌族自治州","巴中市","成都市","达州市","德阳市","甘孜藏族自治州","广安市","广元市","乐山市","凉山彝族自治州","眉山市","绵阳市","南充市","内江市","攀枝花市","遂宁市","雅安市","宜宾市","资阳市","自贡市","泸州市"]},{"province":"天津市","cities":["和平区","河东区","河西区","南开区","河北区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","滨海新区","宁河县","静海县","蓟县"]},{"province":"新疆维吾尔自治区","cities":["阿克苏地区","阿勒泰地区","巴音郭楞蒙古自治州","博尔塔拉蒙古自治州","昌吉回族自治州","哈密地区","和田地区","喀什地区","克拉玛依市","克孜勒苏柯尔克孜自治州","省直辖行政单位","石河子市","塔城地区","吐鲁番地区","乌鲁木齐市","伊犁哈萨克自治州"]},{"province":"云南省","cities":["保山市","楚雄彝族自治州","大理白族自治州","德宏傣族景颇族自治州","迪庆藏族自治州","红河哈尼族彝族自治州","昆明市","丽江市","临沧市","怒江傈僳族自治州","曲靖市","思茅市","文山壮族苗族自治州","西双版纳傣族自治州","玉溪市","昭通市"]},{"province":"山东省","cities":["滨州市","德州市","东营市","菏泽市","济南市","济宁市","莱芜市","聊城市","临沂市","青岛市","日照市","泰安市","威海市","潍坊市","烟台市","枣庄市","淄博市"]},{"province":"浙江省","cities":["杭州市","湖州市","嘉兴市","金华市","丽水市","宁波市","绍兴市","台州市","温州市","舟山市","衢州市"]},{"province":"辽宁省","cities":["鞍山市","本溪市","朝阳市","大连市","丹东市","抚顺市","阜新市","葫芦岛市","锦州市","辽阳市","盘锦市","沈阳市","铁岭市","营口市"]},{"province":"甘肃省","cities":["白银市","定西市","甘南藏族自治州","嘉峪关市","金昌市","酒泉市","兰州市","临夏回族自治州","陇南市","平凉市","庆阳市","天水市","武威市","张掖市"]},{"province":"湖南省","cities":["常德市","长沙市","郴州市","衡阳市","怀化市","娄底市","邵阳市","湘潭市","湘西土家族苗族自治州","益阳市","永州市","岳阳市","张家界市","株洲市"]},{"province":"贵州省","cities":["安顺市","毕节地区","贵阳市","六盘水市","黔东南苗族侗族自治州","黔南布依族苗族自治州","黔西南布依族苗族自治州","铜仁地区","遵义市"]},{"province":"青海省","cities":["果洛藏族自治州","海北藏族自治州","海东地区","海南藏族自治州","海西蒙古族藏族自治州","黄南藏族自治州","西宁市","玉树藏族自治州"]},{"province":"福建省","cities":["福州市","龙岩市","南平市","宁德市","莆田市","泉州市","三明市","厦门市","漳州市"]},{"province":"上海市","cities":["黄浦区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明县"]},{"province":"西藏自治区","cities":["阿里地区","昌都地区","拉萨市","林芝地区","那曲地区","日喀则地区","山南地区"]},{"province":"江苏省","cities":["常州市","淮安市","连云港市","南京市","南通市","苏州市","宿迁市","泰州市","无锡市","徐州市","盐城市","扬州市","镇江市"]},{"province":"广西壮族自治区","cities":["百色市","北海市","崇左市","防城港市","桂林市","贵港市","河池市","贺州市","来宾市","柳州市","南宁市","钦州市","梧州市","玉林市"]}];
    var newData = [];

    data.forEach((item) => {
        if (item.province === '北京') {
            newData.push(item.province);
        }
        item.cities.forEach((city) => {
            newData.push(city);
        });
    });

    console.log(pySegSort(newData));

})();