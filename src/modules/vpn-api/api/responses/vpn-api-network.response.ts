import { VpnApiNetworkStructure } from '@modules/vpn-api/vpn-api.types';

export class VpnApiNetworkResponse implements VpnApiNetworkStructure {
  network: string;
  autonomous_system_number: string;
  autonomous_system_organization: string;
}
