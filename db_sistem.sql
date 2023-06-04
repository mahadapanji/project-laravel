/*
 Navicat Premium Data Transfer

 Source Server         : LOCAL MYSQL
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : db_sistem

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 04/06/2023 15:37:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `failed_jobs_uuid_unique`(`uuid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (5, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (6, '2014_10_12_100000_create_password_reset_tokens_table', 1);
INSERT INTO `migrations` VALUES (7, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (8, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (9, '2023_05_28_072141_add_column_users', 2);
INSERT INTO `migrations` VALUES (10, '2023_05_28_101857_create_products_table', 3);
INSERT INTO `migrations` VALUES (11, '2023_06_01_162952_create_orders', 4);
INSERT INTO `migrations` VALUES (12, '2023_06_01_164403_create_order_details', 4);

-- ----------------------------
-- Table structure for order_details
-- ----------------------------
DROP TABLE IF EXISTS `order_details`;
CREATE TABLE `order_details`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_unit_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` decimal(8, 2) NOT NULL,
  `product_price` decimal(8, 2) NOT NULL,
  `product_total_price` decimal(8, 2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_details
-- ----------------------------
INSERT INTO `order_details` VALUES (3, 'A001', 'T001', 'T002', 'T003', 5.00, 100.00, 100.00, '2023-06-04 08:16:07', '2023-06-04 08:16:07');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `regency_origin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `province_origin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `regency_destination` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `province_destination` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` decimal(8, 2) NOT NULL,
  `shipping_cost` decimal(8, 2) NOT NULL,
  `total_price` decimal(8, 2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (2, 'A001', 'Mahada', 'cibi', 'cibi', 'cibi', 'cibi', 'cibi', 'cibi', 100.00, 9000.00, 9000.00, '2023-06-04 08:16:07', '2023-06-04 08:16:07');

-- ----------------------------
-- Table structure for password_reset_tokens
-- ----------------------------
DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE `password_reset_tokens`  (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of password_reset_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `personal_access_tokens_token_unique`(`token`) USING BTREE,
  INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type`, `tokenable_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8, 2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 'test', 'test', 'test', 9000.00, '2023-05-30 07:21:41', '2023-05-30 07:21:41');
INSERT INTO `products` VALUES (2, 'test42', 'testaa123', 'test', 9000.00, '2023-05-30 07:21:41', '2023-05-30 08:16:27');

-- ----------------------------
-- Table structure for tb_ro_cities
-- ----------------------------
DROP TABLE IF EXISTS `tb_ro_cities`;
CREATE TABLE `tb_ro_cities`  (
  `city_id` int NOT NULL,
  `province_id` int NULL DEFAULT NULL,
  `city_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `postal_code` char(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`city_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_ro_cities
-- ----------------------------
INSERT INTO `tb_ro_cities` VALUES (1, 21, 'Kabupaten Aceh Barat', '23681');
INSERT INTO `tb_ro_cities` VALUES (2, 21, 'Kabupaten Aceh Barat Daya', '23764');
INSERT INTO `tb_ro_cities` VALUES (3, 21, 'Kabupaten Aceh Besar', '23951');
INSERT INTO `tb_ro_cities` VALUES (4, 21, 'Kabupaten Aceh Jaya', '23654');
INSERT INTO `tb_ro_cities` VALUES (5, 21, 'Kabupaten Aceh Selatan', '23719');
INSERT INTO `tb_ro_cities` VALUES (6, 21, 'Kabupaten Aceh Singkil', '24785');
INSERT INTO `tb_ro_cities` VALUES (7, 21, 'Kabupaten Aceh Tamiang', '24476');
INSERT INTO `tb_ro_cities` VALUES (8, 21, 'Kabupaten Aceh Tengah', '24511');
INSERT INTO `tb_ro_cities` VALUES (9, 21, 'Kabupaten Aceh Tenggara', '24611');
INSERT INTO `tb_ro_cities` VALUES (10, 21, 'Kabupaten Aceh Timur', '24454');
INSERT INTO `tb_ro_cities` VALUES (11, 21, 'Kabupaten Aceh Utara', '24382');
INSERT INTO `tb_ro_cities` VALUES (12, 32, 'Kabupaten Agam', '26411');
INSERT INTO `tb_ro_cities` VALUES (13, 23, 'Kabupaten Alor', '85811');
INSERT INTO `tb_ro_cities` VALUES (14, 19, 'Kota Ambon', '97222');
INSERT INTO `tb_ro_cities` VALUES (15, 34, 'Kabupaten Asahan', '21214');
INSERT INTO `tb_ro_cities` VALUES (16, 24, 'Kabupaten Asmat', '99777');
INSERT INTO `tb_ro_cities` VALUES (17, 1, 'Kabupaten Badung', '80351');
INSERT INTO `tb_ro_cities` VALUES (18, 13, 'Kabupaten Balangan', '71611');
INSERT INTO `tb_ro_cities` VALUES (19, 15, 'Kota Balikpapan', '76111');
INSERT INTO `tb_ro_cities` VALUES (20, 21, 'Kota Banda Aceh', '23238');
INSERT INTO `tb_ro_cities` VALUES (21, 18, 'Kota Bandar Lampung', '35139');
INSERT INTO `tb_ro_cities` VALUES (22, 9, 'Kabupaten Bandung', '40311');
INSERT INTO `tb_ro_cities` VALUES (23, 9, 'Kota Bandung', '40111');
INSERT INTO `tb_ro_cities` VALUES (24, 9, 'Kabupaten Bandung Barat', '40721');
INSERT INTO `tb_ro_cities` VALUES (25, 29, 'Kabupaten Banggai', '94711');
INSERT INTO `tb_ro_cities` VALUES (26, 29, 'Kabupaten Banggai Kepulauan', '94881');
INSERT INTO `tb_ro_cities` VALUES (27, 2, 'Kabupaten Bangka', '33212');
INSERT INTO `tb_ro_cities` VALUES (28, 2, 'Kabupaten Bangka Barat', '33315');
INSERT INTO `tb_ro_cities` VALUES (29, 2, 'Kabupaten Bangka Selatan', '33719');
INSERT INTO `tb_ro_cities` VALUES (30, 2, 'Kabupaten Bangka Tengah', '33613');
INSERT INTO `tb_ro_cities` VALUES (31, 11, 'Kabupaten Bangkalan', '69118');
INSERT INTO `tb_ro_cities` VALUES (32, 1, 'Kabupaten Bangli', '80619');
INSERT INTO `tb_ro_cities` VALUES (33, 13, 'Kabupaten Banjar', '70619');
INSERT INTO `tb_ro_cities` VALUES (34, 9, 'Kota Banjar', '46311');
INSERT INTO `tb_ro_cities` VALUES (35, 13, 'Kota Banjarbaru', '70712');
INSERT INTO `tb_ro_cities` VALUES (36, 13, 'Kota Banjarmasin', '70117');
INSERT INTO `tb_ro_cities` VALUES (37, 10, 'Kabupaten Banjarnegara', '53419');
INSERT INTO `tb_ro_cities` VALUES (38, 28, 'Kabupaten Bantaeng', '92411');
INSERT INTO `tb_ro_cities` VALUES (39, 5, 'Kabupaten Bantul', '55715');
INSERT INTO `tb_ro_cities` VALUES (40, 33, 'Kabupaten Banyuasin', '30911');
INSERT INTO `tb_ro_cities` VALUES (41, 10, 'Kabupaten Banyumas', '53114');
INSERT INTO `tb_ro_cities` VALUES (42, 11, 'Kabupaten Banyuwangi', '68416');
INSERT INTO `tb_ro_cities` VALUES (43, 13, 'Kabupaten Barito Kuala', '70511');
INSERT INTO `tb_ro_cities` VALUES (44, 14, 'Kabupaten Barito Selatan', '73711');
INSERT INTO `tb_ro_cities` VALUES (45, 14, 'Kabupaten Barito Timur', '73671');
INSERT INTO `tb_ro_cities` VALUES (46, 14, 'Kabupaten Barito Utara', '73881');
INSERT INTO `tb_ro_cities` VALUES (47, 28, 'Kabupaten Barru', '90719');
INSERT INTO `tb_ro_cities` VALUES (48, 17, 'Kota Batam', '29413');
INSERT INTO `tb_ro_cities` VALUES (49, 10, 'Kabupaten Batang', '51211');
INSERT INTO `tb_ro_cities` VALUES (50, 8, 'Kabupaten Batang Hari', '36613');
INSERT INTO `tb_ro_cities` VALUES (51, 11, 'Kota Batu', '65311');
INSERT INTO `tb_ro_cities` VALUES (52, 34, 'Kabupaten Batu Bara', '21655');
INSERT INTO `tb_ro_cities` VALUES (53, 30, 'Kota Bau-Bau', '93719');
INSERT INTO `tb_ro_cities` VALUES (54, 9, 'Kabupaten Bekasi', '17837');
INSERT INTO `tb_ro_cities` VALUES (55, 9, 'Kota Bekasi', '17121');
INSERT INTO `tb_ro_cities` VALUES (56, 2, 'Kabupaten Belitung', '33419');
INSERT INTO `tb_ro_cities` VALUES (57, 2, 'Kabupaten Belitung Timur', '33519');
INSERT INTO `tb_ro_cities` VALUES (58, 23, 'Kabupaten Belu', '85711');
INSERT INTO `tb_ro_cities` VALUES (59, 21, 'Kabupaten Bener Meriah', '24581');
INSERT INTO `tb_ro_cities` VALUES (60, 26, 'Kabupaten Bengkalis', '28719');
INSERT INTO `tb_ro_cities` VALUES (61, 12, 'Kabupaten Bengkayang', '79213');
INSERT INTO `tb_ro_cities` VALUES (62, 4, 'Kota Bengkulu', '38229');
INSERT INTO `tb_ro_cities` VALUES (63, 4, 'Kabupaten Bengkulu Selatan', '38519');
INSERT INTO `tb_ro_cities` VALUES (64, 4, 'Kabupaten Bengkulu Tengah', '38319');
INSERT INTO `tb_ro_cities` VALUES (65, 4, 'Kabupaten Bengkulu Utara', '38619');
INSERT INTO `tb_ro_cities` VALUES (66, 15, 'Kabupaten Berau', '77311');
INSERT INTO `tb_ro_cities` VALUES (67, 24, 'Kabupaten Biak Numfor', '98119');
INSERT INTO `tb_ro_cities` VALUES (68, 22, 'Kabupaten Bima', '84171');
INSERT INTO `tb_ro_cities` VALUES (69, 22, 'Kota Bima', '84139');
INSERT INTO `tb_ro_cities` VALUES (70, 34, 'Kota Binjai', '20712');
INSERT INTO `tb_ro_cities` VALUES (71, 17, 'Kabupaten Bintan', '29135');
INSERT INTO `tb_ro_cities` VALUES (72, 21, 'Kabupaten Bireuen', '24219');
INSERT INTO `tb_ro_cities` VALUES (73, 31, 'Kota Bitung', '95512');
INSERT INTO `tb_ro_cities` VALUES (74, 11, 'Kabupaten Blitar', '66171');
INSERT INTO `tb_ro_cities` VALUES (75, 11, 'Kota Blitar', '66124');
INSERT INTO `tb_ro_cities` VALUES (76, 10, 'Kabupaten Blora', '58219');
INSERT INTO `tb_ro_cities` VALUES (77, 7, 'Kabupaten Boalemo', '96319');
INSERT INTO `tb_ro_cities` VALUES (78, 9, 'Kabupaten Bogor', '16911');
INSERT INTO `tb_ro_cities` VALUES (79, 9, 'Kota Bogor', '16119');
INSERT INTO `tb_ro_cities` VALUES (80, 11, 'Kabupaten Bojonegoro', '62119');
INSERT INTO `tb_ro_cities` VALUES (81, 31, 'Kabupaten Bolaang Mongondow (Bolmong)', '95755');
INSERT INTO `tb_ro_cities` VALUES (82, 31, 'Kabupaten Bolaang Mongondow Selatan', '95774');
INSERT INTO `tb_ro_cities` VALUES (83, 31, 'Kabupaten Bolaang Mongondow Timur', '95783');
INSERT INTO `tb_ro_cities` VALUES (84, 31, 'Kabupaten Bolaang Mongondow Utara', '95765');
INSERT INTO `tb_ro_cities` VALUES (85, 30, 'Kabupaten Bombana', '93771');
INSERT INTO `tb_ro_cities` VALUES (86, 11, 'Kabupaten Bondowoso', '68219');
INSERT INTO `tb_ro_cities` VALUES (87, 28, 'Kabupaten Bone', '92713');
INSERT INTO `tb_ro_cities` VALUES (88, 7, 'Kabupaten Bone Bolango', '96511');
INSERT INTO `tb_ro_cities` VALUES (89, 15, 'Kota Bontang', '75313');
INSERT INTO `tb_ro_cities` VALUES (90, 24, 'Kabupaten Boven Digoel', '99662');
INSERT INTO `tb_ro_cities` VALUES (91, 10, 'Kabupaten Boyolali', '57312');
INSERT INTO `tb_ro_cities` VALUES (92, 10, 'Kabupaten Brebes', '52212');
INSERT INTO `tb_ro_cities` VALUES (93, 32, 'Kota Bukittinggi', '26115');
INSERT INTO `tb_ro_cities` VALUES (94, 1, 'Kabupaten Buleleng', '81111');
INSERT INTO `tb_ro_cities` VALUES (95, 28, 'Kabupaten Bulukumba', '92511');
INSERT INTO `tb_ro_cities` VALUES (96, 16, 'Kabupaten Bulungan (Bulongan)', '77211');
INSERT INTO `tb_ro_cities` VALUES (97, 8, 'Kabupaten Bungo', '37216');
INSERT INTO `tb_ro_cities` VALUES (98, 29, 'Kabupaten Buol', '94564');
INSERT INTO `tb_ro_cities` VALUES (99, 19, 'Kabupaten Buru', '97371');
INSERT INTO `tb_ro_cities` VALUES (100, 19, 'Kabupaten Buru Selatan', '97351');
INSERT INTO `tb_ro_cities` VALUES (101, 30, 'Kabupaten Buton', '93754');
INSERT INTO `tb_ro_cities` VALUES (102, 30, 'Kabupaten Buton Utara', '93745');
INSERT INTO `tb_ro_cities` VALUES (103, 9, 'Kabupaten Ciamis', '46211');
INSERT INTO `tb_ro_cities` VALUES (104, 9, 'Kabupaten Cianjur', '43217');
INSERT INTO `tb_ro_cities` VALUES (105, 10, 'Kabupaten Cilacap', '53211');
INSERT INTO `tb_ro_cities` VALUES (106, 3, 'Kota Cilegon', '42417');
INSERT INTO `tb_ro_cities` VALUES (107, 9, 'Kota Cimahi', '40512');
INSERT INTO `tb_ro_cities` VALUES (108, 9, 'Kabupaten Cirebon', '45611');
INSERT INTO `tb_ro_cities` VALUES (109, 9, 'Kota Cirebon', '45116');
INSERT INTO `tb_ro_cities` VALUES (110, 34, 'Kabupaten Dairi', '22211');
INSERT INTO `tb_ro_cities` VALUES (111, 24, 'Kabupaten Deiyai (Deliyai)', '98784');
INSERT INTO `tb_ro_cities` VALUES (112, 34, 'Kabupaten Deli Serdang', '20511');
INSERT INTO `tb_ro_cities` VALUES (113, 10, 'Kabupaten Demak', '59519');
INSERT INTO `tb_ro_cities` VALUES (114, 1, 'Kota Denpasar', '80227');
INSERT INTO `tb_ro_cities` VALUES (115, 9, 'Kota Depok', '16416');
INSERT INTO `tb_ro_cities` VALUES (116, 32, 'Kabupaten Dharmasraya', '27612');
INSERT INTO `tb_ro_cities` VALUES (117, 24, 'Kabupaten Dogiyai', '98866');
INSERT INTO `tb_ro_cities` VALUES (118, 22, 'Kabupaten Dompu', '84217');
INSERT INTO `tb_ro_cities` VALUES (119, 29, 'Kabupaten Donggala', '94341');
INSERT INTO `tb_ro_cities` VALUES (120, 26, 'Kota Dumai', '28811');
INSERT INTO `tb_ro_cities` VALUES (121, 33, 'Kabupaten Empat Lawang', '31811');
INSERT INTO `tb_ro_cities` VALUES (122, 23, 'Kabupaten Ende', '86351');
INSERT INTO `tb_ro_cities` VALUES (123, 28, 'Kabupaten Enrekang', '91719');
INSERT INTO `tb_ro_cities` VALUES (124, 25, 'Kabupaten Fakfak', '98651');
INSERT INTO `tb_ro_cities` VALUES (125, 23, 'Kabupaten Flores Timur', '86213');
INSERT INTO `tb_ro_cities` VALUES (126, 9, 'Kabupaten Garut', '44126');
INSERT INTO `tb_ro_cities` VALUES (127, 21, 'Kabupaten Gayo Lues', '24653');
INSERT INTO `tb_ro_cities` VALUES (128, 1, 'Kabupaten Gianyar', '80519');
INSERT INTO `tb_ro_cities` VALUES (129, 7, 'Kabupaten Gorontalo', '96218');
INSERT INTO `tb_ro_cities` VALUES (130, 7, 'Kota Gorontalo', '96115');
INSERT INTO `tb_ro_cities` VALUES (131, 7, 'Kabupaten Gorontalo Utara', '96611');
INSERT INTO `tb_ro_cities` VALUES (132, 28, 'Kabupaten Gowa', '92111');
INSERT INTO `tb_ro_cities` VALUES (133, 11, 'Kabupaten Gresik', '61115');
INSERT INTO `tb_ro_cities` VALUES (134, 10, 'Kabupaten Grobogan', '58111');
INSERT INTO `tb_ro_cities` VALUES (135, 5, 'Kabupaten Gunung Kidul', '55812');
INSERT INTO `tb_ro_cities` VALUES (136, 14, 'Kabupaten Gunung Mas', '74511');
INSERT INTO `tb_ro_cities` VALUES (137, 34, 'Kota Gunungsitoli', '22813');
INSERT INTO `tb_ro_cities` VALUES (138, 20, 'Kabupaten Halmahera Barat', '97757');
INSERT INTO `tb_ro_cities` VALUES (139, 20, 'Kabupaten Halmahera Selatan', '97911');
INSERT INTO `tb_ro_cities` VALUES (140, 20, 'Kabupaten Halmahera Tengah', '97853');
INSERT INTO `tb_ro_cities` VALUES (141, 20, 'Kabupaten Halmahera Timur', '97862');
INSERT INTO `tb_ro_cities` VALUES (142, 20, 'Kabupaten Halmahera Utara', '97762');
INSERT INTO `tb_ro_cities` VALUES (143, 13, 'Kabupaten Hulu Sungai Selatan', '71212');
INSERT INTO `tb_ro_cities` VALUES (144, 13, 'Kabupaten Hulu Sungai Tengah', '71313');
INSERT INTO `tb_ro_cities` VALUES (145, 13, 'Kabupaten Hulu Sungai Utara', '71419');
INSERT INTO `tb_ro_cities` VALUES (146, 34, 'Kabupaten Humbang Hasundutan', '22457');
INSERT INTO `tb_ro_cities` VALUES (147, 26, 'Kabupaten Indragiri Hilir', '29212');
INSERT INTO `tb_ro_cities` VALUES (148, 26, 'Kabupaten Indragiri Hulu', '29319');
INSERT INTO `tb_ro_cities` VALUES (149, 9, 'Kabupaten Indramayu', '45214');
INSERT INTO `tb_ro_cities` VALUES (150, 24, 'Kabupaten Intan Jaya', '98771');
INSERT INTO `tb_ro_cities` VALUES (151, 6, 'Kota Jakarta Barat', '11220');
INSERT INTO `tb_ro_cities` VALUES (152, 6, 'Kota Jakarta Pusat', '10540');
INSERT INTO `tb_ro_cities` VALUES (153, 6, 'Kota Jakarta Selatan', '12230');
INSERT INTO `tb_ro_cities` VALUES (154, 6, 'Kota Jakarta Timur', '13330');
INSERT INTO `tb_ro_cities` VALUES (155, 6, 'Kota Jakarta Utara', '14140');
INSERT INTO `tb_ro_cities` VALUES (156, 8, 'Kota Jambi', '36111');
INSERT INTO `tb_ro_cities` VALUES (157, 24, 'Kabupaten Jayapura', '99352');
INSERT INTO `tb_ro_cities` VALUES (158, 24, 'Kota Jayapura', '99114');
INSERT INTO `tb_ro_cities` VALUES (159, 24, 'Kabupaten Jayawijaya', '99511');
INSERT INTO `tb_ro_cities` VALUES (160, 11, 'Kabupaten Jember', '68113');
INSERT INTO `tb_ro_cities` VALUES (161, 1, 'Kabupaten Jembrana', '82251');
INSERT INTO `tb_ro_cities` VALUES (162, 28, 'Kabupaten Jeneponto', '92319');
INSERT INTO `tb_ro_cities` VALUES (163, 10, 'Kabupaten Jepara', '59419');
INSERT INTO `tb_ro_cities` VALUES (164, 11, 'Kabupaten Jombang', '61415');
INSERT INTO `tb_ro_cities` VALUES (165, 25, 'Kabupaten Kaimana', '98671');
INSERT INTO `tb_ro_cities` VALUES (166, 26, 'Kabupaten Kampar', '28411');
INSERT INTO `tb_ro_cities` VALUES (167, 14, 'Kabupaten Kapuas', '73583');
INSERT INTO `tb_ro_cities` VALUES (168, 12, 'Kabupaten Kapuas Hulu', '78719');
INSERT INTO `tb_ro_cities` VALUES (169, 10, 'Kabupaten Karanganyar', '57718');
INSERT INTO `tb_ro_cities` VALUES (170, 1, 'Kabupaten Karangasem', '80819');
INSERT INTO `tb_ro_cities` VALUES (171, 9, 'Kabupaten Karawang', '41311');
INSERT INTO `tb_ro_cities` VALUES (172, 17, 'Kabupaten Karimun', '29611');
INSERT INTO `tb_ro_cities` VALUES (173, 34, 'Kabupaten Karo', '22119');
INSERT INTO `tb_ro_cities` VALUES (174, 14, 'Kabupaten Katingan', '74411');
INSERT INTO `tb_ro_cities` VALUES (175, 4, 'Kabupaten Kaur', '38911');
INSERT INTO `tb_ro_cities` VALUES (176, 12, 'Kabupaten Kayong Utara', '78852');
INSERT INTO `tb_ro_cities` VALUES (177, 10, 'Kabupaten Kebumen', '54319');
INSERT INTO `tb_ro_cities` VALUES (178, 11, 'Kabupaten Kediri', '64184');
INSERT INTO `tb_ro_cities` VALUES (179, 11, 'Kota Kediri', '64125');
INSERT INTO `tb_ro_cities` VALUES (180, 24, 'Kabupaten Keerom', '99461');
INSERT INTO `tb_ro_cities` VALUES (181, 10, 'Kabupaten Kendal', '51314');
INSERT INTO `tb_ro_cities` VALUES (182, 30, 'Kota Kendari', '93126');
INSERT INTO `tb_ro_cities` VALUES (183, 4, 'Kabupaten Kepahiang', '39319');
INSERT INTO `tb_ro_cities` VALUES (184, 17, 'Kabupaten Kepulauan Anambas', '29991');
INSERT INTO `tb_ro_cities` VALUES (185, 19, 'Kabupaten Kepulauan Aru', '97681');
INSERT INTO `tb_ro_cities` VALUES (186, 32, 'Kabupaten Kepulauan Mentawai', '25771');
INSERT INTO `tb_ro_cities` VALUES (187, 26, 'Kabupaten Kepulauan Meranti', '28791');
INSERT INTO `tb_ro_cities` VALUES (188, 31, 'Kabupaten Kepulauan Sangihe', '95819');
INSERT INTO `tb_ro_cities` VALUES (189, 6, 'Kabupaten Kepulauan Seribu', '14550');
INSERT INTO `tb_ro_cities` VALUES (190, 31, 'Kabupaten Kepulauan Siau Tagulandang Biaro (Sitaro)', '95862');
INSERT INTO `tb_ro_cities` VALUES (191, 20, 'Kabupaten Kepulauan Sula', '97995');
INSERT INTO `tb_ro_cities` VALUES (192, 31, 'Kabupaten Kepulauan Talaud', '95885');
INSERT INTO `tb_ro_cities` VALUES (193, 24, 'Kabupaten Kepulauan Yapen (Yapen Waropen)', '98211');
INSERT INTO `tb_ro_cities` VALUES (194, 8, 'Kabupaten Kerinci', '37167');
INSERT INTO `tb_ro_cities` VALUES (195, 12, 'Kabupaten Ketapang', '78874');
INSERT INTO `tb_ro_cities` VALUES (196, 10, 'Kabupaten Klaten', '57411');
INSERT INTO `tb_ro_cities` VALUES (197, 1, 'Kabupaten Klungkung', '80719');
INSERT INTO `tb_ro_cities` VALUES (198, 30, 'Kabupaten Kolaka', '93511');
INSERT INTO `tb_ro_cities` VALUES (199, 30, 'Kabupaten Kolaka Utara', '93911');
INSERT INTO `tb_ro_cities` VALUES (200, 30, 'Kabupaten Konawe', '93411');
INSERT INTO `tb_ro_cities` VALUES (201, 30, 'Kabupaten Konawe Selatan', '93811');
INSERT INTO `tb_ro_cities` VALUES (202, 30, 'Kabupaten Konawe Utara', '93311');
INSERT INTO `tb_ro_cities` VALUES (203, 13, 'Kabupaten Kotabaru', '72119');
INSERT INTO `tb_ro_cities` VALUES (204, 31, 'Kota Kotamobagu', '95711');
INSERT INTO `tb_ro_cities` VALUES (205, 14, 'Kabupaten Kotawaringin Barat', '74119');
INSERT INTO `tb_ro_cities` VALUES (206, 14, 'Kabupaten Kotawaringin Timur', '74364');
INSERT INTO `tb_ro_cities` VALUES (207, 26, 'Kabupaten Kuantan Singingi', '29519');
INSERT INTO `tb_ro_cities` VALUES (208, 12, 'Kabupaten Kubu Raya', '78311');
INSERT INTO `tb_ro_cities` VALUES (209, 10, 'Kabupaten Kudus', '59311');
INSERT INTO `tb_ro_cities` VALUES (210, 5, 'Kabupaten Kulon Progo', '55611');
INSERT INTO `tb_ro_cities` VALUES (211, 9, 'Kabupaten Kuningan', '45511');
INSERT INTO `tb_ro_cities` VALUES (212, 23, 'Kabupaten Kupang', '85362');
INSERT INTO `tb_ro_cities` VALUES (213, 23, 'Kota Kupang', '85119');
INSERT INTO `tb_ro_cities` VALUES (214, 15, 'Kabupaten Kutai Barat', '75711');
INSERT INTO `tb_ro_cities` VALUES (215, 15, 'Kabupaten Kutai Kartanegara', '75511');
INSERT INTO `tb_ro_cities` VALUES (216, 15, 'Kabupaten Kutai Timur', '75611');
INSERT INTO `tb_ro_cities` VALUES (217, 34, 'Kabupaten Labuhan Batu', '21412');
INSERT INTO `tb_ro_cities` VALUES (218, 34, 'Kabupaten Labuhan Batu Selatan', '21511');
INSERT INTO `tb_ro_cities` VALUES (219, 34, 'Kabupaten Labuhan Batu Utara', '21711');
INSERT INTO `tb_ro_cities` VALUES (220, 33, 'Kabupaten Lahat', '31419');
INSERT INTO `tb_ro_cities` VALUES (221, 14, 'Kabupaten Lamandau', '74611');
INSERT INTO `tb_ro_cities` VALUES (222, 11, 'Kabupaten Lamongan', '64125');
INSERT INTO `tb_ro_cities` VALUES (223, 18, 'Kabupaten Lampung Barat', '34814');
INSERT INTO `tb_ro_cities` VALUES (224, 18, 'Kabupaten Lampung Selatan', '35511');
INSERT INTO `tb_ro_cities` VALUES (225, 18, 'Kabupaten Lampung Tengah', '34212');
INSERT INTO `tb_ro_cities` VALUES (226, 18, 'Kabupaten Lampung Timur', '34319');
INSERT INTO `tb_ro_cities` VALUES (227, 18, 'Kabupaten Lampung Utara', '34516');
INSERT INTO `tb_ro_cities` VALUES (228, 12, 'Kabupaten Landak', '78319');
INSERT INTO `tb_ro_cities` VALUES (229, 34, 'Kabupaten Langkat', '20811');
INSERT INTO `tb_ro_cities` VALUES (230, 21, 'Kota Langsa', '24412');
INSERT INTO `tb_ro_cities` VALUES (231, 24, 'Kabupaten Lanny Jaya', '99531');
INSERT INTO `tb_ro_cities` VALUES (232, 3, 'Kabupaten Lebak', '42319');
INSERT INTO `tb_ro_cities` VALUES (233, 4, 'Kabupaten Lebong', '39264');
INSERT INTO `tb_ro_cities` VALUES (234, 23, 'Kabupaten Lembata', '86611');
INSERT INTO `tb_ro_cities` VALUES (235, 21, 'Kota Lhokseumawe', '24352');
INSERT INTO `tb_ro_cities` VALUES (236, 32, 'Kabupaten Lima Puluh Koto/Kota', '26671');
INSERT INTO `tb_ro_cities` VALUES (237, 17, 'Kabupaten Lingga', '29811');
INSERT INTO `tb_ro_cities` VALUES (238, 22, 'Kabupaten Lombok Barat', '83311');
INSERT INTO `tb_ro_cities` VALUES (239, 22, 'Kabupaten Lombok Tengah', '83511');
INSERT INTO `tb_ro_cities` VALUES (240, 22, 'Kabupaten Lombok Timur', '83612');
INSERT INTO `tb_ro_cities` VALUES (241, 22, 'Kabupaten Lombok Utara', '83711');
INSERT INTO `tb_ro_cities` VALUES (242, 33, 'Kota Lubuk Linggau', '31614');
INSERT INTO `tb_ro_cities` VALUES (243, 11, 'Kabupaten Lumajang', '67319');
INSERT INTO `tb_ro_cities` VALUES (244, 28, 'Kabupaten Luwu', '91994');
INSERT INTO `tb_ro_cities` VALUES (245, 28, 'Kabupaten Luwu Timur', '92981');
INSERT INTO `tb_ro_cities` VALUES (246, 28, 'Kabupaten Luwu Utara', '92911');
INSERT INTO `tb_ro_cities` VALUES (247, 11, 'Kabupaten Madiun', '63153');
INSERT INTO `tb_ro_cities` VALUES (248, 11, 'Kota Madiun', '63122');
INSERT INTO `tb_ro_cities` VALUES (249, 10, 'Kabupaten Magelang', '56519');
INSERT INTO `tb_ro_cities` VALUES (250, 10, 'Kota Magelang', '56133');
INSERT INTO `tb_ro_cities` VALUES (251, 11, 'Kabupaten Magetan', '63314');
INSERT INTO `tb_ro_cities` VALUES (252, 9, 'Kabupaten Majalengka', '45412');
INSERT INTO `tb_ro_cities` VALUES (253, 27, 'Kabupaten Majene', '91411');
INSERT INTO `tb_ro_cities` VALUES (254, 28, 'Kota Makassar', '90111');
INSERT INTO `tb_ro_cities` VALUES (255, 11, 'Kabupaten Malang', '65163');
INSERT INTO `tb_ro_cities` VALUES (256, 11, 'Kota Malang', '65112');
INSERT INTO `tb_ro_cities` VALUES (257, 16, 'Kabupaten Malinau', '77511');
INSERT INTO `tb_ro_cities` VALUES (258, 19, 'Kabupaten Maluku Barat Daya', '97451');
INSERT INTO `tb_ro_cities` VALUES (259, 19, 'Kabupaten Maluku Tengah', '97513');
INSERT INTO `tb_ro_cities` VALUES (260, 19, 'Kabupaten Maluku Tenggara', '97651');
INSERT INTO `tb_ro_cities` VALUES (261, 19, 'Kabupaten Maluku Tenggara Barat', '97465');
INSERT INTO `tb_ro_cities` VALUES (262, 27, 'Kabupaten Mamasa', '91362');
INSERT INTO `tb_ro_cities` VALUES (263, 24, 'Kabupaten Mamberamo Raya', '99381');
INSERT INTO `tb_ro_cities` VALUES (264, 24, 'Kabupaten Mamberamo Tengah', '99553');
INSERT INTO `tb_ro_cities` VALUES (265, 27, 'Kabupaten Mamuju', '91519');
INSERT INTO `tb_ro_cities` VALUES (266, 27, 'Kabupaten Mamuju Utara', '91571');
INSERT INTO `tb_ro_cities` VALUES (267, 31, 'Kota Manado', '95247');
INSERT INTO `tb_ro_cities` VALUES (268, 34, 'Kabupaten Mandailing Natal', '22916');
INSERT INTO `tb_ro_cities` VALUES (269, 23, 'Kabupaten Manggarai', '86551');
INSERT INTO `tb_ro_cities` VALUES (270, 23, 'Kabupaten Manggarai Barat', '86711');
INSERT INTO `tb_ro_cities` VALUES (271, 23, 'Kabupaten Manggarai Timur', '86811');
INSERT INTO `tb_ro_cities` VALUES (272, 25, 'Kabupaten Manokwari', '98311');
INSERT INTO `tb_ro_cities` VALUES (273, 25, 'Kabupaten Manokwari Selatan', '98355');
INSERT INTO `tb_ro_cities` VALUES (274, 24, 'Kabupaten Mappi', '99853');
INSERT INTO `tb_ro_cities` VALUES (275, 28, 'Kabupaten Maros', '90511');
INSERT INTO `tb_ro_cities` VALUES (276, 22, 'Kota Mataram', '83131');
INSERT INTO `tb_ro_cities` VALUES (277, 25, 'Kabupaten Maybrat', '98051');
INSERT INTO `tb_ro_cities` VALUES (278, 34, 'Kota Medan', '20228');
INSERT INTO `tb_ro_cities` VALUES (279, 12, 'Kabupaten Melawi', '78619');
INSERT INTO `tb_ro_cities` VALUES (280, 8, 'Kabupaten Merangin', '37319');
INSERT INTO `tb_ro_cities` VALUES (281, 24, 'Kabupaten Merauke', '99613');
INSERT INTO `tb_ro_cities` VALUES (282, 18, 'Kabupaten Mesuji', '34911');
INSERT INTO `tb_ro_cities` VALUES (283, 18, 'Kota Metro', '34111');
INSERT INTO `tb_ro_cities` VALUES (284, 24, 'Kabupaten Mimika', '99962');
INSERT INTO `tb_ro_cities` VALUES (285, 31, 'Kabupaten Minahasa', '95614');
INSERT INTO `tb_ro_cities` VALUES (286, 31, 'Kabupaten Minahasa Selatan', '95914');
INSERT INTO `tb_ro_cities` VALUES (287, 31, 'Kabupaten Minahasa Tenggara', '95995');
INSERT INTO `tb_ro_cities` VALUES (288, 31, 'Kabupaten Minahasa Utara', '95316');
INSERT INTO `tb_ro_cities` VALUES (289, 11, 'Kabupaten Mojokerto', '61382');
INSERT INTO `tb_ro_cities` VALUES (290, 11, 'Kota Mojokerto', '61316');
INSERT INTO `tb_ro_cities` VALUES (291, 29, 'Kabupaten Morowali', '94911');
INSERT INTO `tb_ro_cities` VALUES (292, 33, 'Kabupaten Muara Enim', '31315');
INSERT INTO `tb_ro_cities` VALUES (293, 8, 'Kabupaten Muaro Jambi', '36311');
INSERT INTO `tb_ro_cities` VALUES (294, 4, 'Kabupaten Muko Muko', '38715');
INSERT INTO `tb_ro_cities` VALUES (295, 30, 'Kabupaten Muna', '93611');
INSERT INTO `tb_ro_cities` VALUES (296, 14, 'Kabupaten Murung Raya', '73911');
INSERT INTO `tb_ro_cities` VALUES (297, 33, 'Kabupaten Musi Banyuasin', '30719');
INSERT INTO `tb_ro_cities` VALUES (298, 33, 'Kabupaten Musi Rawas', '31661');
INSERT INTO `tb_ro_cities` VALUES (299, 24, 'Kabupaten Nabire', '98816');
INSERT INTO `tb_ro_cities` VALUES (300, 21, 'Kabupaten Nagan Raya', '23674');
INSERT INTO `tb_ro_cities` VALUES (301, 23, 'Kabupaten Nagekeo', '86911');
INSERT INTO `tb_ro_cities` VALUES (302, 17, 'Kabupaten Natuna', '29711');
INSERT INTO `tb_ro_cities` VALUES (303, 24, 'Kabupaten Nduga', '99541');
INSERT INTO `tb_ro_cities` VALUES (304, 23, 'Kabupaten Ngada', '86413');
INSERT INTO `tb_ro_cities` VALUES (305, 11, 'Kabupaten Nganjuk', '64414');
INSERT INTO `tb_ro_cities` VALUES (306, 11, 'Kabupaten Ngawi', '63219');
INSERT INTO `tb_ro_cities` VALUES (307, 34, 'Kabupaten Nias', '22876');
INSERT INTO `tb_ro_cities` VALUES (308, 34, 'Kabupaten Nias Barat', '22895');
INSERT INTO `tb_ro_cities` VALUES (309, 34, 'Kabupaten Nias Selatan', '22865');
INSERT INTO `tb_ro_cities` VALUES (310, 34, 'Kabupaten Nias Utara', '22856');
INSERT INTO `tb_ro_cities` VALUES (311, 16, 'Kabupaten Nunukan', '77421');
INSERT INTO `tb_ro_cities` VALUES (312, 33, 'Kabupaten Ogan Ilir', '30811');
INSERT INTO `tb_ro_cities` VALUES (313, 33, 'Kabupaten Ogan Komering Ilir', '30618');
INSERT INTO `tb_ro_cities` VALUES (314, 33, 'Kabupaten Ogan Komering Ulu', '32112');
INSERT INTO `tb_ro_cities` VALUES (315, 33, 'Kabupaten Ogan Komering Ulu Selatan', '32211');
INSERT INTO `tb_ro_cities` VALUES (316, 33, 'Kabupaten Ogan Komering Ulu Timur', '32312');
INSERT INTO `tb_ro_cities` VALUES (317, 11, 'Kabupaten Pacitan', '63512');
INSERT INTO `tb_ro_cities` VALUES (318, 32, 'Kota Padang', '25112');
INSERT INTO `tb_ro_cities` VALUES (319, 34, 'Kabupaten Padang Lawas', '22763');
INSERT INTO `tb_ro_cities` VALUES (320, 34, 'Kabupaten Padang Lawas Utara', '22753');
INSERT INTO `tb_ro_cities` VALUES (321, 32, 'Kota Padang Panjang', '27122');
INSERT INTO `tb_ro_cities` VALUES (322, 32, 'Kabupaten Padang Pariaman', '25583');
INSERT INTO `tb_ro_cities` VALUES (323, 34, 'Kota Padang Sidempuan', '22727');
INSERT INTO `tb_ro_cities` VALUES (324, 33, 'Kota Pagar Alam', '31512');
INSERT INTO `tb_ro_cities` VALUES (325, 34, 'Kabupaten Pakpak Bharat', '22272');
INSERT INTO `tb_ro_cities` VALUES (326, 14, 'Kota Palangka Raya', '73112');
INSERT INTO `tb_ro_cities` VALUES (327, 33, 'Kota Palembang', '31512');
INSERT INTO `tb_ro_cities` VALUES (328, 28, 'Kota Palopo', '91911');
INSERT INTO `tb_ro_cities` VALUES (329, 29, 'Kota Palu', '94111');
INSERT INTO `tb_ro_cities` VALUES (330, 11, 'Kabupaten Pamekasan', '69319');
INSERT INTO `tb_ro_cities` VALUES (331, 3, 'Kabupaten Pandeglang', '42212');
INSERT INTO `tb_ro_cities` VALUES (332, 9, 'Kabupaten Pangandaran', '46511');
INSERT INTO `tb_ro_cities` VALUES (333, 28, 'Kabupaten Pangkajene Kepulauan', '90611');
INSERT INTO `tb_ro_cities` VALUES (334, 2, 'Kota Pangkal Pinang', '33115');
INSERT INTO `tb_ro_cities` VALUES (335, 24, 'Kabupaten Paniai', '98765');
INSERT INTO `tb_ro_cities` VALUES (336, 28, 'Kota Parepare', '91123');
INSERT INTO `tb_ro_cities` VALUES (337, 32, 'Kota Pariaman', '25511');
INSERT INTO `tb_ro_cities` VALUES (338, 29, 'Kabupaten Parigi Moutong', '94411');
INSERT INTO `tb_ro_cities` VALUES (339, 32, 'Kabupaten Pasaman', '26318');
INSERT INTO `tb_ro_cities` VALUES (340, 32, 'Kabupaten Pasaman Barat', '26511');
INSERT INTO `tb_ro_cities` VALUES (341, 15, 'Kabupaten Paser', '76211');
INSERT INTO `tb_ro_cities` VALUES (342, 11, 'Kabupaten Pasuruan', '67153');
INSERT INTO `tb_ro_cities` VALUES (343, 11, 'Kota Pasuruan', '67118');
INSERT INTO `tb_ro_cities` VALUES (344, 10, 'Kabupaten Pati', '59114');
INSERT INTO `tb_ro_cities` VALUES (345, 32, 'Kota Payakumbuh', '26213');
INSERT INTO `tb_ro_cities` VALUES (346, 25, 'Kabupaten Pegunungan Arfak', '98354');
INSERT INTO `tb_ro_cities` VALUES (347, 24, 'Kabupaten Pegunungan Bintang', '99573');
INSERT INTO `tb_ro_cities` VALUES (348, 10, 'Kabupaten Pekalongan', '51161');
INSERT INTO `tb_ro_cities` VALUES (349, 10, 'Kota Pekalongan', '51122');
INSERT INTO `tb_ro_cities` VALUES (350, 26, 'Kota Pekanbaru', '28112');
INSERT INTO `tb_ro_cities` VALUES (351, 26, 'Kabupaten Pelalawan', '28311');
INSERT INTO `tb_ro_cities` VALUES (352, 10, 'Kabupaten Pemalang', '52319');
INSERT INTO `tb_ro_cities` VALUES (353, 34, 'Kota Pematang Siantar', '21126');
INSERT INTO `tb_ro_cities` VALUES (354, 15, 'Kabupaten Penajam Paser Utara', '76311');
INSERT INTO `tb_ro_cities` VALUES (355, 18, 'Kabupaten Pesawaran', '35312');
INSERT INTO `tb_ro_cities` VALUES (356, 18, 'Kabupaten Pesisir Barat', '35974');
INSERT INTO `tb_ro_cities` VALUES (357, 32, 'Kabupaten Pesisir Selatan', '25611');
INSERT INTO `tb_ro_cities` VALUES (358, 21, 'Kabupaten Pidie', '24116');
INSERT INTO `tb_ro_cities` VALUES (359, 21, 'Kabupaten Pidie Jaya', '24186');
INSERT INTO `tb_ro_cities` VALUES (360, 28, 'Kabupaten Pinrang', '91251');
INSERT INTO `tb_ro_cities` VALUES (361, 7, 'Kabupaten Pohuwato', '96419');
INSERT INTO `tb_ro_cities` VALUES (362, 27, 'Kabupaten Polewali Mandar', '91311');
INSERT INTO `tb_ro_cities` VALUES (363, 11, 'Kabupaten Ponorogo', '63411');
INSERT INTO `tb_ro_cities` VALUES (364, 12, 'Kabupaten Pontianak', '78971');
INSERT INTO `tb_ro_cities` VALUES (365, 12, 'Kota Pontianak', '78112');
INSERT INTO `tb_ro_cities` VALUES (366, 29, 'Kabupaten Poso', '94615');
INSERT INTO `tb_ro_cities` VALUES (367, 33, 'Kota Prabumulih', '31121');
INSERT INTO `tb_ro_cities` VALUES (368, 18, 'Kabupaten Pringsewu', '35719');
INSERT INTO `tb_ro_cities` VALUES (369, 11, 'Kabupaten Probolinggo', '67282');
INSERT INTO `tb_ro_cities` VALUES (370, 11, 'Kota Probolinggo', '67215');
INSERT INTO `tb_ro_cities` VALUES (371, 14, 'Kabupaten Pulang Pisau', '74811');
INSERT INTO `tb_ro_cities` VALUES (372, 20, 'Kabupaten Pulau Morotai', '97771');
INSERT INTO `tb_ro_cities` VALUES (373, 24, 'Kabupaten Puncak', '98981');
INSERT INTO `tb_ro_cities` VALUES (374, 24, 'Kabupaten Puncak Jaya', '98979');
INSERT INTO `tb_ro_cities` VALUES (375, 10, 'Kabupaten Purbalingga', '53312');
INSERT INTO `tb_ro_cities` VALUES (376, 9, 'Kabupaten Purwakarta', '41119');
INSERT INTO `tb_ro_cities` VALUES (377, 10, 'Kabupaten Purworejo', '54111');
INSERT INTO `tb_ro_cities` VALUES (378, 25, 'Kabupaten Raja Ampat', '98489');
INSERT INTO `tb_ro_cities` VALUES (379, 4, 'Kabupaten Rejang Lebong', '39112');
INSERT INTO `tb_ro_cities` VALUES (380, 10, 'Kabupaten Rembang', '59219');
INSERT INTO `tb_ro_cities` VALUES (381, 26, 'Kabupaten Rokan Hilir', '28992');
INSERT INTO `tb_ro_cities` VALUES (382, 26, 'Kabupaten Rokan Hulu', '28511');
INSERT INTO `tb_ro_cities` VALUES (383, 23, 'Kabupaten Rote Ndao', '85982');
INSERT INTO `tb_ro_cities` VALUES (384, 21, 'Kota Sabang', '23512');
INSERT INTO `tb_ro_cities` VALUES (385, 23, 'Kabupaten Sabu Raijua', '85391');
INSERT INTO `tb_ro_cities` VALUES (386, 10, 'Kota Salatiga', '50711');
INSERT INTO `tb_ro_cities` VALUES (387, 15, 'Kota Samarinda', '75133');
INSERT INTO `tb_ro_cities` VALUES (388, 12, 'Kabupaten Sambas', '79453');
INSERT INTO `tb_ro_cities` VALUES (389, 34, 'Kabupaten Samosir', '22392');
INSERT INTO `tb_ro_cities` VALUES (390, 11, 'Kabupaten Sampang', '69219');
INSERT INTO `tb_ro_cities` VALUES (391, 12, 'Kabupaten Sanggau', '78557');
INSERT INTO `tb_ro_cities` VALUES (392, 24, 'Kabupaten Sarmi', '99373');
INSERT INTO `tb_ro_cities` VALUES (393, 8, 'Kabupaten Sarolangun', '37419');
INSERT INTO `tb_ro_cities` VALUES (394, 32, 'Kota Sawah Lunto', '27416');
INSERT INTO `tb_ro_cities` VALUES (395, 12, 'Kabupaten Sekadau', '79583');
INSERT INTO `tb_ro_cities` VALUES (396, 28, 'Kabupaten Selayar (Kepulauan Selayar)', '92812');
INSERT INTO `tb_ro_cities` VALUES (397, 4, 'Kabupaten Seluma', '38811');
INSERT INTO `tb_ro_cities` VALUES (398, 10, 'Kabupaten Semarang', '50511');
INSERT INTO `tb_ro_cities` VALUES (399, 10, 'Kota Semarang', '50135');
INSERT INTO `tb_ro_cities` VALUES (400, 19, 'Kabupaten Seram Bagian Barat', '97561');
INSERT INTO `tb_ro_cities` VALUES (401, 19, 'Kabupaten Seram Bagian Timur', '97581');
INSERT INTO `tb_ro_cities` VALUES (402, 3, 'Kabupaten Serang', '42182');
INSERT INTO `tb_ro_cities` VALUES (403, 3, 'Kota Serang', '42111');
INSERT INTO `tb_ro_cities` VALUES (404, 34, 'Kabupaten Serdang Bedagai', '20915');
INSERT INTO `tb_ro_cities` VALUES (405, 14, 'Kabupaten Seruyan', '74211');
INSERT INTO `tb_ro_cities` VALUES (406, 26, 'Kabupaten Siak', '28623');
INSERT INTO `tb_ro_cities` VALUES (407, 34, 'Kota Sibolga', '22522');
INSERT INTO `tb_ro_cities` VALUES (408, 28, 'Kabupaten Sidenreng Rappang/Rapang', '91613');
INSERT INTO `tb_ro_cities` VALUES (409, 11, 'Kabupaten Sidoarjo', '61219');
INSERT INTO `tb_ro_cities` VALUES (410, 29, 'Kabupaten Sigi', '94364');
INSERT INTO `tb_ro_cities` VALUES (411, 32, 'Kabupaten Sijunjung (Sawah Lunto Sijunjung)', '27511');
INSERT INTO `tb_ro_cities` VALUES (412, 23, 'Kabupaten Sikka', '86121');
INSERT INTO `tb_ro_cities` VALUES (413, 34, 'Kabupaten Simalungun', '21162');
INSERT INTO `tb_ro_cities` VALUES (414, 21, 'Kabupaten Simeulue', '23891');
INSERT INTO `tb_ro_cities` VALUES (415, 12, 'Kota Singkawang', '79117');
INSERT INTO `tb_ro_cities` VALUES (416, 28, 'Kabupaten Sinjai', '92615');
INSERT INTO `tb_ro_cities` VALUES (417, 12, 'Kabupaten Sintang', '78619');
INSERT INTO `tb_ro_cities` VALUES (418, 11, 'Kabupaten Situbondo', '68316');
INSERT INTO `tb_ro_cities` VALUES (419, 5, 'Kabupaten Sleman', '55513');
INSERT INTO `tb_ro_cities` VALUES (420, 32, 'Kabupaten Solok', '27365');
INSERT INTO `tb_ro_cities` VALUES (421, 32, 'Kota Solok', '27315');
INSERT INTO `tb_ro_cities` VALUES (422, 32, 'Kabupaten Solok Selatan', '27779');
INSERT INTO `tb_ro_cities` VALUES (423, 28, 'Kabupaten Soppeng', '90812');
INSERT INTO `tb_ro_cities` VALUES (424, 25, 'Kabupaten Sorong', '98431');
INSERT INTO `tb_ro_cities` VALUES (425, 25, 'Kota Sorong', '98411');
INSERT INTO `tb_ro_cities` VALUES (426, 25, 'Kabupaten Sorong Selatan', '98454');
INSERT INTO `tb_ro_cities` VALUES (427, 10, 'Kabupaten Sragen', '57211');
INSERT INTO `tb_ro_cities` VALUES (428, 9, 'Kabupaten Subang', '41215');
INSERT INTO `tb_ro_cities` VALUES (429, 21, 'Kota Subulussalam', '24882');
INSERT INTO `tb_ro_cities` VALUES (430, 9, 'Kabupaten Sukabumi', '43311');
INSERT INTO `tb_ro_cities` VALUES (431, 9, 'Kota Sukabumi', '43114');
INSERT INTO `tb_ro_cities` VALUES (432, 14, 'Kabupaten Sukamara', '74712');
INSERT INTO `tb_ro_cities` VALUES (433, 10, 'Kabupaten Sukoharjo', '57514');
INSERT INTO `tb_ro_cities` VALUES (434, 23, 'Kabupaten Sumba Barat', '87219');
INSERT INTO `tb_ro_cities` VALUES (435, 23, 'Kabupaten Sumba Barat Daya', '87453');
INSERT INTO `tb_ro_cities` VALUES (436, 23, 'Kabupaten Sumba Tengah', '87358');
INSERT INTO `tb_ro_cities` VALUES (437, 23, 'Kabupaten Sumba Timur', '87112');
INSERT INTO `tb_ro_cities` VALUES (438, 22, 'Kabupaten Sumbawa', '84315');
INSERT INTO `tb_ro_cities` VALUES (439, 22, 'Kabupaten Sumbawa Barat', '84419');
INSERT INTO `tb_ro_cities` VALUES (440, 9, 'Kabupaten Sumedang', '45326');
INSERT INTO `tb_ro_cities` VALUES (441, 11, 'Kabupaten Sumenep', '69413');
INSERT INTO `tb_ro_cities` VALUES (442, 8, 'Kota Sungaipenuh', '37113');
INSERT INTO `tb_ro_cities` VALUES (443, 24, 'Kabupaten Supiori', '98164');
INSERT INTO `tb_ro_cities` VALUES (444, 11, 'Kota Surabaya', '60119');
INSERT INTO `tb_ro_cities` VALUES (445, 10, 'Kota Surakarta (Solo)', '57113');
INSERT INTO `tb_ro_cities` VALUES (446, 13, 'Kabupaten Tabalong', '71513');
INSERT INTO `tb_ro_cities` VALUES (447, 1, 'Kabupaten Tabanan', '82119');
INSERT INTO `tb_ro_cities` VALUES (448, 28, 'Kabupaten Takalar', '92212');
INSERT INTO `tb_ro_cities` VALUES (449, 25, 'Kabupaten Tambrauw', '98475');
INSERT INTO `tb_ro_cities` VALUES (450, 16, 'Kabupaten Tana Tidung', '77611');
INSERT INTO `tb_ro_cities` VALUES (451, 28, 'Kabupaten Tana Toraja', '91819');
INSERT INTO `tb_ro_cities` VALUES (452, 13, 'Kabupaten Tanah Bumbu', '72211');
INSERT INTO `tb_ro_cities` VALUES (453, 32, 'Kabupaten Tanah Datar', '27211');
INSERT INTO `tb_ro_cities` VALUES (454, 13, 'Kabupaten Tanah Laut', '70811');
INSERT INTO `tb_ro_cities` VALUES (455, 3, 'Kabupaten Tangerang', '15914');
INSERT INTO `tb_ro_cities` VALUES (456, 3, 'Kota Tangerang', '15111');
INSERT INTO `tb_ro_cities` VALUES (457, 3, 'Kota Tangerang Selatan', '15332');
INSERT INTO `tb_ro_cities` VALUES (458, 18, 'Kabupaten Tanggamus', '35619');
INSERT INTO `tb_ro_cities` VALUES (459, 34, 'Kota Tanjung Balai', '21321');
INSERT INTO `tb_ro_cities` VALUES (460, 8, 'Kabupaten Tanjung Jabung Barat', '36513');
INSERT INTO `tb_ro_cities` VALUES (461, 8, 'Kabupaten Tanjung Jabung Timur', '36719');
INSERT INTO `tb_ro_cities` VALUES (462, 17, 'Kota Tanjung Pinang', '29111');
INSERT INTO `tb_ro_cities` VALUES (463, 34, 'Kabupaten Tapanuli Selatan', '22742');
INSERT INTO `tb_ro_cities` VALUES (464, 34, 'Kabupaten Tapanuli Tengah', '22611');
INSERT INTO `tb_ro_cities` VALUES (465, 34, 'Kabupaten Tapanuli Utara', '22414');
INSERT INTO `tb_ro_cities` VALUES (466, 13, 'Kabupaten Tapin', '71119');
INSERT INTO `tb_ro_cities` VALUES (467, 16, 'Kota Tarakan', '77114');
INSERT INTO `tb_ro_cities` VALUES (468, 9, 'Kabupaten Tasikmalaya', '46411');
INSERT INTO `tb_ro_cities` VALUES (469, 9, 'Kota Tasikmalaya', '46116');
INSERT INTO `tb_ro_cities` VALUES (470, 34, 'Kota Tebing Tinggi', '20632');
INSERT INTO `tb_ro_cities` VALUES (471, 8, 'Kabupaten Tebo', '37519');
INSERT INTO `tb_ro_cities` VALUES (472, 10, 'Kabupaten Tegal', '52419');
INSERT INTO `tb_ro_cities` VALUES (473, 10, 'Kota Tegal', '52114');
INSERT INTO `tb_ro_cities` VALUES (474, 25, 'Kabupaten Teluk Bintuni', '98551');
INSERT INTO `tb_ro_cities` VALUES (475, 25, 'Kabupaten Teluk Wondama', '98591');
INSERT INTO `tb_ro_cities` VALUES (476, 10, 'Kabupaten Temanggung', '56212');
INSERT INTO `tb_ro_cities` VALUES (477, 20, 'Kota Ternate', '97714');
INSERT INTO `tb_ro_cities` VALUES (478, 20, 'Kota Tidore Kepulauan', '97815');
INSERT INTO `tb_ro_cities` VALUES (479, 23, 'Kabupaten Timor Tengah Selatan', '85562');
INSERT INTO `tb_ro_cities` VALUES (480, 23, 'Kabupaten Timor Tengah Utara', '85612');
INSERT INTO `tb_ro_cities` VALUES (481, 34, 'Kabupaten Toba Samosir', '22316');
INSERT INTO `tb_ro_cities` VALUES (482, 29, 'Kabupaten Tojo Una-Una', '94683');
INSERT INTO `tb_ro_cities` VALUES (483, 29, 'Kabupaten Toli-Toli', '94542');
INSERT INTO `tb_ro_cities` VALUES (484, 24, 'Kabupaten Tolikara', '99411');
INSERT INTO `tb_ro_cities` VALUES (485, 31, 'Kota Tomohon', '95416');
INSERT INTO `tb_ro_cities` VALUES (486, 28, 'Kabupaten Toraja Utara', '91831');
INSERT INTO `tb_ro_cities` VALUES (487, 11, 'Kabupaten Trenggalek', '66312');
INSERT INTO `tb_ro_cities` VALUES (488, 19, 'Kota Tual', '97612');
INSERT INTO `tb_ro_cities` VALUES (489, 11, 'Kabupaten Tuban', '62319');
INSERT INTO `tb_ro_cities` VALUES (490, 18, 'Kabupaten Tulang Bawang', '34613');
INSERT INTO `tb_ro_cities` VALUES (491, 18, 'Kabupaten Tulang Bawang Barat', '34419');
INSERT INTO `tb_ro_cities` VALUES (492, 11, 'Kabupaten Tulungagung', '66212');
INSERT INTO `tb_ro_cities` VALUES (493, 28, 'Kabupaten Wajo', '90911');
INSERT INTO `tb_ro_cities` VALUES (494, 30, 'Kabupaten Wakatobi', '93791');
INSERT INTO `tb_ro_cities` VALUES (495, 24, 'Kabupaten Waropen', '98269');
INSERT INTO `tb_ro_cities` VALUES (496, 18, 'Kabupaten Way Kanan', '34711');
INSERT INTO `tb_ro_cities` VALUES (497, 10, 'Kabupaten Wonogiri', '57619');
INSERT INTO `tb_ro_cities` VALUES (498, 10, 'Kabupaten Wonosobo', '56311');
INSERT INTO `tb_ro_cities` VALUES (499, 24, 'Kabupaten Yahukimo', '99041');
INSERT INTO `tb_ro_cities` VALUES (500, 24, 'Kabupaten Yalimo', '99481');
INSERT INTO `tb_ro_cities` VALUES (501, 5, 'Kota Yogyakarta', '55222');

-- ----------------------------
-- Table structure for tb_ro_couriers
-- ----------------------------
DROP TABLE IF EXISTS `tb_ro_couriers`;
CREATE TABLE `tb_ro_couriers`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `code_courier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `name_courier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_ro_couriers
-- ----------------------------
INSERT INTO `tb_ro_couriers` VALUES (1, 'jne', 'jne');

-- ----------------------------
-- Table structure for tb_ro_provinces
-- ----------------------------
DROP TABLE IF EXISTS `tb_ro_provinces`;
CREATE TABLE `tb_ro_provinces`  (
  `province_id` int NOT NULL,
  `province_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`province_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_ro_provinces
-- ----------------------------
INSERT INTO `tb_ro_provinces` VALUES (1, 'Bali');
INSERT INTO `tb_ro_provinces` VALUES (2, 'Bangka Belitung');
INSERT INTO `tb_ro_provinces` VALUES (3, 'Banten');
INSERT INTO `tb_ro_provinces` VALUES (4, 'Bengkulu');
INSERT INTO `tb_ro_provinces` VALUES (5, 'DI Yogyakarta');
INSERT INTO `tb_ro_provinces` VALUES (6, 'DKI Jakarta');
INSERT INTO `tb_ro_provinces` VALUES (7, 'Gorontalo');
INSERT INTO `tb_ro_provinces` VALUES (8, 'Jambi');
INSERT INTO `tb_ro_provinces` VALUES (9, 'Jawa Barat');
INSERT INTO `tb_ro_provinces` VALUES (10, 'Jawa Tengah');
INSERT INTO `tb_ro_provinces` VALUES (11, 'Jawa Timur');
INSERT INTO `tb_ro_provinces` VALUES (12, 'Kalimantan Barat');
INSERT INTO `tb_ro_provinces` VALUES (13, 'Kalimantan Selatan');
INSERT INTO `tb_ro_provinces` VALUES (14, 'Kalimantan Tengah');
INSERT INTO `tb_ro_provinces` VALUES (15, 'Kalimantan Timur');
INSERT INTO `tb_ro_provinces` VALUES (16, 'Kalimantan Utara');
INSERT INTO `tb_ro_provinces` VALUES (17, 'Kepulauan Riau');
INSERT INTO `tb_ro_provinces` VALUES (18, 'Lampung');
INSERT INTO `tb_ro_provinces` VALUES (19, 'Maluku');
INSERT INTO `tb_ro_provinces` VALUES (20, 'Maluku Utara');
INSERT INTO `tb_ro_provinces` VALUES (21, 'Nanggroe Aceh Darussalam (NAD)');
INSERT INTO `tb_ro_provinces` VALUES (22, 'Nusa Tenggara Barat (NTB)');
INSERT INTO `tb_ro_provinces` VALUES (23, 'Nusa Tenggara Timur (NTT)');
INSERT INTO `tb_ro_provinces` VALUES (24, 'Papua');
INSERT INTO `tb_ro_provinces` VALUES (25, 'Papua Barat');
INSERT INTO `tb_ro_provinces` VALUES (26, 'Riau');
INSERT INTO `tb_ro_provinces` VALUES (27, 'Sulawesi Barat');
INSERT INTO `tb_ro_provinces` VALUES (28, 'Sulawesi Selatan');
INSERT INTO `tb_ro_provinces` VALUES (29, 'Sulawesi Tengah');
INSERT INTO `tb_ro_provinces` VALUES (30, 'Sulawesi Tenggara');
INSERT INTO `tb_ro_provinces` VALUES (31, 'Sulawesi Utara');
INSERT INTO `tb_ro_provinces` VALUES (32, 'Sumatera Barat');
INSERT INTO `tb_ro_provinces` VALUES (33, 'Sumatera Selatan');
INSERT INTO `tb_ro_provinces` VALUES (34, 'Sumatera Utara');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'test', '', 'test', NULL, NULL, NULL, 'test');

SET FOREIGN_KEY_CHECKS = 1;
