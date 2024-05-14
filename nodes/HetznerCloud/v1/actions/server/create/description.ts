import type { ServerProperties } from '../../Interfaces';

export const createDescription: ServerProperties = [
	{
		displayName: 'Server Options',
		name: 'server',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Auto-Mount',
				name: 'automount',
				type: 'boolean',
				placeholder: '',
				required: false,
				default: '',
				description: '',
			},
			{
				displayName: 'Datacenter',
				name: 'datacenter',
				type: 'string',
				placeholder: '',
				required: false,
				default: '',
				description: '',
			},
			{
				displayName: 'firewalls',
				name: 'firewalls',
				type: 'collection',
				placeholder: '',
				required: false,
				default: '',
				description: '',
				options: [],
			},
			{
				displayName: 'Image',
				name: 'image',
				type: 'string',
				placeholder: '',
				required: true,
				default: '',
				description: '',
			},
			{
				displayName: 'Labels',
				name: 'labels',
				type: 'json',
				placeholder: '',
				required: false,
				default: '',
				description: '',
			},
			{
				displayName: 'Datacenter',
				name: 'datacenter',
				type: 'string',
				placeholder: '',
				required: false,
				default: '',
				description: '',
			},
		],
	},
];