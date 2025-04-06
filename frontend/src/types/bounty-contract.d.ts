declare module '@bsv/backend' {
    import { SmartContract } from 'scrypt-ts';
  
    export class BountyContract extends SmartContract {
      // Add the properties and methods of your contract here
      repoOwner: any;
      certServerKey: any;
      repoOwnerName: any;
      repoName: any;
      issueNumber: any;
      
      constructor(
        repoOwner: any, 
        certServerKey: any, 
        repoOwnerName: any, 
        repoName: any, 
        issueNumber: any
      );
      
      static loadArtifact(artifact: any): void;
      static fromLockingScript(script: string): BountyContract;
      
      addFunds(): void;
      payBounty(repoOwnerSig: any, certServerSig: any, userPubKey: any, amount: any): void;
      withdraw(repoOwnerSig: any, amount: any): void;
    }
    
    export const BountyArtifact: any;
    export const BountyLookupServiceFactory: any;
    export const BountyTopicManager: any;
  }