-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2022 at 04:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `groupproject2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `user_id` varchar(100) CHARACTER SET utf8 NOT NULL,
  `admin_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `mobile_no` varchar(12) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`user_id`, `admin_id`, `first_name`, `last_name`, `mobile_no`, `isActive`) VALUES
('32', 2, 'jonathan', 'dass', '0705614640', 1),
('33', 3, 'dass', 'jonathan', '0705614640', 1);

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `class_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `start_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `end_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('upcoming','ended','cancelled') NOT NULL DEFAULT 'upcoming',
  `joined_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `left_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `online_status` enum('online','offline') NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isStarted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `course_id`, `student_id`, `date`, `start_time`, `end_time`, `status`, `joined_time`, `left_time`, `online_status`, `isActive`, `isStarted`) VALUES
(3, 4, 1, '2022-07-25 18:30:00', '2022-07-26 11:40:04', '2022-07-26 11:40:04', 'upcoming', '2022-07-26 11:40:04', '2022-07-26 11:40:04', 'online', 1, 0),
(4, 3, 2, '2022-07-25 18:30:00', '2022-07-26 11:40:04', '2022-07-26 11:40:04', 'upcoming', '2022-07-26 11:40:04', '2022-07-26 11:40:04', 'online', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `grade` varchar(3) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `day` enum('SUN','MON','TUE','WED','THU','FRI','SAT') NOT NULL,
  `medium` enum('Sinhala','English','Tamil') NOT NULL,
  `price` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `teacher_id`, `course_name`, `grade`, `subject`, `description`, `duration`, `start_date`, `start_time`, `end_time`, `day`, `medium`, `price`, `isActive`) VALUES
(3, 2, 'Science for AL', '12', 'Science', 'for AL', 2, '2022-07-12', '14:00:00', '16:00:00', 'WED', 'Sinhala', 2000, 1),
(4, 3, 'Maths for OL', '10', 'Maths', 'Maths for OL exam', 2, '2022-07-03', '16:00:00', '18:00:00', 'FRI', 'Sinhala', 3000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `homework`
--

CREATE TABLE `homework` (
  `homework_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `uploaded_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `homework` varchar(1000) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `homework`
--

INSERT INTO `homework` (`homework_id`, `student_id`, `course_id`, `uploaded_date`, `homework`, `isActive`) VALUES
(1, 1, 3, '2022-07-26', 'http://localhost/phpmyadmin/index.php?route=/table/change&db=groupproject2&table=parent_payment', 1),
(2, 2, 4, '2022-07-26', 'http://localhost/phpmyadmin/index.php?route=/table/change&db=groupproject2&table=parent_payment', 1);

-- --------------------------------------------------------

--
-- Table structure for table `institute`
--

CREATE TABLE `institute` (
  `user_id` varchar(100) NOT NULL,
  `institute_id` int(11) NOT NULL,
  `institute_name` varchar(255) NOT NULL,
  `owner_name` varchar(150) NOT NULL,
  `location` varchar(300) NOT NULL,
  `address` varchar(500) NOT NULL,
  `contact_no` varchar(12) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `account_no` varchar(20) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `verification_code` varchar(10) NOT NULL,
  `verification` enum('pending','verified','rejected') NOT NULL DEFAULT 'pending',
  `applied_date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `institute`
--

