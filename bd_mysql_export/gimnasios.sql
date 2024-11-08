-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: gimnasios
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('086526f9-59a4-4f06-a82f-86404b018568','97a0bacac24a2add2a44158aa9035c222dd7b9a37926d7242f9af2358b88bcb8','2024-10-28 10:28:17.026','20241028102814_add_dni_to_usuario',NULL,NULL,'2024-10-28 10:28:14.625',1),('1992d928-d0b1-4848-8a1e-12d687c7647a','95538d6889a442fa9c5fe49537c6581cf172d45f42d8ad0f91780fb302e78da5','2024-10-28 18:03:13.729','20241028180313_eliminacion_en_cascada_de_rutina_y_ejercicio_rutina',NULL,NULL,'2024-10-28 18:03:13.581',1),('42814060-2fdf-4c97-bf7d-22ec29a7889d','8ed9d2efd4be28727a515bfe1b4ac5fdc26a0c4bbb64bce66e6bb39717541117','2024-10-28 13:01:17.040','20241028130116_add_imagen_url_to_ejercicio',NULL,NULL,'2024-10-28 13:01:16.993',1),('456221a6-e58f-4360-8f15-ed9ca3274b49','e8c122149ebc2db2d3019d76367c0b38cfa51be161b9b124a11ce6b6db6189e7','2024-10-28 14:51:06.611','20241028145106_add_atributos_rutina',NULL,NULL,'2024-10-28 14:51:06.555',1),('4d9d454a-2c36-4f0b-ac7b-1028e74bd581','c9fff4c00a540b415941a0ff1bd2118ba2ae0e3e98689eb5168ea225cc82ac78','2024-10-28 17:19:50.666','20241028171950_rutina_id_opcional_en_ejerciciorutina',NULL,NULL,'2024-10-28 17:19:50.550',1),('68902000-3b42-42e2-ae09-8a7cb48ceabf','2c810b55340906d3551b185bba381793820b5bc264588a8e00667a5993e00e90','2024-10-28 14:43:05.920','20241028144305_add_atributos_ejerciciorutina',NULL,NULL,'2024-10-28 14:43:05.832',1),('98a9ef38-77af-4e23-8118-4c3d5209b8f7','4ac284e2f649e2501e60eaa3267e183f12d2e50018c5977475462d980cbe880b','2024-10-28 14:25:27.757','20241028142527_add_intensidad_to_ejercicio',NULL,NULL,'2024-10-28 14:25:27.712',1),('d0cf419f-6ede-4101-91cd-878ae91ea637','a186b32dc93eac4ed9d21afd60559a44f80e4f4e18a27cf2abbdc04e70c1a135','2024-10-28 18:35:09.731','20241028183509_se_elimino_actividad',NULL,NULL,'2024-10-28 18:35:09.358',1),('e4b53f36-be92-4131-8a0b-973dfe84816a','70dc007845097b2d28ce5aac3fac10254d7f5f00c462d6831461c4d86da38729','2024-10-28 16:04:30.651','20241028160430_add_imagen_url_to_ejercicio',NULL,NULL,'2024-10-28 16:04:30.075',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudad`
--

DROP TABLE IF EXISTS `ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provincia_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `provincia_id` (`provincia_id`),
  CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`provincia_id`) REFERENCES `provincia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,'La Plata',1),(2,'Mar del Plata',1),(3,'Catamarca',2),(4,'Resistencia',3),(5,'Rawson',4),(6,'Córdoba',5),(7,'Corrientes',6),(8,'Paraná',7),(9,'Formosa',8),(10,'San Salvador de Jujuy',9),(11,'Santa Rosa',10),(12,'La Rioja',11),(13,'Mendoza',12),(14,'Posadas',13),(15,'Neuquén',14),(16,'Viedma',15),(17,'Salta',16),(18,'San Juan',17),(19,'San Luis',18),(20,'Río Gallegos',19),(21,'Santa Fe',20),(22,'Santiago del Estero',21),(23,'Ushuaia',22),(24,'San Miguel de Tucumán',23);
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejercicio`
--

