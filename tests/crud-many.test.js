import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "joko",
          email: "joko@local",
          phone: "12345",
          name: "Joko",
        },
        {
          id: "ebel",
          email: "ebel@local",
          phone: "98765",
          name: "Ebel",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "jokoUpdated@local",
      },
      where: {
        name: "Joko",
      },
    });

    expect(count).toBe(1);
  });

  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak ada",
      },
    });

    expect(count).toBe(0);
  });
});
