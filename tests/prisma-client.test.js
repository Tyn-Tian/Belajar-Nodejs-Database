import { PrismaClient } from "@prisma/client";

describe("Prisma Client", () => {
    it('should able to connect to database', async () => {
        const prisma = new PrismaClient();
        await prisma.$connect();

        // do something

        await prisma.$disconnect();
    });
})