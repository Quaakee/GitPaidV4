// Proxy imports from backend to handle potential TypeScript/webpack issues
import { SmartContract } from 'scrypt-ts';

export class BountyContract extends SmartContract {
  static loadArtifact(artifact: any): void {
    // Empty implementation or try importing from the real package
    try {
      const { BountyContract } = require('@bsv/backend');
      return BountyContract.loadArtifact(artifact);
    } catch (e) {
      console.error('Failed to load contract artifact:', e);
    }
  }
}

export const BountyArtifact = {};

// Update your imports in other files to use this proxy:
// import { BountyContract, BountyArtifact } from '../utils/backend';