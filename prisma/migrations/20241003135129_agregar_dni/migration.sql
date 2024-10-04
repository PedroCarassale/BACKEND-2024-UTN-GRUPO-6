-- CreateTable
CREATE TABLE `gimnasio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `ciudad` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(20) NULL,
    `precio_membresia` DECIMAL(10, 2) NULL,
    `fecha_creacion` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `imagen_url` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `miembro` (
    `usuario_id` INTEGER NOT NULL,
    `gimnasio_id` INTEGER NOT NULL,
    `fecha_membresia` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `gimnasio_id`(`gimnasio_id`),
    PRIMARY KEY (`usuario_id`, `gimnasio_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `dni` VARCHAR(8) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `contraseña` VARCHAR(255) NOT NULL,
    `fecha_creacion` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `miembro` ADD CONSTRAINT `miembro_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `miembro` ADD CONSTRAINT `miembro_ibfk_2` FOREIGN KEY (`gimnasio_id`) REFERENCES `gimnasio`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
