-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2021 at 10:10 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('MMywQ_cJWTn-ZTDG2HUzB9TFDh3cs7K3', 1774205625, '{\"cookie\":{\"originalMaxAge\":157680000000,\"expires\":\"2026-03-22T18:53:44.887Z\",\"httpOnly\":false,\"path\":\"/\"},\"userID\":1}'),
('MtCG5aMk3plKV_5TAtwPd_TEdumHq0gE', 1775978669, '{\"cookie\":{\"originalMaxAge\":157680000000,\"expires\":\"2026-04-12T07:24:28.514Z\",\"httpOnly\":false,\"path\":\"/\"},\"userID\":1}'),
('cmrjcKPQL7VmLflngH0sR8D9fjvTdylS', 1776974975, '{\"cookie\":{\"originalMaxAge\":157680000000,\"expires\":\"2026-04-23T20:09:35.314Z\",\"httpOnly\":false,\"path\":\"/\"},\"userID\":1}');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(240) COLLATE utf8_bin NOT NULL,
  `password` varchar(240) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'john', '$2b$09$UdUnisHR1WSzU7Jys.bP8.irkG/puZMQA20oGv1AcKJAxj8mGxmyO'),
(2, 'anotheruser', '$2b$09$UdUnisHR1WSzU7Jys.bP8.irkG/puZMQA20oGv1AcKJAxj8mGxmyO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
