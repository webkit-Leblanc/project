/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : leblanc

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:48:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `newprice` int(10) NOT NULL,
  `oldprice` int(10) DEFAULT NULL,
  `hot` tinyint(4) NOT NULL,
  `rule` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '泰诺林', '家中常备', '58e44ea82673e_800x800.jpg', '26', '34', '0', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('2', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('3', '贝亲', '母婴专场', '575530870f917_350x350.jpg', '39', '68', '1', '迷你吸管杯180ml（黄色） DA45 学饮杯', '手柄可360°旋转！ 9个月以上开始适用');
INSERT INTO `goodslist` VALUES ('4', '杜蕾斯', '计生情趣', '8025269.jpg', '21', '29', '1', '活力装安全套8只装', '私密包装 品质保证');
INSERT INTO `goodslist` VALUES ('5', '承善堂阿胶糕', '滋补保健', 'Cmg3xVlIe9uALNfOAAHvCaRIUPg487.jpg', '168', '400', '1', '1000g（玫瑰500g+红枣500g）【买即赠600g】', '【买即赠木瓜型阿胶糕60g*10袋，可累计】 199天陈胶蒸制 即食女士型阿胶糕 易吸收 不易上火');
INSERT INTO `goodslist` VALUES ('6', '汇仁肾宝片', '男科用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('7', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '0', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('8', '泰诺林', '家中常备', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('9', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '0', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('10', '贝亲', '母婴专场', '575530870f917_350x350.jpg', '39', '68', '1', '迷你吸管杯180ml（黄色） DA45 学饮杯', '手柄可360°旋转！ 9个月以上开始适用');
INSERT INTO `goodslist` VALUES ('11', '杜蕾斯', '计生情趣', '8025269.jpg', '21', '29', '1', '活力装安全套8只装', '私密包装 品质保证');
INSERT INTO `goodslist` VALUES ('12', '承善堂阿胶糕', '滋补保健', 'Cmg3xVlIe9uALNfOAAHvCaRIUPg487.jpg', '168', '400', '0', '1000g（玫瑰500g+红枣500g）【买即赠600g】', '【买即赠木瓜型阿胶糕60g*10袋，可累计】 199天陈胶蒸制 即食女士型阿胶糕 易吸收 不易上火');
INSERT INTO `goodslist` VALUES ('13', '汇仁肾宝片', '男科用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('14', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('15', '汇仁肾宝片', '男科用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '0', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('16', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('17', '泰诺林', '家中常备', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('18', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('19', '贝亲', '母婴专场', '575530870f917_350x350.jpg', '39', '68', '1', '迷你吸管杯180ml（黄色） DA45 学饮杯', '手柄可360°旋转！ 9个月以上开始适用');
INSERT INTO `goodslist` VALUES ('20', '杜蕾斯', '海外优购', '8025269.jpg', '21', '29', '1', '活力装安全套8只装', '私密包装 品质保证');
INSERT INTO `goodslist` VALUES ('21', '承善堂阿胶糕', '滋补保健', 'Cmg3xVlIe9uALNfOAAHvCaRIUPg487.jpg', '168', '400', '1', '1000g（玫瑰500g+红枣500g）【买即赠600g】', '【买即赠木瓜型阿胶糕60g*10袋，可累计】 199天陈胶蒸制 即食女士型阿胶糕 易吸收 不易上火');
INSERT INTO `goodslist` VALUES ('22', '汇仁肾宝片', '男科用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('23', '康恩贝', '海外优购', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('24', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('25', '汇仁肾宝片', '男科用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('26', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('27', '泰诺林', '家中常备', '58e44ea82673e_800x800.jpg', '26', '34', '0', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('28', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('29', '贝亲', '母婴专场', '575530870f917_350x350.jpg', '39', '68', '1', '迷你吸管杯180ml（黄色） DA45 学饮杯', '手柄可360°旋转！ 9个月以上开始适用');
INSERT INTO `goodslist` VALUES ('30', '杜蕾斯', '计生情趣', '8025269.jpg', '21', '29', '1', '活力装安全套8只装', '私密包装 品质保证');
INSERT INTO `goodslist` VALUES ('31', '承善堂阿胶糕', '品牌馆', 'Cmg3xVlIe9uALNfOAAHvCaRIUPg487.jpg', '168', '400', '1', '1000g（玫瑰500g+红枣500g）【买即赠600g】', '【买即赠木瓜型阿胶糕60g*10袋，可累计】 199天陈胶蒸制 即食女士型阿胶糕 易吸收 不易上火');
INSERT INTO `goodslist` VALUES ('32', '汇仁肾宝片', '男科用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('33', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('34', '康恩贝', '慢性用药', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('35', '贝亲', '母婴专场', '575530870f917_350x350.jpg', '39', '68', '1', '迷你吸管杯180ml（黄色） DA45 学饮杯', '手柄可360°旋转！ 9个月以上开始适用');
INSERT INTO `goodslist` VALUES ('36', '杜蕾斯', '计生情趣', '8025269.jpg', '21', '29', '1', '活力装安全套8只装', '私密包装 品质保证');
INSERT INTO `goodslist` VALUES ('37', '承善堂阿胶糕', '滋补保健', 'Cmg3xVlIe9uALNfOAAHvCaRIUPg487.jpg', '168', '400', '1', '1000g（玫瑰500g+红枣500g）【买即赠600g】', '【买即赠木瓜型阿胶糕60g*10袋，可累计】 199天陈胶蒸制 即食女士型阿胶糕 易吸收 不易上火');
INSERT INTO `goodslist` VALUES ('38', '汇仁肾宝片', '男科用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('39', '康恩贝', '海外优购', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('40', '汇仁肾宝片', '男性用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('41', '汇仁肾宝片', '男性用药', '578f3a3049f46_800x800.jpg', '1300', '1600', '1', '（礼盒装） 0.7g*126片 *4瓶【下单立减100元】', '【汇仁肾宝片礼盒装，送礼送健康！男女皆可用！】【满1188立减100元，另得4盒六味地黄丸，配合一起服用效果更显著】过年过节送爸妈、送长辈、送老公或者送自己都可以，男女均可服用， 调和阴阳，温阳补肾，扶正固本。用于腰腿酸痛，精神不振，夜尿频多，畏寒怕冷，妇女白带清稀。');
INSERT INTO `goodslist` VALUES ('42', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('43', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('44', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('45', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('46', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('47', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('48', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('49', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。·');
INSERT INTO `goodslist` VALUES ('50', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('51', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('52', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('53', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('54', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('55', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('56', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('57', '康恩贝', '品牌馆', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
INSERT INTO `goodslist` VALUES ('58', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('59', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('60', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('61', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('62', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('63', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('64', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('65', '泰诺林', '高血压', '58e44ea82673e_800x800.jpg', '26', '34', '1', '对乙酰氨基酚混悬滴剂 20ml/瓶', '儿童普通感冒或流行性感冒引起的发热');
INSERT INTO `goodslist` VALUES ('66', '康恩贝', '高血压', '8000995.jpg', '17', '20', '1', '肠炎宁片 24片', '肠炎宁片清热利湿，行气。用于湿热蕴结胃肠所致的腹泻，小儿消化不良。');
SET FOREIGN_KEY_CHECKS=1;
