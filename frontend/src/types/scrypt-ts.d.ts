declare module 'scrypt-ts' {
    export const assert: any;
    export const ByteString: any;
    export class PubKey {}
    export class Sig {}
    export class SmartContract {
      static loadArtifact(artifact: any): void;
      static fromLockingScript(script: string): any;
    }
    export const prop: any;
    export const method: any;
    export const hash256: any;
    export const Utils: any;
    export const pubKey2Addr: any;
    export const SigHash: any;
    export const bsv: any;
    export const toByteString: any;
  }