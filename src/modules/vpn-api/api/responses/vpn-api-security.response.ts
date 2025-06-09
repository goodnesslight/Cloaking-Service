import { VpnApiSecurityStructure } from '@modules/vpn-api/vpn-api.types';

export class VpnApiSecurityResponse implements VpnApiSecurityStructure {
  vpn: boolean;
  proxy: boolean;
  tor: boolean;
  relay: boolean;
}
