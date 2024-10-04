-- MySQL Script generated by MySQL Workbench
-- Wed Oct  2 12:38:06 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Gym
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Gym
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Gym` DEFAULT CHARACTER SET utf8 ;
USE `Gym` ;

-- -----------------------------------------------------
-- Table `Gym`.`Clase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Clase` (
  `idClase` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NULL,
  PRIMARY KEY (`idClase`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombreUsuario` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `fechaNacimiento` DATE NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Gimnasio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Gimnasio` (
  `idGimnasio` INT NOT NULL AUTO_INCREMENT,
  `creadorGimnasio` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idGimnasio`),
  INDEX `fk_Gimnasio_Usuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Gimnasio_Usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Gym`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Rol` (
  `idRol` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Membresia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Membresia` (
  `idMembresia` INT NOT NULL AUTO_INCREMENT,
  `fechaInicio` DATE NOT NULL,
  `fechaFin` DATE NOT NULL,
  PRIMARY KEY (`idMembresia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Miembro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Miembro` (
  `idMiembro` INT NOT NULL AUTO_INCREMENT,
  `idGimnasio` INT NOT NULL,
  `idRol` INT NOT NULL,
  `idMembresia` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idMiembro`),
  INDEX `fk_Miembro_Gimnasio1_idx` (`idGimnasio` ASC) VISIBLE,
  INDEX `fk_Miembro_Rol1_idx` (`idRol` ASC) VISIBLE,
  INDEX `fk_Miembro_Membresia1_idx` (`idMembresia` ASC) VISIBLE,
  INDEX `fk_Miembro_Usuario1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Miembro_Gimnasio1`
    FOREIGN KEY (`idGimnasio`)
    REFERENCES `Gym`.`Gimnasio` (`idGimnasio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Miembro_Rol1`
    FOREIGN KEY (`idRol`)
    REFERENCES `Gym`.`Rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Miembro_Membresia1`
    FOREIGN KEY (`idMembresia`)
    REFERENCES `Gym`.`Membresia` (`idMembresia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Miembro_Usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `Gym`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Sesion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Sesion` (
  `idSesion` INT NOT NULL AUTO_INCREMENT,
  `profesor` VARCHAR(50) NOT NULL,
  `fechaInicio` DATE NOT NULL,
  `fechaFin` DATE NOT NULL,
  `asistentes` INT NOT NULL,
  `idClase` INT NOT NULL,
  `idMiembro` INT NOT NULL,
  PRIMARY KEY (`idSesion`),
  INDEX `fk_Sesion_Clase_idx` (`idClase` ASC) VISIBLE,
  INDEX `fk_Sesion_Miembro1_idx` (`idMiembro` ASC) VISIBLE,
  CONSTRAINT `fk_Sesion_Clase`
    FOREIGN KEY (`idClase`)
    REFERENCES `Gym`.`Clase` (`idClase`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sesion_Miembro1`
    FOREIGN KEY (`idMiembro`)
    REFERENCES `Gym`.`Miembro` (`idMiembro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Rutina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Rutina` (
  `idRutina` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `descripcion` VARCHAR(100) NULL,
  `idMiembro` INT NOT NULL,
  PRIMARY KEY (`idRutina`),
  INDEX `fk_Rutina_Miembro1_idx` (`idMiembro` ASC) VISIBLE,
  CONSTRAINT `fk_Rutina_Miembro1`
    FOREIGN KEY (`idMiembro`)
    REFERENCES `Gym`.`Miembro` (`idMiembro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Sesion_Rutina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Sesion_Rutina` (
  `idSesion_Rutina` INT NOT NULL AUTO_INCREMENT,
  `idSesion` INT NOT NULL,
  `idRutina` INT NOT NULL,
  PRIMARY KEY (`idSesion_Rutina`),
  INDEX `fk_Sesion_Rutina_Sesion1_idx` (`idSesion` ASC) VISIBLE,
  INDEX `fk_Sesion_Rutina_Rutina1_idx` (`idRutina` ASC) VISIBLE,
  CONSTRAINT `fk_Sesion_Rutina_Sesion1`
    FOREIGN KEY (`idSesion`)
    REFERENCES `Gym`.`Sesion` (`idSesion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Sesion_Rutina_Rutina1`
    FOREIGN KEY (`idRutina`)
    REFERENCES `Gym`.`Rutina` (`idRutina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Reserva` (
  `idReserva` INT NOT NULL AUTO_INCREMENT,
  `idMiembro` INT NOT NULL,
  `idSesion` INT NOT NULL,
  PRIMARY KEY (`idReserva`),
  INDEX `fk_Reserva_Miembro1_idx` (`idMiembro` ASC) VISIBLE,
  INDEX `fk_Reserva_Sesion1_idx` (`idSesion` ASC) VISIBLE,
  CONSTRAINT `fk_Reserva_Miembro1`
    FOREIGN KEY (`idMiembro`)
    REFERENCES `Gym`.`Miembro` (`idMiembro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reserva_Sesion1`
    FOREIGN KEY (`idSesion`)
    REFERENCES `Gym`.`Sesion` (`idSesion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Ejercicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Ejercicio` (
  `idEjercicio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEjercicio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gym`.`Ejericio_Rutina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gym`.`Ejericio_Rutina` (
  `idEjericio_Rutina` INT NOT NULL AUTO_INCREMENT,
  `series` INT NOT NULL,
  `repeticiones` INT NOT NULL,
  `descanso` TIME NOT NULL,
  `idRutina` INT NOT NULL,
  `idEjercicio` INT NOT NULL,
  PRIMARY KEY (`idEjericio_Rutina`),
  INDEX `fk_Ejericio_Rutina_Rutina1_idx` (`idRutina` ASC) VISIBLE,
  INDEX `fk_Ejericio_Rutina_Ejercicio1_idx` (`idEjercicio` ASC) VISIBLE,
  CONSTRAINT `fk_Ejericio_Rutina_Rutina1`
    FOREIGN KEY (`idRutina`)
    REFERENCES `Gym`.`Rutina` (`idRutina`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ejericio_Rutina_Ejercicio1`
    FOREIGN KEY (`idEjercicio`)
    REFERENCES `Gym`.`Ejercicio` (`idEjercicio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;