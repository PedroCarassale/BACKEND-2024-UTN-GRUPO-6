/*
  Warnings:

  - Made the column `rutina_id` on table `ejerciciorutina` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ejercicio_id` on table `ejerciciorutina` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `ejerciciorutina` DROP FOREIGN KEY `ejerciciorutina_ibfk_1`;

-- DropForeignKey
ALTER TABLE `ejerciciorutina` DROP FOREIGN KEY `ejerciciorutina_ibfk_2`;

-- AlterTable
ALTER TABLE `ejerciciorutina` MODIFY `rutina_id` INTEGER NOT NULL,
    MODIFY `ejercicio_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ejerciciorutina` ADD CONSTRAINT `ejerciciorutina_ibfk_1` FOREIGN KEY (`rutina_id`) REFERENCES `rutina`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ejerciciorutina` ADD CONSTRAINT `ejerciciorutina_ibfk_2` FOREIGN KEY (`ejercicio_id`) REFERENCES `ejercicio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