INSERT INTO `institute` (`user_id`, `institute_id`, `institute_name`, `owner_name`, `location`, `address`, `contact_no`, `description`, `account_name`, `account_no`, `bank_name`, `branch_name`, `isActive`, `verification_code`, `verification`, `applied_date`) VALUES
('30', 2, 'Apex Institute', 'Saman Rathnapriya', 'Galle', 'No 22, Colombo Rad, Galle', '0705614640', ' Apex Institute has become the foremost learning center for the highest number of advanced level students in the Southern Province in Sri Lanka. Every year its students top the ranking in island’s A/L Examination but not limiting to that, the Institute also ensures its students are well disciplined, nature loving, creative humans who are ready to step out into the society. Thus the theme, “Education along with Humanity” at Apex Institute.\n\n', 'apex', '1111133399', 'boc', 'colombo', 1, '1334', 'rejected', '2022-08-23'),
('31', 1000010223, 'Thigma Institute', 'Kamal Adararachchi', 'Colombo 07', 'No 45, Galle Rd, Colombo 07', '0705614640', 'Thigma Institute has become the foremost learning center for the highest number of advanced level students in the Western Province in Sri Lanka. Every year its students top the ranking in island’s A/L Examination but not limiting to that, the Institute also ensures its students are well disciplined, nature loving, creative humans who are ready to step out into the society. Thus the theme, “Education along with Humanity” at Thigma Institute.\n\n', 'K.W.L. Kamala Adararachchi', '523128383', 'Bank of Ceylon', 'Colombo 07', 1, '1324', 'pending', '2022-04-23'),
('auth0|62f0ca83224cf98f8543ff1a', 1000010224, 'Sigma Institutes', 'Maneth Pasan Wijethunga', 'Gampaha', 'Malwana Rd, Gampaha', '077-1234568', 'Sigma Institutes has become the foremost learning center for the highest number of advanced level students in the Western Province in Sri Lanka. Every year its students top the ranking in island’s A/L Examination but not limiting to that, the Institute also ensures its students are well disciplined, nature loving, creative humans who are ready to step out into the society. Thus the theme, “Education along with Humanity” at Sigma Institute.\n\n', 'Maneth Pasan Wijethunga', '890123456', 'Sampath Bank', 'Gampaha', 1, '', 'pending', '2022-08-08');

-- --------------------------------------------------------

--
-- Table structure for table `institute_course`
--

CREATE TABLE `institute_course` (
  `institute_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `institute_course`
--

INSERT INTO `institute_course` (`institute_id`, `course_id`, `isActive`) VALUES
(2, 4, 1),
(1000010223, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `institute_teacher`
--

CREATE TABLE `institute_teacher` (
  `institute_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institute_teacher`
--

INSERT INTO `institute_teacher` (`institute_id`, `teacher_id`, `status`, `isActive`) VALUES
(2, 2, 'active', 1),
(1000010223, 3, 'active', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `note_id` int(11) NOT NULL,
  `uploaded_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `note` varchar(1000) NOT NULL,
  `course_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`note_id`, `uploaded_date`, `note`, `course_id`, `student_id`, `isActive`) VALUES
(1, '2022-07-26', 'http://localhost/phpmyadmin/index.php?route=/table/change&db=groupproject2&table=parent_payment', 3, 1, 1),
(2, '2022-07-26', 'http://localhost/phpmyadmin/index.php?route=/table/change&db=groupproject2&table=parent_payment', 4, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `user_id` varchar(100) NOT NULL,
  `notification_id` int(11) NOT NULL,
  `subject` varchar(300) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `read_status` enum('read','unread') NOT NULL DEFAULT 'unread',
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`user_id`, `notification_id`, `subject`, `description`, `read_status`, `isActive`) VALUES
('30', 2, 'verified', 'you verified successfully', 'unread', 1),
('24', 3, 'verified', 'you verified succesfully', 'unread', 1),
('32', 4, 'verified', 'you verified succesfully', 'unread', 1),
('26', 5, 'verified', 'you verified succesfully', 'unread', 1);

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `user_id` varchar(100) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `mobile_no` varchar(12) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`user_id`, `parent_id`, `first_name`, `last_name`, `mobile_no`, `isActive`) VALUES
('26', 1, 'maneth', 'wijeethunga', '0705614640', 1),
('27', 2, 'wijeethunga ', 'maneth', '0705614640', 1),
('testssx', 3, 'Sumana', 'Abeekon', '0980333389', 1),
('testssxdd', 4, 'sadeepa', 'bhashitha', '0980333389', 1),
('auth0|62ea698ed34fc86766fd50d8', 5, 'asda', 'adas', '0987654321', 1),
('auth0|62ea8665f7466ab1457e7f02', 6, 'Saman', 'Nimal', '0771212121', 1);

-- --------------------------------------------------------

--
-- Table structure for table `parent_payment`
--

CREATE TABLE `parent_payment` (
  `payment_id` int(11) NOT NULL,
  `payment_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `amount` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `month` enum('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') NOT NULL,
  `year` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parent_payment`
--

INSERT INTO `parent_payment` (`payment_id`, `payment_time`, `amount`, `student_id`, `month`, `year`, `isActive`) VALUES
(1, '2022-07-26 09:20:22', 2000, 1, 'Jul', 2022, 1),
(2, '2022-07-26 09:20:22', 3000, 2, 'Sep', 2022, 1);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `user_id` varchar(100) NOT NULL,
  `student_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `school` varchar(100) NOT NULL,
  `grade` varchar(3) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`user_id`, `student_id`, `parent_id`, `first_name`, `last_name`, `school`, `grade`, `isActive`) VALUES
