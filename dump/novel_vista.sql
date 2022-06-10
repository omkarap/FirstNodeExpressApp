-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2022 at 01:31 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `novel_vista`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `status`) VALUES
(1, 'Aniket', 'Deshmukh', 'aniket@kshantechsoft.com', '12345678', '2147483647', 1),
(2, 'Omkar', 'Pandit', 'omkar.pandit@kshantechsoft.com', '12345678', '2147483647', 1),
(3, 'Nikita', 'Ghute', 'nikita@kshantechsoft.com', '12345678', '2147483647', 1),
(4, 'undefined', 'undefined', 'niki@kshantechsoft.com', '12345678', '0', 1),
(5, 'undefined', 'undefined', 'nikitabghute7350@gmail.com', '12345678', '0', 1),
(6, 'undefined', 'undefined', 'darshan.rambole@gmail.com', '12345678', '0', 1),
(7, 'undefined', 'undefined', 'niki@gmail.com', '12345678', '0', 1),
(8, 'undefined', 'undefined', 'nikitag@gmail.com', '12345678', '0', 1),
(9, 'undefined', 'undefined', 'nikitaag@gmail.com', '12345678', '0', 1),
(10, 'undefined', 'undefined', 'miki@gmail.com', '111111111', '0', 1),
(11, 'undefined', 'undefined', 'nik@gmail.com', '1234567890', '0', 1),
(12, 'undefined', 'undefined', 'niks@gmail.com', '123456789', '0', 1),
(13, 'undefined', 'undefined', 'nikita.nikita@gmail.com', '1234567890', '0', 1),
(14, 'undefined', 'undefined', 'nikia@gmail.com', '123456789', '0', 1),
(15, 'undefined', 'undefined', 'ankita@gmail.com', '12345678', '0', 1),
(16, 'undefined', 'undefined', 'nikitasbghute7350@gmail.com', '12345678', '0', 1),
(17, 'undefined', 'undefined', 'ghute@gmail.com', '12345678', '0', 1),
(18, 'undefined', 'undefined', 'nikitagg@kshantechsoft.com', '12345678', '0', 1),
(20, 'Alpha', 'Beta', 'alphabeta@kshantechsoft.com', '12345678', '8876453567', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
