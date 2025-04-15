/*
  Warnings:

  - You are about to drop the column `user` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `image` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "deliveredOn" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "user",
ADD COLUMN     "image" TEXT NOT NULL;