('24', 1, 1, 'bhashitha', 'ranasinghe', 'stc', '12', 1),
('25', 2, 1, 'ranasinghe', 'bhashitha', 'ssc', '11', 1),
('auth0|62eb2a964b3e10a6aec83415', 6, 6, 'Kamal', 'Hasan', 'ss', 'Gra', 1),
('auth0|62f07379f8d39fdfdd7c5ec3', 7, 1, 'Supun', 'Rathanaweera', 'ss', 'Gra', 1);

-- --------------------------------------------------------

--
-- Table structure for table `student_course`
--

CREATE TABLE `student_course` (
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `status` enum('accepted','pending','rejected') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student_course`
--

INSERT INTO `student_course` (`student_id`, `course_id`, `isActive`, `status`) VALUES
(1, 3, 1, 'accepted'),
(2, 4, 1, 'accepted');

-- --------------------------------------------------------

--
-- Table structure for table `student_payment`
--

CREATE TABLE `student_payment` (
  `payment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `month` enum('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') NOT NULL,
  `payment_status` enum('paid','unpaid') NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_payment`
--

INSERT INTO `student_payment` (`payment_id`, `student_id`, `course_id`, `month`, `payment_status`, `isActive`) VALUES
(1, 1, 3, 'Sep', 'paid', 1),
(2, 2, 4, 'Aug', 'paid', 1);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `user_id` varchar(100) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `contact_no` varchar(15) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `description` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `account_name` varchar(255) NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `account_no` varchar(20) NOT NULL,
  `verification` enum('pending','verified','rejected') NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `applied_date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`user_id`, `teacher_id`, `first_name`, `last_name`, `contact_no`, `gender`, `description`, `qualification`, `account_name`, `bank_name`, `branch_name`, `account_no`, `verification`, `isActive`, `applied_date`) VALUES
