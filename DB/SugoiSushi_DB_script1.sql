-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema SugoiSushi_DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema SugoiSushi_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SugoiSushi_DB` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema sugoisushi_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sugoisushi_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sugoisushi_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `SugoiSushi_DB` ;

-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`Usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `fechaNacimiento` DATE NULL,
  `roll` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`Categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `veggies` INT NULL,
  `especiales` INT NULL,
  `combinados` INT NULL,
  `adicionales` INT NULL,
  `hots` INT NULL,
  `nigiris` INT NULL,
  `clasicos` INT NULL,
  `Productos_id` INT NOT NULL,
  `Productos_id1` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`HistorialeDeProductos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`HistorialeDeProductos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombreProducto` VARCHAR(45) NULL,
  `disponible` TINYINT NULL,
  `imagen` VARCHAR(45) NULL,
  `descripcion` VARCHAR(250) NULL,
  `precio` INT NULL,
  `descuento` INT NULL,
  `Productos_id` INT NOT NULL,
  `Productos_id1` INT NOT NULL,
  `favoritos_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`Productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombreProducto` VARCHAR(45) NOT NULL,
  `disponible` TINYINT NOT NULL,
  `categorias` VARCHAR(45) NOT NULL,
  `imagenProducto` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(250) NULL,
  `precio` INT NULL,
  `descuento` INT NULL,
  `HistorialeDeProductos_id` INT NOT NULL,
  `Categorias_id` INT NOT NULL,
  `HistorialeDeProductos_id1` INT NOT NULL,
  PRIMARY KEY (`id`, `HistorialeDeProductos_id`),
  INDEX `fk_Productos_Categorias1_idx` (`Categorias_id` ASC) VISIBLE,
  INDEX `fk_Productos_HistorialeDeProductos1_idx` (`HistorialeDeProductos_id1` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Categorias1`
    FOREIGN KEY (`Categorias_id`)
    REFERENCES `SugoiSushi_DB`.`Categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_HistorialeDeProductos1`
    FOREIGN KEY (`HistorialeDeProductos_id1`)
    REFERENCES `SugoiSushi_DB`.`HistorialeDeProductos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`Carritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`Carritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Usuarios_id` INT NOT NULL,
  `Productos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Carritos_Usuarios1_idx` (`Usuarios_id` ASC) VISIBLE,
  INDEX `fk_Carritos_Productos1_idx` (`Productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_Carritos_Usuarios1`
    FOREIGN KEY (`Usuarios_id`)
    REFERENCES `SugoiSushi_DB`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Carritos_Productos1`
    FOREIGN KEY (`Productos_id`)
    REFERENCES `SugoiSushi_DB`.`Productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`Ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`Ordenes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Carritos_id` INT NOT NULL,
  `Usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Ordenes_Carritos1_idx` (`Carritos_id` ASC) VISIBLE,
  INDEX `fk_Ordenes_Usuarios1_idx` (`Usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_Ordenes_Carritos1`
    FOREIGN KEY (`Carritos_id`)
    REFERENCES `SugoiSushi_DB`.`Carritos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ordenes_Usuarios1`
    FOREIGN KEY (`Usuarios_id`)
    REFERENCES `SugoiSushi_DB`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`favoritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `HistorialeDeProductos_id` INT NOT NULL,
  `Productos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_favoritos_HistorialeDeProductos1_idx` (`HistorialeDeProductos_id` ASC) VISIBLE,
  INDEX `fk_favoritos_Productos1_idx` (`Productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_favoritos_HistorialeDeProductos1`
    FOREIGN KEY (`HistorialeDeProductos_id`)
    REFERENCES `SugoiSushi_DB`.`HistorialeDeProductos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favoritos_Productos1`
    FOREIGN KEY (`Productos_id`)
    REFERENCES `SugoiSushi_DB`.`Productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SugoiSushi_DB`.`controlVentas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SugoiSushi_DB`.`controlVentas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Usuarios_id` INT NOT NULL,
  `Carritos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_controlVentas_Usuarios1_idx` (`Usuarios_id` ASC) VISIBLE,
  INDEX `fk_controlVentas_Carritos1_idx` (`Carritos_id` ASC) VISIBLE,
  CONSTRAINT `fk_controlVentas_Usuarios1`
    FOREIGN KEY (`Usuarios_id`)
    REFERENCES `SugoiSushi_DB`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_controlVentas_Carritos1`
    FOREIGN KEY (`Carritos_id`)
    REFERENCES `SugoiSushi_DB`.`Carritos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `sugoisushi_db` ;

-- -----------------------------------------------------
-- Table `sugoisushi_db`.`carritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sugoisushi_db`.`carritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuariosId` INT NULL DEFAULT NULL,
  `productosId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sugoisushi_db`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sugoisushi_db`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `veggies` INT NULL DEFAULT NULL,
  `especiales` INT NULL DEFAULT NULL,
  `combinados` INT NULL DEFAULT NULL,
  `adicionales` INT NULL DEFAULT NULL,
  `hots` INT NULL DEFAULT NULL,
  `nigiris` INT NULL DEFAULT NULL,
  `clasicos` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sugoisushi_db`.`historialdeproductos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sugoisushi_db`.`historialdeproductos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombreProducto` VARCHAR(255) NULL DEFAULT NULL,
  `disponible` INT NULL DEFAULT NULL,
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `precio` INT NULL DEFAULT NULL,
  `descuento` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sugoisushi_db`.`ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sugoisushi_db`.`ordenes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carritosId` INT NULL DEFAULT NULL,
  `productosId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sugoisushi_db`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sugoisushi_db`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombreProducto` VARCHAR(255) NULL DEFAULT NULL,
  `categoriasId` VARCHAR(255) NULL DEFAULT NULL,
  `disponible` INT NULL DEFAULT NULL,
  `imagenProducto` VARCHAR(255) NULL DEFAULT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `precio` INT NULL DEFAULT NULL,
  `descuento` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sugoisushi_db`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sugoisushi_db`.`sequelizemeta` (
  `name` VARCHAR(255) COLLATE 'utf8mb3_unicode_ci' NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sugoisushi_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sugoisushi_db`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  `roll` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
