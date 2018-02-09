/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : leblanc

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:48:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('545800@qq.com', 'asdqaz');
INSERT INTO `reg` VALUES ('1234567@qq.com', '123456');
INSERT INTO `reg` VALUES ('545800322@qq.com', '123456');
INSERT INTO `reg` VALUES ('13432872896', '123456');
INSERT INTO `reg` VALUES ('leblanc@qq.com', 'asdqaz');
INSERT INTO `reg` VALUES ('1234@qq.com', 'asdqaz');
INSERT INTO `reg` VALUES ('13432872895', '123456');
INSERT INTO `reg` VALUES ('13432872892', '123456');
SET FOREIGN_KEY_CHECKS=1;
