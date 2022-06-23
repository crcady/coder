// Code generated by 'make coder/scripts/apitypings/main.go'. DO NOT EDIT.

<<<<<<< HEAD
// From codersdk/workspaceagents.go:36:6
=======
// From codersdk/users.go:49:6
export interface APIKey {
  readonly id: string
  readonly user_id: string
  readonly last_used: string
  readonly expires_at: string
  readonly created_at: string
  readonly updated_at: string
  readonly login_type: LoginType
  readonly lifetime_seconds: number
}

// From codersdk/workspaceagents.go:35:6
>>>>>>> make gen
export interface AWSInstanceIdentityToken {
  readonly signature: string
  readonly document: string
}

// From codersdk/gitsshkey.go:21:6
export interface AgentGitSSHKey {
  readonly public_key: string
  readonly private_key: string
}

<<<<<<< HEAD
// From codersdk/users.go:156:6
=======
// From codersdk/users.go:169:6
>>>>>>> make gen
export interface AuthMethods {
  readonly password: boolean
  readonly github: boolean
}

// From codersdk/workspaceagents.go:41:6
export interface AzureInstanceIdentityToken {
  readonly signature: string
  readonly encoding: string
}

// From codersdk/buildinfo.go:10:6
export interface BuildInfoResponse {
  readonly external_url: string
  readonly version: string
}

// From codersdk/parameters.go:44:6
export interface ComputedParameter extends Parameter {
  readonly source_value: string
  readonly schema_id: string
  readonly default_source_value: boolean
}

<<<<<<< HEAD
// From codersdk/users.go:47:6
=======
// From codersdk/users.go:60:6
>>>>>>> make gen
export interface CreateFirstUserRequest {
  readonly email: string
  readonly username: string
  readonly password: string
  readonly organization: string
}

<<<<<<< HEAD
// From codersdk/users.go:55:6
=======
// From codersdk/users.go:68:6
>>>>>>> make gen
export interface CreateFirstUserResponse {
  readonly user_id: string
  readonly organization_id: string
}

<<<<<<< HEAD
// From codersdk/users.go:151:6
=======
// From codersdk/users.go:164:6
>>>>>>> make gen
export interface CreateOrganizationRequest {
  readonly name: string
}

// From codersdk/parameters.go:87:6
export interface CreateParameterRequest {
  readonly copy_from_parameter?: string
  readonly name: string
  readonly source_value: string
  readonly source_scheme: ParameterSourceScheme
  readonly destination_scheme: ParameterDestinationScheme
}

// From codersdk/organizations.go:49:6
export interface CreateTemplateRequest {
  readonly name: string
  readonly description?: string
  readonly template_version_id: string
  readonly parameter_values?: CreateParameterRequest[]
  readonly max_ttl_ms?: number
  readonly min_autostart_interval_ms?: number
}

// From codersdk/templateversions.go:106:6
export interface CreateTemplateVersionDryRunRequest {
  readonly WorkspaceName: string
  readonly ParameterValues: CreateParameterRequest[]
}

// From codersdk/organizations.go:36:6
export interface CreateTemplateVersionRequest {
  readonly template_id?: string
  readonly storage_method: ProvisionerStorageMethod
  readonly storage_source: string
  readonly provisioner: ProvisionerType
  readonly parameter_values?: CreateParameterRequest[]
}

<<<<<<< HEAD
// From codersdk/users.go:60:6
=======
// From codersdk/users.go:73:6
>>>>>>> make gen
export interface CreateUserRequest {
  readonly email: string
  readonly username: string
  readonly password: string
  readonly organization_id: string
}

// From codersdk/workspaces.go:35:6
export interface CreateWorkspaceBuildRequest {
  readonly template_version_id?: string
  readonly transition: WorkspaceTransition
  readonly dry_run?: boolean
  readonly state?: string
}

// From codersdk/organizations.go:76:6
export interface CreateWorkspaceRequest {
  readonly template_id: string
  readonly name: string
  readonly autostart_schedule?: string
  readonly ttl_ms?: number
  readonly parameter_values?: CreateParameterRequest[]
}

