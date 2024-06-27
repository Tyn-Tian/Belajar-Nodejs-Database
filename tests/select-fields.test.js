import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "lyn",
        email: "lyn@local",
        phone: "12372",
        name: "lynman",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("lyn");
    expect(customer.name).toBe("lynman");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (let customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
