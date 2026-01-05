import { CompactEncrypt, importSPKI } from "jose";
import { JWE_ALGORITHM } from "../utils/constants.js";
import { generateJWEHeaderObject } from "../utils/helper.js";

/**
 * Generates a JWE token (Encrypt transaction payload)
 *
 * @param {Object} payload Transaction payload with all the required values (required)
 * @param {String} publicKey public key provided by payglocal (required)
 * @param {String} merchantId unique merchantId provided by payglocal
 * @param {String} publicKeyId kid associated with payglocal public key
 */
export default async function generateJWE({
  payload,
  publicKey,
  merchantId,
  publicKeyId,
}) {
  const cryptoPublicKey = await importSPKI(publicKey, JWE_ALGORITHM);
  const headerObject = generateJWEHeaderObject({
    merchantId,
    kid: publicKeyId,
  });

  const jwe = await new CompactEncrypt(
    new TextEncoder().encode(JSON.stringify(payload))
  )
    .setProtectedHeader(headerObject)
    .encrypt(cryptoPublicKey);

  return jwe;
}
