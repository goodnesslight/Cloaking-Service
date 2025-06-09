import { VpnApiLocationResponse } from '@modules/vpn-api/api/responses/vpn-api-location.response';
import { VpnApiNetworkResponse } from '@modules/vpn-api/api/responses/vpn-api-network.response';
import { VpnApiSecurityResponse } from '@modules/vpn-api/api/responses/vpn-api-security.response';
import { VpnApiCheckIpStructure } from '@modules/vpn-api/vpn-api.types';

export class VpnApiCheckIpResponse implements VpnApiCheckIpStructure {
  ip: string;
  security: VpnApiSecurityResponse;
  location: VpnApiLocationResponse;
  network: VpnApiNetworkResponse;
}
