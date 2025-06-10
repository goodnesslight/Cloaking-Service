import { CacheKey } from 'src/external/cache/cache.enums';
import { CacheService } from 'src/external/cache/cache.service';
import { VpnApiCheckIpCache } from '@modules/vpn-api/vpn-api.types';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { VpnApiCheckIpResponse } from '@modules/vpn-api/api/responses/vpn-api-check-ip.response';

@Injectable()
export class VpnApiService {
  private readonly baseUrl: string = 'https://vpnapi.io/api';

  private readonly queryTimeout: number = 5_000;

  private apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly cacheService: CacheService,
    private readonly configService: ConfigService,
  ) {
    this.apiKey = this.configService.getOrThrow<string>('VPN_API_KEY');
  }

  async checkIp(ip: string): Promise<VpnApiCheckIpResponse> {
    const cache: VpnApiCheckIpCache | null =
      await this.cacheService.hGet<VpnApiCheckIpCache>(
        CacheKey.VpnApiCheckIp,
        ip,
      );

    if (cache) {
      return cache;
    }

    const uri: string = this.buildUri(ip);
    const response: AxiosResponse<VpnApiCheckIpResponse> = await firstValueFrom(
      this.httpService.get<VpnApiCheckIpResponse>(uri, {
        timeout: this.queryTimeout,
      }),
    );
    const result: VpnApiCheckIpResponse = response.data;
    await this.cacheService.hSet<VpnApiCheckIpResponse>(
      CacheKey.VpnApiCheckIp,
      ip,
      result,
    );
    return result;
  }

  private buildUri(ip: string): string {
    return `${this.baseUrl}/${ip}?key=${this.apiKey}`;
  }
}
