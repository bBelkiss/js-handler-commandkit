/* Optimized production build generated by CommandKit */
import {
  __commonJS,
  __require,
  init_esm_shims
} from "../chunk-U6E35Z6M.mjs";

// src/lib/prisma.js
var require_prisma = __commonJS({
  "src/lib/prisma.js"(exports, module) {
    init_esm_shims();
    var { PrismaClient } = __require("@prisma/client");
    var prisma = new PrismaClient();
    module.exports = prisma;
  }
});
export default require_prisma();