DROP TABLE IF EXISTS `ejercicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejercicio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `imagen_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejercicio`
--

LOCK TABLES `ejercicio` WRITE;
/*!40000 ALTER TABLE `ejercicio` DISABLE KEYS */;
INSERT INTO `ejercicio` VALUES (4,'Press Banca','Ejercicio de fuerza que se realiza en una banca, para trabajar los músculos del pecho.','https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/press-banca-en-banco-de-press-banca-init-pos-7611.png'),(5,'Peso Muerto','El peso muerto es un ejercicio de levantamiento de pesas que consiste en levantar una barra desde el suelo hasta la altura de las caderas, utilizando principalmente los músculos de la espalda, glúteos y piernas. Es un ejercicio fundamental para desarrollar fuerza y masa muscular en el cuerpo.','https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/peso-muerto-con-barra-tradicional-init-pos-4394.png'),(6,'Dominadas boca arriba','Tire de la barra hacia su torso hasta que sus manos estén al lado de sus costillas mientras exhala. Vuelva a la posición inicial con un movimiento suave mientras inhala.','https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/dominadas-boca-arriba-agarre-supino-init-pos-1454.png');
/*!40000 ALTER TABLE `ejercicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejerciciorutina`
--

DROP TABLE IF EXISTS `ejerciciorutina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ejerciciorutina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rutina_id` int DEFAULT NULL,
  `ejercicio_id` int NOT NULL,
  `descanso_entre_series` int DEFAULT NULL,
  `intensidad` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `series_x_repeticiones` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ejercicio_id` (`ejercicio_id`),
  KEY `rutina_id` (`rutina_id`),
  CONSTRAINT `ejerciciorutina_ibfk_1` FOREIGN KEY (`rutina_id`) REFERENCES `rutina` (`id`) ON DELETE CASCADE,
  CONSTRAINT `ejerciciorutina_ibfk_2` FOREIGN KEY (`ejercicio_id`) REFERENCES `ejercicio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejerciciorutina`
--

