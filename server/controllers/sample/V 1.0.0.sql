-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: teachme
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `mobile_no` varchar(12) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `FK TO ADMIN FROM USER` (`user_id`),
  CONSTRAINT `FK TO ADMIN FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Class`
--

DROP TABLE IF EXISTS `Class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`class_id`),
  KEY `FK TO CLASS FROM COURSE` (`course_id`),
  CONSTRAINT `FK TO CLASS FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Class`
--

LOCK TABLES `Class` WRITE;
/*!40000 ALTER TABLE `Class` DISABLE KEYS */;
/*!40000 ALTER TABLE `Class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`course_id`),
  KEY `FK TO COURSE FROM TEACHER` (`teacher_id`),
  CONSTRAINT `FK TO COURSE FROM TEACHER` FOREIGN KEY (`teacher_id`) REFERENCES `Teacher` (`teacher_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Homework`
--

DROP TABLE IF EXISTS `Homework`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Homework` (
  `homework_id` int(11) NOT NULL AUTO_INCREMENT,
  `uploaded_date` date NOT NULL,
  `homework` varchar(1000) NOT NULL,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`homework_id`),
  KEY `FK TO HOMEWORK FROM COURSE` (`course_id`),
  CONSTRAINT `FK TO HOMEWORK FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Homework`
--

LOCK TABLES `Homework` WRITE;
/*!40000 ALTER TABLE `Homework` DISABLE KEYS */;
/*!40000 ALTER TABLE `Homework` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Institute`
--

DROP TABLE IF EXISTS `Institute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Institute` (
  `institute_id` int(11) NOT NULL AUTO_INCREMENT,
  `institute_name` varchar(255) NOT NULL,
  `contact_no` varchar(12) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `account_no` varchar(20) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`institute_id`),
  KEY `FK TO INSTITUTE FROM USER` (`user_id`),
  CONSTRAINT `FK TO INSTITUTE FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Institute`
--

LOCK TABLES `Institute` WRITE;
/*!40000 ALTER TABLE `Institute` DISABLE KEYS */;
/*!40000 ALTER TABLE `Institute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Institute_teacher`
--

DROP TABLE IF EXISTS `Institute_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Institute_teacher` (
  `institute_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`institute_id`,`course_id`),
  KEY `FK TO INS_CO FROM INSTITUTE` (`institute_id`),
  KEY `FK TO INS_CO FROM COURSE` (`course_id`),
  CONSTRAINT `FK TO INS_CO FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `FK TO INS_CO FROM INSTITUTE` FOREIGN KEY (`institute_id`) REFERENCES `Institute` (`institute_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Institute_teacher`
--

LOCK TABLES `Institute_teacher` WRITE;
/*!40000 ALTER TABLE `Institute_teacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `Institute_teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Notes`
--

DROP TABLE IF EXISTS `Notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Notes` (
  `note_id` int(11) NOT NULL,
  `uploaded_date` date NOT NULL,
  `note` varchar(1000) NOT NULL,
  `course_id` int(11) NOT NULL,
  KEY `FK TO NOTE FROM COURSE` (`course_id`),
  CONSTRAINT `FK TO NOTE FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notes`
--

LOCK TABLES `Notes` WRITE;
/*!40000 ALTER TABLE `Notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `Notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Parent`
--

DROP TABLE IF EXISTS `Parent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Parent` (
  `parent_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `mobile_no` varchar(12) NOT NULL,
  `security_status` enum('active','inactive') NOT NULL,
  PRIMARY KEY (`parent_id`),
  KEY `FK TO PARENT FROM USER` (`user_id`),
  CONSTRAINT `FK TO PARENT FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parent`
--

LOCK TABLES `Parent` WRITE;
/*!40000 ALTER TABLE `Parent` DISABLE KEYS */;
/*!40000 ALTER TABLE `Parent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Parent_Payment`
--

DROP TABLE IF EXISTS `Parent_Payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Parent_Payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `amount` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `month` enum('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') NOT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `FK TO PARENT_PAYMENT FROM STUDENT` (`student_id`),
  CONSTRAINT `FK TO PARENT_PAYMENT FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parent_Payment`
--

LOCK TABLES `Parent_Payment` WRITE;
/*!40000 ALTER TABLE `Parent_Payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Parent_Payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student` (
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `school` varchar(100) NOT NULL,
  `grade` varchar(3) NOT NULL,
  `security_status` enum('active','inactive') NOT NULL,
  `student_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  PRIMARY KEY (`student_id`),
  KEY `FK TO STUDENT FROM USER` (`user_id`),
  KEY `FK TO STUDENT FROM PARENT` (`parent_id`),
  CONSTRAINT `FK TO STUDENT FROM PARENT` FOREIGN KEY (`parent_id`) REFERENCES `Parent` (`parent_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK TO STUDENT FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student_Course`
--

DROP TABLE IF EXISTS `Student_Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student_Course` (
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`student_id`,`course_id`),
  KEY `FK TO STU_CO FROM STUDENT` (`student_id`),
  KEY `FK TO STU_CO FROM COURSE` (`course_id`),
  CONSTRAINT `FK TO STU_CO FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `FK TO STU_CO FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student_Course`
--

LOCK TABLES `Student_Course` WRITE;
/*!40000 ALTER TABLE `Student_Course` DISABLE KEYS */;
/*!40000 ALTER TABLE `Student_Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student_Payment`
--

DROP TABLE IF EXISTS `Student_Payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Student_Payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `month` enum('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') NOT NULL,
  `payment_status` enum('paid','unpaid') NOT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `FK TO STUDENT_PAYMENT FROM COURSE` (`course_id`),
  KEY `FK TO STUDENT_PAYMENT FROM STUDENT` (`student_id`),
  CONSTRAINT `FK TO STUDENT_PAYMENT FROM COURSE` FOREIGN KEY (`course_id`) REFERENCES `Course` (`course_id`),
  CONSTRAINT `FK TO STUDENT_PAYMENT FROM PARENT_PAYMENT` FOREIGN KEY (`payment_id`) REFERENCES `Parent_Payment` (`payment_id`),
  CONSTRAINT `FK TO STUDENT_PAYMENT FROM STUDENT` FOREIGN KEY (`student_id`) REFERENCES `Student` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student_Payment`
--

LOCK TABLES `Student_Payment` WRITE;
/*!40000 ALTER TABLE `Student_Payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Student_Payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teacher`
--

DROP TABLE IF EXISTS `Teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Teacher` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT,
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
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`teacher_id`),
  KEY `FK TO TEACHER FROM USER` (`user_id`),
  CONSTRAINT `FK TO TEACHER FROM USER` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teacher`
--

LOCK TABLES `Teacher` WRITE;
/*!40000 ALTER TABLE `Teacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `Teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `type` enum('student','parent','teacher','institute','admin') NOT NULL DEFAULT 'student',
  `profile_image` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-18 12:14:52
