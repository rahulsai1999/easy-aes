import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  createHash,
} from "crypto";

export default class EasyAES {
  private IV_LENGTH: number = 16;
  private ENCRYPTION_KEY: Buffer;

  constructor(key: string) {
    if (key.length < 5 || key.length > 32) {
      throw new Error("Key must be 5-32 characters long");
    }

    this.ENCRYPTION_KEY = Buffer.from(
      createHash("sha256").update(key).digest("hex"),
      "hex"
    );
  }

  encrypt = (text: string): string => {
    const iv = randomBytes(this.IV_LENGTH);
    const cipher = createCipheriv("aes-256-ctr", this.ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString("hex") + encrypted.toString("hex");
  };

  decrypt = (text: string): string => {
    const iv = Buffer.from(text.slice(0, 32), "hex");
    const encryptedText = Buffer.from(text.slice(32), "hex");
    const decipher = createDecipheriv("aes-256-ctr", this.ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  };
}
