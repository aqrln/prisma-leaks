const prisma = require("../src/index");

// afterAll(async () => {
//   await prisma.$disconnect();
// });

it("might leak", async () => {
  await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     email: "test",
  //   },
  // });
  expect(user).toBeTruthy();
});
