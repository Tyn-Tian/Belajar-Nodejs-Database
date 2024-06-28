import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "ebel",
        title: "Insert Commnet",
        description: "Description Comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should can insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "alex",
        name: "Alex",
        email: "alex@local",
        phone: "98321",
        comment: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "Description 1",
              },
              {
                title: "Comment 2",
                description: "Description 2",
              },
            ],
          },
        },
      },
      include: {
        comment: true,
      },
    });

    console.info(customer);
  });

  it("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comment: {
          some: {
            title: {
              contains: "comment",
            },
          },
        },
      },
      include: {
        comment: true,
      },
    });

    console.info(JSON.stringify(customers));
  });
});
