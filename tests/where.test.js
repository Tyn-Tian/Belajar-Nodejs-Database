import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can using or oprator", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: "A",
          },
          {
            name: "B",
          },
        ],
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    });

    console.info(products);

    expect(products.length).toBe(2);
    expect(products[0].name).toBe("A");
    expect(products[1].name).toBe("B");
  });
});
