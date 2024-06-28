import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "ebel",
        customer_id: "ebel",
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });

  it("should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "tian",
        name: "Tian",
        email: "tian@local",
        phone: "17823",
        wallet: {
          create: {
            id: "tian",
            balance: 5000000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should can find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "tian",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it('should can find one to one with relation filter', async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null
        }
      },
      include: {
        wallet: true
      }
    });

    console.info(customers);
  });
});
