/*
  Warnings:

  - You are about to drop the column `admissionDate` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `diagnosis` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `dischargeDate` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `doctorName` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `Patient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Hospital` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[treatment]` on the table `Hospital` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gender]` on the table `Patient` will be added. If there are existing duplicate values, this will fail.
  - Made the column `treatment` on table `Hospital` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Patient` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hospitalId` on table `Patient` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Patient" DROP CONSTRAINT "Patient_hospitalId_fkey";

-- AlterTable
ALTER TABLE "Hospital" DROP COLUMN "admissionDate",
DROP COLUMN "diagnosis",
DROP COLUMN "dischargeDate",
DROP COLUMN "doctorName",
DROP COLUMN "location",
DROP COLUMN "patientId",
ALTER COLUMN "treatment" SET NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "dateOfBirth",
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "hospitalId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_name_key" ON "Hospital"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_treatment_key" ON "Hospital"("treatment");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_gender_key" ON "Patient"("gender");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
