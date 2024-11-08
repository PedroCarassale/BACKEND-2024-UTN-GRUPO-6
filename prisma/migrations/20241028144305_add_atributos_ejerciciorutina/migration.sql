/*
  Warnings:

  - You are about to drop the column `intensidad` on the `ejercicio` table. All the data in the column will be lost.
  - You are about to drop the column `dia` on the `ejerciciorutina` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ejercicio` DROP COLUMN `intensidad`;

-- AlterTable
ALTER TABLE `ejerciciorutina` DROP COLUMN `dia`,
    ADD COLUMN `descanso_entre_series` INTEGER NULL,
    ADD COLUMN `intensidad` VARCHAR(255) NULL,
    ADD COLUMN `series_x_repeticiones` VARCHAR(255) NULL;
