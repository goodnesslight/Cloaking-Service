import { VpnApiNetworkBasicStructure } from '@modules/vpn-api/vpn-api.types';

export class VpnApiNetworkResponse implements VpnApiNetworkBasicStructure {
  network: string;
  autonomous_system_number: string;
  autonomous_system_organization: string;
}