('28', 2, 'prasad', 'lakshan', '', 'male', 'good', 'science', 'prasad', 'sampath', 'matara', '1110011000', 'verified', 1, ''),
('29', 3, 'lakshan', 'prasad', '', 'male', 'good', 'maths', 'lakshan', 'peoples', 'galle', '122221909', 'verified', 1, ''),
('1', 4, 'sadeepa', 'bhashitha', '', 'male', 'ddddd', 'none', 'bhashitha', 'sampath', 'matara', '11121', 'verified', 0, ''),
('auth0|62eb5585216efec017deb44d', 5, 'asd', 'asd', '0987654321', 'male', 'ss', 'none', 'sad', 'asd', 'asd', 'asd', 'verified', 1, ''),
('auth0|62eb5635c638d3ae640a6b98', 6, 'Rathapriya', 'Saman', '0987654321', 'male', 'Weel', 'none', 'Saman', 'Sampath', 'Galle', '1234', 'verified', 1, ''),
('auth0|62eba8ef216efec017debaaf', 7, 'Prasa', 'Kpd', '0987654321', 'male', 'Clever', 'none', 'Prasa', 'BOC', 'Galle', '1234', 'verified', 1, 'Thu Aug 04 2022'),
('auth0|62eba9b1216efec017debabe', 8, 'shaki', 'balhasan', '0987654321', 'male', 'sss', 'none', 'dsad', 'asdas', 'asd', 'ss', 'rejected', 1, '2022-08-04'),
('auth0|62ef3fe45c78b441451857ca', 1000010223, 'Upulshantha', 'Sanasgala', '0987654321', 'male', 'Good', 'none', 'Sanasgala', 'Samapath', 'Galle', '1234', 'verified', 1, '2022-08-07'),
('auth0|62f33a72304686da7831a5ac', 1000010224, 'Nirmal', 'Ilanagama', '077-2345678', 'male', 'I\'m having more than 7 years of experience in teaching at a renowned government school as a Mathematics teacher My students were able to produce great results in the examinations.', 'none', 'L.L.U. Nirmal Illanagama', 'Peoples Bank', 'Kaluthara', '90842345', 'pending', 1, '2022-08-10');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_requests`
--

CREATE TABLE `teacher_requests` (
  `institute_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `request_status` enum('accepted','rejected','pending') NOT NULL DEFAULT 'pending',
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_requests`
--

INSERT INTO `teacher_requests` (`institute_id`, `teacher_id`, `request_status`, `date`, `isActive`) VALUES
(2, 2, 'accepted', '2022-07-26 09:06:59', 1),
(2, 3, 'accepted', '2022-07-26 09:06:59', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `type` enum('student','parent','teacher','institute','admin') NOT NULL DEFAULT 'student',
  `profile_image` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `type`, `profile_image`, `isActive`) VALUES
('1', 'sads@gmail.com', 'teacher', 'https://gold-space-590524.postman.co/workspace/Asgardio~32cc3be9-49c2-40dd-9134-40d30b03f392/request/20837792-d56de483-0540-423b-a1fb-4c60fafce1a9', 0),
('24', '', 'student', 'https://unsplash.com/s/photos/university-student', 1),
('25', '', 'student', 'https://unsplash.com/s/photos/university-student', 1),
('26', '', 'parent', 'https://unsplash.com/s/photos/university-student', 1),
('27', '', 'parent', 'https://unsplash.com/s/photos/university-student', 1),
('28', '', 'teacher', 'https://unsplash.com/s/photos/university-student', 1),
('29', '', 'teacher', 'https://unsplash.com/s/photos/university-student', 1),
('30', 'apexinsstitute@gmail.com', 'institute', 'https://unsplash.com/s/photos/university-student', 1),
('31', 'contact.thigma@gmail.com', 'institute', 'https://unsplash.com/s/photos/university-student', 1),
('32', '', 'admin', 'https://unsplash.com/s/photos/university-student', 1),
('33', '', 'admin', 'https://unsplash.com/s/photos/university-student', 1),
('auth0|62ea698ed34fc86766fd50d8', 'kjlj12@gmail.com', 'parent', 'https://s.gravatar.com/avatar/a8fdbbc97729a47196a786e52b1d03c2?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png', 1),
('auth0|62ea8665f7466ab1457e7f02', 'parenttest@gmail.com', 'parent', 'https://s.gravatar.com/avatar/5ab8f7aca4993fbb3e24a611be5a8f1f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fni.png', 1),
('auth0|62eb2a964b3e10a6aec83415', 'kamal@gmail.com', 'student', 'https://s.gravatar.com/avatar/f507bab344e63696223c0e3b81c3a911?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png', 1),
('auth0|62eb5585216efec017deb44d', 'asqdeesda@gmail.com', 'teacher', 'https://s.gravatar.com/avatar/e624d7b96003e5f2c0155191f779125c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fas.png', 1),
('auth0|62eb5635c638d3ae640a6b98', 'saman@gmail.com', 'teacher', 'https://s.gravatar.com/avatar/4bffcab731db14fcb54c3225c3cf8838?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fsa.png', 1),
('auth0|62eba8ef216efec017debaaf', 'prasad@gmail.com', 'teacher', 'https://s.gravatar.com/avatar/d843c28fbea386720c1471231495187e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fkp.png', 1),
('auth0|62eba9b1216efec017debabe', 'shaki@gmail.com', 'teacher', 'https://s.gravatar.com/avatar/c4b1680f187ab5a232816c1b816cbb48?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fba.png', 1),
('auth0|62ef3fe45c78b441451857ca', 'sanna@gmail.com', 'teacher', 'https://s.gravatar.com/avatar/0a86ab1bb7f6b1607d8a425214b43925?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fsa.png', 1),
('auth0|62f07379f8d39fdfdd7c5ec3', 'rathanaweera@gmail.com', 'student', 'https://s.gravatar.com/avatar/82c817be6271538d569bc761af009c9a?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fas.png', 1),
('auth0|62f0ca83224cf98f8543ff1a', 'sigmainstitute@gmail.com', 'institute', 'https://s.gravatar.com/avatar/ea99ff411cb57a17cccb0ee42d07dcf3?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmw.png', 1),
('auth0|62f33a72304686da7831a5ac', 'nirmalilanagama@gmail.com', 'teacher', 'https://s.gravatar.com/avatar/7d3e2e9f333b479f11cb6827f1d2742e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fil.png', 1),
('testssx', 'sumanaabekon@gmail.com', 'parent', 'https://gold-space-590524.postman.co/workspace/Asgardio~32cc3be9-49c2-40dd-9134-40d30b03f392/request/20837792-d56de483-0540-423b-a1fb-4c60fafce1a9', 1),
('testssxdd', 'testx', 'parent', 'https://gold-space-590524.postman.co/workspace/Asgardio~32cc3be9-49c2-40dd-9134-40d30b03f392/request/20837792-d56de483-0540-423b-a1fb-4c60fafce1a9', 1);

--
-- Triggers `user`
--
DELIMITER $$
CREATE TRIGGER `after_user_deactivate` AFTER UPDATE ON `user` FOR EACH ROW BEGIN
    IF OLD.isActive <> new.isActive THEN
        IF OLD.type = 'student' THEN
        UPDATE student SET isActive = 0 WHERE user_id = OLD.user_id;
        END IF;
        IF OLD.type = 'teacher' THEN
        UPDATE teacher SET isActive = 0 WHERE user_id = OLD.user_id;
        END IF;
        IF OLD.type = 'parent' THEN
        UPDATE parent SET isActive = 0 WHERE user_id = OLD.user_id;
        END IF;
        IF OLD.type = 'institute' THEN
        UPDATE institute SET isActive = 0 WHERE user_id = OLD.user_id;
        END IF;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `FK TO ADMIN FROM USER` (`user_id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`),
  ADD KEY `FK TO CLASS FROM COURSE` (`course_id`),
  ADD KEY `FK TO CLASS FROM STUDENT` (`student_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `FK TO COURSE FROM TEACHER` (`teacher_id`);

