import { VpnApiSecurityStructure } from '@modules/vpn-api/vpn-api.types';
import { ApiProperty } from '@nestjs/swagger';

export class VpnApiSecurityResponse implements VpnApiSecurityStructure {
  @ApiProperty()
  vpn: boolean;

  @ApiProperty()
  proxy: boolean;

  @ApiProperty()
  tor: boolean;

  @ApiProperty()
  relay: boolean;
}