<<<<<<< HEAD
// From codersdk/users.go:147:6
=======
// From codersdk/users.go:160:6
>>>>>>> make gen
export interface GenerateAPIKeyResponse {
  readonly key: string
}

// From codersdk/gitsshkey.go:14:6
export interface GitSSHKey {
  readonly user_id: string
  readonly created_at: string
  readonly updated_at: string
  readonly public_key: string
}

// From codersdk/workspaceagents.go:32:6
export interface GoogleInstanceIdentityToken {
  readonly json_web_token: string
}

<<<<<<< HEAD
// From codersdk/users.go:136:6
=======
// From codersdk/users.go:149:6
>>>>>>> make gen
export interface LoginWithPasswordRequest {
  readonly email: string
  readonly password: string
}

<<<<<<< HEAD
// From codersdk/users.go:142:6
=======
// From codersdk/users.go:155:6
>>>>>>> make gen
export interface LoginWithPasswordResponse {
  readonly session_token: string
}

// From codersdk/organizations.go:28:6
export interface Organization {
  readonly id: string
  readonly name: string
  readonly created_at: string
  readonly updated_at: string
}

// From codersdk/organizationmember.go:9:6
export interface OrganizationMember {
  readonly user_id: string
  readonly organization_id: string
  readonly created_at: string
  readonly updated_at: string
  readonly roles: string[]
}

// From codersdk/pagination.go:11:6
export interface Pagination {
  readonly after_id?: string
  readonly limit?: number
  readonly offset?: number
}

// From codersdk/parameters.go:52:6
export interface Parameter {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly scope: ParameterScope
  readonly scope_id: string
  readonly name: string
  readonly source_scheme: ParameterSourceScheme
  readonly destination_scheme: ParameterDestinationScheme
}

// From codersdk/parameters.go:63:6
export interface ParameterSchema {
  readonly id: string
  readonly created_at: string
  readonly job_id: string
  readonly name: string
  readonly description: string
  readonly default_source_scheme: ParameterSourceScheme
  readonly default_source_value: string
  readonly allow_override_source: boolean
  readonly default_destination_scheme: ParameterDestinationScheme
  readonly allow_override_destination: boolean
  readonly default_refresh: string
  readonly redisplay_value: boolean
  readonly validation_error: string
  readonly validation_condition: string
  readonly validation_type_system: string
  readonly validation_value_type: string
  readonly validation_contains?: string[]
}

// From codersdk/provisionerdaemons.go:38:6
export interface ProvisionerDaemon {
  readonly id: string
  readonly created_at: string
  readonly updated_at?: string
  readonly name: string
  readonly provisioners: ProvisionerType[]
}

// From codersdk/provisionerdaemons.go:67:6
export interface ProvisionerJob {
  readonly id: string
  readonly created_at: string
  readonly started_at?: string
  readonly completed_at?: string
  readonly error?: string
  readonly status: ProvisionerJobStatus
  readonly worker_id?: string
  readonly storage_source: string
}

// From codersdk/provisionerdaemons.go:78:6
export interface ProvisionerJobLog {
  readonly id: string
  readonly created_at: string
  readonly log_source: LogSource
  readonly log_level: LogLevel
  readonly stage: string
  readonly output: string
}

// From codersdk/workspaces.go:202:6
export interface PutExtendWorkspaceRequest {
  readonly deadline: string
}

// From codersdk/roles.go:12:6
export interface Role {
  readonly name: string
  readonly display_name: string
}

// From codersdk/templates.go:16:6
export interface Template {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly organization_id: string
  readonly name: string
  readonly provisioner: ProvisionerType
  readonly active_version_id: string
  readonly workspace_owner_count: number
  readonly description: string
  readonly max_ttl_ms: number
  readonly min_autostart_interval_ms: number
  readonly created_by_id: string
  readonly created_by_name: string
}

// From codersdk/templateversions.go:14:6
export interface TemplateVersion {
  readonly id: string
  readonly template_id?: string
  readonly organization_id?: string
  readonly created_at: string
  readonly updated_at: string
  readonly name: string
  readonly job: ProvisionerJob
  readonly readme: string
}

