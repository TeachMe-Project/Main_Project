-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 28, 2022 at 03:26 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `admin_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `mobile_no` varchar(12) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Class`
--

CREATE TABLE `Class` (
  `class_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE `Course` (
  `course_name` varchar(100) NOT NULL,
  `grade` varchar(3) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `desctiption` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `day` enum('SUN','MON','TUE','WED','THU','FRI','SAT') NOT NULL,
  `course_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Homework`
--

CREATE TABLE `Homework` (
  `homework_id` int(11) NOT NULL,
  `uploaded_date` date NOT NULL,
  `homework` varchar(1000) NOT NULL,
  `course_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Institute`
--

CREATE TABLE `Institute` (
  `institute_id` int(11) NOT NULL,
  `institute_name` varchar(255) NOT NULL,
  `contact_no` varchar(12) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `account_no` varchar(20) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Institute_teacher`
--

CREATE TABLE `Institute_teacher` (
  `institute_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Notes`
--

CREATE TABLE `Notes` (
  `note_id` int(11) NOT NULL,
  `uploaded_date` date NOT NULL,
  `note` varchar(1000) NOT NULL,
  `course_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Notification`
--

CREATE TABLE `Notification` (
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `subject` varchar(300) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `read_status` enum('read','unread') NOT NULL DEFAULT 'unread'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Parent`
--

CREATE TABLE `Parent` (
  `parent_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `mobile_no` varchar(12) NOT NULL,
  `security_status` enum('active','inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Parent_Payment`
--

CREATE TABLE `Parent_Payment` (
  `payment_id` int(11) NOT NULL,
  `payment_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `amount` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `month` enum('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE `Student` (
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `school` varchar(100) NOT NULL,
  `grade` varchar(3) NOT NULL,
  `security_status` enum('active','inactive') NOT NULL,
  `student_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Student_Course`
--

CREATE TABLE `Student_Course` (
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Student_Payment`
--

CREATE TABLE `Student_Payment` (
  `payment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `month` enum('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') NOT NULL,
  `payment_status` enum('paid','unpaid') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Teacher`
--

CREATE TABLE `Teacher` (
  `teacher_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `description` varchar(255) NOT NULL,
  `qualification` varchar(255) NOT NULL,
  `account_name` varchar(255) NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `account_no` varchar(20) NOT NULL,
  `verification` varchar(255) NOT NULL,
  `security_status` enum('active','inactive') NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `type` enum('student','parent','teacher','institute','admin') NOT NULL DEFAULT 'student',
  `profile_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `FK TO ADMIN FROM USER` (`user_id`);

--
-- Indexes for table `Class`
--
ALTER TABLE `Class`
  ADD PRIMARY KEY (`class_id`),
  ADD KEY `FK TO CLASS FROM COURSE` (`course_id`),
  ADD KEY `FK TO CLASS FROM STUDENT` (`student_id`);

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `FK TO COURSE FROM TEACHER` (`teacher_id`);

--
-- Indexes for table `Homework`
--
ALTER TABLE `Homework`
  ADD PRIMARY KEY (`homework_id`),
  ADD KEY `FK TO HOMEWORK FROM COURSE` (`course_id`),
  ADD KEY `FK TO HOMEWORK FROM STUDENT` (`student_id`);

--
-- Indexes for table `Institute`
--
ALTER TABLE `Institute`
  ADD PRIMARY KEY (`institute_id`),
  ADD KEY `FK TO INSTITUTE FROM USER` (`user_id`);

--
-- Indexes for table `Institute_teacher`
--
ALTER TABLE `Institute_teacher`
  ADD PRIMARY KEY (`institute_id`,`course_id`),
  ADD KEY `FK TO INS_CO FROM INSTITUTE` (`institute_id`),
  ADD KEY `FK TO INS_CO FROM COURSE` (`course_id`);

--
-- Indexes for table `Notes`
--
ALTER TABLE `Notes`
  ADD PRIMARY KEY (`note_id`),
  ADD KEY `FK TO NOTE FROM COURSE` (`course_id`),
  ADD KEY `FK TO NOTE FROM STUDENT` (`student_id`);

--
-- Indexes for table `Notification`
--
ALTER TABLE `Notification`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `FK TO NOTIF FROM USER` (`user_id`);

--
-- Indexes for table `Parent`
--
ALTER TABLE `Parent`
  ADD PRIMARY KEY (`parent_id`),
  ADD KEY `FK TO PARENT FROM USER` (`user_id`);

--
-- Indexes for table `Parent_Payment`
--
ALTER TABLE `Parent_Payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `FK TO PARENT_PAYMENT FROM STUDENT` (`student_id`);

--
-- Indexes for table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `FK TO STUDENT FROM USER` (`user_id`),
  ADD KEY `FK TO STUDENT FROM PARENT` (`parent_id`);

--
-- Indexes for table `Student_Course`
--
ALTER TABLE `Student_Course`
  ADD PRIMARY KEY (`student_id`,`course_id`),
  ADD KEY `FK TO STU_CO FROM STUDENT` (`student_id`),
  ADD KEY `FK TO STU_CO FROM COURSE` (`course_id`);

--
-- Indexes for table `Student_Payment`
--
ALTER TABLE `Student_Payment`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `FK TO STUDENT_PAYMENT FROM COURSE` (`course_id`),
  ADD KEY `FK TO STUDENT_PAYMENT FROM STUDENT` (`student_id`);

--
-- Indexes for table `Teacher`
--
ALTER TABLE `Teacher`
  ADD PRIMARY KEY (`teacher_id`),
  ADD KEY `FK TO TEACHER FROM USER` (`user_id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Class`
--
ALTER TABLE `Class`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Course`
--
ALTER TABLE `Course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Homework`
--
ALTER TABLE `Homework`
  MODIFY `homework_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Institute`
--
ALTER TABLE `Institute`
  MODIFY `institute_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Notification`
--
ALTER TABLE `Notification`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Parent_Payment`
--
ALTER TABLE `Parent_Payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Student_Payment`
--
ALTER TABLE `Student_Payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Teacher`
--
ALTER TABLE `Teacher`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Admin`
--
ALTER TABLE `Admin`
  ADD CONSTRAINT `FK TO ADMIN FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Class`
--
ALTER TABLE `Class`
  ADD CONSTRAINT `FK TO CLASS FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO CLASS FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Course`
--
ALTER TABLE `Course`
  ADD CONSTRAINT `FK TO COURSE FROM TEACHER` FOREIGN KEY (`teacher_id`) REFERENCES `Teacher` (`teacher_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Homework`
--
ALTER TABLE `Homework`
  ADD CONSTRAINT `FK TO HOMEWORK FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO HOMEWORK FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Institute`
--
ALTER TABLE `Institute`
  ADD CONSTRAINT `FK TO INSTITUTE FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Institute_teacher`
--
ALTER TABLE `Institute_teacher`
  ADD CONSTRAINT `FK TO INS_CO FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO INS_CO FROM INSTITUTE` FOREIGN KEY (`institute_id`) REFERENCES `Institute` (`institute_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Notes`
--
ALTER TABLE `Notes`
  ADD CONSTRAINT `FK TO NOTE FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO NOTE FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Notification`
--
ALTER TABLE `Notification`
  ADD CONSTRAINT `FK TO NOTIF FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Parent`
--
ALTER TABLE `Parent`
  ADD CONSTRAINT `FK TO PARENT FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Parent_Payment`
--
ALTER TABLE `Parent_Payment`
  ADD CONSTRAINT `FK TO PARENT_PAYMENT FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Student`
--
ALTER TABLE `Student`
  ADD CONSTRAINT `FK TO STUDENT FROM PARENT` FOREIGN KEY (`parent_id`) REFERENCES `Parent` (`parent_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO STUDENT FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Student_Course`
--
ALTER TABLE `Student_Course`
  ADD CONSTRAINT `FK TO STU_CO FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK TO STU_CO FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `Student_Payment`
--
ALTER TABLE `Student_Payment`
  ADD CONSTRAINT `FK TO STUDENT_PAYMENT FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`),
  ADD CONSTRAINT `FK TO STUDENT_PAYMENT FROM PARENT_PAYMENT` FOREIGN KEY (`payment_id`) REFERENCES `Parent_Payment` (`payment_id`),
  ADD CONSTRAINT `FK TO STUDENT_PAYMENT FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`);

--
-- Constraints for table `Teacher`
--
ALTER TABLE `Teacher`
  ADD CONSTRAINT `FK TO TEACHER FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
