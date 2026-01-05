import crypto from "node:crypto";
import {
  JWS_ALGORITHM,
  DIGEST_ALGORITHM,
  TOKEN_EXPIRY_TIME_IN_MILLISECONDS,
  JWE_ENCRYPTION_METHOD,
  JWE_ALGORITHM,
} from "./constants.js";

export const generateDigestObject = ({ payload }) => ({
  digest: crypto.createHash("sha256").update(payload).digest("base64"),
  digestAlgorithm: DIGEST_ALGORITHM,
  exp: TOKEN_EXPIRY_TIME_IN_MILLISECONDS,
  iat: `${Date.now()}`,
});

export const generateJWSHeaderObject = ({ merchantId, kid }) => ({
  alg: JWS_ALGORITHM,
  kid,
  "x-gl-merchantId": merchantId,
  "issued-by": merchantId,
  "is-digested": "true",
  "x-gl-enc": "true",
});

export const generateJWEHeaderObject = ({ merchantId, kid }) => ({
  "issued-by": merchantId,
  enc: JWE_ENCRYPTION_METHOD,
  exp: TOKEN_EXPIRY_TIME_IN_MILLISECONDS,
  iat: `${Date.now()}`,
  alg: JWE_ALGORITHM,
  kid,
});