// From codersdk/templates.go:100:6
export interface TemplateVersionsByTemplateRequest extends Pagination {
  readonly template_id: string
}

// From codersdk/templates.go:32:6
export interface UpdateActiveTemplateVersion {
  readonly id: string
}

<<<<<<< HEAD
// From codersdk/users.go:76:6
=======
// From codersdk/users.go:89:6
>>>>>>> make gen
export interface UpdateRoles {
  readonly roles: string[]
}

// From codersdk/templates.go:36:6
export interface UpdateTemplateMeta {
  readonly description?: string
  readonly max_ttl_ms?: number
  readonly min_autostart_interval_ms?: number
}

<<<<<<< HEAD
// From codersdk/users.go:71:6
=======
// From codersdk/users.go:84:6
>>>>>>> make gen
export interface UpdateUserPasswordRequest {
  readonly old_password: string
  readonly password: string
}

<<<<<<< HEAD
// From codersdk/users.go:67:6
=======
// From codersdk/users.go:80:6
>>>>>>> make gen
export interface UpdateUserProfileRequest {
  readonly username: string
}

// From codersdk/workspaces.go:161:6
export interface UpdateWorkspaceAutostartRequest {
  readonly schedule?: string
}

// From codersdk/workspaces.go:181:6
export interface UpdateWorkspaceTTLRequest {
  readonly ttl_ms?: number
}

// From codersdk/files.go:16:6
export interface UploadResponse {
  readonly hash: string
}

<<<<<<< HEAD
// From codersdk/users.go:37:6
=======
// From codersdk/users.go:39:6
>>>>>>> make gen
export interface User {
  readonly id: string
  readonly email: string
  readonly created_at: string
  readonly username: string
  readonly status: UserStatus
  readonly organization_ids: string[]
  readonly roles: Role[]
}

<<<<<<< HEAD
// From codersdk/users.go:101:6
=======
// From codersdk/users.go:114:6
>>>>>>> make gen
export interface UserAuthorization {
  readonly object: UserAuthorizationObject
  readonly action: string
}

<<<<<<< HEAD
// From codersdk/users.go:117:6
=======
// From codersdk/users.go:130:6
>>>>>>> make gen
export interface UserAuthorizationObject {
  readonly resource_type: string
  readonly owner_id?: string
  readonly organization_id?: string
  readonly resource_id?: string
}

<<<<<<< HEAD
// From codersdk/users.go:90:6
=======
// From codersdk/users.go:103:6
>>>>>>> make gen
export interface UserAuthorizationRequest {
  readonly checks: Record<string, UserAuthorization>
}

<<<<<<< HEAD
// From codersdk/users.go:85:6
export type UserAuthorizationResponse = Record<string, boolean>

// From codersdk/users.go:80:6
=======
// From codersdk/users.go:98:6
export type UserAuthorizationResponse = Record<string, boolean>

// From codersdk/users.go:93:6
>>>>>>> make gen
export interface UserRoles {
  readonly roles: string[]
  readonly organization_roles: Record<string, string[]>
}

<<<<<<< HEAD
// From codersdk/users.go:25:6
=======
// From codersdk/users.go:31:6
>>>>>>> make gen
export interface UsersRequest extends Pagination {
  readonly q?: string
}

// From codersdk/workspaces.go:19:6
export interface Workspace {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly owner_id: string
  readonly owner_name: string
  readonly template_id: string
  readonly template_name: string
  readonly latest_build: WorkspaceBuild
  readonly outdated: boolean
  readonly name: string
  readonly autostart_schedule?: string
  readonly ttl_ms?: number
}

// From codersdk/workspaceresources.go:33:6
export interface WorkspaceAgent {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly first_connected_at?: string
  readonly last_connected_at?: string
  readonly disconnected_at?: string
  readonly status: WorkspaceAgentStatus
  readonly name: string
  readonly resource_id: string
  readonly instance_id?: string
  readonly architecture: string
  readonly environment_variables: Record<string, string>
  readonly operating_system: string
  readonly startup_script?: string
  readonly directory?: string
  readonly apps: WorkspaceApp[]
  // Named type "tailscale.com/types/key.NodePublic" unknown, using "any"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly wireguard_public_key: any
  // Named type "tailscale.com/types/key.DiscoPublic" unknown, using "any"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly disco_public_key: any
  // Named type "inet.af/netaddr.IPPrefix" unknown, using "any"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly ipv6: any
}

