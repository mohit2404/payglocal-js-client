export interface GenerateJWEParams {
  payload: object;
  publicKey: string;
  merchantId?: string;
  publicKeyId?: string;
}

export interface GenerateJWSParams {
  payload: string;
  privateKey: string;
  merchantId?: string;
  privateKeyId?: string;
}

export interface GenerateJWEAndJWSParams {
  payload: object;
  publicKey: string;
  privateKey: string;
  merchantId: string;
  publicKeyId: string;
  privateKeyId: string;
}

export function generateJWE(
  params: GenerateJWEParams
): Promise<string>;

export function generateJWS(
  params: GenerateJWSParams
): Promise<string>;

export function generateJWEAndJWS(
  params: GenerateJWEAndJWSParams
): Promise<{
  jweToken: string;
  jwsToken: string;
}>;
