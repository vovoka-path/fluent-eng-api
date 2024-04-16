-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rus" TEXT NOT NULL,
    "eng" TEXT NOT NULL,
    "topicId" INTEGER NOT NULL,
    CONSTRAINT "Card_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "useId" INTEGER NOT NULL,
    "delay" DECIMAL NOT NULL,
    "pause" INTEGER NOT NULL,
    "countdown" INTEGER NOT NULL,
    CONSTRAINT "Settings_useId_fkey" FOREIGN KEY ("useId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TopicToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TopicToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Topic" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TopicToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_useId_key" ON "Settings"("useId");

-- CreateIndex
CREATE UNIQUE INDEX "_TopicToUser_AB_unique" ON "_TopicToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicToUser_B_index" ON "_TopicToUser"("B");
