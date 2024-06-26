import type { ServerActionsProperties } from '../../Interfaces';

export const shutdownDescription: ServerActionsProperties = [
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
				operation: ['shutdown'],
			},
		},
		default: '',
		description: 'ID of Server',
	},
];
