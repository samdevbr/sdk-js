/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ExtraBodyParams } from '../../generated/models';
import { Server } from '../../generated/models';
import { ServerCommands } from '../../generated/models';
import { ServerConnect } from '../../generated/models';

/**
 * ServersApiService - Auto-generated
 */
export class ServersApiService extends ApiBaseService {
    /**
     * 
     * @summary Connect a server to devopness platform
     * @param {number} id The server numeric Id
     * @param {string} activationToken The server activation token
     * @param {ExtraBodyParams} [extraBodyParams] A JSON object containing list of additional parameters
     */
    public async connectServer(id: number, activationToken: string, extraBodyParams?: ExtraBodyParams): Promise<ApiResponse<ServerConnect>> {
        if (id === null || id === undefined) {
            throw new ArgumentNullException('id', 'connectServer');
        }
        if (activationToken === null || activationToken === undefined) {
            throw new ArgumentNullException('activationToken', 'connectServer');
        }
        const response = await this.post <ServerConnect, ExtraBodyParams>(`/servers/{id}/connect/{activation_token}`.replace(`{${"id"}}`, encodeURIComponent(String(id))).replace(`{${"activation_token"}}`, encodeURIComponent(String(activationToken))), extraBodyParams);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a server by ID
     * @param {number} id Numeric ID of the server to get
     */
    public async getServer(id: number): Promise<ApiResponse<Server>> {
        if (id === null || id === undefined) {
            throw new ArgumentNullException('id', 'getServer');
        }
        const response = await this.get <Server>(`/servers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get commands to be executed on the given server
     * @param {number} id The server numeric Id
     */
    public async getServerCommands(id: number): Promise<ApiResponse<ServerCommands>> {
        if (id === null || id === undefined) {
            throw new ArgumentNullException('id', 'getServerCommands');
        }
        const response = await this.get <ServerCommands>(`/servers/{id}/commands`.replace(`{${"id"}}`, encodeURIComponent(String(id))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all servers belonging to current user
     */
    public async listServers(): Promise<ApiResponse<Array<Server>>> {
        const response = await this.get <Array<Server>>(`/servers`);
        return new ApiResponse(response);
    }
}
