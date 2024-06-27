import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "Christian",
        email: "test@pzn.com",
        name: "Christian",
        phone: "08124758823720"
      }
    });

    expect(customer.id).toBe("Christian");
    expect(customer.email).toBe("test@pzn.com");
    expect(customer.name).toBe("Christian");
    expect(customer.phone).toBe("08124758823720");
  });

  it('should be able to update customer', async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Christian Updated"
      },
      where: {
        id: "Christian"
      }
    });

    expect(customer.id).toBe("Christian");
    expect(customer.email).toBe("test@pzn.com");
    expect(customer.name).toBe("Christian Updated");
    expect(customer.phone).toBe("08124758823720");
  });

  it('should be able to read customer', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "Christian"
      }
    });

    expect(customer.id).toBe("Christian");
    expect(customer.email).toBe("test@pzn.com");
    expect(customer.name).toBe("Christian Updated");
    expect(customer.phone).toBe("08124758823720");
  });

  it('should be able to delete customer', async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "Christian"
      }
    });

    expect(customer.id).toBe("Christian");
    expect(customer.email).toBe("test@pzn.com");
    expect(customer.name).toBe("Christian Updated");
    expect(customer.phone).toBe("08124758823720");
  });
});
