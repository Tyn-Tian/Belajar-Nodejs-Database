import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [tian, budi] = await prismaClient.$transaction(
      [
        prismaClient.customer.create({
          data: {
            id: "tian",
            email: "tian@pzn.com",
            name: "Tian",
            phone: "25334534534543",
          },
        }),
        prismaClient.customer.create({
          data: {
            id: "budi",
            email: "budi@pzn.com",
            name: "Budi",
            phone: "3453453543",
          },
        }),
      ],
      {
        timeout: 5,
      }
    );

    expect(tian.name).toBe("Tian");
    expect(budi.name).toBe("Budi");
  });

  it("should can execute interactive transaction", async () => {
    const [eko, kurniawan] = await prismaClient.$transaction(
      async (prisma) => {
        const eko = await prisma.customer.create({
          data: {
            id: "eko2",
            email: "eko2@pzn.com",
            name: "Eko",
            phone: "56456464565",
          },
        });
        const kurniawan = await prisma.customer.create({
          data: {
            id: "kurniawan2",
            email: "kurniawan2@pzn.com",
            name: "Kurniawan",
            phone: "4356345345",
          },
        });

        return [eko, kurniawan];
      },
      {
        timeout: 1000,
      }
    );

    expect(eko.name).toBe("Eko");
    expect(kurniawan.name).toBe("Kurniawan");
  });
});
