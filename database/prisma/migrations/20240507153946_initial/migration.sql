-- CreateEnum
CREATE TYPE "ReleaseStatus" AS ENUM ('active', 'inactive', 'unstable');

-- CreateTable
CREATE TABLE "Deployment" (
    "assets" TEXT[],
    "releaseId" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ReleaseStatus" NOT NULL DEFAULT 'inactive',
    "frontendName" TEXT NOT NULL,

    CONSTRAINT "Deployment_pkey" PRIMARY KEY ("releaseId","frontendName")
);

-- CreateIndex
CREATE INDEX "Deployment_frontendName_idx" ON "Deployment"("frontendName");

-- CreateIndex
CREATE INDEX "Deployment_frontendName_status_idx" ON "Deployment"("frontendName", "status");

-- CreateIndex
CREATE INDEX "Deployment_frontendName_status_releaseDate_idx" ON "Deployment"("frontendName", "status", "releaseDate");
