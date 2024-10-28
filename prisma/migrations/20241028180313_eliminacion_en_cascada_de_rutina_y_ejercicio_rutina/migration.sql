-- DropForeignKey
ALTER TABLE `ejerciciorutina` DROP FOREIGN KEY `ejerciciorutina_ibfk_1`;

-- AddForeignKey
ALTER TABLE `ejerciciorutina` ADD CONSTRAINT `ejerciciorutina_ibfk_1` FOREIGN KEY (`rutina_id`) REFERENCES `rutina`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
