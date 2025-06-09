import { VpnApiLocationStructure } from '@modules/vpn-api/vpn-api.types';
import { ApiProperty } from '@nestjs/swagger';

export class VpnApiLocationResponse implements VpnApiLocationStructure {
  @ApiProperty()
  city: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  continent: string;

  @ApiProperty()
  region_code: string;

  @ApiProperty()
  country_code: string;

  @ApiProperty()
  continent_code: string;

  @ApiProperty()
  latitude: string;

  @ApiProperty()
  longitude: string;

  @ApiProperty()
  time_zone: string;

  @ApiProperty()
  locale_code: string;

  @ApiProperty()
  metro_code: string;

  @ApiProperty()
  is_in_european_union: boolean;
}
