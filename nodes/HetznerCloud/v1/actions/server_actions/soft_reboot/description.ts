import type { ServerActionsProperties } from '../../Interfaces';

export const soft_rebootDescription: ServerActionsProperties = [
	{
		displayName: 'server id',
		name: 'id',
		type: 'options',
		required: true,
		placeholder: 'Select a server',
		typeOptions: {
			loadOptionsMethod: 'getServers',
		},
		displayOptions: {
			show: {
				resource: ['server_actions'],
				operation: ['soft_reboot'],
			},
		},
		default: '',
		description: 'ID of the Server',
	},
];
