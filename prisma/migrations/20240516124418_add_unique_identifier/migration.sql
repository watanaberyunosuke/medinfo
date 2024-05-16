-- CreateEnum
CREATE TYPE "type" AS ENUM ('Policy', 'Term', 'Occupation', 'Therapy', 'Assessment');

-- CreateTable
CREATE TABLE "Term" (
    "id" SERIAL NOT NULL,
    "short_form" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "full_form" VARCHAR(255) NOT NULL,
    "cht" VARCHAR(255) NOT NULL,
    "chs" VARCHAR(255) NOT NULL,
    "annotation" VARCHAR(255),
    "resources" VARCHAR(255),

    CONSTRAINT "Term_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Australia_Hospital" (
    "objectid" INTEGER NOT NULL,
    "hsib_id" INTEGER NOT NULL,
    "hosp_name" TEXT,
    "category" TEXT,
    "street" TEXT,
    "pcode" TEXT,
    "suburb" TEXT,
    "state" TEXT,
    "xcoord" TEXT,
    "ycoord" TEXT,
    "globalid" TEXT,

    CONSTRAINT "Australia_Hospital_pkey" PRIMARY KEY ("hsib_id")
);
