import { VpnApiSecurityBasicStructure } from '@modules/vpn-api/vpn-api.types';

export class VpnApiSecurityResponse implements VpnApiSecurityBasicStructure {
  vpn: boolean;
  proxy: boolean;
  tor: boolean;
  relay: boolean;
}
