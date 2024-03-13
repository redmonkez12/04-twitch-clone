/*
  Warnings:

  - You are about to drop the column `isChatEnable` on the `Stream` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stream" DROP COLUMN "isChatEnable",
ADD COLUMN     "isChatEnabled" BOOLEAN NOT NULL DEFAULT true;
