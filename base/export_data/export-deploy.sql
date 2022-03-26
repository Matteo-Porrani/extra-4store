-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 26, 2022 at 05:32 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `extra`
--

-- --------------------------------------------------------

--
-- Table structure for table `advert`
--

CREATE TABLE `advert` (
  `advId` int(11) UNSIGNED NOT NULL,
  `advProductId` int(11) UNSIGNED DEFAULT NULL,
  `advGender` enum('M','W') NOT NULL,
  `advPicture` varchar(100) DEFAULT NULL,
  `advOrder` int(2) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `advert`
--

INSERT INTO `advert` (`advId`, `advProductId`, `advGender`, `advPicture`, `advOrder`) VALUES
(1, 46, 'M', 'advMan1', 1),
(2, 14, 'M', 'advMan2', 2),
(3, 53, 'M', 'advMan3', 3),
(4, 12, 'W', 'advWom1', 1),
(5, 4, 'W', 'advWom2', 2),
(6, 22, 'W', 'advWom3', 3),
(7, 30, 'W', 'advWom4', 4);

-- --------------------------------------------------------

--
-- Table structure for table `bindProductToColor`
--

CREATE TABLE `bindProductToColor` (
  `bind1Id` int(11) UNSIGNED NOT NULL,
  `bind1ProductId` int(11) UNSIGNED NOT NULL,
  `bind1ColorId` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bindProductToColor`
--

INSERT INTO `bindProductToColor` (`bind1Id`, `bind1ProductId`, `bind1ColorId`) VALUES
(5, 10, 10),
(6, 10, 11),
(7, 10, 6),
(16, 13, 2),
(17, 13, 4),
(18, 13, 6),
(19, 13, 11),
(20, 14, 2),
(21, 14, 4),
(26, 47, 2),
(27, 47, 3),
(28, 47, 5),
(29, 54, 1),
(30, 15, 2),
(31, 15, 6),
(32, 15, 13),
(33, 16, 2),
(34, 16, 4),
(35, 16, 4),
(36, 17, 3),
(37, 17, 5),
(38, 17, 8),
(39, 18, 2),
(40, 18, 13),
(47, 21, 2),
(48, 21, 4),
(49, 21, 11),
(50, 22, 2),
(51, 23, 2),
(52, 23, 6),
(56, 52, 4),
(57, 52, 11),
(58, 3, 6),
(62, 24, 2),
(63, 24, 6),
(64, 26, 1),
(69, 28, 2),
(70, 28, 12),
(71, 28, 13),
(72, 29, 5),
(73, 29, 6),
(77, 44, 6),
(78, 44, 11),
(79, 45, 4),
(80, 45, 8),
(81, 45, 11),
(82, 51, 3),
(83, 51, 4),
(84, 51, 6),
(85, 51, 7),
(86, 51, 8),
(87, 30, 2),
(88, 30, 6),
(89, 30, 13),
(90, 31, 2),
(91, 31, 11),
(92, 32, 3),
(93, 32, 13),
(101, 48, 2),
(102, 48, 4),
(103, 48, 13),
(104, 53, 2),
(105, 53, 11),
(106, 53, 11),
(107, 40, 2),
(108, 40, 3),
(109, 40, 4),
(110, 40, 6),
(111, 41, 1),
(112, 42, 2),
(113, 42, 8),
(114, 43, 3),
(115, 43, 5),
(116, 43, 10),
(117, 50, 5),
(118, 50, 6),
(119, 50, 7),
(120, 50, 12),
(121, 56, 3),
(122, 56, 5),
(123, 55, 2),
(124, 55, 9),
(125, 55, 13),
(135, 73, 3),
(136, 73, 5),
(137, 73, 9),
(138, 73, 12),
(141, 75, 2),
(142, 75, 3),
(143, 75, 4),
(144, 75, 5),
(145, 75, 11),
(146, 76, 2),
(147, 76, 4),
(148, 76, 10),
(177, 74, 4),
(178, 74, 9),
(182, 77, 7),
(183, 77, 8),
(184, 77, 10),
(185, 77, 13),
(186, 27, 2),
(187, 27, 4),
(188, 27, 7),
(189, 27, 10),
(190, 27, 13),
(191, 2, 4),
(192, 2, 13),
(195, 20, 2),
(196, 20, 11),
(197, 49, 3),
(198, 49, 5),
(199, 49, 8),
(200, 78, 3),
(201, 78, 4),
(202, 78, 9),
(204, 79, 1),
(205, 80, 2),
(206, 80, 4),
(207, 80, 11),
(208, 81, 2),
(209, 81, 3),
(210, 81, 8),
(211, 81, 9),
(212, 82, 2),
(213, 82, 12),
(214, 25, 2),
(215, 25, 4),
(216, 25, 11),
(217, 1, 2),
(218, 1, 3),
(219, 1, 8),
(220, 4, 3),
(221, 4, 5),
(222, 4, 7),
(223, 33, 3),
(224, 33, 5),
(225, 33, 13),
(228, 34, 3),
(229, 34, 7),
(230, 83, 3),
(231, 83, 4),
(232, 83, 9),
(233, 35, 2),
(234, 35, 7),
(235, 11, 2),
(236, 11, 3),
(237, 11, 4),
(238, 11, 8),
(239, 19, 4),
(240, 19, 11),
(241, 12, 3),
(242, 12, 4),
(243, 12, 5),
(244, 12, 9),
(245, 46, 2),
(246, 46, 6),
(247, 46, 7),
(248, 46, 8);

-- --------------------------------------------------------

--
-- Table structure for table `bindProductToSize`
--

CREATE TABLE `bindProductToSize` (
  `bind2Id` int(11) UNSIGNED NOT NULL,
  `bind2ProductId` int(11) UNSIGNED NOT NULL,
  `bind2SizeId` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bindProductToSize`
--

INSERT INTO `bindProductToSize` (`bind2Id`, `bind2ProductId`, `bind2SizeId`) VALUES
(7, 10, 2),
(8, 10, 3),
(9, 10, 4),
(10, 10, 5),
(11, 10, 6),
(12, 10, 7),
(25, 13, 2),
(26, 13, 3),
(27, 13, 4),
(28, 13, 5),
(29, 13, 6),
(30, 13, 7),
(31, 14, 2),
(32, 14, 3),
(33, 14, 4),
(34, 14, 5),
(35, 14, 6),
(36, 14, 7),
(43, 47, 2),
(44, 47, 3),
(45, 47, 4),
(46, 47, 5),
(47, 47, 6),
(48, 47, 7),
(49, 54, 2),
(50, 54, 3),
(51, 54, 4),
(52, 54, 5),
(53, 54, 6),
(54, 54, 7),
(55, 15, 3),
(56, 15, 4),
(57, 15, 5),
(58, 15, 6),
(59, 16, 3),
(60, 16, 4),
(61, 16, 5),
(62, 16, 6),
(63, 17, 3),
(64, 17, 4),
(65, 17, 5),
(66, 17, 6),
(67, 18, 3),
(68, 18, 4),
(69, 18, 5),
(70, 18, 6),
(92, 21, 2),
(93, 21, 3),
(94, 21, 4),
(95, 21, 5),
(96, 21, 6),
(97, 21, 7),
(98, 21, 8),
(99, 22, 2),
(100, 22, 3),
(101, 22, 4),
(102, 22, 5),
(103, 22, 6),
(104, 22, 7),
(105, 22, 8),
(106, 23, 2),
(107, 23, 3),
(108, 23, 4),
(109, 23, 5),
(110, 23, 6),
(111, 23, 7),
(112, 23, 8),
(120, 52, 2),
(121, 52, 3),
(122, 52, 4),
(123, 52, 5),
(124, 52, 6),
(125, 52, 7),
(126, 52, 8),
(127, 3, 2),
(128, 3, 3),
(129, 3, 4),
(130, 3, 5),
(131, 3, 6),
(137, 24, 2),
(138, 24, 3),
(139, 24, 4),
(140, 24, 5),
(141, 24, 6),
(142, 26, 2),
(143, 26, 3),
(144, 26, 4),
(145, 26, 5),
(146, 26, 6),
(147, 26, 7),
(154, 28, 2),
(155, 28, 3),
(156, 28, 4),
(157, 28, 5),
(158, 28, 6),
(159, 28, 7),
(160, 29, 2),
(161, 29, 3),
(162, 29, 4),
(163, 29, 5),
(164, 29, 6),
(165, 29, 7),
(172, 44, 2),
(173, 44, 3),
(174, 44, 4),
(175, 44, 5),
(176, 44, 6),
(177, 44, 7),
(178, 45, 2),
(179, 45, 3),
(180, 45, 4),
(181, 45, 5),
(182, 45, 6),
(183, 45, 7),
(184, 51, 2),
(185, 51, 3),
(186, 51, 4),
(187, 51, 5),
(188, 51, 6),
(189, 51, 7),
(190, 30, 14),
(191, 30, 15),
(192, 30, 16),
(193, 30, 17),
(194, 30, 18),
(195, 30, 19),
(196, 30, 20),
(197, 30, 21),
(198, 30, 22),
(199, 30, 23),
(200, 30, 24),
(201, 31, 14),
(202, 31, 15),
(203, 31, 16),
(204, 31, 17),
(205, 31, 18),
(206, 31, 19),
(207, 31, 20),
(208, 31, 21),
(209, 31, 22),
(210, 31, 23),
(211, 31, 24),
(212, 32, 14),
(213, 32, 15),
(214, 32, 16),
(215, 32, 17),
(216, 32, 18),
(217, 32, 19),
(218, 32, 20),
(219, 32, 21),
(220, 32, 22),
(221, 32, 23),
(222, 32, 24),
(223, 48, 14),
(224, 48, 15),
(225, 48, 16),
(226, 48, 17),
(227, 48, 18),
(228, 48, 19),
(229, 48, 20),
(230, 48, 21),
(231, 48, 22),
(232, 48, 23),
(233, 48, 24),
(234, 53, 14),
(235, 53, 15),
(236, 53, 16),
(237, 53, 17),
(238, 53, 18),
(239, 53, 19),
(240, 53, 20),
(241, 53, 21),
(242, 53, 22),
(243, 53, 23),
(244, 53, 24),
(278, 40, 1),
(279, 41, 1),
(280, 42, 1),
(281, 43, 3),
(282, 43, 5),
(283, 50, 1),
(284, 56, 2),
(285, 56, 3),
(286, 56, 4),
(287, 56, 5),
(288, 56, 6),
(289, 56, 7),
(290, 55, 2),
(291, 55, 3),
(292, 55, 4),
(293, 55, 5),
(294, 55, 6),
(298, 73, 2),
(299, 73, 3),
(300, 73, 4),
(301, 73, 5),
(304, 75, 2),
(305, 75, 3),
(306, 75, 4),
(307, 75, 5),
(308, 75, 6),
(309, 76, 2),
(310, 76, 3),
(311, 76, 4),
(329, 74, 2),
(330, 74, 3),
(335, 77, 2),
(336, 77, 3),
(337, 77, 5),
(338, 77, 6),
(339, 27, 2),
(340, 27, 3),
(341, 27, 4),
(342, 27, 5),
(343, 27, 6),
(344, 27, 7),
(345, 27, 8),
(346, 2, 2),
(347, 2, 3),
(348, 2, 4),
(349, 2, 5),
(350, 2, 6),
(351, 2, 7),
(352, 2, 8),
(360, 20, 2),
(361, 20, 3),
(362, 20, 4),
(363, 20, 5),
(364, 20, 6),
(365, 20, 7),
(366, 20, 8),
(367, 49, 2),
(368, 49, 3),
(369, 49, 4),
(370, 49, 5),
(371, 49, 6),
(372, 49, 7),
(373, 78, 2),
(374, 78, 3),
(375, 78, 4),
(376, 78, 5),
(377, 78, 6),
(378, 78, 7),
(385, 79, 2),
(386, 79, 3),
(387, 79, 4),
(388, 79, 5),
(389, 79, 6),
(390, 79, 7),
(391, 80, 2),
(392, 80, 3),
(393, 80, 4),
(394, 80, 5),
(395, 80, 6),
(396, 80, 7),
(397, 81, 2),
(398, 81, 3),
(399, 81, 4),
(400, 81, 5),
(401, 81, 6),
(402, 81, 7),
(403, 82, 2),
(404, 82, 3),
(405, 82, 4),
(406, 82, 5),
(407, 82, 6),
(408, 82, 7),
(409, 25, 2),
(410, 25, 3),
(411, 25, 4),
(412, 25, 5),
(413, 25, 6),
(414, 25, 7),
(415, 25, 8),
(416, 1, 2),
(417, 1, 3),
(418, 1, 5),
(419, 1, 6),
(420, 1, 7),
(421, 4, 2),
(422, 4, 3),
(423, 4, 4),
(424, 4, 5),
(425, 4, 6),
(426, 33, 11),
(427, 33, 12),
(428, 33, 13),
(429, 33, 14),
(430, 33, 15),
(431, 33, 16),
(432, 33, 17),
(433, 33, 18),
(434, 33, 19),
(435, 33, 20),
(436, 33, 21),
(448, 34, 11),
(449, 34, 12),
(450, 34, 13),
(451, 34, 14),
(452, 34, 15),
(453, 34, 16),
(454, 34, 17),
(455, 34, 18),
(456, 34, 19),
(457, 34, 20),
(458, 34, 21),
(459, 83, 11),
(460, 83, 12),
(461, 83, 13),
(462, 83, 14),
(463, 83, 15),
(464, 83, 16),
(465, 83, 17),
(466, 83, 18),
(467, 83, 19),
(468, 35, 11),
(469, 35, 12),
(470, 35, 13),
(471, 35, 14),
(472, 35, 17),
(473, 35, 18),
(474, 35, 19),
(475, 11, 2),
(476, 11, 3),
(477, 11, 6),
(478, 11, 7),
(479, 19, 2),
(480, 19, 3),
(481, 19, 4),
(482, 19, 5),
(483, 19, 7),
(484, 19, 8),
(485, 12, 2),
(486, 12, 3),
(487, 12, 4),
(488, 12, 6),
(489, 46, 2),
(490, 46, 3),
(491, 46, 4),
(492, 46, 5),
(493, 46, 6),
(494, 46, 7);

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `braId` int(11) UNSIGNED NOT NULL,
  `braName` varchar(50) NOT NULL,
  `braDescription` varchar(500) DEFAULT NULL,
  `braCount` int(3) DEFAULT NULL,
  `braActive` enum('Y','N') NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`braId`, `braName`, `braDescription`, `braCount`, `braActive`) VALUES
(1, 'Ananas', NULL, 0, 'Y'),
(2, 'SuperBright', NULL, 0, 'Y'),
(3, 'Bull & Fear', NULL, 0, 'Y'),
(4, 'Quixilder', NULL, 0, 'Y'),
(5, 'The Sport Pace', NULL, 0, 'Y'),
(6, 'Ruwa', NULL, 0, 'Y'),
(7, 'The Noodles', NULL, 0, 'Y'),
(8, 'Jewis', NULL, 0, 'Y'),
(9, 'Five July', NULL, 0, 'Y'),
(10, 'Hinterland', NULL, 0, 'Y'),
(11, 'Mezigue&Molaire', NULL, NULL, 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `catId` int(11) UNSIGNED NOT NULL,
  `catIconId` int(11) UNSIGNED NOT NULL,
  `catName` varchar(50) NOT NULL,
  `catCount` int(3) DEFAULT NULL,
  `catActive` enum('Y','N') NOT NULL DEFAULT 'Y',
  `catOrder` int(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`catId`, `catIconId`, `catName`, `catCount`, `catActive`, `catOrder`) VALUES
(1, 1, 't-shirts', 0, 'Y', 0),
(2, 2, 'chemises', 0, 'Y', 0),
(3, 3, 'pantalons', 0, 'Y', 0),
(4, 4, 'sweats & pulls', 0, 'Y', 0),
(5, 5, 'robes', 0, 'Y', 0),
(6, 6, 'vestes', 0, 'Y', 0),
(7, 7, 'sportswear', 0, 'Y', 0),
(8, 8, 'chaussures', 0, 'Y', 0),
(9, 9, 'accessoires', 0, 'Y', 0);

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `colId` int(11) UNSIGNED NOT NULL,
  `colName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`colId`, `colName`) VALUES
(1, 'Multicolore'),
(2, 'Noir'),
(3, 'Blanc'),
(4, 'Gris'),
(5, 'Rose'),
(6, 'Rouge'),
(7, 'Jaune'),
(8, 'Orange'),
(9, 'Violet'),
(10, 'Vert'),
(11, 'Bleu'),
(12, 'Marine'),
(13, 'Marron');

-- --------------------------------------------------------

--
-- Table structure for table `icon`
--

CREATE TABLE `icon` (
  `icoId` int(11) UNSIGNED NOT NULL,
  `icoName` varchar(50) NOT NULL,
  `icoUrl` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `icon`
--

INSERT INTO `icon` (`icoId`, `icoName`, `icoUrl`) VALUES
(1, 'tshirt', 'tshirt2.png'),
(2, 'shirt', 'shirt.png'),
(3, 'trousers', 'trousers2.png'),
(4, 'sweater', 'sweater2.png'),
(5, 'dress', 'dress1.png'),
(6, 'jacket', 'jacket.png'),
(7, 'sportswear', 'basketball.png'),
(8, 'shoes', 'shoes.png'),
(9, 'accessories', 'cap2.png');

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `priId` int(11) UNSIGNED NOT NULL,
  `priAmount` decimal(6,2) NOT NULL DEFAULT '1.00',
  `priDescription` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`priId`, `priAmount`, `priDescription`) VALUES
(11, '10.99', NULL),
(12, '20.99', NULL),
(13, '50.99', NULL),
(14, '75.99', NULL),
(15, '115.99', NULL),
(16, '150.00', NULL),
(17, '210.00', NULL),
(18, '269.99', NULL),
(19, '345.00', NULL),
(20, '24.00', NULL),
(21, '29.99', NULL),
(22, '39.00', NULL),
(23, '45.90', NULL),
(24, '33.00', NULL),
(25, '80.00', NULL),
(26, '99.00', NULL),
(27, '160.99', NULL),
(28, '128.00', NULL),
(29, '180.99', NULL),
(30, '480.00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `proId` int(11) UNSIGNED NOT NULL,
  `proCategoryId` int(11) UNSIGNED NOT NULL,
  `proBrandId` int(11) UNSIGNED NOT NULL,
  `proPriceId` int(11) UNSIGNED NOT NULL,
  `proCode` char(12) DEFAULT NULL,
  `proName` varchar(50) NOT NULL,
  `proDescription` varchar(500) DEFAULT NULL,
  `proMainImg` varchar(100) DEFAULT 'productM_01.jpg',
  `proSubcat` varchar(50) DEFAULT NULL,
  `proGender` enum('M','W','U') NOT NULL DEFAULT 'U',
  `proDiscount` int(3) NOT NULL DEFAULT '0',
  `proRating` decimal(2,1) DEFAULT NULL,
  `proReviewCount` int(3) DEFAULT NULL,
  `proComments` varchar(500) DEFAULT NULL,
  `proSales` enum('Y','N') NOT NULL DEFAULT 'N',
  `proActive` enum('Y','N') NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`proId`, `proCategoryId`, `proBrandId`, `proPriceId`, `proCode`, `proName`, `proDescription`, `proMainImg`, `proSubcat`, `proGender`, `proDiscount`, `proRating`, `proReviewCount`, `proComments`, `proSales`, `proActive`) VALUES
(1, 1, 2, 22, '291.982.1832', 'Sweet Sunrise', 'je change encore la desc', 'productM_01.jpg', '-', 'M', 20, '4.6', 7, 'je change les commentaires', 'Y', 'Y'),
(2, 3, 2, 16, '537.825.8355', 'Fox Straight', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', '-', 'M', 30, '3.9', 21, '', 'Y', 'Y'),
(3, 5, 9, 27, '000.000.3428', 'Rose Rouge', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', NULL, 'W', 0, '4.8', 4, NULL, 'N', 'Y'),
(4, 5, 6, 17, '292.877.6421', 'Sweet Sunday', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', '-', 'W', 40, '4.5', 4, '', 'Y', 'Y'),
(10, 2, 1, 20, '452.928.2610', 'Joker', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_03.jpg', '-', 'M', 0, '4.5', 9, '', 'N', 'Y'),
(11, 1, 2, 23, '528.198.3719', 'Comet', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', '-', 'U', 30, '4.3', 19, '', 'Y', 'Y'),
(12, 1, 7, 14, '716.098.7811', 'LadyBird', 'L\'incontournable du printemps', 'productW_04.jpg', '-', 'W', 30, '4.8', 12, '', 'Y', 'Y'),
(13, 1, 10, 21, '982.529.6193', 'Brave Explorer', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', NULL, 'U', 0, '4.6', 8, NULL, 'N', 'Y'),
(14, 2, 4, 24, '320.611.8927', 'Apex 2', 'Le look urbain réiventé', 'productM_02.jpg', '-', 'M', 50, '4.8', 27, '', 'Y', 'Y'),
(15, 6, 3, 15, '639.098.9102', 'Crazy Life', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', NULL, 'M', 0, '4.5', 9, NULL, 'N', 'Y'),
(16, 6, 5, 16, '765.928.1127', 'Iris', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', NULL, 'M', 0, '4.3', 19, NULL, 'N', 'Y'),
(17, 6, 7, 17, '811.026.3802', 'Wonder7', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', NULL, 'W', 30, '4.9', 12, NULL, 'Y', 'Y'),
(18, 6, 7, 27, '627.192.2552', 'Purple Heart', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', NULL, 'W', 10, '4.9', 12, NULL, 'Y', 'Y'),
(19, 3, 8, 26, '382.811.7402', 'Docker', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', '-', 'M', 30, '4.5', 9, '', 'Y', 'Y'),
(20, 3, 3, 14, '832.982.3946', 'Pride of America', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', '-', 'M', 20, '4.3', 19, '', 'Y', 'Y'),
(21, 3, 10, 16, '729.745.3562', 'Unstoppable', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', NULL, 'U', 0, '4.3', 19, NULL, 'N', 'Y'),
(22, 3, 8, 15, '112.073.6392', 'Marvelous', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_03.jpg', NULL, 'W', 30, '4.9', 12, NULL, 'Y', 'Y'),
(23, 3, 6, 18, '271.927.8161', 'Joy 77', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', NULL, 'W', 0, '4.9', 12, NULL, 'N', 'Y'),
(24, 5, 6, 16, '272.018.9319', 'Inoubliable', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_04.jpg', NULL, 'W', 40, '4.5', 9, NULL, 'Y', 'Y'),
(25, 3, 2, 17, '937.282.6392', 'Wolf Straight', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_03.jpg', '-', 'M', 0, '3.9', 21, '', 'N', 'Y'),
(26, 4, 1, 13, '271.026.8292', 'Han', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', NULL, 'M', 0, '4.6', 12, NULL, 'N', 'Y'),
(27, 4, 5, 28, '239.092.7352', 'Himalaya', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_02.jpg', '-', 'M', 0, '4.6', 12, '', 'N', 'Y'),
(28, 4, 4, 26, '319.977.8366', 'Jekill', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', NULL, 'U', 30, '4.7', 4, NULL, 'Y', 'Y'),
(29, 4, 9, 25, '630.937.9815', 'Still Standing', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_03.jpg', NULL, 'W', 0, '4.8', 9, NULL, 'N', 'Y'),
(30, 8, 1, 16, '938.276.2622', 'SpeedTrack', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', NULL, 'M', 10, '4.6', 12, NULL, 'Y', 'Y'),
(31, 8, 1, 28, '145.764.7811', 'Time Attack 2', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_02.jpg', NULL, 'M', 0, '4.6', 12, NULL, 'N', 'Y'),
(32, 8, 10, 29, '922.836.8103', 'Byte100', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_02.jpg', NULL, 'M', 0, '4.7', 4, NULL, 'N', 'Y'),
(33, 8, 10, 15, '612.917.8123', 'Leggera', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', '-', 'W', 0, '4.8', 9, '', 'N', 'Y'),
(34, 8, 9, 27, '281.439.1823', 'inTown K', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', '-', 'W', 30, '4.8', 9, '', 'Y', 'Y'),
(35, 8, 9, 16, '172.917.1722', 'inTown G', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', '-', 'W', 0, '4.8', 9, '', 'N', 'Y'),
(40, 9, 3, 20, '812.937.1821', 'NotANumber!', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_03.jpg', 'casquette', 'M', 20, '4.6', 12, NULL, 'Y', 'Y'),
(41, 9, 8, 13, '912.332.5818', 'Kilo', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', 'casquette', 'U', 0, '4.6', 12, NULL, 'N', 'Y'),
(42, 9, 10, 14, '516.927.7815', 'Dernier Métro', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', 'lunettes de soleil', 'U', 30, '4.7', 4, NULL, 'Y', 'Y'),
(43, 9, 9, 13, '172.817.8971', 'Boston Mild', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', 'sac à dos', 'W', 0, '4.8', 9, NULL, 'N', 'Y'),
(44, 7, 1, 15, '871.289.4415', 'Goal III', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', 'survêtement', 'M', 0, '4.8', 7, NULL, 'N', 'Y'),
(45, 7, 4, 13, '628.953.0921', 'Fast Fred', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', 'débardeur', 'U', 0, '4.7', 16, NULL, 'N', 'Y'),
(46, 1, 3, 26, '123.456.8926', 'California', 'une description du produit', 'productM_01.jpg', '-', 'M', 20, '2.5', 15, '', 'Y', 'Y'),
(47, 1, 6, 24, '160.576.9438', 'Girl in Town', 'une description du produit', 'productW_03.jpg', NULL, 'W', 20, '3.4', 9, '', 'Y', 'Y'),
(48, 8, 5, 27, '725.261.9128', 'Peak Perfect 3', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_03.jpg', NULL, 'M', 40, '3.6', 47, '', 'Y', 'Y'),
(49, 4, 6, 14, '142.137.336', 'Doux Hiver', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', '-', 'W', 0, '2.9', 50, '', 'N', 'Y'),
(50, 9, 7, 17, '941.325.1728', 'Brighton Large', 'une description détaillée du produit et de ses caractéristiques principales', 'productU_02.jpg', NULL, 'U', 10, '4.0', 42, '', 'Y', 'Y'),
(51, 7, 4, 28, '447.842.1665', 'Universe', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', NULL, 'W', 0, '4.5', 14, '', 'N', 'Y'),
(52, 3, 1, 26, '332.450.1937', 'Docker B', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_02.jpg', NULL, 'M', 0, '4.6', 42, '', 'N', 'Y'),
(53, 8, 10, 29, '351.694.6502', 'Ultra Boost KL', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', NULL, 'M', 30, '4.2', 26, '', 'Y', 'Y'),
(54, 1, 4, 12, '155.449.4064', 'Super Nova', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', NULL, 'W', 0, '4.2', 38, '', 'N', 'Y'),
(55, 6, 1, 28, '304.694.4584', 'Summerland 77', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', NULL, 'W', 20, '4.4', 50, '', 'Y', 'Y'),
(56, 5, 9, 18, '558.217.8282', 'Belle de Jour', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_03.jpg', NULL, 'W', 10, '4.6', 37, '', 'Y', 'Y'),
(73, 2, 6, 25, '984.943.9764', 'Speechless', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_03.jpg', NULL, 'W', 20, '4.4', 40, '', 'Y', 'Y'),
(74, 2, 7, 26, '779.697.4146', 'Rebellion', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_04.jpg', '-', 'W', 0, '4.7', 43, '', 'N', 'Y'),
(75, 2, 7, 14, '564.453.2529', 'Revolutionary', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', NULL, 'M', 0, '3.9', 17, '', 'N', 'Y'),
(76, 2, 7, 25, '931.242.1906', 'Ordinary', 'une description détaillée du produit et de ses caractéristiques principales', 'productM_01.jpg', NULL, 'M', 10, '4.6', 42, '', 'Y', 'Y'),
(77, 1, 4, 21, '173.737.4195', 'Jungle Fever', 'le t-shirt ultime', 'productW_01.jpg', '-', 'W', 10, '4.3', 17, '', 'Y', 'Y'),
(78, 4, 7, 27, '856.340.6018', 'Yum', '', 'productW_02.jpg', '-', 'W', 20, '4.3', 20, '', 'Y', 'Y'),
(79, 4, 4, 14, '893.251.9972', 'Fearless Queen', 'une description du produit', 'productW_03.jpg', '-', 'W', 0, '4.7', 10, '', 'N', 'Y'),
(80, 3, 11, 26, '546.196.2584', 'Béton Armé', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_04.jpg', '-', 'W', 10, '4.6', 21, '', 'Y', 'Y'),
(81, 3, 1, 28, '982.334.3244', 'Another Day', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', '-', 'W', 0, '4.6', 5, '', 'N', 'Y'),
(82, 3, 7, 28, '659.431.8847', 'Another Night', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_02.jpg', '-', 'W', 10, '3.9', 3, '', 'Y', 'Y'),
(83, 8, 10, 29, '846.902.3424', 'Veloce', 'une description détaillée du produit et de ses caractéristiques principales', 'productW_01.jpg', '-', 'W', 0, '4.8', 38, '', 'N', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `sizId` int(11) UNSIGNED NOT NULL,
  `sizName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`sizId`, `sizName`) VALUES
(1, 'Taille Unique'),
(2, 'XS'),
(3, 'S'),
(4, 'M'),
(5, 'L'),
(6, 'XL'),
(7, '2XL'),
(8, '3XL'),
(9, 'empty'),
(10, 'empty'),
(11, '34'),
(12, '35'),
(13, '36'),
(14, '37'),
(15, '38'),
(16, '39'),
(17, '40'),
(18, '41'),
(19, '42'),
(20, '43'),
(21, '44'),
(22, '45'),
(23, '46'),
(24, '47');








--
-- Indexes for dumped tables
--

--
-- Indexes for table `advert`
--
ALTER TABLE `advert`
  ADD PRIMARY KEY (`advId`),
  ADD KEY `advProductId` (`advProductId`);

--
-- Indexes for table `bindProductToColor`
--
ALTER TABLE `bindProductToColor`
  ADD PRIMARY KEY (`bind1Id`),
  ADD KEY `bind1ProductId` (`bind1ProductId`),
  ADD KEY `bind1ColorId` (`bind1ColorId`);

--
-- Indexes for table `bindProductToSize`
--
ALTER TABLE `bindProductToSize`
  ADD PRIMARY KEY (`bind2Id`),
  ADD KEY `bind2ProductId` (`bind2ProductId`),
  ADD KEY `bind2SizeId` (`bind2SizeId`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`braId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`catId`),
  ADD KEY `catIconId` (`catIconId`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`colId`);

--
-- Indexes for table `icon`
--
ALTER TABLE `icon`
  ADD PRIMARY KEY (`icoId`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`priId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`proId`),
  ADD KEY `proCategoryId` (`proCategoryId`),
  ADD KEY `proBrandId` (`proBrandId`),
  ADD KEY `proPriceId` (`proPriceId`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`sizId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advert`
--
ALTER TABLE `advert`
  MODIFY `advId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `bindProductToColor`
--
ALTER TABLE `bindProductToColor`
  MODIFY `bind1Id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=249;

--
-- AUTO_INCREMENT for table `bindProductToSize`
--
ALTER TABLE `bindProductToSize`
  MODIFY `bind2Id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=495;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `braId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `catId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `colId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `icon`
--
ALTER TABLE `icon`
  MODIFY `icoId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `priId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `proId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `sizId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advert`
--
ALTER TABLE `advert`
  ADD CONSTRAINT `advert_ibfk_1` FOREIGN KEY (`advProductId`) REFERENCES `product` (`proId`) ON UPDATE CASCADE;

--
-- Constraints for table `bindProductToColor`
--
ALTER TABLE `bindProductToColor`
  ADD CONSTRAINT `bindproducttocolor_ibfk_1` FOREIGN KEY (`bind1ProductId`) REFERENCES `product` (`proId`) ON UPDATE CASCADE,
  ADD CONSTRAINT `bindproducttocolor_ibfk_2` FOREIGN KEY (`bind1ColorId`) REFERENCES `color` (`colId`) ON UPDATE CASCADE;

--
-- Constraints for table `bindProductToSize`
--
ALTER TABLE `bindProductToSize`
  ADD CONSTRAINT `bindproducttosize_ibfk_1` FOREIGN KEY (`bind2ProductId`) REFERENCES `product` (`proId`) ON UPDATE CASCADE,
  ADD CONSTRAINT `bindproducttosize_ibfk_2` FOREIGN KEY (`bind2SizeId`) REFERENCES `size` (`sizId`) ON UPDATE CASCADE;

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`catIconId`) REFERENCES `icon` (`icoId`) ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`proCategoryId`) REFERENCES `category` (`catId`) ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`proBrandId`) REFERENCES `brand` (`braId`) ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`proPriceId`) REFERENCES `price` (`priId`) ON UPDATE CASCADE;