// From codersdk/workspaceagents.go:48:6
export interface WorkspaceAgentAuthenticateResponse {
  readonly session_token: string
}

// From codersdk/workspaceresources.go:63:6
export interface WorkspaceAgentInstanceMetadata {
  readonly jail_orchestrator: string
  readonly operating_system: string
  readonly platform: string
  readonly platform_family: string
  readonly kernel_version: string
  readonly kernel_architecture: string
  readonly cloud: string
  readonly jail: string
  readonly vnc: boolean
}

// From codersdk/workspaceresources.go:55:6
export interface WorkspaceAgentResourceMetadata {
  readonly memory_total: number
  readonly disk_total: number
  readonly cpu_cores: number
  readonly cpu_model: string
  readonly cpu_mhz: number
}

// From codersdk/workspaceapps.go:7:6
export interface WorkspaceApp {
  readonly id: string
  readonly name: string
  readonly command?: string
  readonly icon?: string
}

// From codersdk/workspacebuilds.go:38:6
export interface WorkspaceBuild {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly workspace_id: string
  readonly workspace_name: string
  readonly workspace_owner_id: string
  readonly workspace_owner_name: string
  readonly template_version_id: string
  readonly build_number: number
  readonly name: string
  readonly transition: WorkspaceTransition
  readonly initiator_id: string
  readonly initiator_name: string
  readonly job: ProvisionerJob
  readonly deadline: string
  readonly reason: BuildReason
}

// From codersdk/workspaces.go:84:6
export interface WorkspaceBuildsRequest extends Pagination {
  readonly WorkspaceID: string
}

// From codersdk/workspaces.go:220:6
export interface WorkspaceFilter {
  readonly q?: string
}

// From codersdk/workspaces.go:42:6
export interface WorkspaceOptions {
  readonly include_deleted?: boolean
}

// From codersdk/workspaceresources.go:23:6
export interface WorkspaceResource {
  readonly id: string
  readonly created_at: string
  readonly job_id: string
  readonly workspace_transition: WorkspaceTransition
  readonly type: string
  readonly name: string
  readonly agents?: WorkspaceAgent[]
}

// From codersdk/workspacebuilds.go:22:6
export type BuildReason = "autostart" | "autostop" | "initiator"

// From codersdk/provisionerdaemons.go:28:6
export type LogLevel = "debug" | "error" | "info" | "trace" | "warn"

// From codersdk/provisionerdaemons.go:21:6
export type LogSource = "provisioner" | "provisioner_daemon"

// From codersdk/users.go:24:6
export type LoginType = "github" | "password"

// From codersdk/parameters.go:29:6
export type ParameterDestinationScheme = "environment_variable" | "none" | "provisioner_variable"

// From codersdk/parameters.go:14:6
export type ParameterScope = "import_job" | "template" | "workspace"

// From codersdk/parameters.go:22:6
export type ParameterSourceScheme = "data" | "none"

// From codersdk/parameters.go:37:6
export type ParameterTypeSystem = "hcl" | "none"

// From codersdk/provisionerdaemons.go:47:6
export type ProvisionerJobStatus = "canceled" | "canceling" | "failed" | "pending" | "running" | "succeeded"

// From codersdk/organizations.go:14:6
export type ProvisionerStorageMethod = "file"

// From codersdk/organizations.go:20:6
export type ProvisionerType = "echo" | "terraform"

// From codersdk/users.go:18:6
export type UserStatus = "active" | "suspended"

// From codersdk/workspaceresources.go:15:6
export type WorkspaceAgentStatus = "connected" | "connecting" | "disconnected"

// From codersdk/workspacebuilds.go:14:6
export type WorkspaceTransition = "delete" | "start" | "stop"
