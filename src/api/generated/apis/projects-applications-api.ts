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
import { ArgumentNullException } from "../../../common/Exceptions";
import { Application } from '../../generated/models';

/**
 * ProjectsApplicationsApiService - Auto-generated
 */
export class ProjectsApplicationsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new application
     * @param {number} projectId Numeric ID of the application to get
     * @param {Application} application A JSON object containing project data
     */
    public async addApplicationToProject(projectId: number, application: Application): Promise<void> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addApplicationToProject');
        }
        if (application === null || application === undefined) {
            throw new ArgumentNullException('application', 'addApplicationToProject');
        }
        const response = await this.post <void, Application>(`/projects/{project_id}/applications`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), application);
        return response.data;
    }

    /**
     * 
     * @summary Returns a list of all applications belonging to a project
     * @param {number} projectId Numeric ID of the project to get applications from
     */
    public async listProjectApplications(projectId: number): Promise<Array<Application>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectApplications');
        }
        const response = await this.get <Array<Application>>(`/projects/{project_id}/applications`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return response.data;
    }
}