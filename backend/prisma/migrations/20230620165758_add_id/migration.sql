/*
  Warnings:

  - The primary key for the `MoodChange` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `Id` to the `MoodChange` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MoodChange" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "value" INTEGER NOT NULL,
    "changedAt" DATETIME NOT NULL
);
INSERT INTO "new_MoodChange" ("changedAt", "value") SELECT "changedAt", "value" FROM "MoodChange";
DROP TABLE "MoodChange";
ALTER TABLE "new_MoodChange" RENAME TO "MoodChange";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
