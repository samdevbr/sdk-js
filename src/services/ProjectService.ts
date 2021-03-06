import { ProjectsApiService } from '../api/generated/apis/projects-api';
import { ProjectsApplicationsApiService } from '../api/generated/apis/projects-applications-api';
import { ProjectsCronJobsApiService } from '../api/generated/apis/projects-cron-jobs-api';
import { ProjectsDaemonsProcessesApiService } from '../api/generated/apis/projects-daemons-processes-api';
import { ProjectsDeploymentsApiService } from '../api/generated/apis/projects-deployments-api';
import { ProjectsEnvironmentsApiService } from '../api/generated/apis/projects-environments-api';
import { ProjectsNetworkRulesApiService } from '../api/generated/apis/projects-network-rules-api';
import { ProjectsServersApiService } from '../api/generated/apis/projects-servers-api';
import { ProjectsServicesApiService } from '../api/generated/apis/projects-services-api';
import { ProjectsSSHKeysApiService } from '../api/generated/apis/projects-sshkeys-api';

export class ProjectService extends ProjectsApiService {
    public applications = new ProjectsApplicationsApiService();
    public cronjobs = new ProjectsCronJobsApiService
    public daemons = new ProjectsDaemonsProcessesApiService();
    public deployments = new ProjectsDeploymentsApiService();
    public environments = new ProjectsEnvironmentsApiService();
    public networkRules = new ProjectsNetworkRulesApiService()
    public servers = new ProjectsServersApiService()
    public services = new ProjectsServicesApiService()
    public sshKeys = new ProjectsSSHKeysApiService()
}
