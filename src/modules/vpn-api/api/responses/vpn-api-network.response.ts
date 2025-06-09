import { VpnApiNetworkStructure } from '@modules/vpn-api/vpn-api.types';
import { ApiProperty } from '@nestjs/swagger';

export class VpnApiNetworkResponse implements VpnApiNetworkStructure {
  @ApiProperty()
  network: string;

  @ApiProperty()
  autonomous_system_number: string;

  @ApiProperty()
  autonomous_system_organization: string;
}
