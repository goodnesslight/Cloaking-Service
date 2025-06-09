import { VpnApiCheckIpResponse } from '@modules/vpn-api/vpn-api.types';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VpnApiService {
  private readonly url: string = 'https://vpnapi.io/api';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async checkIp(): Promise<VpnApiCheckIpResponse> {}
}
