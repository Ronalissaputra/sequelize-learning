"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "7a6ef9e9-74fb-49b9-8d7f-13b4b9be5800er",
          name: "Satriani",
          email: "satriani@gamil.com",
          role: "admin",
          createdAt: "2023-05-11 05:40:48",
          updatedAt: "2023-05-11 05:40:48",
        },
        {
          uuid: "7a6ef9e9-74fb-49b9-8d7f-13b4b9be5800erasd",
          name: "Anibong",
          email: "anibong@gamil.com",
          role: "admin",
          createdAt: "2023-05-11 05:40:48",
          updatedAt: "2023-05-11 05:40:48",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
