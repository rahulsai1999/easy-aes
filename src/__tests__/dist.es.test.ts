import EasyAES from "../../dist/index.es";

test("Test key length (lower bound)", () => {
  expect(() => {
    const aes = new EasyAES("abcd");
    aes.encrypt("test");
  }).toThrow();
});

test("Encryption process", () => {
  const key: string = "secret";
  const text: string = "Hello World!";

  const aes = new EasyAES(key);
  const encrypted = aes.encrypt(text);
  expect(aes.decrypt(encrypted)).toBe(text);
});

test("Decryption process", () => {
  const key: string = "secret";
  const text: string = "Hello World!";
  const encrypted: string =
    "71d35166002b955aeae4c04c18b95d585c6d538530dd2396f13e45e2";

  const aes = new EasyAES(key);
  const decrypted = aes.decrypt(encrypted);

  expect(decrypted).toBe(text);
});