--
-- Indexes for table `homework`
--
ALTER TABLE `homework`
  ADD PRIMARY KEY (`homework_id`),
  ADD KEY `FK TO HOMEWORK FROM COURSE` (`course_id`),
  ADD KEY `FK TO HOMEWORK FROM STUDENT` (`student_id`);

--
-- Indexes for table `institute`
--
ALTER TABLE `institute`
  ADD PRIMARY KEY (`institute_id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `FK TO INSTITUTE FROM USER` (`user_id`);

--
-- Indexes for table `institute_course`
--
ALTER TABLE `institute_course`
  ADD PRIMARY KEY (`institute_id`,`course_id`),
  ADD KEY `FK TO INS_CO FROM INSTITUTE` (`institute_id`),
  ADD KEY `FK TO INS_CO FROM COURSE` (`course_id`);

--
-- Indexes for table `institute_teacher`
--
ALTER TABLE `institute_teacher`
  ADD PRIMARY KEY (`institute_id`,`teacher_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`note_id`),
  ADD KEY `FK TO NOTE FROM COURSE` (`course_id`),
  ADD KEY `FK TO NOTE FROM STUDENT` (`student_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `FK TO NOTIFICATION FROM USER` (`user_id`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`parent_id`),
  ADD KEY `FK TO PARENT FROM USER` (`user_id`);

--
-- Indexes for table `parent_payment`
--
ALTER TABLE `parent_payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `FK TO PARENT_PAYMENT FROM STUDENT` (`student_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `FK TO STUDENT FROM PARENT` (`parent_id`),
  ADD KEY `FK TO STUDENT FROM USER` (`user_id`);

--
-- Indexes for table `student_course`
--
ALTER TABLE `student_course`
  ADD PRIMARY KEY (`student_id`,`course_id`),
  ADD KEY `FK TO STU_CO FROM COURSE` (`course_id`);

--
-- Indexes for table `student_payment`
--
ALTER TABLE `student_payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `FK TO STUDENT_PAYMENT FROM COURSE` (`course_id`),
  ADD KEY `FK TO STUDENT_PAYMENT FROM STUDENT` (`student_id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `teacher_requests`
--
ALTER TABLE `teacher_requests`
  ADD PRIMARY KEY (`institute_id`,`teacher_id`,`date`),
  ADD KEY `FK_teacherID_to_teacher` (`teacher_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `homework`
--
ALTER TABLE `homework`
  MODIFY `homework_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `institute`
--
ALTER TABLE `institute`
  MODIFY `institute_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000010226;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `note_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `parent`
--
ALTER TABLE `parent`
  MODIFY `parent_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `parent_payment`
--
ALTER TABLE `parent_payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `student_payment`
--
ALTER TABLE `student_payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000010225;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK TO ADMIN FROM USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `FK TO CLASS FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO CLASS FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `FK TO COURSE FROM TEACHER` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `homework`
--
ALTER TABLE `homework`
  ADD CONSTRAINT `FK TO HOMEWORK FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO HOMEWORK FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `institute`
--
ALTER TABLE `institute`
  ADD CONSTRAINT `FK TO INSTITUTE FROM USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `institute_course`
--
ALTER TABLE `institute_course`
  ADD CONSTRAINT `FK TO INS_CO FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO INS_CO FROM INSTITUTE` FOREIGN KEY (`institute_id`) REFERENCES `institute` (`institute_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `institute_teacher`
--
ALTER TABLE `institute_teacher`
  ADD CONSTRAINT `institute_teacher_ibfk_1` FOREIGN KEY (`institute_id`) REFERENCES `institute` (`institute_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `institute_teacher_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `FK TO NOTE FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO NOTE FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FK TO NOTIFICATION FROM USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `parent`
--
ALTER TABLE `parent`
  ADD CONSTRAINT `FK TO PARENT FROM USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `parent_payment`
--
ALTER TABLE `parent_payment`
  ADD CONSTRAINT `FK TO PARENT_PAYMENT FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `FK TO STUDENT FROM PARENT` FOREIGN KEY (`parent_id`) REFERENCES `parent` (`parent_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO STUDENT FROM USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_course`
--
ALTER TABLE `student_course`
  ADD CONSTRAINT `FK TO STU_CO FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO STU_CO FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_payment`
--
ALTER TABLE `student_payment`
  ADD CONSTRAINT `FK TO STUDENT_PAYMENT FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  ADD CONSTRAINT `FK TO STUDENT_PAYMENT FROM PARENT_PAYMENT` FOREIGN KEY (`payment_id`) REFERENCES `parent_payment` (`payment_id`),
  ADD CONSTRAINT `FK TO STUDENT_PAYMENT FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `FK TO TEACHER FROM USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `teacher_requests`
--
ALTER TABLE `teacher_requests`
  ADD CONSTRAINT `FK_instituteID_to_institute` FOREIGN KEY (`institute_id`) REFERENCES `institute` (`institute_id`),
  ADD CONSTRAINT `FK_teacherID_to_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
