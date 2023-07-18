/**
 * A client for interacting with the Alert Logic OTIS Public API.
 */
import { AlDefaultClient, AlLocation } from '@al/core';
import { TuningOption, TuningOptionScope, TuningOptionValue } from './types';


class OtisClientV2 {

  private client = AlDefaultClient;
  private serviceName = 'otis';
  private version = 'v2';
  /**
   * Create Option
   */
  async createOption(accountId: string, data: TuningOption): Promise<TuningOption> {
    return this.client.post<TuningOption>({
      data,
      service_stack: AlLocation.InsightAPI,
      service_name: this.serviceName,
      account_id: accountId,
      path: '/options',
      version: this.version
    });
  }
  /**
   * Get Option
   */
  async getOption(accountId: string, optionId: string): Promise<TuningOption> {
    return this.client.get<TuningOption>({
      service_stack: AlLocation.InsightAPI,
      service_name: this.serviceName,
      account_id: accountId,
      path: `/options/${optionId}`,
      version: this.version,
    });

  }
  /**
   * List Options
   */
  async listOptions(accountId: string, params?: {[key:string]: string|string[]}): Promise<TuningOption[]> {
    return this.client.get<TuningOption[]>({
      service_stack: AlLocation.InsightAPI,
      service_name: this.serviceName,
      account_id: accountId,
      path: `/options/`,
      version: this.version,
      params: params
    });

  }
  /**
   * Delete Option
   */
  async deleteOption(accountId: string, optionId: string): Promise<void> {
    return this.client.delete({
      service_stack: AlLocation.InsightAPI,
      service_name: this.serviceName,
      account_id: accountId,
      path: `/options/${optionId}`,
      version: this.version,
    });
  }
  /**
   * Update Option Value
   *
   * value: set as any because of the API flexibility, from docs: value - arbitrary JSON data
   */
  async updateOptionValue(accountId: string, optionId: string, value: TuningOptionValue): Promise<TuningOption> {
    return this.client.put<TuningOption>({
      service_stack: AlLocation.InsightAPI,
      service_name: this.serviceName,
      account_id: accountId,
      path: `/options/${optionId}`,
      version: this.version,
      data: {
        value,
      },
    });
  }

  /**
   * Resolve Option Values
   */
  async resolveOptionValues(accountId: string,
                            data: {  scope: TuningOptionScope, names: string[] }): Promise<unknown> {
    return this.client.post({
      data,
      service_stack: AlLocation.InsightAPI,
      service_name: this.serviceName,
      account_id: accountId,
      path: '/options/resolve',
      version: this.version
    });
  }
}

export const otisClientV2 =  new OtisClientV2();
