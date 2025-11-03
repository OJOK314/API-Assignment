-- DropForeignKey
ALTER TABLE "public"."Hospital" DROP CONSTRAINT "Hospital_patientId_fkey";

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "hospitalId" INTEGER;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;
