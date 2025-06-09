import {
  VpnApiCheckIpBasicStructure,
  VpnApiCheckIpLocationStructure,
  VpnApiCheckIpNetworkStructure,
  VpnApiCheckIpSecurityStructure,
} from '@modules/vpn-api/vpn-api.types';

export class VpnApiCheckIpResponse implements VpnApiCheckIpBasicStructure {
  ip: string;
  security: VpnApiCheckIpSecurityStructure;
  location: VpnApiCheckIpLocationStructure;
  network: VpnApiCheckIpNetworkStructure;
}