LOCK TABLES `ejerciciorutina` WRITE;
/*!40000 ALTER TABLE `ejerciciorutina` DISABLE KEYS */;
INSERT INTO `ejerciciorutina` VALUES (5,3,4,30,'Moderada',NULL),(6,3,6,45,'Moderada',NULL);
/*!40000 ALTER TABLE `ejerciciorutina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadomembresia`
--

DROP TABLE IF EXISTS `estadomembresia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadomembresia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadomembresia`
--

LOCK TABLES `estadomembresia` WRITE;
/*!40000 ALTER TABLE `estadomembresia` DISABLE KEYS */;
INSERT INTO `estadomembresia` VALUES (1,'Activo'),(2,'Inactivo');
/*!40000 ALTER TABLE `estadomembresia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gimnasio`
--

DROP TABLE IF EXISTS `gimnasio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gimnasio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `imagen_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad_id` int DEFAULT NULL,
  `id_dueño` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ciudad_id` (`ciudad_id`),
  KEY `fk_dueño` (`id_dueño`),
  CONSTRAINT `fk_dueño` FOREIGN KEY (`id_dueño`) REFERENCES `usuario` (`id`),
  CONSTRAINT `gimnasio_ibfk_1` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudad` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gimnasio`
--

LOCK TABLES `gimnasio` WRITE;
/*!40000 ALTER TABLE `gimnasio` DISABLE KEYS */;
INSERT INTO `gimnasio` VALUES (1,'Bolt','Av. 1 1375','2216492314','Fitness Club','https://lh3.googleusercontent.com/p/AF1QipOldGVtceC5P5QlURGtiz84v8FHfhcVNuvnxeRR=s1360-w1360-h1020',1,2),(2,'Box Cntral','13 entre 55 y 56','2216492314','Musculacion, Funcional y Crossfit','https://lh3.googleusercontent.com/p/AF1QipMeXhFOh6-J6FgGJ-dRbkVqHzOTVkQwZRT9HlbI=s1360-w1360-h1020',1,2),(3,'Sky Gym','59 nro 1177','2216492544','Varias Cadenas','https://lh3.googleusercontent.com/p/AF1QipNbbDbr20-TLHDZW1bhLgpIGjmQWWsqbcBvTFS1=s1360-w1360-h1020',1,2),(4,'Kualia','Calle 80 entre 120 y 121','2216445544','3 Pisos','https://lh3.googleusercontent.com/p/AF1QipOU9V54R6EB8_G6xxtvAzFLy2lSW3afRXUhVrnE=s680-w680-h510',1,2);
/*!40000 ALTER TABLE `gimnasio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membresia`
--

DROP TABLE IF EXISTS `membresia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membresia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `gimnasio_id` int DEFAULT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `estado_membresia_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `estado_membresia_id` (`estado_membresia_id`),
  KEY `gimnasio_id` (`gimnasio_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `membresia_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `membresia_ibfk_2` FOREIGN KEY (`gimnasio_id`) REFERENCES `gimnasio` (`id`),
  CONSTRAINT `membresia_ibfk_3` FOREIGN KEY (`estado_membresia_id`) REFERENCES `estadomembresia` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membresia`
--

LOCK TABLES `membresia` WRITE;
/*!40000 ALTER TABLE `membresia` DISABLE KEYS */;
INSERT INTO `membresia` VALUES (1,2,1,'2024-10-28','2024-11-28',25000.00,1);
/*!40000 ALTER TABLE `membresia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincia`
--

DROP TABLE IF EXISTS `provincia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provincia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincia`
--

LOCK TABLES `provincia` WRITE;
/*!40000 ALTER TABLE `provincia` DISABLE KEYS */;
INSERT INTO `provincia` VALUES (1,'Buenos Aires'),(2,'Catamarca'),(3,'Chaco'),(4,'Chubut'),(5,'Córdoba'),(6,'Corrientes'),(7,'Entre Ríos'),(8,'Formosa'),(9,'Jujuy'),(10,'La Pampa'),(11,'La Rioja'),(12,'Mendoza'),(13,'Misiones'),(14,'Neuquén'),(15,'Río Negro'),(16,'Salta'),(17,'San Juan'),(18,'San Luis'),(19,'Santa Cruz'),(20,'Santa Fe'),(21,'Santiago del Estero'),(22,'Tierra del Fuego'),(23,'Tucumán');
/*!40000 ALTER TABLE `provincia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reseña`
--

DROP TABLE IF EXISTS `reseña`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reseña` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_gimnasio` int DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  `fecha` date DEFAULT (curdate()),
  `comentario` text COLLATE utf8mb4_unicode_ci,
  `puntuacion_general` decimal(2,1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_gimnasio` (`id_gimnasio`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `reseña_ibfk_1` FOREIGN KEY (`id_gimnasio`) REFERENCES `gimnasio` (`id`),
  CONSTRAINT `reseña_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseña`
--

LOCK TABLES `reseña` WRITE;
/*!40000 ALTER TABLE `reseña` DISABLE KEYS */;
/*!40000 ALTER TABLE `reseña` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Cliente'),(2,'Dueño'),(3,'Administrador');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutina`
--

DROP TABLE IF EXISTS `rutina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descanso_entre_ejercicios` int DEFAULT NULL,
  `imagen_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gimnasio_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gimnasio_id` (`gimnasio_id`),
  CONSTRAINT `actividadgimnasio_ibfk_1` FOREIGN KEY (`gimnasio_id`) REFERENCES `gimnasio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutina`
--

LOCK TABLES `rutina` WRITE;
/*!40000 ALTER TABLE `rutina` DISABLE KEYS */;
INSERT INTO `rutina` VALUES (3,'Rutina de Fuerza',60,'https://www.antiaginggroupbarcelona.com/wp-content/uploads/2023/02/implante-pectorales-agb-1.png',1);
/*!40000 ALTER TABLE `rutina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre_usuario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clave` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'40226068','Rodrigo','Ramirez','rodriramirez','rodrigoramriezok@gmail.com','$2b$10$YOZgPoAIe3Hc.ua7Yjwni.gfnKJlHcjd5iVJ8su9ETlZ6k2tl.0J2',2),(3,'12345678','Nahuel','Iroz','nahuiroz','nahueliroz@gmail.com','$2b$10$isE1DxSaGMyJ6ghQ2lgsmeYmQaJb8zQjzbTh8tAu14K3aX7auiHjG',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-28 16:15:37
