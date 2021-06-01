"use strict";

const StructureService = require("../services");

const search = async (context) => {
  let { perimetre } = context.request.query;

  perimetre = perimetre ? JSON.parse(perimetre) : null

  try {
    return StructureService.search(perimetre);
  } catch (e) {
    context.badRequest(e.message);
  }
};

module.exports = { search };