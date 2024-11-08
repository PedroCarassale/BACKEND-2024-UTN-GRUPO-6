/*
  Warnings:

  - You are about to drop the column `actividad_gimnasio_id` on the `rutina` table. All the data in the column will be lost.
  - You are about to drop the `actividad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `actividadgimnasio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `actividadgimnasio` DROP FOREIGN KEY `actividadgimnasio_ibfk_1`;

-- DropForeignKey
ALTER TABLE `actividadgimnasio` DROP FOREIGN KEY `actividadgimnasio_ibfk_2`;

-- DropForeignKey
ALTER TABLE `rutina` DROP FOREIGN KEY `rutina_ibfk_1`;

-- AlterTable
ALTER TABLE `rutina` DROP COLUMN `actividad_gimnasio_id`,
    ADD COLUMN `gimnasio_id` INTEGER NULL;

-- DropTable
DROP TABLE `actividad`;

-- DropTable
DROP TABLE `actividadgimnasio`;

-- CreateIndex
CREATE INDEX `gimnasio_id` ON `rutina`(`gimnasio_id`);

-- AddForeignKey
ALTER TABLE `rutina` ADD CONSTRAINT `actividadgimnasio_ibfk_1` FOREIGN KEY (`gimnasio_id`) REFERENCES `gimnasio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
