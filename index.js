// Server-only protection
if (typeof window !== "undefined") {
  throw new Error(
    "@payglocal/js-client must be used in a Node.js (server-side) environment only"
  );
}

import generateJWEInternal from "./src/generateJWE.js";
import generateJWSInternal from "./src/generateJWS.js";
import generateJWEAndJWS from "./src/generateJWEAndJWS.js";
import {
  validateGenerateJWEParams,
  validateGenerateJWSParams,
} from "./utils/validate.js";

export async function generateJWE(params) {
  validateGenerateJWEParams(params);
  return await generateJWEInternal(params);
}

export async function generateJWS(params) {
  validateGenerateJWSParams(params);
  return await generateJWSInternal(params);
}

export { generateJWEAndJWS };
