-- CreateTable
CREATE TABLE `gimnasio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(15) NULL,
    `descripcion` TEXT NULL,
    `imagen_url` VARCHAR(255) NULL,
    `ciudad_id` INTEGER NULL,
    `id_dueño` INTEGER NULL,

    INDEX `ciudad_id`(`ciudad_id`),
    INDEX `fk_dueño`(`id_dueño`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` VARCHAR(8) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `nombre_usuario` VARCHAR(100) NOT NULL,
    `correo` VARCHAR(255) NOT NULL,
    `clave` VARCHAR(255) NOT NULL,
    `rol_id` INTEGER NULL,

    UNIQUE INDEX `dni`(`dni`),
    UNIQUE INDEX `nombre_usuario`(`nombre_usuario`),
    UNIQUE INDEX `correo`(`correo`),
    INDEX `rol_id`(`rol_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `actividad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `actividadgimnasio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gimnasio_id` INTEGER NULL,
    `actividad_id` INTEGER NULL,

    INDEX `actividad_id`(`actividad_id`),
    INDEX `gimnasio_id`(`gimnasio_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ciudad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `provincia_id` INTEGER NULL,

    INDEX `provincia_id`(`provincia_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ejercicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ejerciciorutina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rutina_id` INTEGER NULL,
    `ejercicio_id` INTEGER NULL,
    `dia` ENUM('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo') NOT NULL,

    INDEX `ejercicio_id`(`ejercicio_id`),
    INDEX `rutina_id`(`rutina_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estadomembresia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `membresia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id` INTEGER NULL,
    `gimnasio_id` INTEGER NULL,
    `fecha_inicio` DATE NOT NULL,
    `fecha_fin` DATE NOT NULL,
    `precio` DECIMAL(10, 2) NOT NULL,
    `estado_membresia_id` INTEGER NULL,

    INDEX `estado_membresia_id`(`estado_membresia_id`),
    INDEX `gimnasio_id`(`gimnasio_id`),
    INDEX `usuario_id`(`usuario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provincia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reseña` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_gimnasio` INTEGER NULL,
    `id_usuario` INTEGER NULL,
    `fecha` DATE NULL DEFAULT (curdate()),
    `comentario` TEXT NULL,
    `puntuacion_general` DECIMAL(2, 1) NULL,

    INDEX `id_gimnasio`(`id_gimnasio`),
    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rutina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `actividad_gimnasio_id` INTEGER NULL,

    INDEX `actividad_gimnasio_id`(`actividad_gimnasio_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `gimnasio` ADD CONSTRAINT `fk_dueño` FOREIGN KEY (`id_dueño`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `gimnasio` ADD CONSTRAINT `gimnasio_ibfk_1` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudad`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rol`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `actividadgimnasio` ADD CONSTRAINT `actividadgimnasio_ibfk_1` FOREIGN KEY (`gimnasio_id`) REFERENCES `gimnasio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `actividadgimnasio` ADD CONSTRAINT `actividadgimnasio_ibfk_2` FOREIGN KEY (`actividad_id`) REFERENCES `actividad`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ciudad` ADD CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`provincia_id`) REFERENCES `provincia`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ejerciciorutina` ADD CONSTRAINT `ejerciciorutina_ibfk_1` FOREIGN KEY (`rutina_id`) REFERENCES `rutina`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ejerciciorutina` ADD CONSTRAINT `ejerciciorutina_ibfk_2` FOREIGN KEY (`ejercicio_id`) REFERENCES `ejercicio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `membresia` ADD CONSTRAINT `membresia_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `membresia` ADD CONSTRAINT `membresia_ibfk_2` FOREIGN KEY (`gimnasio_id`) REFERENCES `gimnasio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `membresia` ADD CONSTRAINT `membresia_ibfk_3` FOREIGN KEY (`estado_membresia_id`) REFERENCES `estadomembresia`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reseña` ADD CONSTRAINT `reseña_ibfk_1` FOREIGN KEY (`id_gimnasio`) REFERENCES `gimnasio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reseña` ADD CONSTRAINT `reseña_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `rutina` ADD CONSTRAINT `rutina_ibfk_1` FOREIGN KEY (`actividad_gimnasio_id`) REFERENCES `actividadgimnasio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
