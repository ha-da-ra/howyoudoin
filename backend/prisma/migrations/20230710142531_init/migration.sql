-- CreateTable
CREATE TABLE `MoodChange` (
    `Id` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `changedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
